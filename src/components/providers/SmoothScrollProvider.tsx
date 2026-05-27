"use client";

import Lenis from "lenis";
import { useEffect, useSyncExternalStore, type ReactNode } from "react";
import { LenisProvider } from "@/context/LenisContext";
import { registerGsapPlugins, gsap, ScrollTrigger } from "@/lib/gsap-config";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

let currentLenis: Lenis | null = null;
const lenisListeners = new Set<() => void>();

function subscribeLenis(callback: () => void) {
  lenisListeners.add(callback);
  return () => lenisListeners.delete(callback);
}

function getLenisSnapshot() {
  return currentLenis;
}

function getServerLenisSnapshot() {
  return null;
}

function publishLenis(instance: Lenis | null) {
  currentLenis = instance;
  lenisListeners.forEach((listener) => listener());
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenis = useSyncExternalStore(
    subscribeLenis,
    getLenisSnapshot,
    getServerLenisSnapshot
  );
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    registerGsapPlugins();

    if (reducedMotion) {
      publishLenis(null);
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

    publishLenis(instance);
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
      publishLenis(null);
      document.documentElement.classList.remove("lenis", "lenis-smooth");
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [reducedMotion]);

  return <LenisProvider lenis={lenis}>{children}</LenisProvider>;
}
