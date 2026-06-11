import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getKingdomTopic, kingdomTopics } from "@/data/kingdom-pages";
import { getDict } from "@/i18n/dictionary";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { assetSrc } from "@/lib/assets";
import { pageMetadata } from "@/lib/seo";
import { t } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";

export function generateStaticParams() {
  return locales.flatMap((locale) => kingdomTopics.map((topic) => ({ locale, topic: topic.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; topic: string }>;
}): Promise<Metadata> {
  const { locale, topic } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  const page = getKingdomTopic(topic);
  if (!page) return {};
  return pageMetadata({
    locale: l,
    title: t(page.title, l),
    description: t(page.excerpt, l),
    path: `/about-kingdom/${topic}`,
  });
}

export default async function KingdomTopicPage({
  params,
}: {
  params: Promise<{ locale: string; topic: string }>;
}) {
  const { locale, topic } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  const dict = getDict(l);
  const page = getKingdomTopic(topic);
  if (!page) notFound();

  return (
    <>
      <PageHero
        locale={l}
        crumbs={[
          { label: dict.nav.home, href: "/" },
          { label: dict.nav.aboutKingdom, href: "/about-kingdom" },
          { label: t(page.title, l) },
        ]}
        title={t(page.title, l)}
        text={t(page.excerpt, l)}
      />
      <section className="py-12 lg:py-16">
        <div className="container-x grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card-hover">
            <Image src={assetSrc(page.image)} alt={t(page.title, l)} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          </div>
          <div className="space-y-8">
            {page.sections.map((section) => (
              <section key={section.title.en}>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-faint text-gold-dark">
                    <Icon name={page.icon} className="h-5 w-5" />
                  </span>
                  <h2 className="text-2xl font-bold text-navy">{t(section.title, l)}</h2>
                </div>
                <p className="mt-4 text-base leading-relaxed text-muted">{t(section.text, l)}</p>
                <div className="mt-5 grid gap-3">
                  {section.points.map((point) => (
                    <div key={point.en} className="flex gap-3 rounded-2xl border border-line bg-white p-4 shadow-card">
                      <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" />
                      <p className="text-sm leading-relaxed text-ink">{t(point, l)}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA locale={l} />
    </>
  );
}
