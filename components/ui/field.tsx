import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const inputClassName = cn(
  "w-full rounded-lg border-none bg-slate-100 px-4 py-3 text-sm text-slate-900 ring-brand/25 placeholder:text-slate-400",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
);

type FieldProps = {
  id: string;
  label: string;
  children?: ReactNode;
  className?: string;
};

export function FieldLabel({
  htmlFor,
  children,
  className,
}: {
  htmlFor: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "font-sans text-xs font-bold text-slate-500 uppercase tracking-widest",
        className,
      )}
    >
      {children}
    </label>
  );
}

export function FieldInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return <input className={cn(inputClassName, className)} {...props} />;
}

export function FieldTextarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return <textarea className={cn(inputClassName, className)} {...props} />;
}

export function Field({ id, label, children, className }: FieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      {children}
    </div>
  );
}
