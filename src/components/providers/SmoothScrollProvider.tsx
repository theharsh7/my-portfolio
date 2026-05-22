"use client";

import Lenis from "lenis";
import { useEffect, useState, type ReactNode } from "react";
import { LenisProvider } from "@/context/LenisContext";
import { registerGsapPlugins, gsap, ScrollTrigger } from "@/lib/gsap-config";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    registerGsapPlugins();

    if (reducedMotion) {
      document.documentElement.classList.remove("lenis", "lenis-smooth");
      return;
    }

    const instance = new Lenis({
      lerp: 0.08,
      duration: 1.15,
      smoothWheel: true,
      touchMultiplier: 1.2,
      autoRaf: false,
    });

    setLenis(instance);
    document.documentElement.classList.add("lenis", "lenis-smooth");

    instance.on("scroll", ScrollTrigger.update);

    const ticker = (time: number) => {
      instance.raf(time * 1000);
    };

    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(ticker);
      instance.destroy();
      setLenis(null);
      document.documentElement.classList.remove("lenis", "lenis-smooth");
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [reducedMotion]);

  return <LenisProvider lenis={lenis}>{children}</LenisProvider>;
}
