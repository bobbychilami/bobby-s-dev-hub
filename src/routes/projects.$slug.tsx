import { createFileRoute, notFound } from "@tanstack/react-router";
import { CaseStudy } from "@/components/case-study";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getProjectBySlug } from "@/data/profile";

export const Route = createFileRoute("/projects/$slug")({
  beforeLoad: ({ params }) => {
    if (!getProjectBySlug(params.slug)) {
      throw notFound();
    }
  },
  head: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    const name = project ? project.name : "Project";
    const description = project ? project.tagline : "Engineering case study from Bobby Chilami.";
    return {
      meta: [
        { title: `${name} — Case Study | Bobby Chilami` },
        { name: "description", content: description },
        { property: "og:title", content: `${name} — Case Study | Bobby Chilami` },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:site_name", content: "Bobby Chilami" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { slug } = Route.useParams();
  const project = getProjectBySlug(slug);
  if (!project) return null;
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main id="main">
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-6 lg:py-24">
          <CaseStudy project={project} />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
