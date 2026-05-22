"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./motion";

const links = [
  { label: "Email", value: "hello@dataengineer.dev", href: "mailto:hello@dataengineer.dev" },
  { label: "LinkedIn", value: "/in/yourprofile", href: "https://linkedin.com" },
  { label: "GitHub", value: "/yourhandle", href: "https://github.com" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-28 pb-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Let's build something reliable"
          description="Open to full-time roles, contract pipeline work, and architecture consultations."
        />
        <div className="grid gap-8 lg:grid-cols-5">
          <FadeIn className="lg:col-span-3">
            <motion.div
              whileHover={{ scale: 1.005 }}
              className="glow-card relative overflow-hidden rounded-2xl p-8 md:p-12"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-blue-500/20 to-violet-500/20 blur-3xl animate-gradient" />
              <h3 className="relative text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
                Ready to discuss your next data platform?
              </h3>
              <p className="relative mt-4 max-w-md text-zinc-400">
                Send a note about your stack, timeline, and what success looks
                like — I typically respond within 48 hours.
              </p>
              <a
                href="mailto:hello@dataengineer.dev"
                className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition-all hover:shadow-violet-500/40 hover:brightness-110"
              >
                Send an email
                <span>→</span>
              </a>
            </motion.div>
          </FadeIn>
          <FadeIn delay={0.15} className="lg:col-span-2">
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="glow-card group flex flex-col rounded-xl px-5 py-4 transition-colors"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                      {link.label}
                    </span>
                    <span className="mt-1 text-sm text-zinc-300 transition-colors group-hover:text-zinc-100">
                      {link.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
