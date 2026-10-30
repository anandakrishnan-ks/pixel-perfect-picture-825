import { useRef, type ReactNode } from "react";
import { revealChildren } from "./anim";

export type HeroVariant = "split" | "index" | "outline" | "steps" | "centered" | "statement";

/**
 * Editorial page opening. Each inner page picks its own variant so pages share the
 * brand system (type, colour, motion) but never the same layout.
 */
export function PageHero({
  label,
  title,
  sub,
  variant = "split",
  aside,
  number,
}: {
  label: string;
  title: ReactNode;
  sub?: string;
  variant?: HeroVariant;
  aside?: ReactNode;
  number?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  revealChildren(ref);

  const labelRow = (
    <div data-reveal className="flex items-center gap-4">
      {number && <span className="meta text-foreground/40">{number}</span>}
      <span className="h-px w-10 bg-foreground/40" />
      <p className="meta text-foreground/70">{label}</p>
    </div>
  );

  const wrap = "mx-auto max-w-[1500px] px-6 lg:px-12";

  if (variant === "split") {
    return (
      <section ref={ref} className="relative bg-background">
        <div className={`${wrap} grid gap-12 pt-40 pb-20 md:pt-52 lg:grid-cols-12 lg:items-end`}>
          <div className="lg:col-span-7">
            {labelRow}
            <h1 data-reveal className="display mt-8 text-[12vw] leading-[0.9] text-foreground lg:text-[6.2vw]">
              {title}
            </h1>
          </div>
          <div className="lg:col-span-5">
            {aside && <div data-reveal>{aside}</div>}
            {sub && (
              <p data-reveal className="mt-8 border-l border-foreground/30 pl-6 text-base font-light leading-relaxed text-foreground/75 md:text-lg">
                {sub}
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "index") {
    return (
      <section ref={ref} className="relative bg-background">
        <div className={`${wrap} grid gap-16 pt-40 pb-24 md:pt-52 lg:grid-cols-2`}>
          <div>
            {labelRow}
            <h1 data-reveal className="display mt-8 text-[16vw] leading-[0.88] text-foreground lg:text-[9vw]">
              {title}
            </h1>
            {sub && (
              <p data-reveal className="mt-8 max-w-md text-base font-light leading-relaxed text-foreground/70">
                {sub}
              </p>
            )}
          </div>
          {aside && (
            <div data-reveal className="self-end">
              {aside}
            </div>
          )}
        </div>
      </section>
    );
  }

  if (variant === "outline") {
    return (
      <section ref={ref} className="relative overflow-hidden bg-background">
        <div className={`${wrap} pt-40 pb-12 md:pt-48`}>
          {labelRow}
          <h1 data-reveal className="wordmark-outline mt-6 text-[24vw] md:text-[19vw]">
            {title}
          </h1>
          <div data-reveal className="mt-8 flex flex-wrap items-end justify-between gap-6">
            {sub && <p className="max-w-md text-base font-light leading-relaxed text-foreground/70">{sub}</p>}
            {aside}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "steps") {
    return (
      <section ref={ref} className="relative bg-background">
        <div className={`${wrap} pt-40 pb-20 text-center md:pt-52`}>
          <div className="flex justify-center">{labelRow}</div>
          <h1 data-reveal className="display mx-auto mt-8 max-w-6xl text-[12vw] leading-[0.9] text-foreground md:text-[7vw]">
            {title}
          </h1>
          {sub && (
            <p data-reveal className="mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-foreground/70 md:text-lg">
              {sub}
            </p>
          )}
          {aside && <div data-reveal className="mt-16">{aside}</div>}
        </div>
      </section>
    );
  }

  if (variant === "centered") {
    return (
      <section ref={ref} className="relative bg-paper text-paper-foreground">
        <div className={`${wrap} pt-40 pb-24 md:pt-52`}>
          <p data-reveal className="meta text-paper-foreground/60">{label}</p>
          <h1 data-reveal className="display mt-8 text-[12vw] leading-[0.9] md:text-[7vw]">
            {title}
          </h1>
          <div data-reveal className="mt-12 flex flex-wrap items-end justify-between gap-8 border-t border-paper-foreground/20 pt-8">
            {sub && <p className="max-w-lg text-base font-light leading-relaxed text-paper-foreground/75 md:text-lg">{sub}</p>}
            {aside}
          </div>
        </div>
      </section>
    );
  }

  // statement
  return (
    <section ref={ref} className="relative bg-background">
      <div className={`${wrap} pt-40 pb-16 md:pt-52`}>
        {labelRow}
        <h1 data-reveal className="display mt-8 text-[13vw] leading-[0.9] text-foreground md:text-[8vw]">
          {title}
        </h1>
        {sub && (
          <p data-reveal className="mt-8 max-w-xl text-base font-light leading-relaxed text-foreground/70 md:text-lg">
            {sub}
          </p>
        )}
        {aside && <div data-reveal className="mt-14">{aside}</div>}
      </div>
    </section>
  );
}
