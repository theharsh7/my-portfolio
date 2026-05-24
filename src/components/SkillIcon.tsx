import {
  BarChart3,
  Cloud,
  FileSpreadsheet,
  GitBranch,
  LayoutDashboard,
  Workflow,
} from "lucide-react";
import { SiPostgresql, SiPython, SiSnowflake } from "react-icons/si";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";
import type { SVGProps } from "react";

export type SkillId =
  | "sql"
  | "snowflake"
  | "aws-s3"
  | "python"
  | "dataiku"
  | "microstrategy"
  | "tableau"
  | "etl"
  | "excel";

type SkillIconComponent =
  | IconType
  | LucideIcon
  | ((props: SVGProps<SVGSVGElement>) => React.ReactNode);

const icons: Record<SkillId, SkillIconComponent> = {
  sql: SiPostgresql,
  snowflake: SiSnowflake,
  "aws-s3": Cloud,
  python: SiPython,
  dataiku: Workflow,
  microstrategy: LayoutDashboard,
  tableau: BarChart3,
  etl: GitBranch,
  excel: FileSpreadsheet,
};

const brandColors: Record<SkillId, string> = {
  sql: "text-sky-400",
  snowflake: "text-cyan-300",
  "aws-s3": "text-amber-400",
  python: "text-yellow-400",
  dataiku: "text-orange-400",
  microstrategy: "text-blue-400",
  tableau: "text-emerald-400",
  etl: "text-violet-400",
  excel: "text-green-400",
};

const lucideIds: SkillId[] = [
  "aws-s3",
  "dataiku",
  "microstrategy",
  "tableau",
  "etl",
  "excel",
];

export function SkillIcon({
  id,
  className = "h-6 w-6",
}: {
  id: SkillId;
  className?: string;
}) {
  const Icon = icons[id];
  const isLucide = lucideIds.includes(id);

  return (
    <Icon
      className={`${className} ${brandColors[id]} shrink-0`}
      aria-hidden
      {...(isLucide ? { strokeWidth: 1.75 } : {})}
    />
  );
}
