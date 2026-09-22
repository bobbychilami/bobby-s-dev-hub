type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
};

export function SectionHeading({ index, label, title }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {index} / {label}
      </p>
      <h2 className="max-w-[24ch] font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}
