"use client";

import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    title: "Real-time metrics lakehouse",
    tags: ["Snowflake", "S3", "Python"],
    description:
      "Streaming-adjacent batch pipeline landing events in S3, transforming via Python, and syncing to Snowflake marts for sub-15min freshness.",
    metric: "15 min SLA",
  },
  {
    title: "Executive KPI dashboard API",
    tags: ["SQL", "Dashboard Backend"],
    description:
      "Aggregated metrics layer with precomputed rollups and Redis caching — powering leadership dashboards with consistent definitions.",
    metric: "<200ms p95",
  },
  {
    title: "Data quality observability",
    tags: ["Python", "SQL"],
    description:
      "Automated contract tests, anomaly detection, and Slack alerts across 40+ critical tables with lineage-aware incident routing.",
    metric: "40+ tables",
  },
  {
    title: "Cost-aware warehouse optimizer",
    tags: ["Snowflake", "SQL"],
    description:
      "Query tagging, warehouse auto-suspend policies, and monthly spend dashboards that reduced cloud warehouse spend significantly.",
    metric: "40% savings",
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-shell relative">
      <div className="container-main">
        <SectionHeading
          label="Projects"
          title="Selected work"
          description="Production systems spanning ingestion, modeling, and the backends that surface insights."
        />
        <ul className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <li
              key={project.title}
              data-gsap="project-card"
              className="glow-card group flex list-none flex-col rounded-2xl p-5 sm:p-6 lg:p-8"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <h3 className="text-lg font-medium tracking-tight text-zinc-100 transition-colors group-hover:text-gradient-accent sm:text-xl">
                  {project.title}
                </h3>
                <span className="w-fit shrink-0 rounded-lg bg-gradient-to-r from-blue-600/20 to-violet-600/20 px-3 py-1 font-mono text-xs text-blue-300">
                  {project.metric}
                </span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-500 sm:mt-4">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2 sm:mt-6">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400 transition-colors group-hover:border-white/20 group-hover:text-zinc-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="mt-4 inline-flex min-h-[44px] w-fit items-center gap-1 text-sm text-zinc-400 transition-all group-hover:gap-2 group-hover:text-zinc-200 sm:mt-6"
              >
                Case study
                <span>→</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
