import type { Metadata } from "next";
import { getDict } from "@/i18n/dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";
import { localeHref } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";

const resourceCards = [
  { key: "platforms", href: "/resources/platforms", icon: "landmark" },
  { key: "library", href: "/resources/library", icon: "book-open" },
  { key: "articles", href: "/resources/articles", icon: "newspaper" },
  { key: "news", href: "/resources/news", icon: "megaphone" },
  { key: "events", href: "/resources/events", icon: "calendar-days" },
  { key: "insights", href: "/resources/market-insights", icon: "line-chart" },
] as const;

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
    title: dict.resources.heroTitle,
    description: dict.resources.heroText,
    path: "/resources",
  });
}

export default async function ResourcesPage({
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
        dark
        crumbs={[{ label: dict.nav.home, href: "/" }, { label: dict.nav.resources }]}
        title={dict.resources.heroTitle}
        text={dict.resources.heroText}
      />

      <section className="py-12 lg:py-20">
        <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {resourceCards.map((card) => {
            const title = dict.resources[card.key];
            const text = dict.resources[`${card.key}Text` as keyof typeof dict.resources] as string;
            return (
              <a
                key={card.key}
                href={localeHref(l, card.href)}
                className="group rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-card-hover"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-faint text-gold-dark transition-colors group-hover:bg-gold group-hover:text-navy">
                  <Icon name={card.icon} className="h-5 w-5" />
                </span>
                <h2 className="mt-5 text-xl font-bold text-navy">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </a>
            );
          })}
        </div>
      </section>

      <FinalCTA locale={l} />
    </>
  );
}
