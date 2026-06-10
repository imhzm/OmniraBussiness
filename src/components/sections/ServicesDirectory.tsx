"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { getCategory, serviceCategories, services, type ServiceCategoryId } from "@/data/services";
import { getDict } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { cn, localeHref, t } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

/** Searchable, filterable services grid (roadmap §15). */
export function ServicesDirectory({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const [category, setCategory] = useState<ServiceCategoryId | "all">("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return services.filter((s) => {
      if (category !== "all" && s.category !== category) return false;
      if (!q) return true;
      return `${s.title.en} ${s.title.ar} ${s.excerpt.en} ${s.excerpt.ar}`
        .toLowerCase()
        .includes(q);
    });
  }, [category, query]);

  return (
    <div>
      {/* Controls */}
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategory("all")}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-semibold transition-all",
              category === "all"
                ? "border-gold bg-gold text-navy shadow-gold"
                : "border-line bg-white text-muted hover:border-gold/50 hover:text-navy"
            )}
          >
            {dict.common.all}
          </button>
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setCategory(cat.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition-all",
                category === cat.id
                  ? "border-gold bg-gold text-navy shadow-gold"
                  : "border-line bg-white text-muted hover:border-gold/50 hover:text-navy"
              )}
            >
              {t(cat.label, locale)}
            </button>
          ))}
        </div>
        <div className="relative lg:w-72">
          <Icon
            name="search"
            className="absolute start-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={dict.services.searchPlaceholder}
            className="h-12 w-full rounded-full border border-line bg-white ps-11 pe-5 text-sm text-ink shadow-card outline-none transition-colors placeholder:text-faint focus:border-gold"
          />
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-line bg-white px-6 py-16 text-center text-muted">
          {dict.services.noResults}
        </p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((service) => {
            const cat = getCategory(service.category);
            return (
              <Link
                key={service.slug}
                href={localeHref(locale, `/services/${service.slug}`)}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:bg-ivory/40 hover:shadow-card-hover"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-faint text-gold-dark transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                    <Icon name={service.icon} className="h-5.5 w-5.5" />
                  </span>
                  <span className="rounded-full bg-ivory px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-muted">
                    {t(cat.label, locale)}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold leading-snug text-navy transition-colors group-hover:text-gold-dark">
                  {t(service.title, locale)}
                </h3>
                <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">
                  {t(service.excerpt, locale)}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark">
                  {dict.services.exploreService}
                  <Icon
                    name="arrow-right"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
