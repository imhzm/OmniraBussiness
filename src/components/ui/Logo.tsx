import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

/** Geometric eight-point star — the Omnira brand mark. */
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
  const name = locale === "ar" ? "أومنيرا" : "OMNIRA";
  const sub = locale === "ar" ? "بوابة الأعمال السعودية" : "SAUDI BUSINESS GATEWAY";
  return (
    <Link
      href={`/${locale}`}
      className={cn("group flex items-center gap-2.5", className)}
      aria-label={name}
    >
      <LogoMark className="h-10 w-10 shrink-0 text-gold transition-transform duration-500 group-hover:rotate-45" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-xl font-bold tracking-[0.18em]",
            locale === "ar" && "tracking-normal",
            variant === "dark" ? "text-navy" : "text-white"
          )}
        >
          {name}
        </span>
        <span
          className={cn(
            "mt-1 text-[9px] font-medium tracking-[0.22em]",
            locale === "ar" && "text-[10px] tracking-[0.08em]",
            variant === "dark" ? "text-muted" : "text-white/60"
          )}
        >
          {sub}
        </span>
      </span>
    </Link>
  );
}
