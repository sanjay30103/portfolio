import { links } from "@/data/content";

/** wa.me link that opens WhatsApp with a ready-to-send message. */
export function whatsappUrl(): string {
  return `https://wa.me/${links.whatsapp}?text=${encodeURIComponent(links.whatsappMessage)}`;
}
