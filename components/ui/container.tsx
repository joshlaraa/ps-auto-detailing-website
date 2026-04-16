import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Primary content width — use site-wide for header, footer, and page sections.
 */
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-6 md:px-8", className)}>
      {children}
    </div>
  );
}
