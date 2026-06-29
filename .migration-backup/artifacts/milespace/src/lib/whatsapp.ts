export function getWhatsAppLink(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/254720176247?text=${encodedMessage}`;
}

export const WHATSAPP_NUMBER = "+254720176247";
export const WHATSAPP_DIRECT_LINK = "https://wa.me/254720176247";
