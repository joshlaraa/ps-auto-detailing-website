import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2";

export const buttonStyles = {
  heroPrimary: cn(
    "inline-flex items-center justify-center bg-brand px-10 py-5 font-clash text-sm font-bold tracking-widest text-on-brand uppercase transition-transform hover:scale-105 md:px-12",
    focusRing,
  ),
  heroSecondary: cn(
    "inline-flex items-center justify-center border border-brand/20 px-10 py-5 font-clash text-sm font-bold tracking-widest text-brand uppercase transition-colors hover:bg-brand/5 md:px-12",
    focusRing,
  ),
  heroSecondaryDark: cn(
    "inline-flex items-center justify-center border border-white/35 px-10 py-5 font-clash text-sm font-bold tracking-widest text-white uppercase transition-colors hover:bg-white/10 md:px-12",
    focusRing,
  ),
  headerPill: cn(
    "inline-flex items-center justify-center rounded-full bg-brand px-5 py-2.5 font-sans text-[0.65rem] font-bold tracking-[0.2em] text-on-brand uppercase shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98]",
    focusRing,
  ),
  mobileDrawer: cn(
    "block w-full rounded-xl bg-brand py-3 text-center font-sans text-[0.65rem] font-bold tracking-[0.2em] text-on-brand uppercase shadow-sm transition-all duration-200 active:scale-[0.98]",
    focusRing,
  ),
  bookingPrimary: cn(
    "inline-flex items-center justify-center bg-brand px-16 py-6 font-clash text-sm font-bold tracking-[0.3em] text-on-brand uppercase shadow-brand-glow transition-transform hover:scale-105",
    focusRing,
  ),
  blockBrand: cn(
    "block w-full cursor-pointer bg-brand py-4 text-center font-sans text-xs font-bold tracking-[0.2em] text-on-brand uppercase transition-all hover:scale-[1.02]",
    focusRing,
  ),
  blockBrandPricing: cn(
    "block w-full cursor-pointer bg-brand py-4 text-center font-sans text-xs font-bold tracking-widest text-on-brand uppercase transition-colors hover:bg-brand-hover",
    focusRing,
  ),
  blockOutline: cn(
    "block w-full cursor-pointer border border-slate-200 py-4 text-center font-sans text-xs font-bold tracking-[0.2em] text-foreground uppercase transition-all hover:border-brand hover:text-brand",
    focusRing,
  ),
  blockOutlineWide: cn(
    "block w-full cursor-pointer border border-slate-200 py-4 text-center font-sans text-xs font-bold tracking-widest text-foreground uppercase transition-all hover:border-brand hover:text-brand",
    focusRing,
  ),
  formSubmit: cn(
    "w-full rounded-lg bg-cta-gradient px-10 py-4 font-sans text-xs font-bold tracking-widest text-on-brand uppercase shadow-lg shadow-blue-900/10 transition-all hover:opacity-90 active:scale-[0.98] md:w-auto",
    focusRing,
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
