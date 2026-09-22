import { cn } from "@/lib/utils";

type FlowStripProps = {
  stages: string[];
  className?: string;
};

export function FlowStrip({ stages, className }: FlowStripProps) {
  if (stages.length === 0) return null;
  return (
    <ul
      className={cn("flex flex-wrap items-center gap-2", className)}
      aria-label="High-level data flow"
    >
      {stages.map((stage, index) => (
        <li key={stage} className="flex items-center gap-2">
          {index > 0 ? (
            <span aria-hidden="true" className="font-mono text-xs text-primary">
              →
            </span>
          ) : null}
          <span className="rounded border border-border bg-background/40 px-2 py-1 font-mono text-[11px] text-muted-foreground">
            {stage}
          </span>
        </li>
      ))}
    </ul>
  );
}
