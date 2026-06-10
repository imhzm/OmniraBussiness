import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "gold",
  className,
}: {
  children: ReactNode;
  tone?: "gold" | "navy" | "ivory" | "outline";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
        tone === "gold" && "bg-gold-faint text-gold-dark",
        tone === "navy" && "bg-navy text-gold-soft",
        tone === "ivory" && "bg-ivory text-muted",
        tone === "outline" && "border border-line bg-white text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}

/** Small gold eyebrow label above section titles. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-dark",
        className
      )}
    >
      <span className="h-px w-6 bg-gold" aria-hidden="true" />
      {children}
    </span>
  );
}
