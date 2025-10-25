"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl font-semibold">About</motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 max-w-3xl text-zinc-700 dark:text-zinc-300"
          >
            Hi, I'm Vishal Singh 👋 — an 18‑year‑old self‑taught full‑stack developer. I build modern, fast, and accessible products with Next.js, React, TypeScript, Node.js, Express, and MongoDB. I love crafting immersive interfaces with Framer Motion, GSAP, and Three.js. 2× Hackathon Winner 🏆🏆.
          </motion.p>
        </div>
        <div className="relative hidden md:block">
          <div className="animate-float-tilt overflow-hidden rounded-3xl border border-transparent p-0">
            <Image
              src="/skill-bg.svg"
              alt="Floating skill icons"
              width={700}
              height={700}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
