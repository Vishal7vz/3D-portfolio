"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "YourPattern",
    desc: "A gallery of modern UI patterns and layouts.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    site: "https://your-pattern.vercel.app/",
    repo: "https://github.com/Vishal7vz",
    img: "/projects/yourpattern.png",
  },
  {
    title: "SecureShield – Multi‑Layer Security Intelligence",
    desc: "Security analytics platform with real‑time insights and RBAC.",
    tech: ["Next.js", "Express", "JWT"],
    site: "https://hack-1-pute.onrender.com/",
    repo: "https://github.com/Vishal7vz",
    img: "/projects/secureshield.png",
  },
  {
    title: "MindfulMe",
    desc: "Mindfulness and wellness app with clean UI.",
    tech: ["React", "Tailwind"],
    site: "https://effulgent-kashata-d11f9d.netlify.app/",
    repo: "https://github.com/Vishal7vz",
    img: "/projects/mindfulme.png",
  },
];

export function Projects() {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!container.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el, idx) => {
        gsap.to(el, {
          yPercent: -10 - idx * 5,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, container);
    return () => ctx.revert();
  }, []);

  function onMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const el = e.currentTarget as HTMLDivElement;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width;
    const dy = (e.clientY - cy) / rect.height;
    const tx = dx * 12;
    const ty = dy * 12;
    const rot = dx * 2;
    el.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotate(${rot}deg) scale(1.01)`;
  }
  function onLeave(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const el = e.currentTarget as HTMLDivElement;
    el.style.transform = "translate3d(0,0,0) rotate(0deg) scale(1)";
  }

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24">
      <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl font-semibold">Projects</motion.h2>
      <div ref={container} className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: -12, rotate: 6 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, type: "spring", stiffness: 240, damping: 18 }}
            style={{ transformOrigin: "top" }}
            className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/60 p-6 shadow-sm backdrop-blur transition-transform will-change-transform dark:border-white/10 dark:bg-zinc-900/60"
            onMouseMove={onMove}
            onMouseLeave={onLeave}
          >
            <div aria-hidden data-parallax className="pointer-events-none absolute -inset-8 -z-10 bg-gradient-to-tr from-violet-500/15 via-indigo-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            {p.img ? (
              <div className="mb-4 overflow-hidden rounded-xl border border-white/10">
                <Image src={p.img} alt={`${p.title} preview`} width={800} height={500} className="h-auto w-full object-cover" />
              </div>
            ) : null}
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs opacity-80">
              {p.tech.map((t) => (
                <span key={t} className="rounded-full border border-white/15 bg-white/50 px-2 py-1 backdrop-blur dark:border-white/10 dark:bg-zinc-900/50">{t}</span>
              ))}
            </div>
            <div className="mt-5 flex gap-3 text-sm">
              <a href={p.site} target="_blank" className="rounded-full bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-500">Live</a>
              <a href={p.repo} target="_blank" className="rounded-full border border-white/20 bg-white/60 px-4 py-2 text-zinc-900 backdrop-blur transition hover:bg-white/80 dark:border-white/10 dark:bg-zinc-900/60 dark:text-white dark:hover:bg-zinc-900/80">GitHub</a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
