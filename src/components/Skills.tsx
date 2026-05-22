"use client";

import { SectionHeading } from "./SectionHeading";
import { SkillIcon, type SkillId } from "./SkillIcon";

const skills: {
  id: SkillId;
  name: string;
  level: string;
  description: string;
}[] = [
  {
    id: "sql",
    name: "SQL",
    level: "Expert",
    description: "Complex analytics, window functions, and performance tuning.",
  },
  {
    id: "snowflake",
    name: "Snowflake",
    level: "Advanced",
    description: "Warehousing, clustering, streams, and cost optimization.",
  },
  {
    id: "aws-s3",
    name: "AWS S3",
    level: "Advanced",
    description: "Data lakes, partitioning, and secure object pipelines.",
  },
  {
    id: "python",
    name: "Python",
    level: "Advanced",
    description: "ETL frameworks, automation, and data quality tooling.",
  },
  {
    id: "dashboard",
    name: "Dashboard Backend Systems",
    level: "Advanced",
    description: "REST APIs, caching layers, and metrics aggregation.",
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-shell relative">
      <div className="container-main">
        <SectionHeading
          label="Skills"
          title="Tools I ship with daily"
          description="A focused stack for reliable data platforms and the systems behind them."
        />
        <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {skills.map((skill) => (
            <li
              key={skill.name}
              data-gsap="reveal"
              className="glow-card list-none rounded-2xl p-5 sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] sm:h-12 sm:w-12">
                  <SkillIcon id={skill.id} className="h-6 w-6 sm:h-7 sm:w-7" />
                </span>
                <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-zinc-400 sm:text-[10px]">
                  {skill.level}
                </span>
              </div>
              <h3 className="mt-4 text-base font-medium text-zinc-100 sm:mt-5 sm:text-lg">
                {skill.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                {skill.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
