import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { revealChildren } from "./anim";

const TIERS = [
  {
    n: "01",
    name: "ESSENTIAL",
    lines: ["Smart production.", "Strong storytelling.", "Designed for focused budgets."],
  },
  {
    n: "02",
    name: "SIGNATURE",
    lines: ["More production depth.", "Cinematic visuals.", "Premium execution."],
  },
  {
    n: "03",
    name: "PREMIUM",
    lines: ["Full-scale production.", "High-end cinematography.", "Maximum creative freedom."],
  },
];

export function Budget() {
  const ref = useRef<HTMLElement>(null);
  revealChildren(ref);

  return (
    <section ref={ref} id="budget" className="relative bg-paper text-ink">
      <div className="mx-auto max-w-[1500px] px-6 py-32 md:py-44 lg:px-12">
        <p data-reveal className="meta text-ink/60">
          Production scales
        </p>
        <h2 data-reveal className="display mt-8 text-[11vw] leading-[0.95] text-ink md:text-[6.5vw]">
          THE STORY
          <br />
          COMES FIRST.
        </h2>
        <p data-reveal className="mt-10 max-w-xl text-base font-light leading-relaxed text-ink/70 md:text-lg">
          From focused productions to full-scale cinematic campaigns, we build the strongest
          visual language possible within your budget.
        </p>

        <div className="mt-20 grid grid-cols-1 gap-px bg-ink/15 md:grid-cols-3">
          {TIERS.map((t) => (
            <div
              key={t.n}
              data-reveal
              className="group bg-paper p-8 transition-colors duration-700 hover:bg-ink hover:text-paper md:p-10"
            >
              <p className="meta text-ink/50 transition-colors group-hover:text-paper/60">{t.n}</p>
              <h3 className="display mt-6 text-4xl md:text-5xl">{t.name}</h3>
              <ul className="mt-8 space-y-2 text-sm font-light leading-relaxed md:text-base">
                {t.lines.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
