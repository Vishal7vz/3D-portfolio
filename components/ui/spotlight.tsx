"use client";
import * as React from "react";

export function Spotlight({ children }: { children: React.ReactNode }) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = React.useState({ x: -9999, y: -9999 });

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    const onLeave = () => setPos({ x: -9999, y: -9999 });
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-20 opacity-60 mix-blend-soft-light dark:mix-blend-screen"
        style={{
          background: `radial-gradient(200px 200px at ${pos.x}px ${pos.y}px, rgba(167, 139, 250, 0.25), rgba(99, 102, 241, 0.15) 35%, transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
}
