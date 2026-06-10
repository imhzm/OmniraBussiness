import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "white" | "outline-light";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-gold";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-gold text-navy shadow-gold hover:bg-gold-dark hover:shadow-card-hover",
  secondary: "border border-navy/25 bg-transparent text-navy hover:border-gold hover:text-gold-dark",
  ghost: "bg-transparent px-0 text-gold-dark hover:text-navy",
  white: "bg-white text-navy shadow-card hover:bg-ivory",
  "outline-light": "border border-white/30 bg-transparent text-white hover:border-gold hover:text-gold-soft",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-6 text-sm",
  lg: "h-13 px-8 text-base",
};

export function Button({
  href,
  external,
  variant = "primary",
  size = "md",
  arrow,
  className,
  children,
  type = "button",
  disabled,
  onClick,
}: {
  href?: string;
  external?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}) {
  const cls = cn(base, variants[variant], variant !== "ghost" && sizes[size], className);
  const content = (
    <>
      {children}
      {arrow && (
        <Icon
          name="arrow-right"
          className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 rtl:rotate-180 rtl:group-hover/btn:-translate-x-1"
        />
      )}
    </>
  );

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {content}
      </a>
    );
  }
  if (href) {
    return (
      <Link href={href} className={cls}>
        {content}
      </Link>
    );
  }
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={cn(cls, "disabled:cursor-not-allowed disabled:opacity-60")}>
      {content}
    </button>
  );
}
