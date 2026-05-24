"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePointerTilt } from "@/hooks/usePointerTilt";
import { HeroPipelineVisual } from "./HeroPipelineVisual";

export function HeroPipeline3D() {
  const reduced = useReducedMotion();
  const { ref, rotateX, rotateY, onPointerMove, onPointerLeave } = usePointerTilt(
    10,
    !!reduced
  );

  return (
    <div
      ref={ref}
      data-gsap="hero-visual"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="hero-pipeline-3d w-full"
    >
      <motion.div
        className="hero-pipeline-tilt"
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
        <div className="hero-pipeline-depth">
          <HeroPipelineVisual />
        </div>
      </motion.div>
    </div>
  );
}
