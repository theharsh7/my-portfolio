"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePointerTilt } from "@/hooks/usePointerTilt";

const pipelineLayers = [
  { label: "Layer 0", sub: "Raw ingest", accent: "from-blue-500/30 to-blue-600/5" },
  { label: "Layer 3", sub: "Transform", accent: "from-violet-500/25 to-violet-600/5" },
  { label: "Layer 6", sub: "App-ready", accent: "from-emerald-500/20 to-emerald-600/5" },
];

const orbitNodes = [
  { label: "Snowflake", angle: 0 },
  { label: "AWS S3", angle: 72 },
  { label: "Python", angle: 144 },
  { label: "SQL", angle: 216 },
  { label: "Dataiku", angle: 288 },
];

const highlights = [
  { value: "500+", label: "Field users" },
  { value: "7", label: "ETL layers" },
  { value: "4", label: "Oncology markets" },
];

export function HeroDataScene() {
  const reduced = useReducedMotion();
  const { ref, rotateX, rotateY, onPointerMove, onPointerLeave } = usePointerTilt(
    16,
    !!reduced
  );

  return (
    <div
      ref={ref}
      data-gsap="hero-scene"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="hero-scene relative w-full select-none"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/[0.07] via-transparent to-violet-500/[0.09]" />

      <motion.div
        className="hero-scene-stage"
        role="img"
        aria-label="3D data pipeline layers with orbiting cloud and warehouse tools"
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
        {/* 3D floor grid */}
        <div className="hero-scene-floor" />

        {/* Orbiting tech nodes */}
        <div className="hero-scene-orbit">
          {orbitNodes.map((node) => (
            <div
              key={node.label}
              className="hero-scene-orbit-item"
              style={{
                transform: `rotateY(${node.angle}deg) translateZ(118px) rotateY(-${node.angle}deg)`,
              }}
            >
              <span className="hero-scene-node">{node.label}</span>
            </div>
          ))}
        </div>

        {/* Stacked pipeline layers */}
        <div className="hero-scene-stack">
          {pipelineLayers.map((layer, i) => (
            <motion.div
              key={layer.label}
              className={`hero-scene-layer bg-gradient-to-br ${layer.accent}`}
              style={{ transform: `translateZ(${i * 28}px)` }}
              initial={false}
              animate={
                reduced
                  ? undefined
                  : {
                      y: [0, -4 - i * 2, 0],
                    }
              }
              transition={{
                duration: 4 + i * 0.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.35,
              }}
            >
              <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">
                {layer.label}
              </span>
              <span className="text-xs font-medium text-zinc-200">{layer.sub}</span>
            </motion.div>
          ))}
        </div>

        {/* Center core */}
        <div className="hero-scene-core">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-300/90">
            Data flow
          </span>
        </div>
      </motion.div>

      {/* Highlight metrics below scene */}
      <ul className="relative mt-4 grid grid-cols-3 gap-2 sm:gap-3">
        {highlights.map((item) => (
          <li
            key={item.label}
            className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-2 py-2.5 text-center backdrop-blur-sm sm:px-3 sm:py-3"
          >
            <p className="text-base font-semibold tracking-tight text-zinc-100 sm:text-lg">
              {item.value}
            </p>
            <p className="mt-0.5 text-[10px] text-zinc-500 sm:text-[11px]">{item.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
