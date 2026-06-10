import Image from "next/image";
import Link from "next/link";
import { sectors, type Sector } from "@/data/sectors";
import { getDict } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { localeHref, t } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function SectorCard({
  locale,
  sector,
  delay = 0,
}: {
  locale: Locale;
  sector: Sector;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <Link
        href={localeHref(locale, `/about-kingdom/sectors/${sector.slug}`)}
        className="group relative block aspect-[4/3] overflow-hidden rounded-2xl shadow-card"
      >
        <Image
          src={sector.image}
          alt={t(sector.name, locale)}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-navy/5 transition-colors duration-300 group-hover:from-navy/95" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/90 text-navy">
              <Icon name={sector.icon} className="h-4.5 w-4.5" />
            </span>
            <h3 className="text-lg font-bold text-white">{t(sector.name, locale)}</h3>
          </div>
          <p className="mt-2 line-clamp-2 max-h-0 overflow-hidden text-sm leading-relaxed text-white/75 opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">
            {t(sector.short, locale)}
          </p>
        </div>
      </Link>
    </Reveal>
  );
}

export function SectorsGrid({ locale }: { locale: Locale }) {
  const dict = getDict(locale);

  return (
    <section className="py-16 lg:py-24">
      <div className="container-x">
        <SectionHeader
          eyebrow={dict.kingdom.whyTitle}
          title={dict.home.sectorsTitle}
          text={dict.home.sectorsText}
          action={{
            label: dict.home.discoverOpportunities,
            href: localeHref(locale, "/about-kingdom"),
          }}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.slice(0, 6).map((sector, i) => (
            <SectorCard key={sector.slug} locale={locale} sector={sector} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
