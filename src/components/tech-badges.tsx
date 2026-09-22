type TechBadgesProps = {
  technologies: string[];
};

export function TechBadges({ technologies }: TechBadgesProps) {
  if (technologies.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
      {technologies.map((technology) => (
        <li
          key={technology}
          className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
        >
          {technology}
        </li>
      ))}
    </ul>
  );
}
