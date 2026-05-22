"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { stagger, fadeUp } from "./motion";

const skills = [
  {
    name: "SQL",
    level: "Expert",
    description: "Complex analytics, window functions, and performance tuning.",
    icon: "⌘",
  },
  {
    name: "Snowflake",
    level: "Advanced",
    description: "Warehousing, clustering, streams, and cost optimization.",
    icon: "❄",
  },
  {
    name: "AWS S3",
    level: "Advanced",
    description: "Data lakes, partitioning, and secure object pipelines.",
    icon: "☁",
  },
  {
    name: "Python",
    level: "Advanced",
    description: "ETL frameworks, automation, and data quality tooling.",
    icon: "🐍",
  },
  {
    name: "Dashboard Backend Systems",
    level: "Advanced",
    description: "REST APIs, caching layers, and metrics aggregation.",
    icon: "◈",
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Skills"
          title="Tools I ship with daily"
          description="A focused stack for reliable data platforms and the systems behind them."
        />
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((skill, i) => (
            <motion.li
              key={skill.name}
              variants={fadeUp}
              className={`glow-card rounded-2xl p-6 ${i === skills.length - 1 && skills.length % 3 !== 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="flex items-start justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-lg">
                  {skill.icon}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                  {skill.level}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-medium text-zinc-100">
                {skill.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                {skill.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
