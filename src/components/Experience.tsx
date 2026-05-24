"use client";

import { SectionHeading } from "./SectionHeading";

const experience = [
  {
    role: "Senior Associate — Business Excellence & Technology Analytics",
    company: "ZS Associates · US Oncology (Pfizer)",
    location: "Gurugram, India",
    period: "Aug 2023 – Jul 2025",
    highlights: [
      "Embedded on ZS's Pfizer US Oncology engagement across PinPoint mobile analytics, the Business Review Dashboard, and incentive compensation programmes.",
      "Owned data pipeline engineering, analytics product delivery, and end-to-end client engagement in a high-stakes consulting environment.",
      "Operated independently with direct exposure to pharmaceutical commercial operations, field force effectiveness, and multi-source healthcare data (SPP, DDD, IQVIA).",
      "Managed requirements gathering with Pfizer stakeholders through solution design, build, QC, production deployment, and ongoing iteration.",
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
          description="Consulting at ZS Associates on Pfizer US Oncology — data engineering, product ownership, and client delivery."
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
                      <p className="mt-1 text-xs text-zinc-500">{job.location}</p>
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
