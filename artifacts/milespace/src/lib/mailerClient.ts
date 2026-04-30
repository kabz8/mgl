type DocumentType = "Invoice" | "Quotation" | "Proposal" | "Email";
type SenderKey = "info" | "billing" | "biz";

export interface ClientMailerPayload {
  to: string;
  cc?: string;
  subject: string;
  docType: DocumentType;
  sender: SenderKey;
  clientName?: string;
  intro?: string;
  body: string;
  meta?: Record<string, string>;
}

export async function sendClientMailer(payload: ClientMailerPayload) {
  const apiBase = import.meta.env.VITE_API_BASE_URL || "";
  const mailerKey = import.meta.env.VITE_MAILER_API_KEY || "";

  if (!mailerKey) {
    throw new Error("Missing VITE_MAILER_API_KEY");
  }

  const response = await fetch(`${apiBase}/api/mailer/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-mailer-key": mailerKey,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Send failed");
  }

  return (await response.json()) as { ok: boolean; id?: string | null };
}

