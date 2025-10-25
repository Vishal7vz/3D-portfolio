"use client";
import { motion } from "framer-motion";

const groups = [
  {
    title: "Frontend ⚡",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "Zustand",
    ],
  },
  {
    title: "Backend 🔧",
    items: ["Node.js", "Express", "MongoDB", "Prisma", "REST", "JWT/Auth"],
  },
  {
    title: "DevOps & Tools 🧰",
    items: ["Git", "GitHub", "Vercel", "Docker (basics)", "Postman", "Linux"],
  },
  {
    title: "UI/UX 🎨",
    items: ["Wireframing", "Design Systems", "Accessibility", "Motion"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-70 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]">
        <div className="absolute inset-0 bg-[url('/hero-bg.svg')] bg-contain bg-center bg-no-repeat animate-float-slow" />
      </div>
      <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl font-semibold">Skills</motion.h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="rounded-2xl border border-white/15 bg-white/60 p-5 backdrop-blur dark:border-white/10 dark:bg-zinc-900/60"
          >
            <div className="text-sm font-medium opacity-80">{g.title}</div>
            <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              {g.items.map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
