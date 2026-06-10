import Link from "next/link";
import { getCategory, services } from "@/data/services";
import { getDict } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { localeHref, t } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const previewSlugs = [
  "business-setup",
  "premium-residency",
  "serviced-offices",
  "accounting-services",
  "visa-issuance",
  "saudi-partners",
];

export function ServiceCard({
  locale,
  slug,
  delay = 0,
}: {
  locale: Locale;
  slug: string;
  delay?: number;
}) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return null;
  const category = getCategory(service.category);

  return (
    <Reveal delay={delay} className="h-full">
      <Link
        href={localeHref(locale, `/services/${service.slug}`)}
        className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-card-hover"
      >
        <div className="flex items-start justify-between gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-faint text-gold-dark transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
            <Icon name={service.icon} className="h-5.5 w-5.5" />
          </span>
          <span className="rounded-full bg-ivory px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-muted">
            {t(category.label, locale)}
          </span>
        </div>
        <h3 className="mt-5 text-lg font-bold leading-snug text-navy transition-colors group-hover:text-gold-dark">
          {t(service.title, locale)}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">
          {t(service.excerpt, locale)}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark">
          {getDict(locale).services.exploreService}
          <Icon
            name="arrow-right"
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
          />
        </span>
      </Link>
    </Reveal>
  );
}

export function ServicesPreview({ locale }: { locale: Locale }) {
  const dict = getDict(locale);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-x">
        <SectionHeader
          eyebrow={dict.nav.services}
          title={dict.home.servicesTitle}
          text={dict.home.servicesText}
          action={{ label: dict.home.viewAllServices, href: localeHref(locale, "/services") }}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {previewSlugs.map((slug, i) => (
            <ServiceCard key={slug} locale={locale} slug={slug} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
