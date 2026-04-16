import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
  as?: "p" | "span" | "h3";
  /** `onDark` uses the light blue eyebrow for hero overlays. */
  tone?: "default" | "onDark";
  /** Tighter label style for dense sections. */
  size?: "default" | "compact";
};

export function Eyebrow({
  children,
  className,
  as: Tag = "p",
  tone = "default",
  size = "default",
}: EyebrowProps) {
  return (
    <Tag
      className={cn(
        "m-0 font-sans font-bold uppercase tracking-[0.3em]",
        size === "default" && "text-sm",
        size === "compact" && "text-xs tracking-widest",
        tone === "default" && "text-brand",
        tone === "onDark" && "text-eyebrow-on-dark",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
