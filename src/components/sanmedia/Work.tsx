import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { PROJECTS, projectBySlug, type Project } from "@/data/projects";
import { WorkCard } from "./WorkCard";
import { revealChildren } from "./anim";

/**
 * Home portfolio preview — a masonry cut of the reel: six projects from the
 * Behance portfolio, tall / wide / square frames interleaved so every column
 * lands at the same height and the block closes flush with no empty gaps.
 *
 * Frame heights per column width w: tall 4/5 = 1.25w, square 1/1 = w, wide 4/3
 * = 0.75w. At three columns the pairs are (tall+wide), (square+square),
 * (tall+wide) = 2w each; at two columns the halves are (tall+wide+square) = 3w
 * each — so the bottom edge lines up at either width.
 */
const SELECTION: { slug: string; ratio: string }[] = [
  { slug: "falooda-nation-pradhama-drishtya-kuttakkar", ratio: "4 / 5" },
  { slug: "lukas-baptism", ratio: "4 / 3" },
  { slug: "onam-with-muffin-house-india", ratio: "1 / 1" },
  { slug: "diya-krishna-aranyavedha-wellness", ratio: "1 / 1" },
  { slug: "rad-fitness", ratio: "4 / 5" },
  { slug: "koilon-nuts", ratio: "4 / 3" },
];

const FEATURED = SELECTION.map(({ slug, ratio }) => ({
  project: projectBySlug(slug) as Project | undefined,
  ratio,
}))
  .filter((x): x is { project: Project; ratio: string } => Boolean(x.project))
  .map((x) => ({ project: x.project, ratio: x.ratio }));

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
          {FEATURED.map(({ project, ratio }, i) => (
            <div key={project.slug} className="mb-14 break-inside-avoid">
              <WorkCard project={project} ratio={ratio} caption="stack" eager={i < 3} />
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
