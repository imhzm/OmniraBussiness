import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/data/articles";
import { getService } from "@/data/services";
import { getDict } from "@/i18n/dictionary";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";
import { localeHref, t } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";

export function generateStaticParams() {
  return locales.flatMap((locale) => articles.map((article) => ({ locale, slug: article.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  const article = getArticle(slug);
  if (!article) return {};
  return pageMetadata({
    locale: l,
    title: t(article.title, l),
    description: t(article.excerpt, l),
    path: `/resources/articles/${slug}`,
  });
}

export default async function ArticleDetailsPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  const dict = getDict(l);
  const article = getArticle(slug);
  if (!article) notFound();

  const relatedServices = article.relatedServices.map(getService).filter(Boolean);

  return (
    <>
      <PageHero
        locale={l}
        crumbs={[
          { label: dict.nav.home, href: "/" },
          { label: dict.nav.resources, href: "/resources" },
          { label: dict.resources.articles, href: "/resources/articles" },
          { label: t(article.title, l) },
        ]}
        title={t(article.title, l)}
        text={t(article.excerpt, l)}
      >
        <div className="mt-5 flex flex-wrap gap-2 text-sm font-semibold text-muted">
          <span className="rounded-full bg-white px-3 py-1">{article.date}</span>
          <span className="rounded-full bg-white px-3 py-1">{article.readMins} {dict.common.minRead}</span>
        </div>
      </PageHero>

      <section className="py-12 lg:py-16">
        <div className="container-x grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          <article className="rounded-2xl border border-line bg-white p-6 shadow-card lg:p-8">
            <div className="relative mb-8 aspect-[16/8] overflow-hidden rounded-2xl">
              <Image src={article.image} alt={t(article.title, l)} fill sizes="(max-width: 1024px) 100vw, 70vw" className="object-cover" />
            </div>
            <div className="prose max-w-none">
              {article.body.map((block, i) => {
                if (block.type === "h2") {
                  return (
                    <h2 key={i} className="mt-8 text-2xl font-bold text-navy">
                      {t(block.text, l)}
                    </h2>
                  );
                }
                if (block.type === "list") {
                  return (
                    <ul key={i} className="mt-4 space-y-3">
                      {block.items.map((item, ii) => (
                        <li key={ii} className="flex gap-3 text-base leading-relaxed text-ink">
                          <Icon name="check-circle-2" className="mt-1 h-5 w-5 shrink-0 text-gold-dark" />
                          {t(item, l)}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (block.type === "quote") {
                  return (
                    <blockquote key={i} className="my-7 rounded-2xl border-s-4 border-gold bg-ivory p-5 text-lg font-semibold leading-relaxed text-navy">
                      {t(block.text, l)}
                    </blockquote>
                  );
                }
                return (
                  <p key={i} className="mt-4 text-base leading-relaxed text-muted">
                    {t(block.text, l)}
                  </p>
                );
              })}
            </div>
          </article>

          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <h2 className="text-lg font-bold text-navy">{dict.common.relatedServices}</h2>
              <div className="mt-4 space-y-3">
                {relatedServices.map((service) => (
                  <a
                    key={service!.slug}
                    href={localeHref(l, `/services/${service!.slug}`)}
                    className="flex items-center gap-3 rounded-xl border border-line p-3 transition-colors hover:border-gold/60 hover:bg-ivory"
                  >
                    <Icon name={service!.icon} className="h-4 w-4 text-gold-dark" />
                    <span className="text-sm font-semibold text-navy">{t(service!.title, l)}</span>
                  </a>
                ))}
              </div>
              <Button href={localeHref(l, "/contact")} className="mt-6 w-full" arrow>
                {dict.common.bookConsultation}
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <FinalCTA locale={l} />
    </>
  );
}
