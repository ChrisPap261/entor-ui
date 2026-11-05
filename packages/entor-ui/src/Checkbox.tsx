"use client";

import { Check } from "lucide-react";
import { cn } from "./cn";

type CheckboxProps = {
  checked: boolean;
  onChange: (next: boolean) => void;
  label?: string;
};

export function Checkbox({ checked, onChange, label }: CheckboxProps) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={cn(
        "theme-checkbox flex size-5 shrink-0 items-center justify-center border border-line transition-colors",
        checked
          ? "border-ink-soft bg-ink-soft text-paper"
          : "border-line bg-transparent text-transparent",
      )}
    >
      <Check className="size-3" strokeWidth={3} />
    </button>
  );
}
