import Link from "next/link";
import type { ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import { localeHref } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { Pattern } from "@/components/ui/Pattern";

export type Crumb = { label: string; href?: string };

export function Breadcrumb({
  locale,
  items,
  dark,
}: {
  locale: Locale;
  items: Crumb[];
  dark?: boolean;
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5">
      <ol className={"flex flex-wrap items-center gap-1.5 text-xs font-medium " + (dark ? "text-white/55" : "text-muted")}>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && (
              <Icon name="arrow-right" className={"h-3 w-3 rtl:rotate-180 " + (dark ? "text-white/35" : "text-faint")} />
            )}
            {item.href ? (
              <Link
                href={localeHref(locale, item.href)}
                className={"transition-colors " + (dark ? "hover:text-white" : "hover:text-gold-dark")}
              >
                {item.label}
              </Link>
            ) : (
              <span className={dark ? "text-white" : "text-navy"}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Compact hero for inner pages — ivory by default, navy for premium pages. */
export function PageHero({
  locale,
  crumbs,
  eyebrow,
  title,
  text,
  children,
  dark,
}: {
  locale: Locale;
  crumbs: Crumb[];
  eyebrow?: string;
  title: string;
  text?: string;
  children?: ReactNode;
  dark?: boolean;
}) {
  return (
    <section className={dark ? "relative overflow-hidden bg-navy-gradient" : "relative overflow-hidden bg-ivory"}>
      <Pattern
        id="page-hero-pattern"
        className={
          dark
            ? "absolute inset-0 text-gold opacity-[0.05]"
            : "absolute inset-0 text-navy opacity-[0.025]"
        }
      />
      <div className="container-x relative py-12 lg:py-16">
        <Breadcrumb locale={locale} items={crumbs} dark={dark} />
        {eyebrow && <Eyebrow className={dark ? "text-gold-soft" : undefined}>{eyebrow}</Eyebrow>}
        <h1
          className={
            "max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl " +
            (dark ? "text-white" : "text-navy")
          }
        >
          {title}
        </h1>
        {text && (
          <p
            className={
              "mt-4 max-w-2xl text-base leading-relaxed sm:text-lg " +
              (dark ? "text-white/70" : "text-muted")
            }
          >
            {text}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
