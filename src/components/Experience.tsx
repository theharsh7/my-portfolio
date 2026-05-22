"use client";

import { SectionHeading } from "./SectionHeading";

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
    <section id="experience" className="section-shell relative">
      <div className="container-main">
        <SectionHeading
          label="Experience"
          title="Where I've delivered impact"
          description="Roles focused on scalable data infrastructure and cross-functional partnership."
        />
        <div className="relative md:pl-8" data-gsap="experience-list">
          <div
            data-gsap="timeline-line"
            className="absolute left-0 top-2 hidden h-[calc(100%-0.5rem)] w-px origin-top bg-gradient-to-b from-blue-500/50 via-violet-500/30 to-transparent md:block"
            aria-hidden
          />
          <ul className="space-y-4 sm:space-y-6">
            {experience.map((job) => (
              <li key={job.company} data-gsap="reveal" className="list-none">
                <article className="glow-card relative rounded-2xl p-5 sm:p-6 md:p-8">
                  <div
                    className="absolute -left-[calc(2rem+5px)] top-7 hidden h-3 w-3 rounded-full border-2 border-blue-400 bg-[#050508] md:block"
                    aria-hidden
                  />
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div className="min-w-0">
                      <h3 className="text-base font-medium text-zinc-100 sm:text-lg">
                        {job.role}
                      </h3>
                      <p className="text-sm text-blue-400/90">{job.company}</p>
                    </div>
                    <time className="shrink-0 font-mono text-xs text-zinc-500">
                      {job.period}
                    </time>
                  </div>
                  <ul className="mt-4 space-y-2 sm:mt-5">
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
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
