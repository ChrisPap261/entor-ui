"use client";

import { cn } from "./cn";

type Tab<T extends string> = { id: T; label: string; count?: number };

type FilterTabsProps<T extends string> = {
  tabs: Tab<T>[];
  value: T;
  onChange: (id: T) => void;
  className?: string;
};

export function FilterTabs<T extends string>({
  tabs,
  value,
  onChange,
  className,
}: FilterTabsProps<T>) {
  return (
    <div className={cn("filter-tabs", className)}>
      {tabs.map((tab) => {
        const active = tab.id === value;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={cn("filter-tab", active && "filter-tab-active")}
          >
            {tab.label}
            {typeof tab.count === "number" && (
              <span className="ml-1.5 font-normal opacity-70">{tab.count}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
