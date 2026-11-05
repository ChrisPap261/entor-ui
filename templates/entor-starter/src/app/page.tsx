"use client";

import { useState } from "react";
import { Settings } from "lucide-react";
import { FilterTabs, viewShellClass, WidgetScroll } from "@entor/ui";

type Tab = "overview" | "items";

export default function HomePage() {
  const [tab, setTab] = useState<Tab>("overview");

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-gutter p-gutter">
      <header className="site-header widget-card flex shrink-0 items-center justify-between gap-3 px-4 py-3">
        <h1 className="display-title text-base text-ink">Entor Starter</h1>
        <button
          type="button"
          className="header-btn inline-flex size-9 items-center justify-center text-ink hover:bg-ink hover:text-paper"
          aria-label="Settings"
        >
          <Settings className="size-4" />
        </button>
      </header>

      <div className={viewShellClass("min-h-[28rem]")}>
        <div className="widget-pad-x widget-pad-t flex shrink-0 pb-2">
          <FilterTabs
            className="w-full [&>button]:flex-1"
            tabs={[
              { id: "overview", label: "Overview" },
              { id: "items", label: "Items", count: 3 },
            ]}
            value={tab}
            onChange={setTab}
          />
        </div>
        <WidgetScroll className="widget-pad min-h-0 flex-1">
          {tab === "overview" ? (
            <p className="text-sm text-ink-soft">
              This page uses <code className="rounded-[var(--radius-item)] bg-paper px-1">@entor/theme</code>{" "}
              and <code className="rounded-[var(--radius-item)] bg-paper px-1">@entor/ui</code>. Copy{" "}
              <strong className="font-semibold text-ink">packages/</strong> or this template into your repo.
            </p>
          ) : (
            <ul className="flex flex-col">
              {["First row", "Second row", "Third row"].map((label) => (
                <li
                  key={label}
                  className="row-line flex items-center justify-between border-b border-line py-3 last:border-b-0"
                >
                  <span className="font-medium text-ink">{label}</span>
                  <button
                    type="button"
                    className="header-btn inline-flex h-8 items-center px-3 text-sm text-ink hover:bg-ink hover:text-paper"
                  >
                    Action
                  </button>
                </li>
              ))}
            </ul>
          )}
        </WidgetScroll>
      </div>
    </div>
  );
}
