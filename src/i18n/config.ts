export const locales = ["ar", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ar";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function isRTL(locale: Locale): boolean {
  return locale === "ar";
}

/** Bilingual string — every piece of content on the site carries both languages. */
export type L = {
  en: string;
  ar: string;
};
