interface DualChannelLeadOptions {
  subject: string;
  lines: string[];
  emailTo?: [string, string];
  fields?: Record<string, string>;
  replyTo?: string;
}

export async function submitLeadViaWhatsAppAndEmail({
  subject,
  lines,
  emailTo = ["kabaikunjane@gmail.com", "info@milespace.com"],
  fields,
  replyTo,
}: DualChannelLeadOptions) {
  const [primaryEmail, ccEmail] = emailTo;
  const plainMessage = lines.join("\n");
  const payload = new FormData();
  payload.append("_subject", subject);
  payload.append("_cc", ccEmail);
  payload.append("_captcha", "false");
  payload.append("_template", "box");
  payload.append("_from", "Milespace Website Forms");
  if (replyTo) payload.append("_replyto", replyTo);
  payload.append("message", plainMessage);
  if (fields) {
    Object.entries(fields).forEach(([key, value]) => {
      payload.append(key, value);
    });
  }

  const response = await fetch(`https://formsubmit.co/ajax/${primaryEmail}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: payload,
  });

  if (!response.ok) {
    throw new Error("Lead submission failed");
  }
}
