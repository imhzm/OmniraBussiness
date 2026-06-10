import type { L, Locale } from "@/i18n/config";

export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

/** Pick the localized value of a bilingual string. */
export function t(value: L, locale: Locale): string {
  return value[locale];
}

/** Prefix an internal path with the active locale: localeHref("ar", "/services") → "/ar/services" */
export function localeHref(locale: Locale, path: string): string {
  if (path === "/") return `/${locale}`;
  return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Swap the locale prefix of the current pathname, keeping the same page. */
export function switchLocalePath(pathname: string, target: Locale): string {
  const stripped = pathname.replace(/^\/(ar|en)(?=\/|$)/, "");
  return `/${target}${stripped || ""}`;
}
