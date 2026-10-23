import { useRef } from "react";
import { revealChildren } from "./anim";
import markWhite from "@/assets/sanmedia-mark-white.png.asset.json";

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  revealChildren(ref);

  return (
    <section ref={ref} id="contact" className="relative bg-background">
      <div className="mx-auto max-w-[1500px] px-6 pt-32 pb-16 md:pt-44 lg:px-12">
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
          <a
            href="mailto:hello@sanmedia.in"
            className="bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-85"
          >
            hello@sanmedia.in
          </a>
          <span className="meta text-foreground/50">Trivandrum, Kerala — India</span>
        </div>

        <footer className="mt-32 md:mt-44">
          <div className="flex flex-wrap items-end justify-between gap-8 border-t border-hairline pt-10">
            <div className="flex items-center gap-3">
              <img src={markWhite.url} alt="" width={28} height={28} className="h-6 w-6 object-contain" />
              <span className="display text-lg tracking-[0.08em] text-foreground">SANMEDIA</span>
            </div>
            <div className="flex flex-wrap gap-x-10 gap-y-3">
              <span className="meta text-foreground/50">Film</span>
              <span className="meta text-foreground/50">Advertising</span>
              <span className="meta text-foreground/50">Production</span>
              <span className="meta text-foreground/50">Visual Storytelling</span>
            </div>
            <span className="meta text-foreground/40">© {new Date().getFullYear()} Sanmedia</span>
          </div>
          <p aria-hidden className="wordmark-outline mt-6 select-none text-[19.5vw] leading-[0.85]">
            SANMEDIA
          </p>
        </footer>
      </div>
    </section>
  );
}
