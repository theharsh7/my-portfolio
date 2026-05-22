"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLenis } from "@/context/LenisContext";

export function ScrollProgress() {
  const reduced = useReducedMotion();
  const { lenis } = useLenis();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (reduced) return;

    const update = () => {
      if (lenis) {
        setProgress(lenis.progress);
      } else {
        const max =
          document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? window.scrollY / max : 0);
      }
    };

    update();

    if (lenis) {
      lenis.on("scroll", update);
      return () => lenis.off("scroll", update);
    }

    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [lenis, reduced]);

  if (reduced) return null;

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-blue-500 via-violet-500 to-blue-400 will-change-transform"
      style={{ scaleX: progress }}
      aria-hidden
    />
  );
}
