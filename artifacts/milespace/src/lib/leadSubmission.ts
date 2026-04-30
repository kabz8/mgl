import { getWhatsAppLink } from "@/lib/whatsapp";

interface DualChannelLeadOptions {
  subject: string;
  lines: string[];
  emailTo?: string;
}

export function submitLeadViaWhatsAppAndEmail({
  subject,
  lines,
  emailTo = "kabaikunjane@gmail.com,info@milespace.com",
}: DualChannelLeadOptions) {
  const plainMessage = lines.join("\n");
  const whatsappUrl = getWhatsAppLink(plainMessage);
  const mailtoUrl = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(plainMessage)}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  window.location.href = mailtoUrl;
}
