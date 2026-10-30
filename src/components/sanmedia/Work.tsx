import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { PROJECTS } from "@/data/projects";
import { WorkCard } from "./WorkCard";
import { revealChildren } from "./anim";

/**
 * Home portfolio preview — a masonry cut of the reel: six projects from the
 * Behance portfolio, tall and wide frames interleaved so every column lands at
 * the same height and the block closes with no empty gaps.
 */
const FEATURED = PROJECTS.slice(0, 6);

/** Frame per card: tall (4/5) and wide (4/3) so columns balance at 2 and 3 columns. */
const RATIOS = ["4 / 5", "4 / 3", "4 / 3", "4 / 5", "4 / 3", "4 / 5"];

export function Work() {
  const ref = useRef<HTMLElement>(null);
  revealChildren(ref);

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
            <p className="meta hidden text-foreground/50 md:block">From our Behance portfolio</p>
            <Link
              to="/work"
              className="meta border-b border-foreground/40 pb-1 text-[10px] text-foreground/80 transition-colors hover:border-foreground hover:text-foreground"
            >
              View all work
            </Link>
          </div>
        </div>

        <div className="-mb-14 mt-16 columns-1 gap-x-10 sm:columns-2 lg:columns-3">
          {FEATURED.map((p, i) => (
            <div key={p.slug} className="mb-14 break-inside-avoid">
              <WorkCard project={p} ratio={RATIOS[i % RATIOS.length]} eager={i < 3} />
            </div>
          ))}
        </div>

        <div
          data-reveal
          className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-hairline pt-6"
        >
          <p className="meta text-foreground/50">
            {FEATURED.length} of {PROJECTS.length} projects — the full reel on Behance
          </p>
          <Link
            to="/work"
            className="meta border-b border-foreground/40 pb-1 text-[10px] text-foreground/80 transition-colors hover:border-foreground hover:text-foreground"
          >
            View all work
          </Link>
        </div>
      </div>
    </section>
  );
}
