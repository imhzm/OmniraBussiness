import { type Article } from "@/data/articles";
import type { Locale } from "@/i18n/config";
import { ArticleCard } from "@/components/sections/ArticlesSection";

export function ArticleListing({
  locale,
  articles,
}: {
  locale: Locale;
  articles: Article[];
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article, i) => (
        <ArticleCard key={article.slug} locale={locale} article={article} delay={i * 60} />
      ))}
    </div>
  );
}
