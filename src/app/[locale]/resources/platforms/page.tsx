import type { Metadata } from "next";
import { platforms } from "@/data/platforms";
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
    title: dict.resources.platforms,
    description: dict.resources.platformsText,
    path: "/resources/platforms",
  });
}

export default async function PlatformsPage({
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
          { label: dict.resources.platforms },
        ]}
        title={dict.resources.platforms}
        text={dict.resources.platformsText}
      />
      <section className="py-12 lg:py-16">
        <div className="container-x grid gap-5 md:grid-cols-2">
          {platforms.map((platform) => (
            <article key={platform.id} className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-gold-dark">{platform.abbr}</span>
                  <h2 className="mt-2 text-xl font-bold text-navy">{t(platform.name, l)}</h2>
                  <p className="mt-1 text-sm font-semibold text-muted">{t(platform.authority, l)}</p>
                </div>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-faint text-gold-dark">
                  <Icon name="landmark" className="h-5 w-5" />
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">{t(platform.description, l)}</p>
              <div className="mt-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-faint">{dict.resources.servicesCovered}</p>
                <ul className="mt-3 space-y-2">
                  {platform.servicesCovered.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-ink">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                      {t(item, l)}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={platform.url} external variant="secondary" size="sm">
                  {dict.common.visitPlatform}
                </Button>
                <Button href={localeHref(l, `/services/${platform.relatedService}`)} variant="ghost" size="sm" arrow>
                  {dict.common.relatedServices}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
