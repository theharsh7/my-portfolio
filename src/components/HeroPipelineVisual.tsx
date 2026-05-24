"use client";

const nodes = [
  { id: "s3", label: "AWS S3", sub: "Raw zone" },
  { id: "sql", label: "SQL", sub: "ETL" },
  { id: "py", label: "Python", sub: "Automation" },
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
    <div className="relative mx-auto w-full">
      <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-transparent blur-3xl sm:-inset-6" />

      <div className="glow-card relative overflow-hidden rounded-2xl border-white/10 bg-white/[0.05] shadow-2xl shadow-blue-500/10 backdrop-blur-md sm:rounded-3xl">
        <div className="flex items-center justify-between border-b border-white/5 px-3 py-2.5 sm:px-4 sm:py-3">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-zinc-600 sm:h-2.5 sm:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-zinc-600 sm:h-2.5 sm:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-zinc-600 sm:h-2.5 sm:w-2.5" />
          </div>
          <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 sm:text-[10px]">
            pipeline.live
          </span>
          <span className="flex items-center gap-1 font-mono text-[9px] text-emerald-400/90 sm:text-[10px]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            running
          </span>
        </div>

        <div className="p-5 sm:p-7 lg:p-8">
          <div className="relative mb-5 sm:mb-6">
            <svg
              className="absolute left-0 right-0 top-1/2 h-6 -translate-y-1/2 text-zinc-700 sm:h-8"
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
                <linearGradient
                  id="flow-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <ul className="relative grid grid-cols-5 gap-1 sm:gap-2">
              {nodes.map((node) => (
                <li
                  key={node.id}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[9px] font-medium text-zinc-300 sm:h-11 sm:w-11 sm:text-[10px]">
                    {node.label.split(" ")[0].slice(0, 2).toUpperCase()}
                  </div>
                  <p className="mt-1.5 text-[9px] font-medium text-zinc-300 sm:mt-2 sm:text-xs">
                    {node.label}
                  </p>
                  <p className="text-[8px] text-zinc-600 sm:text-[9px]">
                    {node.sub}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4 grid grid-cols-3 gap-1.5 sm:mb-5 sm:gap-2">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-lg border border-white/5 bg-white/[0.03] px-2 py-2 sm:px-3 sm:py-2.5"
              >
                <p className="text-[8px] text-zinc-500 sm:text-[10px]">
                  {m.label}
                </p>
                <p className="mt-0.5 font-mono text-[10px] font-medium text-zinc-100 sm:text-sm">
                  {m.value}
                </p>
                <p className="mt-0.5 text-[8px] text-emerald-400/80 sm:text-[9px]">
                  {m.trend}
                </p>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-lg border border-white/5 bg-black/40 font-mono text-[9px] leading-relaxed sm:text-[11px]">
            <div className="border-b border-white/5 px-2.5 py-1 text-zinc-600 sm:px-3 sm:py-1.5">
              metrics_daily.sql
            </div>
            <pre className="overflow-x-auto p-2.5 sm:p-3">
              <code className="text-zinc-500">
                <span className="text-violet-400/90">SELECT</span>
                {"\n  "}
                <span className="text-blue-400/90">date</span>,{" "}
                <span className="text-blue-400/90">SUM</span>(revenue){" "}
                <span className="text-violet-400/90">AS</span> total
                {"\n"}
                <span className="text-violet-400/90">FROM</span>{" "}
                <span className="text-emerald-400/80">analytics.marts</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
