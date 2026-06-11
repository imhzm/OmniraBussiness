import type { Metadata } from "next";
import { sectors } from "@/data/sectors";
import { getDict } from "@/i18n/dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { SectorCard } from "@/components/sections/SectorsGrid";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  const dict = getDict(l);
  return pageMetadata({
    locale: l,
    title: dict.kingdom.sectorsTitle,
    description: dict.home.sectorsText,
    path: "/about-kingdom/sectors",
  });
}

export default async function SectorsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  const dict = getDict(l);

  return (
    <>
      <PageHero
        locale={l}
        crumbs={[
          { label: dict.nav.home, href: "/" },
          { label: dict.nav.aboutKingdom, href: "/about-kingdom" },
          { label: dict.kingdom.sectorsTitle },
        ]}
        title={dict.kingdom.sectorsTitle}
        text={dict.home.sectorsText}
      />
      <section className="py-12 lg:py-16">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, i) => (
              <SectorCard key={sector.slug} locale={l} sector={sector} delay={i * 60} />
            ))}
          </div>
          <p className="mt-8 text-sm leading-relaxed text-muted">
            {l === "ar"
              ? "كل قطاع مرتبط بخدمات تأسيس وترخيص وامتثال تساعدك على دخول السوق السعودي بمسار واضح."
              : "Every sector connects to setup, licensing, and compliance services that give you a clear Saudi market-entry path."}
          </p>
        </div>
      </section>
    </>
  );
}
