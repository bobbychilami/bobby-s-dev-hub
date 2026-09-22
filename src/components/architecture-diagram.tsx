import type { ArchitectureNode } from "@/data/profile";

type ArchitectureDiagramProps = {
  nodes: ArchitectureNode[];
  caption?: string | undefined;
};

function StepConnector() {
  return (
    <div aria-hidden="true" className="relative mx-auto h-10 w-px bg-border">
      <span className="absolute left-1/2 top-1/2 block size-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-r border-b border-primary" />
    </div>
  );
}

export function ArchitectureDiagram({ nodes, caption }: ArchitectureDiagramProps) {
  return (
    <figure>
      <ol className="mx-auto max-w-2xl">
        {nodes.map((node, index) => (
          <li key={node.label}>
            <div className="grid grid-cols-[auto_1fr] items-center gap-4 rounded-md border border-border bg-card px-4 py-4 transition-colors hover:border-primary/40">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/5 font-mono text-xs text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground sm:text-[15px]">{node.label}</p>
                {node.detail ? (
                  <p className="mt-0.5 font-mono text-xs text-muted-foreground">{node.detail}</p>
                ) : null}
              </div>
            </div>
            {index < nodes.length - 1 ? <StepConnector /> : null}
          </li>
        ))}
      </ol>
      {caption ? (
        <figcaption className="mt-5 text-center font-mono text-xs text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
