"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeroPipelineVisual } from "./HeroPipelineVisual";
import { HeroRotatingLine } from "./HeroRotatingLine";
import { useLenis } from "@/context/LenisContext";

const techStack = [
  "SQL",
  "Snowflake",
  "AWS S3",
  "Python",
  "Dataiku DSS",
  "MicroStrategy",
  "Tableau",
];

const stats = [
  { value: "2+", label: "Years at ZS" },
  { value: "500+", label: "Field users served" },
  { value: "7", label: "Layer ETL pipeline" },
  { value: "2024", label: "Pfizer Lead the Way Award" },
];

export function Hero() {
  const reduced = useReducedMotion();
  const { scrollTo } = useLenis();

  const handleAnchor = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    scrollTo(href, { offset: -72 });
  };

  return (
    <section
      data-gsap="hero"
      className="relative min-h-[100dvh] overflow-hidden pt-14 sm:pt-16"
    >
      <div className="pointer-events-none absolute inset-0 grid-pattern" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-main relative flex min-h-[calc(100dvh-3.5rem)] flex-col justify-center pb-12 pt-8 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-16">
          <div data-gsap="hero-content" className="flex flex-col">
            <p
              data-gsap="hero-label"
              className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 sm:mb-5 sm:text-xs"
            >
              Technology Analytics · Delhi · 25
            </p>

            <div
              data-gsap="hero-badge"
              className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-300 backdrop-blur-md sm:mb-8 sm:px-4 sm:text-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to new opportunities
            </div>

            <h1
              data-gsap="hero-title"
              className="text-[2rem] font-semibold leading-[1.08] tracking-tight min-[400px]:text-[2.35rem] sm:text-5xl lg:text-[3.25rem] xl:text-7xl"
            >
              <span className="block text-gradient">Harsh Chaudhary</span>
              <span className="mt-1 block text-zinc-100">
                <HeroRotatingLine />
              </span>
            </h1>

            <p
              data-gsap="hero-desc"
              className="mt-5 max-w-lg text-sm leading-relaxed text-zinc-400 sm:mt-7 sm:text-base lg:text-lg"
            >
              Technology analytics professional with consulting experience at ZS
              Associates — delivering data engineering and analytics for Pfizer
              US Oncology commercial operations across Snowflake, AWS, and
              enterprise BI.
            </p>

            <ul className="mt-5 flex flex-wrap gap-2 sm:mt-6">
              {techStack.map((tech) => (
                <li
                  key={tech}
                  data-gsap="hero-pill"
                  className="rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] text-zinc-400 sm:px-3 sm:text-[11px]"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href="#projects"
                onClick={(e) => handleAnchor(e, "#projects")}
                data-gsap="hero-cta"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-zinc-100 px-7 py-3.5 text-sm font-medium text-zinc-900 shadow-lg shadow-white/5 transition-transform hover:scale-[1.02] sm:w-auto"
              >
                View projects
                <span>→</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleAnchor(e, "#contact")}
                data-gsap="hero-cta"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-medium text-zinc-200 backdrop-blur-sm transition-colors hover:border-white/25 hover:bg-white/[0.08] sm:w-auto"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="w-full lg:pt-4">
            <HeroPipelineVisual />
          </div>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-4 sm:gap-4 lg:mt-20">
          {stats.map((stat) => (
            <li
              key={stat.label}
              data-gsap="reveal"
              className="glow-card list-none rounded-xl px-3 py-4 sm:px-5 sm:py-5"
            >
              <p className="text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl lg:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[11px] text-zinc-500 sm:text-sm">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>

        <a
          href="#about"
          onClick={(e) => handleAnchor(e, "#about")}
          className="mx-auto mt-10 flex w-fit flex-col items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-400 sm:mt-14"
          aria-label="Scroll to about section"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
            Scroll
          </span>
          {!reduced && (
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-8 w-5 items-start justify-center rounded-full border border-white/15 p-1.5"
            >
              <span className="h-1.5 w-1 rounded-full bg-zinc-500" />
            </motion.span>
          )}
        </a>
      </div>
    </section>
  );
}
