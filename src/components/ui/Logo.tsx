import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

/** Geometric eight-point star — the Omnera One brand mark. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="11"
        y="11"
        width="26"
        height="26"
        rx="2"
        stroke="currentColor"
        strokeWidth="2.4"
      />
      <rect
        x="11"
        y="11"
        width="26"
        height="26"
        rx="2"
        stroke="currentColor"
        strokeWidth="2.4"
        transform="rotate(45 24 24)"
      />
      <circle cx="24" cy="24" r="3.4" fill="currentColor" />
    </svg>
  );
}

export function Logo({
  locale,
  variant = "dark",
  className,
}: {
  locale: Locale;
  variant?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href={`/${locale}`}
      aria-label="Omnera One"
      className={cn("group inline-flex shrink-0 items-center gap-2.5", className)}
    >
      <LogoMark
        className={cn(
          "h-8 w-8 shrink-0 transition-transform duration-300 group-hover:rotate-45",
          variant === "light" ? "text-gold-soft" : "text-gold-dark"
        )}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-lg font-bold tracking-tight",
            variant === "light" ? "text-white" : "text-navy"
          )}
        >
          Omnera
          <span className={variant === "light" ? "text-gold-soft" : "text-gold-dark"}>
            {" "}
            One
          </span>
        </span>
        <span
          className={cn(
            "mt-0.5 text-[0.6rem] font-semibold tracking-wide",
            variant === "light" ? "text-white/70" : "text-muted"
          )}
        >
          {locale === "ar" ? "خدمات الأعمال في السعودية" : "Saudi Business Services"}
        </span>
      </span>
    </Link>
  );
}
