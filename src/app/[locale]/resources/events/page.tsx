import Image from "next/image";
import type { Metadata } from "next";
import { upcomingEvents } from "@/data/events";
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
    title: dict.resources.events,
    description: dict.resources.eventsText,
    path: "/resources/events",
  });
}

export default async function EventsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  const dict = getDict(l);
  const events = upcomingEvents(new Date("2026-06-11T00:00:00+03:00"));

  return (
    <>
      <PageHero
        locale={l}
        crumbs={[
          { label: dict.nav.home, href: "/" },
          { label: dict.nav.resources, href: "/resources" },
          { label: dict.resources.events },
        ]}
        title={dict.resources.events}
        text={dict.resources.eventsText}
      />
      <section className="py-12 lg:py-16">
        <div className="container-x grid gap-5 md:grid-cols-2">
          {events.map((event) => (
            <article key={event.id} className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
              <div className="relative aspect-[16/8]">
                <Image src={event.image} alt={t(event.title, l)} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-muted">
                  <span className="rounded-full bg-ivory px-3 py-1">{event.date}</span>
                  {event.endDate && <span className="rounded-full bg-ivory px-3 py-1">{event.endDate}</span>}
                  <span className="rounded-full bg-ivory px-3 py-1">{t(event.city, l)}</span>
                </div>
                <a href={localeHref(l, `/resources/events/${event.id}`)} className="mt-4 block text-xl font-bold text-navy transition-colors hover:text-gold-dark">
                  {t(event.title, l)}
                </a>
                <p className="mt-2 text-sm font-semibold text-gold-dark">{t(event.organizer, l)} · {t(event.sector, l)}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{t(event.description, l)}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button href={localeHref(l, `/resources/events/${event.id}`)} size="sm" arrow>
                    {dict.common.learnMore}
                  </Button>
                  {event.url && (
                    <Button href={event.url} external variant="secondary" size="sm">
                      <span className="inline-flex items-center gap-2">
                        {dict.common.visitPlatform}
                        <Icon name="external-link" className="h-4 w-4" />
                      </span>
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
