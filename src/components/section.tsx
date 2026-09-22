import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("border-t border-border py-24 lg:py-32", className)}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6">{children}</div>
    </section>
  );
}
