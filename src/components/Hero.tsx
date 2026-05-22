"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 grid-pattern" />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-center px-6 py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for data engineering roles
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl"
        >
          <span className="text-gradient">Data pipelines</span>
          <br />
          <span className="text-zinc-100">built for scale.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400"
        >
          Data engineer crafting reliable warehouse architectures, ETL systems,
          and backend dashboards — turning raw data into decisions teams trust.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-zinc-100 px-6 py-3 text-sm font-medium text-zinc-900 transition-transform hover:scale-[1.02]"
          >
            View projects
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-zinc-200 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10"
          >
            Contact me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 grid grid-cols-2 gap-6 border-t border-white/5 pt-10 sm:grid-cols-4"
        >
          {[
            { value: "5+", label: "Years experience" },
            { value: "50M+", label: "Rows processed daily" },
            { value: "12+", label: "Pipelines in production" },
            { value: "99.9%", label: "Pipeline uptime" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
