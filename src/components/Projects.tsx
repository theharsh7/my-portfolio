"use client";

import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    title: "PinPoint — Mobile Field Analytics Platform",
    period: "Jan 2024 – Jul 2025",
    tags: ["Snowflake", "AWS S3", "Python", "SQL", "Dataiku DSS"],
    description:
      "Built a 7-layer ETL pipeline (Layer 0→6) ingesting SPP, DDD, and IQVIA vendor data into territory-scoped views for 500+ field users — Dollar Sales, TRX, NPS, Calls, Reach, and TEB across rolling and quarterly time frames.",
    metric: "500+ users",
  },
  {
    title: "Business Review Dashboard — MicroStrategy",
    period: "Jan 2025 – Jul 2025",
    tags: [
      "Dataiku DSS",
      "MicroStrategy",
      "Snowflake",
      "AWS S3",
      "Python",
      "SQL",
    ],
    description:
      "Solely architected backend data infrastructure in Dataiku DSS, consolidating 5+ Tableau dashboards into one unified MicroStrategy platform with standardised time filters and geographic hierarchies across all four oncology markets.",
    metric: "5+ dashboards unified",
  },
  {
    title: "Incentive Compensation — US Oncology Sales Force",
    period: "Jul 2023 – Dec 2023",
    tags: ["SQL", "Excel", "ZAIDYN®"],
    description:
      "Administered IC competitions across lung, prostate, breast, and colorectal cancer markets on ZS's ZAIDYN® platform — validating compensation outputs and delivering HQ-level reporting for Pfizer's US Oncology sales hierarchy.",
    metric: "4 oncology markets",
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-shell relative">
      <div className="container-main">
        <SectionHeading
          label="Projects"
          title="Key workstreams at ZS"
          description="Analytics products delivered for Pfizer US Oncology — from pipeline design through production and client iteration."
        />
        <ul className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
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
              <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-zinc-600">
                {project.period}
              </p>
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
            </li>
          ))}
        </ul>
        <p
          data-gsap="reveal"
          className="mt-6 text-center text-sm text-zinc-500 sm:mt-8"
        >
          PinPoint recognised with the Pfizer &ldquo;Lead the Way&rdquo; Award
          (2024) · Near-real-time field insights replacing multi-day manual
          reporting cycles
        </p>
      </div>
    </section>
  );
}
