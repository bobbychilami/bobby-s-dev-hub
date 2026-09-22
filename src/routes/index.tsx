import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bobby Chilami — Software Engineer | Backend & AI Engineer" },
      { name: "description", content: "Portfolio of Bobby Chilami, Software Engineer focused on backend and AI engineering." },
      { property: "og:title", content: "Bobby Chilami — Software Engineer | Backend & AI Engineer" },
      { property: "og:description", content: "Portfolio of Bobby Chilami, Software Engineer focused on backend and AI engineering." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const portfolio = {
  availability: { active: false, label: "Availability not specified" },
  supportingCopy: "Professional summary not provided yet.",
  technologies: [] as string[],
  links: { github: "", linkedin: "", resume: "", email: "" },
};

const navItems = ["Home", "About", "Experience", "Projects", "Skills", "Achievements", "Writing", "Contact"];
const aboutItems = [
  { label: "Backend Engineering", title: "Software platforms and backend systems", text: "Experience spans backend engineering, databases and enterprise software." },
  { label: "AI Engineering", title: "AI engineering experience", text: "AI engineering is part of the broader engineering scope. Specific project details have not been provided." },
  { label: "Technical Leadership", title: "Engineering to team leadership", text: "Leads a team of 6 developers and 2 testers at Flixir Solutions." },
];

const experience = {
  company: "Flixir Solutions",
  role: "Software Engineer / Team Lead",
  period: "September 2022–Present",
  progression: ["Software Engineer", "Team Lead"],
  summary: "Engineering software platforms and backend systems, with progression into technical leadership.",
  details: [
    { label: "Leadership", text: "Leads 6 developers and 2 testers." },
    { label: "Engineering", text: "Works across backend engineering, databases, enterprise software and AI engineering." },
    { label: "Platform scope", text: "Platform exposure involves approximately 30 lakh students." },
  ],
};

type Project = {
  name: string;
  description: string;
  technologies: string[];
  problem: string;
  solution: string;
  architecture: string;
  engineeringWork: string;
  links: { github: string; demo: string; caseStudy: string };
};

const projects: Project[] = [];

function SectionHeading({ index, label, title }: { index: string; label: string; title: string }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{index} / {label}</p>
      <h2 className="max-w-[24ch] font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">{title}</h2>
    </div>
  );
}

function EmptyState({ children }: { children: string }) {
  return <p className="border-l border-primary pl-4 text-sm leading-6 text-muted-foreground">{children}</p>;
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto grid h-16 max-w-[1200px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 sm:px-6 lg:flex">
          <a href="#home" className="min-w-0 font-display text-lg font-bold focus-visible:outline"><span className="truncate">Bobby Chilami</span></a>
          <nav aria-label="Primary navigation" className="mx-auto hidden items-center gap-5 lg:flex">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline">{item}</a>)}
          </nav>
          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <UnavailableAction label="GitHub" />
            <span className="text-border">/</span>
            <UnavailableAction label="LinkedIn" />
            <Button variant="portfolio" size="sm" disabled={!portfolio.links.resume}>Resume</Button>
          </div>
          <Button aria-label={menuOpen ? "Close navigation" : "Open navigation"} variant="portfolioGhost" size="icon" className="lg:hidden" onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav aria-label="Mobile navigation" className="border-t border-border bg-background px-5 py-5 lg:hidden">
            <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-1">
              {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground focus-visible:outline">{item}</a>)}
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="border-b border-border py-20 lg:py-28">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
            <div className="reveal flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5"><span className={`size-1.5 rounded-full ${portfolio.availability.active ? "bg-primary" : "bg-muted-foreground"}`} />{portfolio.availability.label}</span>
              <span className="rounded-full border border-border px-3 py-1.5">Backend & AI</span>
            </div>
            <h1 className="reveal mt-8 max-w-[20ch] font-display text-6xl font-bold leading-none sm:text-7xl lg:text-8xl">Software Engineer</h1>
            <p className="reveal mt-6 max-w-[42ch] font-display text-2xl font-medium leading-tight sm:text-3xl">Software Engineer <span className="text-primary">|</span> Backend & AI Engineer</p>
            <p className="reveal mt-5 max-w-[52ch] text-base leading-7 text-muted-foreground">{portfolio.supportingCopy}</p>
            <div className="reveal mt-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Core technologies</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {portfolio.technologies.length ? portfolio.technologies.map((technology) => <span key={technology} className="rounded-full border border-border px-4 py-1.5 font-mono text-xs text-muted-foreground">{technology}</span>) : <span className="rounded-full border border-dashed border-border px-4 py-1.5 font-mono text-xs text-muted-foreground">Technologies not provided</span>}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 lg:py-28"><div className="mx-auto max-w-[1200px] px-5 sm:px-6">
          <SectionHeading index="01" label="About" title="What I bring to the table" />
          <div className="mt-12 grid overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3 md:gap-px">
            {aboutItems.map((item) => <article key={item.label} className="border-b border-border bg-card p-7 last:border-b-0 md:border-b-0 md:p-8">
              <p className="font-mono text-xs text-primary">{item.label}</p><h3 className="mt-4 font-display text-xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
            </article>)}
          </div>
        </div></section>

        <ExperienceSection />
        <ProjectsSection />
        <PlaceholderSection id="skills" index="04" label="Skills" title="Capabilities" text="Technologies and skills have not been provided yet." />
        <PlaceholderSection id="achievements" index="05" label="Achievements" title="Recognition and impact" text="Achievements have not been provided yet." />
        <PlaceholderSection id="writing" index="06" label="Writing" title="Notes and ideas" text="Published writing has not been provided yet." />

        <section id="contact" className="border-t border-border py-20 lg:py-28"><div className="mx-auto max-w-[1200px] px-5 sm:px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">07 / Contact</p>
          <h2 className="mt-6 max-w-[18ch] font-display text-5xl font-bold leading-none sm:text-6xl">Let&apos;s build something solid</h2>
          <p className="mt-5 max-w-[48ch] leading-7 text-muted-foreground">Contact details have not been provided yet.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Button variant="portfolio" disabled={!portfolio.links.email}>Get in touch</Button><Button variant="portfolioOutline" disabled={!portfolio.links.resume}>Download resume</Button></div>
        </div></section>
      </main>

      <footer className="border-t border-border py-10"><div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Bobby Chilami — Software Engineer</p>
        <div className="flex gap-6"><UnavailableAction label="GitHub" /><UnavailableAction label="LinkedIn" /><UnavailableAction label="Resume" /></div>
      </div></footer>
    </div>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
        <SectionHeading index="02" label="Experience" title="Engineering depth. Leadership progression." />
        <article className="mt-12 border-y border-border">
          <div className="grid gap-7 py-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:py-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{experience.company}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">{experience.role}</h3>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">{experience.summary}</p>
            </div>
            <p className="font-mono text-xs text-muted-foreground md:text-right">{experience.period}</p>
          </div>

          <div className="border-t border-border py-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Role progression</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {experience.progression.map((role, index) => (
                <div key={role} className="contents">
                  {index > 0 && <span aria-hidden="true" className="text-primary">→</span>}
                  <span className={index === experience.progression.length - 1 ? "rounded-full border border-primary px-4 py-2 text-sm text-foreground" : "rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"}>{role}</span>
                </div>
              ))}
            </div>
          </div>

          <details className="group border-t border-border py-2">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-base font-semibold focus-visible:outline [&::-webkit-details-marker]:hidden">
              View role details
              <ChevronDown aria-hidden="true" className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
              {experience.details.map((detail) => (
                <div key={detail.label} className="bg-card p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{detail.label}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{detail.text}</p>
                </div>
              ))}
            </div>
            <div className="h-6" />
          </details>
        </article>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
        <SectionHeading index="03" label="Featured Engineering Work" title="Systems, decisions and outcomes" />
        <div className="mt-12 grid gap-5">
          {projects.length > 0 ? projects.map((project) => <ProjectCard key={project.name} project={project} />) : <ProjectPlaceholder />}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const fields = [
    { label: "Problem", value: project.problem },
    { label: "Solution", value: project.solution },
    { label: "Architecture", value: project.architecture },
    { label: "Engineering work", value: project.engineeringWork },
  ];
  return (
    <article className="rounded-lg border border-border bg-card p-6 sm:p-8">
      <h3 className="font-display text-2xl font-semibold">{project.name}</h3>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">{project.description}</p>
      <TechnologyList technologies={project.technologies} />
      <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
        {fields.map((field) => <ProjectField key={field.label} label={field.label} value={field.value} />)}
      </div>
      <div className="mt-7 flex flex-wrap gap-3">
        <ProjectAction label="GitHub" href={project.links.github} />
        <ProjectAction label="Demo" href={project.links.demo} />
        <ProjectAction label="Case Study" href={project.links.caseStudy} />
      </div>
    </article>
  );
}

function ProjectPlaceholder() {
  return (
    <article className="rounded-lg border border-dashed border-border p-6 sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Configurable project entry</p>
          <h3 className="mt-3 font-display text-2xl font-semibold">Project name not provided</h3>
        </div>
        <span className="w-fit rounded-full border border-dashed border-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Details pending</span>
      </div>
      <p className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground">Project description has not been provided.</p>
      <TechnologyList technologies={[]} />
      <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
        {(["Problem", "Solution", "Architecture", "Engineering work"] as const).map((label) => <ProjectField key={label} label={label} value="Not provided" />)}
      </div>
      <div className="mt-7 flex flex-wrap gap-3">
        <ProjectAction label="GitHub" href="" />
        <ProjectAction label="Demo" href="" />
        <ProjectAction label="Case Study" href="" />
      </div>
    </article>
  );
}

function ProjectField({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-card p-5 sm:p-6">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{label}</p>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{value || "Not provided"}</p>
    </div>
  );
}

function TechnologyList({ technologies }: { technologies: string[] }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {technologies.length > 0 ? technologies.map((technology) => <span key={technology} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">{technology}</span>) : <span className="rounded-full border border-dashed border-border px-3 py-1 font-mono text-xs text-muted-foreground">Technologies not provided</span>}
    </div>
  );
}

function ProjectAction({ label, href }: { label: string; href: string }) {
  if (!href) return <Button variant="portfolioOutline" size="sm" disabled>{label} unavailable</Button>;
  return <Button asChild variant="portfolioOutline" size="sm"><a href={href} target="_blank" rel="noreferrer">{label}<ArrowUpRight aria-hidden="true" /></a></Button>;
}

function PlaceholderSection({ id, index, label, title, text }: { id: string; index: string; label: string; title: string; text: string }) {
  return <section id={id} className="border-t border-border py-20 lg:py-28"><div className="mx-auto max-w-[1200px] px-5 sm:px-6"><SectionHeading index={index} label={label} title={title} /><div className="mt-12 max-w-2xl"><EmptyState>{text}</EmptyState></div></div></section>;
}

function UnavailableAction({ label }: { label: string }) {
  return <span aria-disabled="true" title={`${label} link not provided`} className="cursor-not-allowed font-mono text-xs text-muted-foreground/60">{label}</span>;
}
