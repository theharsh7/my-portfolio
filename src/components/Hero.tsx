"use client";

import { motion } from "framer-motion";
import { HeroPipelineVisual } from "./HeroPipelineVisual";
import { HeroRotatingLine } from "./HeroRotatingLine";

const techStack = ["SQL", "Snowflake", "AWS S3", "Python", "Dashboard APIs"];

const stats = [
  { value: "5+", label: "Years experience" },
  { value: "50M+", label: "Rows / day" },
  { value: "12+", label: "Live pipelines" },
  { value: "99.9%", label: "Uptime" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 grid-pattern" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-12 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-16">
          {/* Copy */}
          <div className="flex flex-col">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease }}
              className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500"
            >
              Data Engineer
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease }}
              className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-zinc-300 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to new opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease }}
              className="text-[2.75rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[3.5rem] xl:text-7xl"
            >
              <span className="block text-gradient">Data pipelines</span>
              <span className="mt-1 block text-zinc-100">
                <HeroRotatingLine />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease }}
              className="mt-7 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg"
            >
              I design warehouse architectures, ETL on AWS & Python, and
              dashboard backends in Snowflake — so analytics teams ship metrics
              they can trust.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {techStack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-zinc-400 transition-colors hover:border-white/15 hover:text-zinc-300"
                >
                  {tech}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-zinc-100 px-7 py-3.5 text-sm font-medium text-zinc-900 shadow-lg shadow-white/5 transition-transform hover:scale-[1.02]"
              >
                <span className="relative z-10">View projects</span>
                <span className="relative z-10 transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-medium text-zinc-200 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/[0.08]"
              >
                Get in touch
              </a>
              <a
                href="#experience"
                className="hidden text-sm text-zinc-500 transition-colors hover:text-zinc-300 sm:inline-flex"
              >
                View experience ↓
              </a>
            </motion.div>
          </div>

          {/* Visual */}
          <div className="lg:pt-4">
            <HeroPipelineVisual />
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease }}
          className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:mt-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 + i * 0.06 }}
              className="glow-card rounded-xl px-4 py-5 sm:px-5"
            >
              <p className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-zinc-500 sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mx-auto mt-14 flex w-fit flex-col items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-400"
          aria-label="Scroll to about section"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-8 w-5 items-start justify-center rounded-full border border-white/15 p-1.5"
          >
            <span className="h-1.5 w-1 rounded-full bg-zinc-500" />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
