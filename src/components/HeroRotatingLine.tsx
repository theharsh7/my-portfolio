"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const phrases = [
  "owned end-to-end.",
  "trusted by 500+ field users.",
  "built on Snowflake & AWS.",
];

export function HeroRotatingLine() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block min-h-[1.15em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={phrases[index]}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block text-gradient-accent"
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
