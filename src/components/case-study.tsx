import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { FlowStrip } from "@/components/flow-strip";
import { TechBadges } from "@/components/tech-badges";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/profile";

const sectionLinks = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "approach", label: "Approach" },
  { id: "architecture", label: "Architecture" },
  { id: "decisions", label: "Decisions" },
  { id: "challenges", label: "Challenges" },
  { id: "implementation", label: "Implementation" },
  { id: "current-state", label: "Current state" },
  { id: "technology", label: "Technology" },
  { id: "links", label: "Links" },
];

function Block({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mt-16 scroll-mt-24 border-t border-border pt-9">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">{kicker}</p>
      <h2 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl">{title}</h2>
      <div className="mt-5 max-w-[68ch] leading-7 text-muted-foreground">{children}</div>
    </section>
  );
}

function Prose({ children }: { children: ReactNode }) {
  return <p className="mt-5 max-w-[68ch] leading-7 text-muted-foreground">{children}</p>;
}

function Callout({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="mt-8 rounded-lg border border-border bg-card p-6">
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">{label}</p>
      <div className="mt-3 max-w-[68ch] text-sm leading-6 text-muted-foreground">{children}</div>
    </div>
  );
}

export function CaseStudy({ project }: { project: Project }) {
  const { caseStudy } = project;
  return (
    <article className="mx-auto max-w-[960px]">
      <Link
        to="/"
        hash="projects"
        className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground focus-visible:outline"
      >
        <ArrowLeft aria-hidden="true" className="size-3.5" />
        All projects
      </Link>

      <header className="mt-10">
        <p className="font-mono text-xs text-primary">{project.number} — Case Study</p>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          {project.category}
        </p>
        <h1 className="mt-3 max-w-[22ch] font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-5 max-w-[60ch] text-base leading-7 text-muted-foreground">
          {project.tagline}
        </p>
        <div className="mt-6">
          <TechBadges technologies={project.technologies} />
        </div>
      </header>

      <nav aria-label="Case study sections" className="mt-10 -mx-1 overflow-x-auto pb-1">
        <ul className="flex w-max gap-2 px-1">
          {sectionLinks.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="block rounded-full border border-border px-3 py-1.5 font-mono text-[11px] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground focus-visible:outline"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Block id="overview" kicker="Overview" title="Overview">
        <Prose>{caseStudy.overview}</Prose>
        {caseStudy.privacyNote ? (
          <Callout label="Confidentiality">{caseStudy.privacyNote}</Callout>
        ) : null}
      </Block>

      <Block id="problem" kicker="Problem" title="Problem">
        <Prose>{project.problem}</Prose>
      </Block>

      <Block id="approach" kicker="Approach" title="Approach">
        <Prose>{caseStudy.approach}</Prose>
      </Block>

      <Block id="architecture" kicker="Architecture" title="Architecture">
        <div className="mt-8 rounded-lg border border-border bg-card p-6 sm:p-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            High-level flow
          </p>
          <FlowStrip stages={project.architectureFlow} className="mt-3" />
          <div className="mt-8 border-t border-border pt-8">
            <ArchitectureDiagram
              nodes={caseStudy.architectureNodes}
              caption={caseStudy.architectureCaption}
            />
          </div>
        </div>
      </Block>

      <Block id="decisions" kicker="Technical Decisions" title="Technical decisions">
        <ul className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
          {caseStudy.technicalDecisions.map((decision) => (
            <li key={decision.title} className="bg-card p-6">
              <p className="font-display text-base font-semibold text-foreground">
                {decision.title}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{decision.text}</p>
            </li>
          ))}
        </ul>
      </Block>

      <Block id="challenges" kicker="Engineering Challenges" title="Engineering challenges">
        <ul className="mt-8 max-w-[68ch] space-y-4">
          {caseStudy.engineeringChallenges.map((challenge) => (
            <li key={challenge} className="flex gap-4">
              <span
                aria-hidden="true"
                className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
              />
              <span className="text-sm leading-6 text-muted-foreground">{challenge}</span>
            </li>
          ))}
        </ul>
      </Block>

      <Block id="implementation" kicker="Implementation" title="Implementation">
        <ul className="mt-8 max-w-[68ch] space-y-3">
          {caseStudy.implementation.map((item) => (
            <li key={item} className="flex gap-4">
              <span aria-hidden="true" className="mt-1 font-mono text-xs text-primary">
                ▸
              </span>
              <span className="text-sm leading-6 text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </Block>

      <Block id="current-state" kicker="Current State" title="Results / current state">
        <Prose>{caseStudy.currentState}</Prose>
      </Block>

      <Block id="technology" kicker="Technology" title="Technology">
        <div className="mt-8">
          <TechBadges technologies={project.technologies} />
        </div>
        <p className="mt-4 max-w-[68ch] text-sm leading-6 text-muted-foreground">
          The technology list reflects the stack associated with this project. Additional details
          are intentionally omitted where they could expose proprietary work.
        </p>
      </Block>

      <Block id="links" kicker="Links" title="Links">
        <div className="mt-6 flex flex-wrap gap-3">
          {project.githubUrl ? (
            <Button asChild variant="portfolioOutline">
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                Source on GitHub
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          ) : null}
          {project.demoUrl ? (
            <Button asChild variant="portfolioOutline">
              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                Live Demo
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          ) : null}
          <Button asChild variant="portfolioGhost">
            <Link to="/" hash="projects">
              More projects
            </Link>
          </Button>
        </div>
        {!project.githubUrl && !project.demoUrl ? (
          <p className="mt-4 max-w-[68ch] text-sm leading-6 text-muted-foreground">
            External links for this project are not published yet. The case study above documents
            the engineering scope without using external resources.
          </p>
        ) : null}
      </Block>
    </article>
  );
}
