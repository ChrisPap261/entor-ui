"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "./cn";

type WidgetScrollProps = {
  className?: string;
  children: ReactNode;
};

export function WidgetScroll({ className, children }: WidgetScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [overflows, setOverflows] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    function update() {
      const scroller = ref.current;
      if (!scroller) return;
      setOverflows(scroller.scrollHeight > scroller.clientHeight + 1);
    }

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    for (const child of el.children) observer.observe(child);

    const mutations = new MutationObserver(() => {
      const scroller = ref.current;
      if (!scroller) return;
      for (const child of scroller.children) observer.observe(child);
      update();
    });
    mutations.observe(el, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn("widget-scroll", overflows && "is-overflowing", className)}
    >
      {children}
    </div>
  );
}
