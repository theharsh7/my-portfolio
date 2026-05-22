"use client";

import { SectionHeading } from "./SectionHeading";

const links = [
  {
    label: "Email",
    value: "hello@dataengineer.dev",
    href: "mailto:hello@dataengineer.dev",
  },
  {
    label: "LinkedIn",
    value: "/in/yourprofile",
    href: "https://linkedin.com",
  },
  { label: "GitHub", value: "/yourhandle", href: "https://github.com" },
];

export function Contact() {
  return (
    <section
      id="contact"
      data-gsap="contact"
      className="section-shell relative pb-12 sm:pb-16"
    >
      <div className="container-main">
        <SectionHeading
          label="Contact"
          title="Let's build something reliable"
          description="Open to full-time roles, contract pipeline work, and architecture consultations."
        />
        <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
          <div data-gsap="reveal" className="lg:col-span-3">
            <div className="glow-card relative overflow-hidden rounded-2xl p-6 sm:p-8 md:p-12">
              <div
                data-gsap="contact-glow"
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-blue-500/25 to-violet-500/25 opacity-50 blur-3xl sm:h-64 sm:w-64"
              />
              <h3 className="relative text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl md:text-3xl">
                Ready to discuss your next data platform?
              </h3>
              <p className="relative mt-3 max-w-md text-sm text-zinc-400 sm:mt-4 sm:text-base">
                Send a note about your stack, timeline, and what success looks
                like — I typically respond within 48 hours.
              </p>
              <a
                href="mailto:hello@dataengineer.dev"
                className="relative mt-6 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition-[filter,box-shadow] hover:shadow-violet-500/40 hover:brightness-110 sm:mt-8 sm:w-auto"
              >
                Send an email
                <span>→</span>
              </a>
            </div>
          </div>
          <ul className="flex flex-col gap-3 sm:gap-4 lg:col-span-2">
            {links.map((link) => (
              <li key={link.label} data-gsap="reveal" className="list-none">
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="glow-card group flex min-h-[56px] flex-col justify-center rounded-xl px-5 py-4 transition-colors"
                >
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                    {link.label}
                  </span>
                  <span className="mt-1 break-all text-sm text-zinc-300 transition-colors group-hover:text-zinc-100">
                    {link.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
