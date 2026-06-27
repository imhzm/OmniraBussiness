import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/config/site";
import { isLocale, isRTL, locales, type Locale } from "@/i18n/config";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import "@/styles/globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  return {
    metadataBase: new URL(site.url),
    title: {
      default: `${site.name[l]} — ${site.tagline[l]}`,
      template: `%s | ${site.name[l]}`,
    },
    description:
      l === "ar"
        ? "Omnera One — بوابتك الموثوقة لتأسيس الشركات والتراخيص والإقامات والامتثال في المملكة العربية السعودية."
        : "Omnera One — your trusted gateway to company formation, licensing, residency, and compliance in Saudi Arabia.",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;

  const orgLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name[l],
        legalName: site.legalName[l],
        url: `${site.url}/${l}`,
        logo: `${site.url}/images/brand/omnera-one-logo.png`,
        description:
          l === "ar"
            ? "Omnera One لخدمات الأعمال — تأسيس الشركات والتراخيص وإدارة المنصات الحكومية في المملكة العربية السعودية."
            : "Omnera One Business Services — company formation, licensing, and government-platform management in Saudi Arabia.",
        areaServed: {
          "@type": "Country",
          name: l === "ar" ? "المملكة العربية السعودية" : "Saudi Arabia",
        },
        sameAs: [site.social.linkedin, site.social.x, site.social.instagram, site.social.youtube],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: `${site.url}/${l}`,
        name: site.name[l],
        inLanguage: l === "ar" ? "ar-SA" : "en-US",
        publisher: { "@id": `${site.url}/#organization` },
      },
    ],
  };

  return (
    <html
      lang={locale}
      dir={isRTL(locale) ? "rtl" : "ltr"}
    >
      <body className={locale === "ar" ? "font-ar" : "font-sans"}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
        <Header locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
        <WhatsAppFloat locale={locale} />
      </body>
    </html>
  );
}
