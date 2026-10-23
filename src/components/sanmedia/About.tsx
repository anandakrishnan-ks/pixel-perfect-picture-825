import { useRef } from "react";
import { revealChildren } from "./anim";
import bts1 from "@/assets/bts-1.jpg";
import bts2 from "@/assets/bts-2.jpg";
import bts3 from "@/assets/bts-3.jpg";
import bts4 from "@/assets/bts-4.jpg";
import bts5 from "@/assets/bts-5.jpg";
import bts6 from "@/assets/bts-6.jpg";

const SHOTS = [bts1, bts2, bts3, bts4, bts5, bts6];

export function About() {
  const ref = useRef<HTMLElement>(null);
  revealChildren(ref, 0.08);

  return (
    <section ref={ref} id="about" className="relative bg-background">
      <div className="mx-auto max-w-[1500px] px-6 py-32 md:py-44 lg:px-12">
        <p data-reveal className="meta text-foreground/60">The house</p>
        <h2 data-reveal className="display mt-8 max-w-4xl text-[10vw] leading-[0.95] text-foreground md:text-[5.5vw]">
          Built in Trivandrum.
          <br />
          Shot like the world is watching.
        </h2>
        <p data-reveal className="mt-10 max-w-xl text-base font-light leading-relaxed text-foreground/70 md:text-lg">
          SANMEDIA is a film and video production house from Kerala. Directors, cinematographers,
          colourists and editors working under one obsession — images that carry feeling first and
          information second. Every frame is composed, lit and cut with intent.
        </p>

        <div className="mt-20 grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
          {SHOTS.map((src, i) => (
            <figure
              key={src}
              data-reveal
              className={`grain relative overflow-hidden bg-card ${
                i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"
              } ${i >= 2 ? "md:aspect-[3/4]" : ""}`}
            >
              <img
                src={src}
                alt={`SANMEDIA behind the scenes — frame ${i + 1}`}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
