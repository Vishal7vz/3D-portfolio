"use client";
import * as React from "react";
import Image from "next/image";

export function SpideyFollow() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const pos = React.useRef({ x: 200, y: 200, r: 0 });
  const target = React.useRef({ x: 200, y: 200 });
  const jumping = React.useRef(false);
  const prefersReduced = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = (el.parentElement || document.body).getBoundingClientRect();
      target.current.x = e.clientX - rect.left;
      target.current.y = e.clientY - rect.top;
    };
    const onClick = () => {
      if (jumping.current) return;
      jumping.current = true;
      const startY = pos.current.y;
      const peak = startY - 60; // jump height
      let t = 0;
      const dur = 450;
      const start = performance.now();
      const tick = (now: number) => {
        t = (now - start) / dur;
        if (t >= 1) {
          pos.current.y = startY;
          jumping.current = false;
          return;
        }
        const ease = (t: number) => 1 - Math.pow(1 - t, 3);
        const up = t < 0.5 ? (t / 0.5) : (1 - (t - 0.5) / 0.5);
        pos.current.y = startY + (peak - startY) * ease(up);
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("click", onClick);

    let raf = 0;
    const loop = () => {
      const k = prefersReduced ? 1 : 0.12; // follow stiffness
      pos.current.x += (target.current.x - pos.current.x) * k;
      pos.current.y += (target.current.y - pos.current.y) * k;
      // rotate slightly based on velocity
      const dx = target.current.x - pos.current.x;
      pos.current.r = Math.max(-10, Math.min(10, dx * 0.05));
      if (ref.current) {
        ref.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) rotate(${pos.current.r}deg)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(raf);
    };
  }, [prefersReduced]);

  return (
    <div
      aria-hidden
      ref={ref}
      className="pointer-events-none absolute left-0 top-0 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block"
      style={{ filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.35))" }}
    >
      <div className="mx-auto h-16 w-px -translate-y-6 rounded-full bg-white/50" />
      <Image src="/spidey.svg" alt="spidey" width={64} height={96} priority />
    </div>
  );
}
