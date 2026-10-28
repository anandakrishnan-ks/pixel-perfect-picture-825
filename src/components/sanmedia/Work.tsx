import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { PROJECTS, spanFor } from "@/data/projects";
import { WorkCard } from "./WorkCard";
import { revealChildren } from "./anim";

/**
 * Home portfolio preview — the first three films from the reel,
 * linking through to the full /work portfolio.
 */
export function Work() {
  const ref = useRef<HTMLElement>(null);
  revealChildren(ref);

  const featured = PROJECTS.slice(0, 3);

  return (
    <section ref={ref} id="work" className="relative bg-background">
      <div className="mx-auto max-w-[1500px] px-6 py-32 md:py-44 lg:px-12">
        <div data-reveal className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="display text-[13vw] leading-none text-foreground md:text-[8vw]">
            Selected
            <br />
            Work
          </h2>
          <div className="flex items-center gap-6 pb-3">
            <p className="meta hidden text-foreground/50 md:block">Films — 2023 → 2025</p>
            <Link
              to="/work"
              className="meta border-b border-foreground/40 pb-1 text-[10px] text-foreground/80 transition-colors hover:border-foreground hover:text-foreground"
            >
              View all work
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-12 md:gap-y-28">
          {featured.map((p, i) => (
            <WorkCard key={p.slug} project={p} span={spanFor(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
