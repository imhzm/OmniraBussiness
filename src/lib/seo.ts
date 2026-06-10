import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

/** Per-page metadata with canonical + hreflang alternates (roadmap §32). */
export function pageMetadata({
  locale,
  title,
  description,
  path,
}: {
  locale: Locale;
  title: string;
  description: string;
  path: string;
}): Metadata {
  const suffix = path === "/" ? "" : path;
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}${suffix}`,
      languages: {
        en: `/en${suffix}`,
        ar: `/ar${suffix}`,
      },
    },
    openGraph: {
      title,
      description,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      type: "website",
    },
  };
}
