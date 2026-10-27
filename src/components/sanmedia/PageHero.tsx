import { useRef } from "react";
import { revealChildren } from "./anim";

/**
 * Shared editorial page opening: small label, huge display title, optional intro line.
 * Keeps every page in the same cinematic rhythm.
 */
export function PageHero({
  label,
  title,
  sub,
}: {
  label: string;
  title: React.ReactNode;
  sub?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  revealChildren(ref);

  return (
    <section ref={ref} className="relative bg-background">
      <div className="mx-auto max-w-[1500px] px-6 pt-40 pb-20 md:pt-56 md:pb-28 lg:px-12">
        <p data-reveal className="meta text-foreground/60">
          {label}
        </p>
        <h1 data-reveal className="display mt-8 text-[13vw] leading-[0.92] text-foreground md:text-[7.5vw] lg:text-[6.8vw]">
          {title}
        </h1>
        {sub && (
          <p data-reveal className="mt-10 max-w-xl text-base font-light leading-relaxed text-foreground/70 md:text-lg">
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}
