import type { Metadata } from "next";
import { articles } from "@/data/articles";
import { getDict } from "@/i18n/dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { ArticleListing } from "@/components/sections/ArticleListing";

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
    title: dict.resources.news,
    description: dict.resources.newsText,
    path: "/resources/news",
  });
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  const dict = getDict(l);
  const news = articles.filter((article) => article.category === "news");

  return (
    <>
      <PageHero
        locale={l}
        crumbs={[
          { label: dict.nav.home, href: "/" },
          { label: dict.nav.resources, href: "/resources" },
          { label: dict.resources.news },
        ]}
        title={dict.resources.news}
        text={dict.resources.newsText}
      />
      <section className="py-12 lg:py-16">
        <div className="container-x">
          <ArticleListing locale={l} articles={news} />
        </div>
      </section>
    </>
  );
}
