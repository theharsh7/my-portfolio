import { Cloud } from "lucide-react";
import {
  SiFastapi,
  SiPostgresql,
  SiPython,
  SiSnowflake,
} from "react-icons/si";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";
import type { SVGProps } from "react";

export type SkillId =
  | "sql"
  | "snowflake"
  | "aws-s3"
  | "python"
  | "dashboard";

type SkillIconComponent =
  | IconType
  | LucideIcon
  | ((props: SVGProps<SVGSVGElement>) => React.ReactNode);

const icons: Record<SkillId, SkillIconComponent> = {
  sql: SiPostgresql,
  snowflake: SiSnowflake,
  "aws-s3": Cloud,
  python: SiPython,
  dashboard: SiFastapi,
};

const brandColors: Record<SkillId, string> = {
  sql: "text-sky-400",
  snowflake: "text-cyan-300",
  "aws-s3": "text-amber-400",
  python: "text-yellow-400",
  dashboard: "text-emerald-400",
};

export function SkillIcon({
  id,
  className = "h-6 w-6",
}: {
  id: SkillId;
  className?: string;
}) {
  const Icon = icons[id];
  const isLucide = id === "aws-s3";

  return (
    <Icon
      className={`${className} ${brandColors[id]} shrink-0`}
      aria-hidden
      {...(isLucide ? { strokeWidth: 1.75 } : {})}
    />
  );
}
