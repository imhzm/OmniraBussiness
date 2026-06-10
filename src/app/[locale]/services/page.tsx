import type { Metadata } from "next";
import { isLocale, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n/dictionary";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { ServicesDirectory } from "@/components/sections/ServicesDirectory";
import { FinalCTA } from "@/components/sections/FinalCTA";

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
    title: dict.services.heroTitle,
    description: dict.services.heroText,
    path: "/services",
  });
}

export default async function ServicesPage({
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
        crumbs={[{ label: dict.nav.home, href: "/" }, { label: dict.nav.services }]}
        eyebrow={dict.nav.services}
        title={dict.services.heroTitle}
        text={dict.services.heroText}
      />
      <section className="py-12 lg:py-16">
        <div className="container-x">
          <ServicesDirectory locale={l} />
        </div>
      </section>
      <FinalCTA locale={l} />
    </>
  );
}
