"use client";

import { SectionHeading } from "./SectionHeading";
import {
  ScrollReveal,
  ScrollSection,
  ScrollStagger,
  ScrollItem,
} from "./motion";

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
    <ScrollSection id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="About"
          title="Engineering data systems end to end"
          description="From ingestion to insight — I design pipelines and platforms that stay fast, observable, and easy to evolve."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <ScrollReveal direction="right" delay={0.05}>
            <div className="glow-card rounded-2xl p-8 lg:p-10">
              <p className="text-base leading-relaxed text-zinc-300">
                I&apos;m a data engineer focused on building production-grade
                analytics infrastructure. I work across the modern data stack —
                warehousing in Snowflake, orchestration in Python, and cloud
                storage on AWS — with a strong emphasis on SQL modeling and
                backend systems that power internal dashboards.
              </p>
              <p className="mt-6 text-base leading-relaxed text-zinc-400">
                My approach blends Stripe-level reliability with clean,
                Apple-inspired interfaces for the teams who consume the data.
                I care about lineage, cost efficiency, and developer experience
                as much as query performance.
              </p>
            </div>
          </ScrollReveal>
          <ScrollStagger className="flex flex-col gap-4">
            {focusAreas.map((item) => (
              <ScrollItem key={item.title} direction="left">
                <div className="glow-card group rounded-xl p-6 transition-colors">
                  <h3 className="text-sm font-medium text-zinc-100 transition-colors group-hover:text-gradient-accent">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                    {item.desc}
                  </p>
                </div>
              </ScrollItem>
            ))}
          </ScrollStagger>
        </div>
      </div>
    </ScrollSection>
  );
}
