"use client";

import { SectionHeading } from "./SectionHeading";

const links = [
  {
    label: "Email",
    value: "theharshchaudhary7@gmail.com",
    href: "mailto:theharshchaudhary7@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/harshchaudhary0705",
    href: "https://linkedin.com/in/harshchaudhary0705",
  },
  {
    label: "Location",
    value: "Delhi, India",
    href: "#about",
  },
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
          title="Let's connect"
          description="Open to technology analytics, data engineering, and consulting opportunities."
        />
        <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
          <div data-gsap="reveal" className="lg:col-span-3">
            <div className="glow-card relative overflow-hidden rounded-2xl p-6 sm:p-8 md:p-12">
              <div
                data-gsap="contact-glow"
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-blue-500/25 to-violet-500/25 opacity-50 blur-3xl sm:h-64 sm:w-64"
              />
              <h3 className="relative text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl md:text-3xl">
                Interested in working together?
              </h3>
              <p className="relative mt-3 max-w-md text-sm text-zinc-400 sm:mt-4 sm:text-base">
                Reach out about roles in data engineering, analytics product
                ownership, or healthcare & life sciences consulting.
              </p>
              <a
                href="mailto:theharshchaudhary7@gmail.com"
                className="btn-gradient relative mt-6 sm:mt-8"
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
