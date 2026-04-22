import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2";

const disabledStates = "disabled:opacity-50 disabled:cursor-not-allowed";

/**
 * Geometry + label style shared with hero CTAs: rectangular (no radius), Clash, wide tracking.
 * Variants only change color, border, width, and motion — not the fundamental “slab” shape.
 */
const ctaLabel =
  "rounded-none font-clash text-sm font-bold tracking-widest uppercase";

/** Default hero-style padding for standalone / inline CTAs */
const ctaPad = "px-10 py-5 md:px-12";

export const buttonStyles = {
  heroPrimary: cn(
    "inline-flex items-center justify-center bg-brand",
    ctaPad,
    ctaLabel,
    "text-on-brand transition-transform hover:scale-105",
    focusRing,
    disabledStates,
  ),
  heroSecondary: cn(
    "inline-flex items-center justify-center border border-brand/20",
    ctaPad,
    ctaLabel,
    "text-brand transition-colors hover:bg-brand/5",
    focusRing,
    disabledStates,
  ),
  heroSecondaryDark: cn(
    "inline-flex items-center justify-center border border-white/35",
    ctaPad,
    ctaLabel,
    "text-white transition-colors hover:bg-white/10",
    focusRing,
    disabledStates,
  ),
  /** Header bar — same corners as hero, tighter padding for the nav row */
  headerPill: cn(
    "inline-flex items-center justify-center bg-brand px-6 py-3 md:px-8",
    ctaLabel,
    "text-on-brand shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98]",
    focusRing,
    disabledStates,
  ),
  /** Full-width drawer footer CTA */
  mobileDrawer: cn(
    "inline-flex w-full items-center justify-center bg-brand px-6 py-5",
    ctaLabel,
    "text-on-brand shadow-sm transition-all duration-200 active:scale-[0.98]",
    focusRing,
    disabledStates,
  ),
  bookingPrimary: cn(
    "inline-flex items-center justify-center bg-brand",
    ctaPad,
    ctaLabel,
    "text-on-brand shadow-brand-glow transition-transform hover:scale-105",
    focusRing,
    disabledStates,
  ),
  blockBrand: cn(
    "inline-flex w-full cursor-pointer items-center justify-center bg-brand px-6 py-5 md:px-8",
    ctaLabel,
    "text-on-brand transition-all hover:scale-[1.02]",
    focusRing,
    disabledStates,
  ),
  blockBrandPricing: cn(
    "inline-flex w-full cursor-pointer items-center justify-center bg-brand px-6 py-5 md:px-8",
    ctaLabel,
    "text-on-brand transition-colors hover:bg-brand-hover",
    focusRing,
    disabledStates,
  ),
  blockOutline: cn(
    "inline-flex w-full cursor-pointer items-center justify-center border border-slate-200 px-6 py-5 md:px-8",
    ctaLabel,
    "text-foreground transition-all hover:border-brand hover:text-brand",
    focusRing,
    disabledStates,
  ),
  formSubmit: cn(
    "inline-flex w-full items-center justify-center bg-cta-gradient md:w-auto",
    ctaPad,
    ctaLabel,
    "text-on-brand shadow-lg shadow-blue-900/10 transition-all hover:opacity-90 active:scale-[0.98]",
    focusRing,
    disabledStates,
  ),
} as const;

export type ButtonVariant = keyof typeof buttonStyles;

type ButtonOwnProps = {
  variant: ButtonVariant;
  className?: string;
  children: ReactNode;
};

export type ButtonProps = ButtonOwnProps &
  Omit<ComponentProps<"button">, "className" | "children">;

export function Button({
  variant,
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export type ButtonLinkProps = ButtonOwnProps &
  Omit<ComponentProps<typeof Link>, "className" | "children">;

export function ButtonLink({
  variant,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={cn(buttonStyles[variant], className)} {...props}>
      {children}
    </Link>
  );
}
