"use client";

import { SectionHeading } from "./SectionHeading";

const focusAreas = [
  {
    title: "ETL & cloud data platforms",
    desc: "7-layer pipeline architecture on Snowflake and AWS S3 — ingestion through app-ready output with lineage, QC automation, and reliable refresh cycles.",
  },
  {
    title: "Analytics product ownership",
    desc: "Requirements through production: mobile field analytics, unified leadership dashboards, and client-facing delivery in high-pressure consulting.",
  },
  {
    title: "US Oncology commercial ops",
    desc: "Pharma field force effectiveness, multi-source healthcare data (SPP, DDD, IQVIA), and oncology markets — lung, prostate, breast, and colorectal.",
  },
];

export function About() {
  return (
    <section id="about" className="section-shell relative">
      <div className="container-main">
        <SectionHeading
          label="About"
          title="Professional summary"
          description="More than two years at ZS Associates delivering data engineering and analytics for Pfizer's US Oncology commercial operations."
        />
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div data-gsap="reveal" className="glow-card rounded-2xl p-6 sm:p-8 lg:p-10">
            <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
              Technology analytics professional with consulting experience at ZS
              Associates, delivering data engineering and analytics solutions for
              Pfizer&apos;s US Oncology commercial operations — a multi-billion
              dollar portfolio spanning lung, prostate, breast, and colorectal
              cancer markets.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-zinc-400 sm:mt-6 sm:text-base">
              Combines deep technical capability in ETL pipeline architecture,
              cloud data platforms, and enterprise BI with business acumen to
              manage senior client relationships and translate complex
              requirements into high-adoption analytics products. Track record of
              owning products end-to-end — from Snowflake and AWS pipelines to
              client delivery and continuous improvement.
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
