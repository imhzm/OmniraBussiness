import type { L } from "@/i18n/config";

/**
 * Central site configuration — update contact details here once and they
 * propagate to the header, footer, contact page, forms, and WhatsApp links.
 */
export const site = {
  name: { en: "Omnira", ar: "أومنيرا" } satisfies L,
  legalName: {
    en: "Omnira Business Services",
    ar: "أومنيرا لخدمات الأعمال",
  } satisfies L,
  tagline: {
    en: "Your Gateway to Business in Saudi Arabia",
    ar: "بوابتك للأعمال في المملكة العربية السعودية",
  } satisfies L,
  url: "https://omnira.sa",
  phone: "+966 55 000 0000",
  phoneHref: "tel:+966550000000",
  whatsappNumber: "966550000000",
  email: "info@omnira.sa",
  address: {
    en: "King Fahd Road, Riyadh, Saudi Arabia",
    ar: "طريق الملك فهد، الرياض، المملكة العربية السعودية",
  } satisfies L,
  workingHours: {
    en: "Sun – Thu, 9:00 AM – 6:00 PM",
    ar: "الأحد – الخميس، 9:00 ص – 6:00 م",
  } satisfies L,
  social: {
    linkedin: "https://www.linkedin.com/company/omnira",
    x: "https://x.com/omnira",
    instagram: "https://www.instagram.com/omnira",
    youtube: "https://www.youtube.com/@omnira",
  },
} as const;

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
