"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site, whatsappLink } from "@/config/site";
import { mainNav } from "@/data/navigation";
import { getDict } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { cn, localeHref, t } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";

export function MobileDrawer({
  locale,
  open,
  onClose,
}: {
  locale: Locale;
  open: boolean;
  onClose: () => void;
}) {
  const dict = getDict(locale);
  const [expanded, setExpanded] = useState<string | null>(null);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] overflow-hidden xl:hidden"
      aria-hidden={false}
    >
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-navy/50 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />

      {/* Panel — slides from the inline-end side (right in AR, left in EN per roadmap §13.1) */}
      <div
        className={cn(
          "absolute inset-y-0 start-0 flex w-[88%] max-w-sm flex-col bg-white shadow-mega transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "-translate-x-full rtl:translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label={dict.nav.menu}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <Logo locale={locale} />
          <button
            type="button"
            onClick={onClose}
            aria-label={dict.nav.close}
            className="flex h-10 w-10 items-center justify-center rounded-full text-navy hover:bg-ivory"
          >
            <Icon name="x" className="h-5 w-5" />
          </button>
        </div>

        <nav className="thin-scroll flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile">
          {mainNav.map((item) =>
            item.columns ? (
              <div key={item.id} className="border-b border-line/70 last:border-0">
                <button
                  type="button"
                  onClick={() => setExpanded(expanded === item.id ? null : item.id)}
                  aria-expanded={expanded === item.id}
                  className="flex w-full items-center justify-between px-3 py-3.5 text-start text-base font-semibold text-navy"
                >
                  {t(item.label, locale)}
                  <Icon
                    name="chevron-down"
                    className={cn(
                      "h-4 w-4 text-muted transition-transform duration-300",
                      expanded === item.id && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300",
                    expanded === item.id ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <Link
                      href={localeHref(locale, item.href)}
                      className="flex items-center gap-1.5 px-3 pb-2 text-sm font-semibold text-gold-dark"
                    >
                      {dict.common.viewAll}
                      <Icon name="arrow-right" className="h-3.5 w-3.5 rtl:rotate-180" />
                    </Link>
                    {item.columns.map((col, ci) => (
                      <div key={ci} className="px-3 pb-3">
                        <p className="px-2 pb-1 pt-2 text-[11px] font-bold uppercase tracking-wider text-faint">
                          {t(col.title, locale)}
                        </p>
                        {col.items.map((leaf) => (
                          <Link
                            key={leaf.href}
                            href={localeHref(locale, leaf.href)}
                            className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm font-medium text-ink hover:bg-ivory"
                          >
                            {leaf.icon && (
                              <Icon name={leaf.icon} className="h-4 w-4 shrink-0 text-gold-dark" />
                            )}
                            {t(leaf.label, locale)}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.id}
                href={localeHref(locale, item.href)}
                className="block border-b border-line/70 px-3 py-3.5 text-base font-semibold text-navy last:border-0"
              >
                {t(item.label, locale)}
              </Link>
            )
          )}
        </nav>

        <div className="space-y-3 border-t border-line px-5 py-4">
          <div className="flex items-center justify-center gap-3">
            <a
              href={site.phoneHref}
              aria-label={dict.contact.phone}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-ivory text-navy"
            >
              <Icon name="phone" className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label={dict.contact.email}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-ivory text-navy"
            >
              <Icon name="mail" className="h-5 w-5" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-faint text-gold-dark"
            >
              <Icon name="message-circle" className="h-5 w-5" />
            </a>
          </div>
          <Button href={localeHref(locale, "/contact")} className="w-full">
            {dict.common.bookConsultation}
          </Button>
        </div>
      </div>
    </div>
  );
}
