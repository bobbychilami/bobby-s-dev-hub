import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { navSections, profile, socialLinks } from "@/data/profile";

function HeaderAction({ label, href }: { label: string; href: string | null }) {
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

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto grid h-14 max-w-[1200px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 sm:px-6 lg:flex">
        <Link to="/" className="min-w-0 font-display text-lg font-bold focus-visible:outline">
          <span className="truncate">{profile.name}</span>
        </Link>
        <nav
          aria-label="Primary navigation"
          className="mx-auto hidden items-center gap-x-4 gap-y-1 lg:flex"
        >
          {navSections.map((item) => (
            <a
              key={item.id}
              href={`/#${item.id}`}
              className="relative text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-200 hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <HeaderAction label="GitHub" href={socialLinks.github} />
          <span className="text-border">/</span>
          <HeaderAction label="LinkedIn" href={socialLinks.linkedin} />
          {socialLinks.resume ? (
            <Button asChild variant="portfolio" size="sm">
              <a href={socialLinks.resume} target="_blank" rel="noreferrer">
                Resume
              </a>
            </Button>
          ) : (
            <Button variant="portfolio" size="sm" disabled title="Resume not configured">
              Resume
            </Button>
          )}
        </div>
        <Button
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          variant="portfolioGhost"
          size="icon"
          className="lg:hidden"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      {menuOpen ? (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-border bg-background px-5 py-5 lg:hidden"
        >
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-1">
            {navSections.map((item) => (
              <a
                key={item.id}
                href={`/#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground focus-visible:outline"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="mx-auto mt-5 flex max-w-[1200px] flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-4">
            <HeaderAction label="GitHub" href={socialLinks.github} />
            <HeaderAction label="LinkedIn" href={socialLinks.linkedin} />
            {socialLinks.resume ? (
              <Button asChild variant="portfolio" size="sm">
                <a href={socialLinks.resume} target="_blank" rel="noreferrer">
                  Resume
                </a>
              </Button>
            ) : (
              <Button variant="portfolio" size="sm" disabled title="Resume not configured">
                Resume
              </Button>
            )}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
