import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { revealChildren } from "./anim";
import markWhite from "@/assets/sanmedia-mark-white.png.asset.json";

/** Home closing CTA — the shared site footer lives in the root layout. */
export function Contact() {
  const ref = useRef<HTMLElement>(null);
  revealChildren(ref);

  return (
    <section ref={ref} id="contact" className="relative bg-background">
      <div className="mx-auto max-w-[1500px] px-6 py-32 md:py-44 lg:px-12">
        <p data-reveal className="meta text-foreground/60">Start a film</p>
        <h2 data-reveal className="display mt-8 text-[13vw] leading-[0.92] text-foreground md:text-[8.5vw]">
          LET'S MAKE
          <br />
          YOUR FILM.
        </h2>
        <p data-reveal className="mt-10 max-w-xl text-base font-light leading-relaxed text-foreground/70 md:text-lg">
          Tell us the story, the screen it's meant for and the budget you have in mind. We'll come
          back with a plan — and a picture of what it can become.
        </p>
        <div data-reveal className="mt-12 flex flex-wrap items-center gap-6">
          <Link
            to="/contact"
            className="bg-foreground px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-85"
          >
            Start a Project
          </Link>
          <a href="mailto:contact@sanmediacompany.in" className="meta border-b border-foreground/40 pb-1 text-[10px] text-foreground/80 transition-colors hover:border-foreground hover:text-foreground">
            contact@sanmediacompany.in
          </a>
          <span className="meta text-foreground/50">Trivandrum, Kerala — India</span>
        </div>
      </div>
    </section>
  );
}
