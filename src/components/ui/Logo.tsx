import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { assetSrc } from "@/lib/assets";
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
  return (
    <Link
      href={`/${locale}`}
      className={cn("group inline-flex shrink-0 items-center", className)}
      aria-label={name}
    >
      <Image
        src={assetSrc("/images/brand/omnira-gateway-logo.png")}
        alt={name}
        width={1179}
        height={366}
        priority
        sizes="(max-width: 640px) 126px, (max-width: 1700px) 148px, 168px"
        className={cn(
          "h-auto w-[126px] object-contain transition-opacity duration-300 group-hover:opacity-90 sm:w-[148px] min-[1700px]:w-[168px]",
          variant === "light" && "drop-shadow-[0_4px_10px_rgba(0,0,0,0.22)]"
        )}
      />
    </Link>
  );
}
