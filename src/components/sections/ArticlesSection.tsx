import Image from "next/image";
import Link from "next/link";
import { articleCategories, articles, type Article } from "@/data/articles";
import { getDict } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { localeHref, t } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function formatDate(date: string, locale: Locale): string {
  return new Date(date).toLocaleDateString(locale === "ar" ? "ar-SA" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function ArticleCard({
  locale,
  article,
  delay = 0,
}: {
  locale: Locale;
  article: Article;
  delay?: number;
}) {
  const dict = getDict(locale);
  const category = articleCategories.find((c) => c.id === article.category);

  return (
    <Reveal delay={delay} className="h-full">
      <Link
        href={localeHref(locale, `/resources/articles/${article.slug}`)}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-card-hover"
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={article.image}
            alt={t(article.title, locale)}
            fill
            loading="eager"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {category && (
            <span className="absolute start-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-navy">
              {t(category.label, locale)}
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col p-5">
          <p className="text-xs text-faint">
            {formatDate(article.date, locale)} · {article.readMins} {dict.common.minRead}
          </p>
          <h3 className="mt-2 line-clamp-2 text-base font-bold leading-snug text-navy transition-colors group-hover:text-gold-dark">
            {t(article.title, locale)}
          </h3>
          <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">
            {t(article.excerpt, locale)}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark">
            {dict.common.readMore}
            <Icon
              name="arrow-right"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
            />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export function ArticlesSection({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const latest = [...articles].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4);

  return (
    <section className="py-16 lg:py-24">
      <div className="container-x">
        <SectionHeader
          eyebrow={dict.resources.articles}
          title={dict.home.articlesTitle}
          text={dict.home.articlesText}
          action={{ label: dict.home.allArticles, href: localeHref(locale, "/resources/articles") }}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {latest.map((article, i) => (
            <ArticleCard key={article.slug} locale={locale} article={article} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
