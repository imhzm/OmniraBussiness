"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site, whatsappLink } from "@/config/site";
import { mainNav } from "@/data/navigation";
import { getDict } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { cn, localeHref, switchLocalePath, t } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { Pattern } from "@/components/ui/Pattern";
import { MobileDrawer } from "@/components/layout/MobileDrawer";
import { SearchOverlay } from "@/components/layout/SearchOverlay";

export function Header({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close overlays on navigation
  useEffect(() => {
    setDrawerOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    const full = localeHref(locale, href);
    return href === "/" ? pathname === full : pathname.startsWith(full);
  };

  const otherLocale: Locale = locale === "ar" ? "en" : "ar";

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 bg-white transition-shadow duration-300",
          scrolled ? "border-b border-line shadow-card" : "border-b border-transparent"
        )}
      >
        <div className="container-x flex h-[68px] items-center justify-between gap-4 lg:h-[78px]">
          <Logo locale={locale} />

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {mainNav.map((item) => (
              <div key={item.id} className={cn("group/nav", item.columns && "static")}>
                <Link
                  href={localeHref(locale, item.href)}
                  className={cn(
                    "relative flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors xl:px-4",
                    isActive(item.href) ? "text-gold-dark" : "text-navy hover:text-gold-dark"
                  )}
                >
                  {t(item.label, locale)}
                  {item.columns && (
                    <Icon
                      name="chevron-down"
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover/nav:rotate-180"
                    />
                  )}
                  {isActive(item.href) && (
                    <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gold" aria-hidden="true" />
                  )}
                </Link>

                {/* Mega menu panel */}
                {item.columns && (
                  <div className="mega-panel absolute inset-x-0 top-full z-40">
                    <div className="container-x">
                      <div className="overflow-hidden rounded-b-3xl border border-t-0 border-line bg-white shadow-mega">
                        <div
                          className={cn(
                            "grid gap-0 divide-line p-2",
                            item.promo
                              ? "grid-cols-[repeat(4,1fr)_280px] divide-x rtl:divide-x-reverse"
                              : item.columns.length >= 3
                                ? "grid-cols-3 divide-x rtl:divide-x-reverse"
                                : "grid-cols-2 divide-x rtl:divide-x-reverse"
                          )}
                        >
                          {item.columns.map((col, ci) => (
                            <div key={ci} className="px-5 py-6">
                              <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-faint">
                                {t(col.title, locale)}
                              </p>
                              <ul className="space-y-1">
                                {col.items.map((leaf) => (
                                  <li key={leaf.href}>
                                    <Link
                                      href={localeHref(locale, leaf.href)}
                                      className="group/leaf flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-ivory"
                                    >
                                      {leaf.icon && (
                                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gold-faint text-gold-dark">
                                          <Icon name={leaf.icon} className="h-3.5 w-3.5" />
                                        </span>
                                      )}
                                      <span className="min-w-0">
                                        <span className="block text-sm font-semibold text-navy transition-colors group-hover/leaf:text-gold-dark">
                                          {t(leaf.label, locale)}
                                        </span>
                                        {leaf.desc && !item.promo && (
                                          <span className="mt-0.5 block truncate text-xs text-muted">
                                            {t(leaf.desc, locale)}
                                          </span>
                                        )}
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}

                          {item.promo && (
                            <div className="relative m-3 overflow-hidden rounded-2xl bg-navy p-6 text-white">
                              <Pattern id="mega-promo" className="absolute inset-0 text-gold/40 opacity-10" />
                              <div className="relative">
                                <p className="text-lg font-bold leading-snug">{dict.nav.megaPromoTitle}</p>
                                <p className="mt-2 text-sm leading-relaxed text-white/70">{dict.nav.megaPromoText}</p>
                                <Button
                                  href={localeHref(locale, "/services")}
                                  size="sm"
                                  arrow
                                  className="mt-5"
                                >
                                  {dict.nav.allServices}
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hidden h-10 w-10 items-center justify-center rounded-full bg-gold-faint text-gold-dark transition-colors hover:bg-gold hover:text-navy sm:flex"
            >
              <Icon name="message-circle" className="h-4.5 w-4.5" />
            </a>
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label={dict.nav.search}
              className="flex h-10 w-10 items-center justify-center rounded-full text-navy transition-colors hover:bg-ivory"
            >
              <Icon name="search" className="h-4.5 w-4.5" />
            </button>
            <Link
              href={switchLocalePath(pathname, otherLocale)}
              className="flex h-10 items-center gap-1.5 rounded-full px-3 text-sm font-semibold text-navy transition-colors hover:bg-ivory"
              aria-label={otherLocale === "ar" ? "العربية" : "English"}
            >
              <Icon name="globe" className="h-4 w-4" />
              <span>{otherLocale === "ar" ? "العربية" : "English"}</span>
            </Link>
            <Button
              href={localeHref(locale, "/contact")}
              size="sm"
              className="hidden xl:inline-flex"
            >
              {dict.common.bookConsultation}
            </Button>
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label={dict.nav.menu}
              className="flex h-10 w-10 items-center justify-center rounded-full text-navy transition-colors hover:bg-ivory lg:hidden"
            >
              <Icon name="menu" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer locale={locale} open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <SearchOverlay locale={locale} open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
