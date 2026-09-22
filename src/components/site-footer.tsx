import { ArrowUpRight } from "lucide-react";
import { profile, socialLinks } from "@/data/profile";

function FooterAction({ label, href }: { label: string; href: string | null }) {
  if (!href) {
    return (
      <span
        aria-disabled="true"
        title={`${label} link not configured`}
        className="cursor-not-allowed"
      >
        {label}
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 transition-colors hover:text-foreground focus-visible:outline"
    >
      {label}
      <ArrowUpRight aria-hidden="true" className="size-3" />
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          {profile.name} — {profile.role} · {new Date().getFullYear()}
        </p>
        <div className="flex gap-6 text-muted-foreground">
          <FooterAction label="GitHub" href={socialLinks.github} />
          <FooterAction label="LinkedIn" href={socialLinks.linkedin} />
          <FooterAction label="Resume" href={socialLinks.resume} />
        </div>
      </div>
    </footer>
  );
}
