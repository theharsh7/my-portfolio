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
    level: "Advanced",
    description: "Pipeline transforms, compensation validation, and complex analytics across oncology commercial data.",
  },
  {
    id: "snowflake",
    name: "Snowflake",
    level: "Advanced",
    description: "Cloud data warehouse for multi-layer ETL — ingestion, transformation, and app-ready output with full lineage.",
  },
  {
    id: "aws-s3",
    name: "AWS S3",
    level: "Intermediate",
    description: "Raw vendor file landing zones and object storage supporting end-to-end oncology data pipelines.",
  },
  {
    id: "python",
    name: "Python",
    level: "Intermediate",
    description: "ETL automation, QC checks, email alerting, and workflow orchestration across production refresh cycles.",
  },
  {
    id: "dataiku",
    name: "Dataiku DSS",
    level: "Advanced",
    description: "Unified backend for MicroStrategy — automated ETL flows and extensible brand-market data models.",
  },
  {
    id: "microstrategy",
    name: "MicroStrategy",
    level: "Intermediate",
    description: "Executive business review dashboard consolidating sales, market share, and competitor intelligence.",
  },
  {
    id: "tableau",
    name: "Tableau",
    level: "Advanced",
    description: "Supporting dashboards and field analytics alongside PinPoint mobile delivery.",
  },
  {
    id: "etl",
    name: "ETL / ELT Pipeline Design",
    level: "Advanced",
    description: "7-layer pipeline architecture with automated QC, scheduling, and error handling at every stage.",
  },
  {
    id: "excel",
    name: "Excel & PowerPoint",
    level: "Advanced",
    description: "Ad hoc reporting, compensation modelling, and client-facing HQ decks for stakeholder sign-off.",
  },
];

const skillGroups = [
  {
    title: "Platform & automation",
    items:
      "Automated workflows · QC automation · Email alerting · Scheduling · Error handling",
  },
  {
    title: "AI & GenAI",
    items:
      "LLM concepts · Copilot tools · Agentic AI awareness · AI use case identification · Data readiness for AI",
  },
  {
    title: "Soft skills & domain",
    items:
      "Client relationship management · Senior stakeholder communication · Cross-functional collaboration · Healthcare & life sciences · US Oncology · SPP, DDD, IQVIA",
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-shell relative">
      <div className="container-main">
        <SectionHeading
          label="Skills"
          title="Technical toolkit"
          description="Data engineering, cloud platforms, enterprise BI, and the consulting skills behind high-adoption analytics products."
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
        <ul className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4">
          {skillGroups.map((group) => (
            <li
              key={group.title}
              data-gsap="reveal"
              className="glow-card list-none rounded-xl p-5 sm:p-6"
            >
              <h3 className="text-sm font-medium text-zinc-100">{group.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                {group.items}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
