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
      className="relative overflow-hidden pt-14 sm:pt-16"
    >
      <div className="pointer-events-none absolute inset-0 grid-pattern" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-main relative pb-14 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-20">
        <div
          data-gsap="hero-content"
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <h1
            data-gsap="hero-title"
            className="w-full text-[2.25rem] font-semibold leading-[1.08] tracking-tight min-[400px]:text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            <span className="block text-gradient">Harsh Chaudhary</span>
            <span className="mt-3 block text-[1.35rem] font-medium leading-snug text-zinc-100 min-[400px]:text-2xl sm:mt-4 sm:text-3xl lg:text-4xl">
              <span className="block text-zinc-100">Technology &amp; Consulting</span>
              <span className="mx-auto mt-1.5 block max-w-xl sm:mt-2">
                <HeroRotatingLine />
              </span>
            </span>
          </h1>

          <p
            data-gsap="hero-desc"
            className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-500 sm:mt-5 sm:text-base"
          >
            ZS Associates · Pfizer US Oncology — data engineering and enterprise
            analytics across Snowflake, AWS, and BI platforms.
          </p>

          <div
            data-gsap="hero-visual"
            className="mt-8 w-full max-w-lg sm:mt-10 lg:max-w-xl"
          >
            <HeroPipelineVisual />
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-2 sm:mt-10">
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

          <div className="action-row action-row-center mt-8 sm:mt-10">
            <a
              href="#projects"
              onClick={(e) => handleAnchor(e, "#projects")}
              data-gsap="hero-cta"
              className="btn-primary"
            >
              View projects
              <span aria-hidden>→</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleAnchor(e, "#contact")}
              data-gsap="hero-cta"
              className="btn-secondary"
            >
              Get in touch
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <ul className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-4 sm:gap-4 lg:mt-20">
          {stats.map((stat) => (
            <li
              key={stat.label}
              data-gsap="reveal"
              className="glow-card list-none rounded-xl px-3 py-4 text-center sm:px-5 sm:py-5"
            >
              <p className="text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl lg:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[11px] leading-snug text-zinc-500 sm:text-sm">
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
