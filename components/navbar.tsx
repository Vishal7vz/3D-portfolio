"use client";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
<<<<<<< HEAD
import { motion } from "framer-motion";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-white/10 dark:supports-[backdrop-filter]:bg-zinc-900/50">
      <div className="mx-auto flex h-28 max-w-6xl items-center justify-between px-4">
        <div className="relative">
          <Link href="#hero" className="relative z-10 font-semibold tracking-tight">Vishal Singh</Link>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[calc(100%+8px)] -translate-x-1/2 origin-top opacity-85"
            initial={{ rotate: -8, y: 0 }}
            animate={{ rotate: [-8, 8, -8], y: [0, 2, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="mx-auto h-6 w-px bg-white/60 dark:bg-white/50" />
            <Image src="/spidey.svg" alt="spidey" width={40} height={60} className="drop-shadow" />
          </motion.div>
        </div>
=======

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/50 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="#hero" className="font-semibold tracking-tight">Vishal Singh</Link>
>>>>>>> d8336f66 (feat: portfolio - Next.js + Tailwind + animations + 3D-ready)
        <nav className="hidden gap-6 md:flex">
          <a href="#about" className="text-sm opacity-80 hover:opacity-100">About</a>
          <a href="#skills" className="text-sm opacity-80 hover:opacity-100">Skills</a>
          <a href="#projects" className="text-sm opacity-80 hover:opacity-100">Projects</a>
          <a href="#contact" className="text-sm opacity-80 hover:opacity-100">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
