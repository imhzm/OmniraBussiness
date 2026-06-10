import Link from "next/link";
import { site } from "@/config/site";
import { footerGroups } from "@/data/navigation";
import { getDict } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { localeHref, t } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { Pattern } from "@/components/ui/Pattern";
import { NewsletterForm } from "@/components/layout/NewsletterForm";

export function Footer({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const year = new Date().getFullYear();

  const socials = [
    { id: "linkedin", href: site.social.linkedin, label: "LinkedIn" },
    { id: "x", href: site.social.x, label: "X" },
    { id: "youtube", href: site.social.youtube, label: "YouTube" },
    { id: "instagram", href: site.social.instagram, label: "Instagram" },
  ];

  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <Pattern id="footer-pattern" className="absolute inset-0 text-gold opacity-[0.04]" />

      <div className="container-x relative">
        {/* Top */}
        <div className="grid gap-10 py-16 lg:grid-cols-[1.4fr_repeat(4,1fr)] lg:gap-8">
          <div>
            <Logo locale={locale} variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
              {dict.footer.aboutText}
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-gold hover:text-gold"
                >
                  <SocialIcon id={s.id} />
                </a>
              ))}
            </div>
          </div>

          {footerGroups.map((group, gi) => (
            <div key={gi}>
              <p className="mb-4 text-sm font-bold uppercase tracking-wider text-gold-soft">
                {t(group.title, locale)}
              </p>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={localeHref(locale, item.href)}
                      className="text-sm text-white/65 transition-colors hover:text-gold-soft"
                    >
                      {t(item.label, locale)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter + contact strip */}
        <div className="grid gap-8 border-t border-white/10 py-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-base font-bold">{dict.footer.newsletter}</p>
            <p className="mt-1 text-sm text-white/60">{dict.footer.newsletterText}</p>
            <NewsletterForm locale={locale} />
          </div>
          <div className="flex flex-col gap-3 text-sm text-white/70 lg:items-end">
            <a href={site.phoneHref} className="flex items-center gap-2 transition-colors hover:text-gold-soft" dir="ltr">
              <Icon name="phone" className="h-4 w-4 text-gold" />
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 transition-colors hover:text-gold-soft">
              <Icon name="mail" className="h-4 w-4 text-gold" />
              {site.email}
            </a>
            <span className="flex items-center gap-2">
              <Icon name="map-pin" className="h-4 w-4 text-gold" />
              {t(site.address, locale)}
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {t(site.legalName, locale)}. {dict.footer.rights}
          </p>
          <div className="flex items-center gap-5">
            <Link href={localeHref(locale, "/privacy")} className="transition-colors hover:text-gold-soft">
              {dict.footer.privacy}
            </Link>
            <Link href={localeHref(locale, "/terms")} className="transition-colors hover:text-gold-soft">
              {dict.footer.terms}
            </Link>
          </div>
          <p className="text-white/40">{dict.footer.madeFor}</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ id }: { id: string }) {
  const paths: Record<string, string> = {
    linkedin:
      "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z",
    x: "M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z",
    youtube:
      "M23.5 6.51a2.96 2.96 0 0 0-2.08-2.1C19.58 3.92 12 3.92 12 3.92s-7.58 0-9.42.5a2.96 2.96 0 0 0-2.08 2.1A30.8 30.8 0 0 0 0 12a30.8 30.8 0 0 0 .5 5.49 2.96 2.96 0 0 0 2.08 2.1c1.84.49 9.42.49 9.42.49s7.58 0 9.42-.5a2.96 2.96 0 0 0 2.08-2.09A30.8 30.8 0 0 0 24 12a30.8 30.8 0 0 0-.5-5.49ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z",
    instagram:
      "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.71 3.71 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07Zm0 1.8c-3.15 0-3.52.01-4.77.07-1.08.05-1.66.23-2.05.38-.51.2-.88.44-1.27.83-.39.39-.63.76-.83 1.27-.15.39-.33.97-.38 2.05-.06 1.25-.07 1.62-.07 4.77s.01 3.52.07 4.77c.05 1.08.23 1.66.38 2.05.2.51.44.88.83 1.27.39.39.76.63 1.27.83.39.15.97.33 2.05.38 1.25.06 1.62.07 4.77.07s3.52-.01 4.77-.07c1.08-.05 1.66-.23 2.05-.38.51-.2.88-.44 1.27-.83.39-.39.63-.76.83-1.27.15-.39.33-.97.38-2.05.06-1.25.07-1.62.07-4.77s-.01-3.52-.07-4.77c-.05-1.08-.23-1.66-.38-2.05-.2-.51-.44-.88-.83-1.27a3.43 3.43 0 0 0-1.27-.83c-.39-.15-.97-.33-2.05-.38-1.25-.06-1.62-.07-4.77-.07Zm0 11.53a3.49 3.49 0 1 1 0-6.98 3.49 3.49 0 0 1 0 6.98Zm0-8.87a5.38 5.38 0 1 0 0 10.76 5.38 5.38 0 0 0 0-10.76Zm6.85-.21a1.26 1.26 0 1 1-2.52 0 1.26 1.26 0 0 1 2.52 0Z",
  };
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d={paths[id]} />
    </svg>
  );
}
