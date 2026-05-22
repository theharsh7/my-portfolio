"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import type { ReactNode } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

export const defaultViewport = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -10% 0px",
} as const;

const instant: Variants = {
  hidden: { opacity: 1, y: 0, x: 0, scale: 1, filter: "blur(0px)" },
  visible: { opacity: 1, y: 0, x: 0, scale: 1, filter: "blur(0px)" },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE },
  },
};

export const blurUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: EASE },
  },
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

type RevealDirection = "up" | "down" | "left" | "right" | "scale" | "blur";

const directionVariants: Record<RevealDirection, Variants> = {
  up: fadeUp,
  down: fadeDown,
  left: fadeLeft,
  right: fadeRight,
  scale: scaleIn,
  blur: blurUp,
};

function useMotionVariants(variants: Variants): Variants {
  const reduced = useReducedMotion();
  return reduced ? instant : variants;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  ...props
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
} & Omit<
  HTMLMotionProps<"div">,
  "children" | "initial" | "whileInView" | "viewport" | "variants"
>) {
  const reduced = useReducedMotion();
  const variants = useMotionVariants(directionVariants[direction]);

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={variants}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScrollStagger({
  children,
  className,
  fast = false,
  ...props
}: {
  children: ReactNode;
  className?: string;
  fast?: boolean;
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "whileInView" | "viewport" | "variants">) {
  const reduced = useReducedMotion();
  const containerVariants = reduced ? instant : fast ? staggerFast : stagger;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={containerVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScrollSection({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={reduced ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, ease: EASE }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

/** @deprecated Use ScrollReveal */
export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <ScrollReveal className={className} delay={delay} direction="up">
      {children}
    </ScrollReveal>
  );
}

/** @deprecated Use ScrollReveal */
export function MotionDiv({
  children,
  className,
  variants = fadeUp,
}: {
  children: ReactNode;
  className?: string;
  variants?: Variants;
}) {
  const resolved = useMotionVariants(variants);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={resolved}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollItem({
  children,
  className,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
}) {
  const variants = useMotionVariants(directionVariants[direction]);

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}
