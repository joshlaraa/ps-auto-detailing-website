import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  /** Extra lift on hover (e.g. tier cards). */
  hover?: boolean;
};

export function Card({
  children,
  className,
  hover = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-slate-200/80 bg-white shadow-sm ring-1 ring-slate-200/80",
        hover && "transition-colors duration-500 md:hover:bg-white active:bg-white",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
