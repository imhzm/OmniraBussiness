"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { localeHref } from "@/lib/utils";
import { whatsappLink } from "@/config/site";
import { Icon } from "@/components/ui/Icon";

export type FinderGroup = { label: string; items: { slug: string; title: string }[] };

/** Hero service-finder: pick a service + city, then jump to it or start on WhatsApp. */
export function HeroFinder({
  locale,
  groups,
  cities,
}: {
  locale: Locale;
  groups: FinderGroup[];
  cities: string[];
}) {
  const ar = locale === "ar";
  const router = useRouter();
  const [slug, setSlug] = useState("");
  const [city, setCity] = useState("");

  const serviceTitle = slug
    ? groups.flatMap((g) => g.items).find((i) => i.slug === slug)?.title ?? ""
    : "";

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(localeHref(locale, slug ? `/services/${slug}` : "/services"));
  };

  const waMessage = ar
    ? `مرحبًا Omnera One، أرغب في الاستفسار عن: ${serviceTitle || "خدماتكم"}${city ? ` — ${city}` : ""}`
    : `Hello Omnera One, I'd like to ask about: ${serviceTitle || "your services"}${city ? ` — ${city}` : ""}`;

  const selectCls =
    "w-full appearance-none rounded-xl border border-line bg-ivory/50 py-3 ps-4 pe-10 text-sm font-medium text-navy outline-none transition-colors focus:border-gold focus:bg-white";

  return (
    <form
      onSubmit={submit}
      className="w-full max-w-md rounded-2xl border border-line bg-white/95 p-5 shadow-mega backdrop-blur sm:p-6"
    >
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-gold-dark">
        <Icon name="file-search" className="h-4 w-4" />
        {ar ? "ابدأ باختيار خدمتك" : "Start by choosing your service"}
      </p>

      <div className="mt-4 space-y-3">
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold text-muted">
            {ar ? "نوع الخدمة" : "Service"}
          </span>
          <span className="relative block">
            <select value={slug} onChange={(e) => setSlug(e.target.value)} className={selectCls}>
              <option value="">{ar ? "اختر الخدمة" : "Select a service"}</option>
              {groups.map((g) => (
                <optgroup key={g.label} label={g.label}>
                  {g.items.map((i) => (
                    <option key={i.slug} value={i.slug}>
                      {i.title}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            <Icon
              name="chevron-down"
              className="pointer-events-none absolute end-3 top-1/2 h-4 w-4 -translate-y-1/2 text-faint"
            />
          </span>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold text-muted">
            {ar ? "المدينة / المنطقة" : "City / Region"}
          </span>
          <span className="relative block">
            <select value={city} onChange={(e) => setCity(e.target.value)} className={selectCls}>
              <option value="">{ar ? "اختر المنطقة" : "Select a region"}</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <Icon
              name="chevron-down"
              className="pointer-events-none absolute end-3 top-1/2 h-4 w-4 -translate-y-1/2 text-faint"
            />
          </span>
        </label>

        <button
          type="submit"
          className="btn-sheen flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3.5 text-sm font-bold text-navy shadow-gold transition-colors hover:bg-gold-dark"
        >
          <Icon name="file-search" className="h-4 w-4" />
          {ar ? "اعرض الخدمة" : "Find my service"}
        </button>
      </div>

      <a
        href={whatsappLink(waMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 flex items-center justify-center gap-1.5 text-xs font-semibold text-muted transition-colors hover:text-gold-dark"
      >
        <Icon name="message-circle" className="h-3.5 w-3.5" />
        {ar ? "أو ابدأ مباشرة عبر واتساب" : "Or start directly on WhatsApp"}
      </a>
    </form>
  );
}
