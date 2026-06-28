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
  url: "https://omneraone.com",
  phone: "+966 54 064 6566",
  phoneHref: "tel:+966540646566",
  whatsappNumber: "966540646566",
  email: "support@omneraone.com",
  address: {
    en: "King Fahd Road, Riyadh, Saudi Arabia",
    ar: "طريق الملك فهد، الرياض، المملكة العربية السعودية",
  } satisfies L,
  workingHours: {
    en: "Sun – Thu, 9:00 AM – 6:00 PM",
    ar: "الأحد – الخميس، 9:00 ص – 6:00 م",
  } satisfies L,
  social: {
    linkedin: "https://www.linkedin.com/company/omneraone",
    x: "https://x.com/omneraone",
    instagram: "https://www.instagram.com/omneraone",
    youtube: "https://www.youtube.com/@omneraone",
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

/**
 * Booking configuration — the public booking-page URL.
 *
 * Paste the link from your Google Calendar "Appointment schedule" (or Cal.com /
 * Calendly) here. When set, the /book page embeds it and "Book a meeting" CTAs
 * point to it; bookings then land directly in your Google Calendar + Gmail.
 * Empty = the /book page gracefully falls back to WhatsApp / the contact form.
 */
export const booking = {
  url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3xlAz0wKAXHW-oDUvKzv60lmD2UffsrX9NHMDKmmLuoax8MHvZhf3c9Sdy-uGO5kSPuKZPgODU?gv=true",
} as const;

/** True when a booking page URL has been configured. */
export function hasBooking(): boolean {
  return booking.url.trim().length > 0;
}
