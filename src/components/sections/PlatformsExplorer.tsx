"use client";

import { useState } from "react";
import { platformCategories, platforms, type PlatformCategoryId } from "@/data/platforms";
import { services } from "@/data/services";
import { getDict } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { cn, localeHref, t } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import Link from "next/link";

/** Filterable government-platforms grid (roadmap §14.6 / §18.4). */
export function PlatformsExplorer({
  locale,
  limit,
}: {
  locale: Locale;
  limit?: number;
}) {
  const dict = getDict(locale);
  const [active, setActive] = useState<PlatformCategoryId | "all">("all");

  const filtered = platforms.filter((p) => active === "all" || p.category === active);
  const visible = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {platformCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActive(cat.id)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200",
              active === cat.id
                ? "border-gold bg-gold text-navy shadow-gold"
                : "border-line bg-white text-muted hover:border-gold/50 hover:text-navy"
            )}
          >
            {t(cat.label, locale)}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((platform) => {
          const related = services.find((s) => s.slug === platform.relatedService);
          const categoryLabel = platformCategories.find((c) => c.id === platform.category);
          return (
            <div
              key={platform.id}
              className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-card-hover"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="flex h-11 min-w-11 items-center justify-center rounded-xl bg-navy px-2.5 text-xs font-bold tracking-wide text-gold-soft">
                  {platform.abbr}
                </span>
                {categoryLabel && (
                  <span className="rounded-full bg-ivory px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-muted">
                    {t(categoryLabel.label, locale)}
                  </span>
                )}
              </div>
              <h3 className="mt-4 text-base font-bold text-navy">{t(platform.name, locale)}</h3>
              <p className="text-xs font-medium text-faint">{t(platform.authority, locale)}</p>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                {t(platform.description, locale)}
              </p>
              <ul className="mt-4 space-y-1.5">
                {platform.servicesCovered.map((sc, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-muted">
                    <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-dark" />
                    {t(sc, locale)}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted transition-colors hover:text-navy"
                >
                  {dict.common.visitPlatform}
                  <Icon name="external-link" className="h-3.5 w-3.5" />
                </a>
                {related && (
                  <Link
                    href={localeHref(locale, `/services/${related.slug}`)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-dark transition-colors hover:text-navy"
                  >
                    {dict.common.learnMore}
                    <Icon name="arrow-right" className="h-3.5 w-3.5 rtl:rotate-180" />
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
