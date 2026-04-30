interface DualChannelLeadOptions {
  subject: string;
  lines: string[];
  emailTo?: [string, string];
}

export async function submitLeadViaWhatsAppAndEmail({
  subject,
  lines,
  emailTo = ["kabaikunjane@gmail.com", "info@milespace.com"],
}: DualChannelLeadOptions) {
  const [primaryEmail, ccEmail] = emailTo;
  const plainMessage = lines.join("\n");
  const payload = new FormData();
  payload.append("_subject", subject);
  payload.append("_cc", ccEmail);
  payload.append("_captcha", "false");
  payload.append("_template", "table");
  payload.append("message", plainMessage);

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
