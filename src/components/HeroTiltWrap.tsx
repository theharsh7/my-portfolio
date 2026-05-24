"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePointerTilt } from "@/hooks/usePointerTilt";

export function HeroTiltWrap({
  children,
  className = "",
  strength = 10,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const reduced = useReducedMotion();
  const { ref, rotateX, rotateY, onPointerMove, onPointerLeave } = usePointerTilt(
    strength,
    !!reduced
  );

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={`hero-tilt-wrap ${className}`}
    >
      <motion.div
        className="hero-tilt-inner"
        style={
          reduced
            ? undefined
            : {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }
        }
      >
        {children}
      </motion.div>
    </div>
  );
}
