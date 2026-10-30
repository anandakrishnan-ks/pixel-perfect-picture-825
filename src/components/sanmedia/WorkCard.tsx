import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import type { Project } from "@/data/projects";
import { registerGsap, reducedMotion } from "./anim";

/**
 * Cinematic project card — image reveal + parallax scrub + hover transition,
 * linking through to the project detail page.
 *
 * `ratio` is a CSS aspect-ratio value so a masonry layout can interleave tall
 * and wide frames; it defaults to the native cover frame.
 */
export function WorkCard({
  project,
  span = "",
  eager = false,
  ratio = "808 / 632",
  className = "",
  caption = "row",
}: {
  project: Project;
  span?: string;
  eager?: boolean;
  ratio?: string;
  className?: string;
  /** "row" = title and label side by side; "stack" = fixed-height caption for masonry. */
  caption?: "row" | "stack";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;
    registerGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.3,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        }
      );
      const img = el.querySelector("img");
      if (img) {
        gsap.fromTo(
          img,
          { scale: 1.12 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          }
        );
      }
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <article ref={ref} className={`col-span-1 ${span} ${className}`}>
      <Link
        to="/work/$slug"
        params={{ slug: project.slug }}
        className="group block"
        aria-label={`Open project ${project.title}`}
      >
        <div
          className="grain relative overflow-hidden bg-card"
          style={{ aspectRatio: ratio }}
        >
          <img
            src={project.img}
            alt={`${project.title} — ${project.category}`}
            loading={eager ? "eager" : "lazy"}
            width={808}
            height={632}
            className="mono-reveal h-full w-full object-cover transition-[transform,filter] duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045]"
          />
          <div className="absolute inset-0 bg-background/0 transition-colors duration-700 group-hover:bg-background/10" />
          <div className="absolute right-5 top-5 flex h-12 w-12 translate-y-2 items-center justify-center rounded-full border border-foreground/40 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="text-foreground">▶</span>
          </div>
        </div>
        <div className="mt-5 flex items-baseline justify-between gap-6 border-t border-hairline pt-4">
          <h3 className="display text-xl text-foreground transition-transform duration-500 group-hover:translate-x-2 md:text-2xl">
            {project.title}
          </h3>
          <span className="meta shrink-0 text-right text-foreground/50">
            {project.category} — {project.client}
          </span>
        </div>
      </Link>
    </article>
  );
}
