"use client";

import { useState } from "react";
import { getDict } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { Icon } from "@/components/ui/Icon";

/** Static-friendly newsletter capture: confirms locally (no backend, per roadmap §4). */
export function NewsletterForm({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const [done, setDone] = useState(false);
  const [email, setEmail] = useState("");

  if (done) {
    return (
      <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-gold-soft">
        <Icon name="check-circle-2" className="h-4.5 w-4.5" />
        {dict.footer.subscribed}
      </p>
    );
  }

  return (
    <form
      className="mt-4 flex max-w-md overflow-hidden rounded-full border border-white/15 bg-white/5 focus-within:border-gold"
      onSubmit={(e) => {
        e.preventDefault();
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) setDone(true);
      }}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={dict.footer.emailPlaceholder}
        aria-label={dict.footer.emailPlaceholder}
        className="h-12 w-full bg-transparent px-5 text-sm text-white outline-none placeholder:text-white/40"
      />
      <button
        type="submit"
        aria-label={dict.footer.subscribe}
        className="flex h-12 w-14 shrink-0 items-center justify-center bg-gold text-navy transition-colors hover:bg-gold-dark"
      >
        <Icon name="arrow-right" className="h-4.5 w-4.5 rtl:rotate-180" />
      </button>
    </form>
  );
}
