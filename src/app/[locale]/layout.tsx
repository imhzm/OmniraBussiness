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

  return (
    <html
      lang={locale}
      dir={isRTL(locale) ? "rtl" : "ltr"}
    >
      <body className={locale === "ar" ? "font-ar" : "font-sans"}>
        <Header locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
        <WhatsAppFloat locale={locale} />
      </body>
    </html>
  );
}
