import Image from "next/image";
import type { Metadata } from "next";
import { articleCategories, articles } from "@/data/articles";
import { getDict } from "@/i18n/dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";
import { localeHref, t } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";

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
    title: dict.resources.articles,
    description: dict.resources.articlesText,
    path: "/resources/articles",
  });
}

export default async function ArticlesPage({
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
          { label: dict.nav.resources, href: "/resources" },
          { label: dict.resources.articles },
        ]}
        title={dict.resources.articles}
        text={dict.resources.articlesText}
      />
      <section className="py-12 lg:py-16">
        <div className="container-x">
          <div className="mb-8 flex flex-wrap gap-2">
            {articleCategories.map((cat) => (
              <span key={cat.id} className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-muted">
                {t(cat.label, l)}
              </span>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <a
                key={article.slug}
                href={localeHref(l, `/resources/articles/${article.slug}`)}
                className="group overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-card-hover"
              >
                <div className="relative aspect-[16/9]">
                  <Image src={article.image} alt={t(article.title, l)} fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover" />
                  <div className="absolute start-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-gold-dark">
                    {t(articleCategories.find((cat) => cat.id === article.category)!.label, l)}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs font-semibold text-faint">
                    <span>{article.date}</span>
                    <span>{article.readMins} {dict.common.minRead}</span>
                  </div>
                  <h2 className="mt-3 text-lg font-bold leading-snug text-navy group-hover:text-gold-dark">
                    {t(article.title, l)}
                  </h2>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{t(article.excerpt, l)}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark">
                    {dict.common.readMore}
                    <Icon name="arrow-right" className="h-4 w-4 rtl:rotate-180" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
