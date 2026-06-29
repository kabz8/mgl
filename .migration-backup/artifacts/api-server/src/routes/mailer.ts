import { Router, type IRouter } from "express";
import { Resend } from "resend";

type DocumentType = "Invoice" | "Quotation" | "Proposal" | "Email";
type SenderKey = "info" | "billing" | "biz";

function requiredEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`${name} environment variable is required.`);
  return value;
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderMilespaceEmailHtml(opts: {
  subject: string;
  docType: DocumentType;
  clientName?: string;
  intro?: string;
  body: string;
  meta?: Record<string, string>;
}) {
  const metaRows = Object.entries(opts.meta ?? {})
    .filter(([, value]) => String(value ?? "").trim().length > 0)
    .map(
      ([key, value]) => `
        <tr>
          <td style="padding:10px 12px;border-top:1px solid rgba(255,255,255,0.10);color:rgba(255,255,255,0.72);font-size:13px;width:42%;">${escapeHtml(key)}</td>
          <td style="padding:10px 12px;border-top:1px solid rgba(255,255,255,0.10);color:#FFFFFF;font-size:13px;font-weight:600;">${escapeHtml(value)}</td>
        </tr>
      `,
    )
    .join("");

  const safeBody = escapeHtml(opts.body).replaceAll("\n", "<br/>");
  const safeIntro = opts.intro ? escapeHtml(opts.intro) : "";
  const safeClient = opts.clientName ? escapeHtml(opts.clientName) : "there";
  const safeSubject = escapeHtml(opts.subject);

  return `<!doctype html>
  <html>
    <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <title>${safeSubject}</title>
    </head>
    <body style="margin:0;background:#07111C;font-family:DM Sans,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:#FFFFFF;">
      <div style="max-width:720px;margin:0 auto;padding:28px 16px 42px;">
        <div style="background:radial-gradient(circle at 15% 10%, rgba(6,182,212,0.18), transparent 45%),radial-gradient(circle at 85% 0%, rgba(59,130,246,0.20), transparent 42%), #0F263A;border:1px solid rgba(6,182,212,0.18);border-radius:18px;overflow:hidden;">
          <div style="padding:18px 20px;border-bottom:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:space-between;gap:12px;">
            <div>
              <div style="font-weight:800;letter-spacing:0.2px;font-size:16px;">Milespace Group</div>
              <div style="color:rgba(255,255,255,0.70);font-size:12px;margin-top:4px;">Official ${escapeHtml(opts.docType)} Communication</div>
            </div>
            <div style="padding:8px 10px;border-radius:999px;background:rgba(6,182,212,0.12);border:1px solid rgba(6,182,212,0.22);color:#67E8F9;font-size:12px;font-weight:700;">
              ${escapeHtml(opts.docType)}
            </div>
          </div>

          <div style="padding:22px 20px 10px;">
            <h1 style="margin:0 0 10px;font-size:22px;line-height:1.25;">${safeSubject}</h1>
            <p style="margin:0;color:rgba(255,255,255,0.78);font-size:14px;line-height:1.65;">
              Hi ${safeClient}${safeIntro ? ` — ${safeIntro}` : ""}.
            </p>
          </div>

          <div style="padding:0 20px 16px;">
            <div style="background:rgba(7,17,28,0.65);border:1px solid rgba(255,255,255,0.10);border-radius:16px;padding:16px 14px;color:rgba(255,255,255,0.92);font-size:14px;line-height:1.65;">
              ${safeBody}
            </div>
          </div>

          ${
            metaRows
              ? `<div style="padding:0 20px 18px;">
                  <div style="border:1px solid rgba(255,255,255,0.10);border-radius:16px;overflow:hidden;background:rgba(7,17,28,0.45);">
                    <div style="padding:12px 14px;color:rgba(255,255,255,0.72);font-size:12px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;border-bottom:1px solid rgba(255,255,255,0.10);">
                      Details
                    </div>
                    <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
                      ${metaRows}
                    </table>
                  </div>
                </div>`
              : ""
          }

          <div style="padding:18px 20px;border-top:1px solid rgba(255,255,255,0.08);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px;">
            <div style="color:rgba(255,255,255,0.62);font-size:12px;line-height:1.5;">
              Milespace Group • Nairobi, Kenya<br/>
              <span style="color:rgba(255,255,255,0.55);">Reply to this email to respond.</span>
            </div>
            <div style="color:rgba(255,255,255,0.72);font-size:12px;font-weight:700;">
              <a href="https://milespace.co.ke" style="color:#67E8F9;text-decoration:none;">milespace.co.ke</a>
            </div>
          </div>
        </div>
        <div style="margin-top:14px;color:rgba(255,255,255,0.40);font-size:11px;line-height:1.6;text-align:center;">
          This message was sent from the Milespace Group client mailer system.
        </div>
      </div>
    </body>
  </html>`;
}

function pickFromAddress(sender: SenderKey) {
  // These must exist in Resend as verified/allowed senders for your domain.
  if (sender === "billing") return "Milespace Group Billing <billing@milespace.com>";
  if (sender === "biz") return "Milespace Group Business <biz@milespace.com>";
  return "Milespace Group <info@milespace.com>";
}

const router: IRouter = Router();

router.post("/mailer/send", async (req, res) => {
  const apiKey = requiredEnv("RESEND_API_KEY");
  const requiredHeaderKey = requiredEnv("MAILER_API_KEY");

  const providedKey = String(req.header("x-mailer-key") ?? "");
  if (!providedKey || providedKey !== requiredHeaderKey) {
    return res.status(401).json({ ok: false, error: "Unauthorized" });
  }

  const {
    to,
    cc,
    subject,
    docType,
    sender,
    clientName,
    intro,
    body,
    meta,
  } = (req.body ?? {}) as Record<string, unknown>;

  const resolvedTo = String(to ?? "").trim();
  const resolvedSubject = String(subject ?? "").trim();
  const resolvedBody = String(body ?? "").trim();
  const resolvedDocType = String(docType ?? "Email") as DocumentType;
  const resolvedSender = String(sender ?? "info") as SenderKey;

  const allowedDocTypes: DocumentType[] = ["Invoice", "Quotation", "Proposal", "Email"];
  const allowedSenders: SenderKey[] = ["info", "billing", "biz"];

  if (!resolvedTo || !resolvedTo.includes("@")) return res.status(400).json({ ok: false, error: "Invalid recipient email" });
  if (!resolvedSubject) return res.status(400).json({ ok: false, error: "Subject is required" });
  if (!resolvedBody) return res.status(400).json({ ok: false, error: "Message body is required" });
  if (!allowedDocTypes.includes(resolvedDocType)) return res.status(400).json({ ok: false, error: "Invalid docType" });
  if (!allowedSenders.includes(resolvedSender)) return res.status(400).json({ ok: false, error: "Invalid sender" });

  const resend = new Resend(apiKey);
  const html = renderMilespaceEmailHtml({
    subject: resolvedSubject,
    docType: resolvedDocType,
    clientName: typeof clientName === "string" ? clientName : undefined,
    intro: typeof intro === "string" ? intro : undefined,
    body: resolvedBody,
    meta: typeof meta === "object" && meta ? (meta as Record<string, string>) : undefined,
  });

  try {
    const result = await resend.emails.send({
      from: pickFromAddress(resolvedSender),
      to: resolvedTo,
      cc: typeof cc === "string" && cc.trim().length > 0 ? cc : undefined,
      subject: resolvedSubject,
      html,
      replyTo: ["kabaikunjane@gmail.com", "info@milespace.com"],
    });

    return res.json({ ok: true, id: result.data?.id ?? null });
  } catch (err) {
    return res.status(500).json({ ok: false, error: "Failed to send email" });
  }
});

export default router;

