"use client";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-24">
      <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl font-semibold">Contact</motion.h2>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <form onSubmit={(e) => { e.preventDefault(); alert("Thanks! I'll get back to you soon."); }} className="rounded-2xl border border-white/15 bg-white/60 p-6 backdrop-blur dark:border-white/10 dark:bg-zinc-900/60">
          <div className="grid gap-4">
            <input className="rounded-lg border border-white/20 bg-white/80 px-4 py-3 outline-none placeholder:text-zinc-500 dark:border-white/10 dark:bg-zinc-900/70" placeholder="Name" required />
            <input type="email" className="rounded-lg border border-white/20 bg-white/80 px-4 py-3 outline-none placeholder:text-zinc-500 dark:border-white/10 dark:bg-zinc-900/70" placeholder="Email" required />
            <textarea rows={5} className="rounded-lg border border-white/20 bg-white/80 px-4 py-3 outline-none placeholder:text-zinc-500 dark:border-white/10 dark:bg-zinc-900/70" placeholder="Message" required />
            <button className="mt-2 rounded-full bg-indigo-600 px-5 py-3 text-white transition hover:bg-indigo-500">Send</button>
          </div>
        </form>
        <div className="rounded-2xl border border-white/15 bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-transparent p-6 backdrop-blur dark:border-white/10">
          <p className="text-zinc-700 dark:text-zinc-300">Connect with me:</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="https://github.com/Vishal7vz" target="_blank" className="rounded-full border border-white/20 bg-white/60 px-4 py-2 text-sm backdrop-blur hover:bg-white/80 dark:border-white/10 dark:bg-zinc-900/60 dark:text-white dark:hover:bg-zinc-900/80">GitHub</a>
            <a href="https://x.com/vishalsingh7z?s=11" target="_blank" className="rounded-full border border-white/20 bg-white/60 px-4 py-2 text-sm backdrop-blur hover:bg-white/80 dark:border-white/10 dark:bg-zinc-900/60 dark:text-white dark:hover:bg-zinc-900/80">X (Twitter)</a>
            <a href="mailto:vishalsingh7vz@gmail.com" className="rounded-full border border-white/20 bg-white/60 px-4 py-2 text-sm backdrop-blur hover:bg-white/80 dark:border-white/10 dark:bg-zinc-900/60 dark:text-white dark:hover:bg-zinc-900/80">Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}
