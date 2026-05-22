"use client";

import { motion } from "framer-motion";
import { ScrollStagger, fadeDown, fadeUp } from "./motion";

export function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <ScrollStagger className="mb-14 max-w-2xl">
      <motion.p
        variants={fadeDown}
        className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-blue-400/90"
      >
        {label}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className="mt-4 text-base leading-relaxed text-zinc-400"
        >
          {description}
        </motion.p>
      )}
    </ScrollStagger>
  );
}
