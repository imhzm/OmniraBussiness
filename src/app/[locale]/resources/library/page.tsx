import type { Metadata } from "next";
import { docCategories, libraryDocs } from "@/data/library";
import { getDict } from "@/i18n/dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";
import { localeHref, t } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
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
    title: dict.resources.library,
    description: dict.resources.libraryText,
    path: "/resources/library",
  });
}

export default async function LibraryPage({
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
          { label: dict.resources.library },
        ]}
        title={dict.resources.library}
        text={dict.resources.libraryText}
      />
      <section className="py-12 lg:py-16">
        <div className="container-x">
          <div className="mb-8 flex flex-wrap gap-2">
            {docCategories.map((cat) => (
              <span key={cat.id} className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-muted">
                {t(cat.label, l)}
              </span>
            ))}
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {libraryDocs.map((doc) => (
              <article key={doc.id} className="rounded-2xl border border-line bg-white p-6 shadow-card">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-faint text-gold-dark">
                    <Icon name="file-text" className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h2 className="text-lg font-bold text-navy">{t(doc.title, l)}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{t(doc.description, l)}</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-muted">
                  <span className="rounded-full bg-ivory px-3 py-1">{doc.fileType}</span>
                  <span className="rounded-full bg-ivory px-3 py-1">{doc.size}</span>
                  <span className="rounded-full bg-ivory px-3 py-1">{t(doc.language, l)}</span>
                  <span className="rounded-full bg-ivory px-3 py-1">
                    {dict.common.updated}: {doc.updated}
                  </span>
                </div>
                <Button href={localeHref(l, doc.href)} className="mt-6" size="sm" arrow>
                  {dict.common.download}
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
