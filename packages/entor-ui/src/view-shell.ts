import { cn } from "./cn";

/** Full-viewport page card used by list/detail views. */
export function viewShellClass(...extra: (string | false | undefined)[]) {
  return cn(
    "widget-card flex min-h-0 w-full flex-1 flex-col overflow-hidden",
    ...extra,
  );
}
