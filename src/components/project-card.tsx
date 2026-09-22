import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { FlowStrip } from "@/components/flow-strip";
import { TechBadges } from "@/components/tech-badges";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/profile";

function ProjectActions({ project, primaryLabel }: { project: Project; primaryLabel: string }) {
  return (
    <div className="flex flex-wrap gap-3">
      {project.githubUrl ? (
        <Button asChild variant="portfolioOutline" size="sm">
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            GitHub
            <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
      ) : null}
      {project.demoUrl ? (
        <Button asChild variant="portfolioOutline" size="sm">
          <a href={project.demoUrl} target="_blank" rel="noreferrer">
            Live Demo
            <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
      ) : null}
      <Button asChild variant="portfolio" size="sm">
        <Link to="/projects/$slug" params={{ slug: project.slug }}>
          {primaryLabel}
          <ArrowUpRight
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </Button>
    </div>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  const fields = [
    { label: "Problem", value: project.problem },
    { label: "Solution", value: project.solution },
    { label: "Architecture", value: project.architectureSummary },
  ];
  return (
    <article className="group overflow-hidden rounded-lg border border-primary/30 bg-card transition-colors hover:border-primary/60">
      <div className="flex items-center justify-between gap-4 border-b border-border/70 px-6 py-4 sm:px-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
          Featured project
        </p>
        <p className="font-mono text-xs text-muted-foreground">{project.number}</p>
      </div>
      <div className="p-6 sm:p-8 lg:p-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          {project.category}
        </p>
        <h3 className="mt-3 max-w-[18ch] font-display text-3xl font-bold text-foreground sm:text-4xl">
          {project.name}
        </h3>
        <p className="mt-3 text-lg font-medium text-foreground">{project.tagline}</p>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-6">
          <TechBadges technologies={project.technologies} />
        </div>

        <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {fields.map((field) => (
            <div key={field.label} className="bg-card p-5 sm:p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                {field.label}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{field.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Data flow
          </p>
          <FlowStrip stages={project.architectureFlow} className="mt-3" />
        </div>

        <div className="mt-8">
          <ProjectActions project={project} primaryLabel="Read the case study" />
        </div>
      </div>
    </article>
  );
}

function CompactProject({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-muted-foreground/40 sm:p-7">
      <div className="flex items-baseline justify-between gap-4">
        <p className="font-mono text-xs text-primary">{project.number}</p>
        <p className="text-right font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          {project.category}
        </p>
      </div>
      <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">{project.name}</h3>
      <p className="mt-2 text-base font-medium text-foreground">{project.tagline}</p>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.description}</p>

      <div className="mt-6">
        <TechBadges technologies={project.technologies} />
      </div>

      <div className="mt-6 border-t border-border pt-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Data flow
        </p>
        <FlowStrip stages={project.architectureFlow} className="mt-3" />
      </div>

      <div className="mt-auto pt-7">
        <ProjectActions project={project} primaryLabel="Case Study" />
      </div>
    </article>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  if (project.featured) {
    return <FeaturedProject project={project} />;
  }
  return <CompactProject project={project} />;
}
