import Image from "next/image";
import Link from "next/link";
import { upcomingEvents } from "@/data/events";
import { libraryDocs } from "@/data/library";
import { getDict } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { localeHref, t } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

function formatDay(date: string, locale: Locale) {
  const d = new Date(date);
  return {
    day: d.toLocaleDateString("en-US", { day: "2-digit" }),
    month: d.toLocaleDateString(locale === "ar" ? "ar-SA" : "en-US", { month: "short" }),
  };
}

export function EventsLibrary({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const events = upcomingEvents().slice(0, 3);
  const docs = libraryDocs.slice(0, 4);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-10">
        {/* Upcoming events */}
        <div>
          <SectionHeader
            eyebrow={dict.resources.events}
            title={dict.home.eventsTitle}
            text={dict.home.eventsText}
            action={{ label: dict.home.allEvents, href: localeHref(locale, "/resources/events") }}
            className="mb-8"
          />
          <div className="space-y-4">
            {events.map((event, i) => {
              const { day, month } = formatDay(event.date, locale);
              return (
                <Reveal key={event.id} delay={i * 90}>
                  <Link
                    href={localeHref(locale, "/resources/events")}
                    className="group flex items-center gap-4 rounded-2xl border border-line bg-ivory/50 p-4 transition-all duration-300 hover:border-gold/50 hover:bg-white hover:shadow-card"
                  >
                    <span className="relative hidden h-16 w-20 shrink-0 overflow-hidden rounded-xl sm:block">
                      <Image src={event.image} alt="" fill sizes="80px" className="object-cover" />
                    </span>
                    <span className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-navy text-white">
                      <span className="text-lg font-bold leading-none">{day}</span>
                      <span className="mt-0.5 text-[10px] font-semibold uppercase text-gold-soft">
                        {month}
                      </span>
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-base font-bold text-navy group-hover:text-gold-dark">
                        {t(event.title, locale)}
                      </span>
                      <span className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs text-muted">
                        <span className="inline-flex items-center gap-1">
                          <Icon name="map-pin" className="h-3.5 w-3.5 text-gold-dark" />
                          {t(event.city, locale)}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Icon name="briefcase" className="h-3.5 w-3.5 text-gold-dark" />
                          {t(event.sector, locale)}
                        </span>
                      </span>
                    </span>
                    <Icon
                      name="arrow-right"
                      className="h-4 w-4 shrink-0 text-faint transition-transform group-hover:translate-x-1 group-hover:text-gold-dark rtl:rotate-180 rtl:group-hover:-translate-x-1"
                    />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Knowledge & library */}
        <div>
          <SectionHeader
            eyebrow={dict.resources.library}
            title={dict.home.libraryTitle}
            text={dict.home.libraryText}
            action={{ label: dict.home.allResources, href: localeHref(locale, "/resources/library") }}
            className="mb-8"
          />
          <div className="space-y-3">
            {docs.map((doc, i) => (
              <Reveal key={doc.id} delay={i * 90}>
                <Link
                  href={localeHref(locale, doc.href)}
                  className="group flex items-center gap-4 rounded-2xl border border-line p-4 transition-all duration-300 hover:border-gold/50 hover:shadow-card"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-faint text-gold-dark">
                    <Icon name="file-text" className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-bold text-navy group-hover:text-gold-dark">
                      {t(doc.title, locale)}
                    </span>
                    <span className="mt-0.5 block text-xs text-muted">
                      {doc.fileType} · {doc.size} · {t(doc.language, locale)}
                    </span>
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors group-hover:border-gold group-hover:text-gold-dark">
                    <Icon name="download" className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
