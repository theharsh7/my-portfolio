"use client";

import { SectionHeading } from "./SectionHeading";

const focusAreas = [
  {
    title: "Warehouse & modeling",
    desc: "Dimensional models, incremental loads, and governed marts in Snowflake.",
  },
  {
    title: "Pipeline engineering",
    desc: "Python ETL, S3 landing zones, and fault-tolerant batch workflows.",
  },
  {
    title: "Dashboard backends",
    desc: "APIs and aggregation layers that feed fast, trustworthy BI surfaces.",
  },
];

export function About() {
  return (
    <section id="about" className="section-shell relative">
      <div className="container-main">
        <SectionHeading
          label="About"
          title="Engineering data systems end to end"
          description="From ingestion to insight — I design pipelines and platforms that stay fast, observable, and easy to evolve."
        />
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div data-gsap="reveal" className="glow-card rounded-2xl p-6 sm:p-8 lg:p-10">
            <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
              I&apos;m a data engineer focused on building production-grade
              analytics infrastructure. I work across the modern data stack —
              warehousing in Snowflake, orchestration in Python, and cloud
              storage on AWS — with a strong emphasis on SQL modeling and
              backend systems that power internal dashboards.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-zinc-400 sm:mt-6 sm:text-base">
              My approach blends Stripe-level reliability with clean,
              Apple-inspired interfaces for the teams who consume the data.
              I care about lineage, cost efficiency, and developer experience
              as much as query performance.
            </p>
          </div>
          <ul className="flex flex-col gap-3 sm:gap-4">
            {focusAreas.map((item) => (
              <li
                key={item.title}
                data-gsap="reveal"
                className="glow-card group list-none rounded-xl p-5 sm:p-6"
              >
                <h3 className="text-sm font-medium text-zinc-100 transition-colors group-hover:text-gradient-accent">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
