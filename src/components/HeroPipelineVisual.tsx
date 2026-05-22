"use client";

import { motion } from "framer-motion";

const nodes = [
  { id: "s3", label: "AWS S3", sub: "Raw zone" },
  { id: "py", label: "Python", sub: "ETL" },
  { id: "sf", label: "Snowflake", sub: "Warehouse" },
  { id: "dash", label: "Dashboard", sub: "API" },
];

const metrics = [
  { label: "Rows ingested", value: "52.4M", trend: "+12%" },
  { label: "Pipeline SLA", value: "99.97%", trend: "on track" },
  { label: "Query p95", value: "184ms", trend: "-8%" },
];

export function HeroPipelineVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-lg lg:max-w-none lg:justify-self-end"
    >
      <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-500/20 via-transparent to-violet-500/20 blur-2xl" />

      <div className="glow-card relative overflow-hidden rounded-2xl border-white/10 bg-white/[0.04] shadow-2xl shadow-blue-500/5 backdrop-blur-md">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
            pipeline.live
          </span>
          <span className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400/90">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            running
          </span>
        </div>

        <div className="p-5 sm:p-6">
          {/* Pipeline flow */}
          <div className="relative mb-6">
            <svg
              className="absolute left-0 right-0 top-1/2 h-8 -translate-y-1/2 text-zinc-700"
              viewBox="0 0 400 8"
              preserveAspectRatio="none"
              aria-hidden
            >
              <line
                x1="40"
                y1="4"
                x2="360"
                y2="4"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="4 6"
                className="opacity-40"
              />
              <line
                x1="40"
                y1="4"
                x2="360"
                y2="4"
                stroke="url(#flow-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                className="pipeline-flow-line"
              />
              <defs>
                <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <ul className="relative grid grid-cols-4 gap-2">
              {nodes.map((node, i) => (
                <motion.li
                  key={node.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[10px] font-medium text-zinc-300 shadow-inner sm:h-11 sm:w-11">
                    {node.label.split(" ")[0].slice(0, 2).toUpperCase()}
                  </div>
                  <p className="mt-2 text-[10px] font-medium text-zinc-300 sm:text-xs">
                    {node.label}
                  </p>
                  <p className="text-[9px] text-zinc-600">{node.sub}</p>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Metrics */}
          <div className="mb-5 grid grid-cols-3 gap-2">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 + i * 0.08 }}
                className="rounded-lg border border-white/5 bg-white/[0.03] px-2.5 py-2.5 sm:px-3"
              >
                <p className="text-[9px] text-zinc-500 sm:text-[10px]">{m.label}</p>
                <p className="mt-0.5 font-mono text-xs font-medium text-zinc-100 sm:text-sm">
                  {m.value}
                </p>
                <p className="mt-0.5 text-[9px] text-emerald-400/80">{m.trend}</p>
              </motion.div>
            ))}
          </div>

          {/* SQL snippet */}
          <div className="overflow-hidden rounded-lg border border-white/5 bg-black/40 font-mono text-[10px] leading-relaxed sm:text-[11px]">
            <div className="border-b border-white/5 px-3 py-1.5 text-zinc-600">
              metrics_daily.sql
            </div>
            <pre className="overflow-x-auto p-3 text-zinc-500">
              <code>
                <span className="text-violet-400/90">SELECT</span>
                {"\n  "}
                <span className="text-blue-400/90">date</span>,{" "}
                <span className="text-blue-400/90">SUM</span>(revenue){" "}
                <span className="text-violet-400/90">AS</span> total
                {"\n"}
                <span className="text-violet-400/90">FROM</span>{" "}
                <span className="text-emerald-400/80">analytics.marts</span>
                {"\n"}
                <span className="text-violet-400/90">WHERE</span>{" "}
                <span className="text-amber-400/80">status</span> ={" "}
                <span className="text-amber-300/90">&apos;active&apos;</span>
                <span className="inline-block w-1.5 animate-pulse bg-blue-400/80 ml-0.5 align-middle" />
              </code>
            </pre>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
