import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { events, getEvent } from "@/data/events";
import { getDict } from "@/i18n/dictionary";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";
import { assetSrc } from "@/lib/assets";
import { t } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";

export function generateStaticParams() {
  return locales.flatMap((locale) => events.map((event) => ({ locale, id: event.id })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { locale, id } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  const event = getEvent(id);
  if (!event) return {};
  return pageMetadata({
    locale: l,
    title: t(event.title, l),
    description: t(event.description, l),
    path: `/resources/events/${id}`,
  });
}

export default async function EventDetailsPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  const dict = getDict(l);
  const event = getEvent(id);
  if (!event) notFound();

  return (
    <>
      <PageHero
        locale={l}
        crumbs={[
          { label: dict.nav.home, href: "/" },
          { label: dict.nav.resources, href: "/resources" },
          { label: dict.resources.events, href: "/resources/events" },
          { label: t(event.title, l) },
        ]}
        title={t(event.title, l)}
        text={t(event.description, l)}
      />
      <section className="py-12 lg:py-16">
        <div className="container-x grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
            <div className="relative aspect-[16/8]">
              <Image src={assetSrc(event.image)} alt={t(event.title, l)} fill sizes="(max-width: 1024px) 100vw, 70vw" className="object-cover" />
            </div>
            <div className="p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-navy">{dict.resources.events}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted">{t(event.description, l)}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Info icon="map-pin" label={dict.contact.location} value={t(event.city, l)} />
                <Info icon="briefcase" label={dict.resources.category} value={t(event.sector, l)} />
                <Info icon="calendar-days" label={dict.common.updated} value={event.endDate ? `${event.date} - ${event.endDate}` : event.date} />
                <Info icon="users" label={dict.common.by} value={t(event.organizer, l)} />
              </div>
            </div>
          </div>
          <aside className="rounded-2xl border border-line bg-white p-6 shadow-card lg:sticky lg:top-28 lg:self-start">
            <Icon name="calendar-days" className="h-7 w-7 text-gold-dark" />
            <h2 className="mt-4 text-xl font-bold text-navy">{t(event.title, l)}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{t(event.organizer, l)}</p>
            {event.url && (
              <Button href={event.url} external className="mt-6 w-full" arrow>
                {dict.common.learnMore}
              </Button>
            )}
          </aside>
        </div>
      </section>
      <FinalCTA locale={l} />
    </>
  );
}

function Info({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex gap-3 rounded-2xl border border-line bg-ivory p-4">
      <Icon name={icon} className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" />
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-faint">{label}</p>
        <p className="mt-1 text-sm font-semibold text-navy">{value}</p>
      </div>
    </div>
  );
}
