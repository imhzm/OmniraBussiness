import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IBM_Plex_Sans_Arabic, Inter } from "next/font/google";
import { site } from "@/config/site";
import { isLocale, isRTL, locales, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex",
  display: "swap",
});

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
        ? "أومنيرا — بوابتك الموثوقة لتأسيس الشركات والتراخيص والإقامات والامتثال في المملكة العربية السعودية."
        : "Omnira — your trusted gateway to company formation, licensing, residency, and compliance in Saudi Arabia.",
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
      className={cn(inter.variable, plexArabic.variable)}
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
