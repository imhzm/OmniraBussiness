import type { L } from "@/i18n/config";

/**
 * Central site configuration — update contact details here once and they
 * propagate to the header, footer, contact page, forms, and WhatsApp links.
 */
export const site = {
  name: { en: "Omnera One", ar: "Omnera One" } satisfies L,
  legalName: {
    en: "Omnera One Business Services",
    ar: "Omnera One لخدمات الأعمال",
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

/**
 * Lead-capture configuration — the single place that decides where form
 * submissions (contact + newsletter) are sent.
 *
 * `endpoint` is read from the public env var `NEXT_PUBLIC_LEAD_ENDPOINT`.
 * When it is set, the forms POST the lead there (e.g. a CRM webhook or an
 * API route). When it is empty (the default, and the case for this static
 * build), the forms fall back to the WhatsApp deep-link / local-confirmation
 * UX so nothing breaks before a backend exists.
 *
 * TODO (go-live): provision a real lead-capture endpoint + credentials and
 * set NEXT_PUBLIC_LEAD_ENDPOINT in the deployment environment.
 */
export const leadCapture = {
  endpoint: process.env.NEXT_PUBLIC_LEAD_ENDPOINT ?? "",
} as const;

/** True when a real lead-capture backend has been configured. */
export function hasLeadBackend(): boolean {
  return leadCapture.endpoint.trim().length > 0;
}
