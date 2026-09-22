import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import {
  aboutCards,
  achievements,
  articles,
  contact,
  experience,
  profile,
  projects,
  skillGroups,
  socialLinks,
} from "@/data/profile";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bobby Chilami | Software Engineer | Backend & AI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Bobby Chilami, a Software Engineer specializing in backend engineering, AI applications, enterprise software and full-stack development.",
      },
      {
        property: "og:title",
        content: "Bobby Chilami | Software Engineer | Backend & AI Engineer",
      },
      {
        property: "og:description",
        content:
          "Portfolio of Bobby Chilami, a Software Engineer specializing in backend engineering, AI applications, enterprise software and full-stack development.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Bobby Chilami" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function HeroLink({ label, href }: { label: string; href: string | null }) {
  if (!href) {
    return (
      <span
        aria-disabled="true"
        title={`${label} link not configured`}
        className="cursor-not-allowed font-mono text-xs text-muted-foreground/50"
      >
        {label}
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground focus-visible:outline"
    >
      {label}
      <ArrowUpRight aria-hidden="true" className="size-3" />
    </a>
  );
}

function SystemsPanel() {
  return (
    <div className="reveal rounded-lg border border-border bg-card p-5">
      <div className="flex items-center justify-between gap-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Systems
        </p>
        <span aria-hidden="true" className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-border" />
          <span className="size-2 rounded-full bg-border" />
          <span className="size-2 rounded-full bg-primary" />
        </span>
      </div>
      <ul className="mt-5 space-y-2.5">
        {profile.systems.map((system) => (
          <li
            key={system}
            className="flex items-baseline gap-3 font-mono text-[13px] text-foreground/80"
          >
            <span aria-hidden="true" className="text-primary">
              ▸
            </span>
            <span>{system}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FactsPanel() {
  return (
    <div className="reveal rounded-lg border border-border bg-card p-5">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        Engineering overview
      </p>
      <dl className="mt-5 space-y-5">
        {profile.heroFacts.map((fact) => (
          <div key={fact.label}>
            <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              {fact.label}
            </dt>
            <dd className="mt-1 text-sm font-medium text-foreground">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Portfolio() {
  const featuredProject = projects.find((project) => project.featured) ?? null;
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main id="main">
        <section id="home" className="relative overflow-hidden">
          <div aria-hidden="true" className="bg-grid-fade absolute inset-0" />
          <div className="relative mx-auto max-w-[1200px] px-5 py-20 sm:px-6 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
              <div>
                <div className="reveal flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5">
                    <span
                      className={`size-1.5 rounded-full ${profile.availability.active ? "bg-primary" : "bg-muted-foreground"}`}
                    />
                    {profile.availability.label}
                  </span>
                  {profile.focusChips.map((chip) => (
                    <span key={chip} className="rounded-full border border-border px-3 py-1.5">
                      {chip}
                    </span>
                  ))}
                </div>

                <h1 className="reveal mt-8 max-w-[16ch] font-display text-6xl font-bold leading-none text-foreground sm:text-7xl lg:text-8xl">
                  {profile.name}
                </h1>
                <p className="reveal mt-6 max-w-[42ch] font-display text-2xl font-medium leading-tight text-foreground sm:text-3xl">
                  {profile.positioning.split("|").map((part, index) => (
                    <span key={part}>
                      {part.trim()}
                      {index < profile.positioning.split("|").length - 1 ? (
                        <span className="text-primary"> | </span>
                      ) : null}
                    </span>
                  ))}
                </p>
                <p className="reveal mt-5 max-w-[56ch] text-base leading-7 text-muted-foreground">
                  {profile.summary}
                </p>

                <div className="reveal mt-8 flex flex-wrap items-center gap-3">
                  <Button asChild variant="portfolio" size="lg">
                    <a href="#projects">View Projects</a>
                  </Button>
                  {socialLinks.resume ? (
                    <Button asChild variant="portfolioOutline" size="lg">
                      <a href={socialLinks.resume} target="_blank" rel="noopener noreferrer">
                        Download Resume
                        <ArrowUpRight aria-hidden="true" />
                      </a>
                    </Button>
                  ) : (
                    <Button
                      variant="portfolioOutline"
                      size="lg"
                      disabled
                      title="Resume not configured"
                    >
                      Download Resume
                    </Button>
                  )}
                </div>

                <div className="reveal mt-6 flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                    Social
                  </span>
                  <span className="text-border">/</span>
                  <HeroLink label="GitHub" href={socialLinks.github} />
                  <span className="text-border">/</span>
                  <HeroLink label="LinkedIn" href={socialLinks.linkedin} />
                </div>

                <div className="reveal mt-10">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Core stack
                  </p>
                  <p className="mt-3 max-w-[60ch] font-mono text-sm leading-6 text-muted-foreground">
                    {profile.techStack.join(" · ")}
                  </p>
                </div>
              </div>

              <aside aria-label="Engineering overview" className="space-y-4 lg:sticky lg:top-24">
                <SystemsPanel />
                <FactsPanel />
              </aside>
            </div>
          </div>
        </section>

        <Section id="about">
          <SectionHeading index="01" label="About" title="What I bring to the table" />
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-12">
            {aboutCards.map((card) => (
              <article key={card.label} className="border-t border-border pt-6">
                <p className="font-mono text-xs text-primary">{card.number}</p>
                <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                  {card.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{card.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience">
          <SectionHeading
            index="02"
            label="Experience"
            title="Engineering depth. Leadership progression."
          />
          <article className="mt-12 border-t border-border">
            <div className="grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:py-14">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  {experience.company}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
                  {experience.position}
                </h3>
                <p className="mt-2 font-mono text-xs text-muted-foreground">{experience.period}</p>
                <p className="mt-5 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                  {experience.summary}
                </p>
              </div>

              <div className="lg:border-l lg:border-border lg:pl-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Role progression
                </p>
                <ol className="relative mt-6 space-y-8 border-l border-border pl-6">
                  {experience.progression.map((role, index) => {
                    const isLast = index === experience.progression.length - 1;
                    return (
                      <li key={role} className="relative">
                        <span
                          aria-hidden="true"
                          className={`absolute -left-[33px] top-0.5 size-2.5 rounded-full ${
                            isLast
                              ? "bg-primary ring-4 ring-primary/20"
                              : "border border-border bg-background"
                          }`}
                        />
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                          {isLast ? "Current" : "Original role"}
                        </p>
                        <p
                          className={`mt-1 font-display text-base font-semibold ${
                            isLast ? "text-foreground" : "text-muted-foreground"
                          }`}
                        >
                          {role}
                        </p>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </article>

          <details className="group mt-6 border-y border-border py-2">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-base font-semibold focus-visible:outline [&::-webkit-details-marker]:hidden">
              Role details
              <ChevronDown
                aria-hidden="true"
                className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
              />
            </summary>
            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {experience.highlights.map((highlight) => (
                <div key={highlight.label} className="bg-card p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                    {highlight.label}
                  </p>
                  {highlight.stat ? (
                    <p className="mt-3 font-mono text-2xl leading-none text-foreground">
                      {highlight.stat}
                    </p>
                  ) : null}
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{highlight.text}</p>
                </div>
              ))}
            </div>
            <div className="h-6" />
          </details>
        </Section>

        <Section id="projects">
          <SectionHeading
            index="03"
            label="Featured Engineering Work"
            title="Systems, decisions and outcomes"
          />
          <p className="mt-5 max-w-[56ch] text-sm leading-6 text-muted-foreground sm:text-base">
            Three engineering case studies covering problem, approach, architecture and decisions.
            LocalMindAI is the flagship build; every project links a full case study, and
            repositories and demos appear here as they are published.
          </p>
          <div className="mt-12 space-y-6">
            {featuredProject ? <ProjectCard project={featuredProject} /> : null}
            {otherProjects.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2">
                {otherProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            ) : null}
          </div>
        </Section>

        <Section id="skills">
          <SectionHeading index="04" label="Skills" title="Tooling and engineering areas" />
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, index) => (
              <div key={group.label} className="bg-card p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-mono text-xs text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {group.label}
                  </p>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="achievements">
          <SectionHeading index="05" label="Achievements" title="Impact in concrete terms" />
          <div className="mt-12 grid gap-x-14 gap-y-10 md:grid-cols-2">
            {achievements.map((achievement, index) => (
              <article key={achievement.label} className="flex gap-5">
                <span className="font-mono text-sm text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {achievement.label}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{achievement.text}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="writing">
          <SectionHeading index="06" label="Writing" title="Notes and engineering writing" />
          <ul className="mt-12">
            {articles.map((article, index) => (
              <li
                key={article.title}
                className="flex items-center justify-between gap-4 border-b border-border py-5 last:border-b-0"
              >
                <div className="flex min-w-0 items-baseline gap-4">
                  <span className="font-mono text-xs text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {article.url ? (
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1.5 font-display text-base font-medium text-foreground transition-colors hover:text-primary focus-visible:outline"
                    >
                      {article.title}
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-3.5 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  ) : (
                    <p className="truncate font-display text-base font-medium text-foreground">
                      {article.title}
                    </p>
                  )}
                </div>
                {article.url ? null : (
                  <span className="shrink-0 rounded-full border border-dashed border-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    Link pending
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact">
          <SectionHeading index="07" label="Contact" title={contact.heading} />
          <p className="mt-5 max-w-[52ch] text-sm leading-6 text-muted-foreground sm:text-base">
            {contact.intro}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {contact.focusAreas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
              >
                {area}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            {socialLinks.email ? (
              <Button asChild variant="portfolio">
                <a href={`mailto:${socialLinks.email}`}>Email</a>
              </Button>
            ) : (
              <Button variant="portfolio" disabled title="Email not configured">
                Email
              </Button>
            )}
            {socialLinks.github ? (
              <Button asChild variant="portfolioOutline">
                <a href={socialLinks.github} target="_blank" rel="noreferrer">
                  GitHub
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            ) : (
              <Button variant="portfolioOutline" disabled title="GitHub link not configured">
                GitHub
              </Button>
            )}
            {socialLinks.linkedin ? (
              <Button asChild variant="portfolioOutline">
                <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            ) : (
              <Button variant="portfolioOutline" disabled title="LinkedIn link not configured">
                LinkedIn
              </Button>
            )}
            {socialLinks.resume ? (
              <Button asChild variant="portfolioOutline">
                <a href={socialLinks.resume} target="_blank" rel="noopener noreferrer">
                  Download resume
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            ) : (
              <Button variant="portfolioOutline" disabled title="Resume not configured">
                Download resume
              </Button>
            )}
          </div>
        </Section>
      </main>

      <SiteFooter />
    </div>
  );
}
