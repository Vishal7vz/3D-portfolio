"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const Spline = dynamic(() => import("@splinetool/react-spline").then(m => m.default), { ssr: false, loading: () => null });

export function Hero() {
  const avatarRef = useRef<HTMLDivElement | null>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = avatarRef.current; if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left; const y = e.clientY - rect.top;
    const rx = ((y - rect.height / 2) / rect.height) * -8;
    const ry = ((x - rect.width / 2) / rect.width) * 8;
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
    el.style.setProperty("--gx", `${x}px`);
    el.style.setProperty("--gy", `${y}px`);
  }
  function handleLeave() {
    const el = avatarRef.current; if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
  }

  return (
    <section id="hero" className="relative flex min-h-[90vh] items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]" />

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 pt-24 text-center md:flex-row md:items-center md:gap-10 md:text-left">
        <div className="order-2 mt-8 md:order-1 md:mt-0 md:flex-1">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="rounded-full border border-white/20 bg-white/60 px-3 py-1 text-xs text-zinc-700 backdrop-blur dark:border-white/10 dark:bg-zinc-900/60 dark:text-zinc-200">Full-Stack Developer</motion.span>
          <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
            <motion.span
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22,1,0.36,1] }}
              className="bg-gradient-to-b from-indigo-400 via-violet-400 to-white bg-clip-text text-transparent"
            >
              Vishal Singh
            </motion.span>
          </h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-4 max-w-2xl text-balance text-lg text-zinc-700 dark:text-zinc-300">I build beautiful, modern web experiences with Next.js, TypeScript, and delightful animations.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-8 flex gap-3">
            <a href="#projects" className="rounded-full bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow transition hover:bg-indigo-500">View Work</a>
            <a href="#contact" className="rounded-full border border-white/20 bg-white/60 px-5 py-3 text-sm font-medium text-zinc-900 backdrop-blur transition hover:bg-white/80 dark:border-white/10 dark:bg-zinc-900/60 dark:text-white dark:hover:bg-zinc-900/80">Contact Me</a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.95, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.25 }} className="order-1 md:order-2 md:flex-1 md:justify-end">
          <div ref={avatarRef} onMouseMove={handleMove} onMouseLeave={handleLeave} className="relative mx-auto h-56 w-40 rounded-3xl md:h-80 md:w-56" style={{ transform: "perspective(800px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))", transition: "transform 200ms ease" }}>
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/20 bg-white/50 shadow-xl backdrop-blur dark:border-white/10 dark:bg-zinc-900/60">
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20 dark:ring-white/10" />
              <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'140\\' height=\\'140\\' viewBox=\\'0 0 140 140\\'%3E%3Cfilter id=\\'n\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.65\\' numOctaves=\\'2\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23n)\\' opacity=\\'0.4\\'/%3E%3C/svg%3E')" }} />
              <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200" style={{ background: "radial-gradient(160px 120px at var(--gx, 50%) var(--gy, 50%), rgba(255,255,255,0.35), transparent 60%)" }} />
              <Image src="/profile.jpg" alt="Vishal Singh" width={800} height={1200} className="relative h-full w-full object-cover object-top" />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="order-1 mt-4 flex items-center justify-center md:order-2">
        <div className="relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/60 px-3 py-1 text-xs text-zinc-800 backdrop-blur dark:border-white/10 dark:bg-zinc-900/60 dark:text-zinc-100">
          <span className="relative inline-flex h-2.5 w-2.5 items-center justify-center">
            <span className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 opacity-75" />
            <span className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping-slow" />
          </span>
          Available for work
        </div>
      </div>
    </section>
  );
}
