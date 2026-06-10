"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { popularSearches, searchIndex, type SearchEntry } from "@/data/search-index";
import { getDict } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { cn, localeHref, t } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

const typeIcons: Record<SearchEntry["type"], string> = {
  service: "briefcase",
  sector: "bar-chart-3",
  platform: "landmark",
  article: "newspaper",
  page: "file-text",
  event: "calendar-days",
};

export function SearchOverlay({
  locale,
  open,
  onClose,
}: {
  locale: Locale;
  open: boolean;
  onClose: () => void;
}) {
  const dict = getDict(locale);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (open) {
      setQuery("");
      // Focus after the opening transition starts
      requestAnimationFrame(() => inputRef.current?.focus());
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return searchIndex
      .filter((entry) => {
        const haystack =
          `${entry.title.en} ${entry.title.ar} ${entry.description.en} ${entry.description.ar} ${entry.keywords}`.toLowerCase();
        return q.split(/\s+/).every((word) => haystack.includes(word));
      })
      .slice(0, 9);
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[12vh]">
      <div
        className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={dict.nav.search}
        className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-mega"
      >
        <div className="flex items-center gap-3 border-b border-line px-6 py-5">
          <Icon name="search" className="h-5 w-5 shrink-0 text-gold-dark" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={dict.search.placeholder}
            className="w-full bg-transparent text-lg text-ink outline-none placeholder:text-faint"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label={dict.nav.close}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted hover:bg-ivory"
          >
            <Icon name="x" className="h-4.5 w-4.5" />
          </button>
        </div>

        <div className="thin-scroll max-h-[55vh] overflow-y-auto p-3">
          {query.trim().length < 2 ? (
            <div className="px-4 py-6">
              <p className="text-sm text-muted">{dict.search.hint}</p>
              <p className="mt-5 text-xs font-bold uppercase tracking-wider text-faint">
                {dict.search.suggestions}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {popularSearches.map((s, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setQuery(t(s, locale))}
                    className="rounded-full border border-line px-4 py-1.5 text-sm font-medium text-navy transition-colors hover:border-gold hover:text-gold-dark"
                  >
                    {t(s, locale)}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <p className="px-4 py-10 text-center text-sm leading-relaxed text-muted">
              {dict.search.noResults}
            </p>
          ) : (
            <ul>
              {results.map((entry) => (
                <li key={`${entry.type}-${entry.href}`}>
                  <Link
                    href={localeHref(locale, entry.href)}
                    onClick={onClose}
                    className="group flex items-start gap-4 rounded-2xl px-4 py-3.5 transition-colors hover:bg-ivory"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gold-faint text-gold-dark">
                      <Icon name={typeIcons[entry.type]} className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2">
                        <span className="truncate text-sm font-semibold text-navy group-hover:text-gold-dark">
                          {t(entry.title, locale)}
                        </span>
                        <span className="shrink-0 rounded-full bg-ivory px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-muted">
                          {dict.search.types[entry.type]}
                        </span>
                      </span>
                      <span className="mt-0.5 block truncate text-xs text-muted">
                        {t(entry.description, locale)}
                      </span>
                    </span>
                    <Icon
                      name="arrow-right"
                      className={cn(
                        "mt-2 h-4 w-4 shrink-0 text-faint transition-transform group-hover:translate-x-1 group-hover:text-gold-dark",
                        "rtl:rotate-180 rtl:group-hover:-translate-x-1"
                      )}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
