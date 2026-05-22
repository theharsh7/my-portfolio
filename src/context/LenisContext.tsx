"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  type ReactNode,
} from "react";
import type Lenis from "lenis";

type LenisContextValue = {
  lenis: Lenis | null;
  scrollTo: (target: string | number | HTMLElement, options?: { offset?: number }) => void;
};

const LenisContext = createContext<LenisContextValue>({
  lenis: null,
  scrollTo: () => {},
});

export function LenisProvider({
  children,
  lenis,
}: {
  children: ReactNode;
  lenis: Lenis | null;
}) {
  const scrollTo = useCallback(
    (target: string | number | HTMLElement, options?: { offset?: number }) => {
      if (!lenis) {
        if (typeof target === "string" && target.startsWith("#")) {
          document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
        }
        return;
      }
      if (target === "#" || target === 0) {
        lenis.scrollTo(0, { duration: 1.2 });
        return;
      }
      lenis.scrollTo(target, {
        offset: options?.offset ?? -72,
        duration: 1.2,
      });
    },
    [lenis]
  );

  const value = useMemo(() => ({ lenis, scrollTo }), [lenis, scrollTo]);

  return (
    <LenisContext.Provider value={value}>{children}</LenisContext.Provider>
  );
}

export function useLenis() {
  return useContext(LenisContext);
}
