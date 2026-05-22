"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { ScrollSection, ScrollStagger, fadeLeft } from "./motion";

const experience = [
  {
    role: "Senior Data Engineer",
    company: "FinTech Analytics Co.",
    period: "2023 — Present",
    highlights: [
      "Led migration of legacy Redshift workloads to Snowflake, cutting query costs 40%.",
      "Built Python-based ingestion from S3 with schema validation and alerting.",
      "Designed dashboard backend serving 200+ internal users with sub-second loads.",
    ],
  },
  {
    role: "Data Engineer",
    company: "Retail Insights Platform",
    period: "2021 — 2023",
    highlights: [
      "Owned SQL transformation layer for 30+ dimensional models.",
      "Implemented incremental pipelines processing 50M+ rows daily.",
      "Partnered with analytics on self-serve metrics definitions and governance.",
    ],
  },
  {
    role: "Analytics Engineer",
    company: "Growth SaaS Startup",
    period: "2019 — 2021",
    highlights: [
      "Established dbt-style patterns and documentation for core business entities.",
      "Automated reporting pipelines reducing manual spreadsheet work by 80%.",
    ],
  },
];

export function Experience() {
  return (
    <ScrollSection id="experience" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Experience"
          title="Where I've delivered impact"
          description="Roles focused on scalable data infrastructure and cross-functional partnership."
        />
        <div className="relative space-y-0">
          <ScrollRevealLine />
          <ScrollStagger>
            {experience.map((job) => (
              <motion.article
                key={job.company}
                variants={fadeLeft}
                className="glow-card relative mb-6 rounded-2xl p-6 md:ml-8 md:p-8"
              >
                <div className="absolute -left-8 top-8 hidden h-3 w-3 rounded-full border-2 border-blue-400 bg-[#050508] md:block" />
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-zinc-100">
                      {job.role}
                    </h3>
                    <p className="text-sm text-blue-400/90">{job.company}</p>
                  </div>
                  <time className="font-mono text-xs text-zinc-500">
                    {job.period}
                  </time>
                </div>
                <ul className="mt-5 space-y-2">
                  {job.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-zinc-400"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </ScrollStagger>
        </div>
      </div>
    </ScrollSection>
  );
}

function ScrollRevealLine() {
  return (
    <motion.div
      initial={{ scaleY: 0, opacity: 0 }}
      whileInView={{ scaleY: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="absolute left-[11px] top-2 hidden h-[calc(100%-1rem)] w-px origin-top bg-gradient-to-b from-blue-500/50 via-violet-500/30 to-transparent md:block"
    />
  );
}
