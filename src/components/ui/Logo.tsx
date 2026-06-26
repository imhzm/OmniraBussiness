import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

/** Compact brand mark (O + 1) — for favicons and tight placements. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/images/brand/omnera-one-icon.png"
      alt="Omnera One"
      width={512}
      height={512}
      className={className}
    />
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
  // `light` variant = the ivory wordmark for dark backgrounds (header, footer, CTA);
  // `dark` variant = the full navy/gold wordmark for light backgrounds.
  const src =
    variant === "light"
      ? "/images/brand/omnera-one-logo-light.png"
      : "/images/brand/omnera-one-logo.png";
  return (
    <Link
      href={`/${locale}`}
      aria-label="Omnera One"
      className={cn("group inline-flex shrink-0 items-center", className)}
    >
      <Image
        src={src}
        alt="Omnera One"
        width={900}
        height={201}
        sizes="(max-width: 640px) 150px, (max-width: 1700px) 168px, 184px"
        className="h-auto w-[140px] object-contain transition-opacity duration-300 group-hover:opacity-90 min-[1500px]:w-[158px] min-[1700px]:w-[180px]"
      />
    </Link>
  );
}
