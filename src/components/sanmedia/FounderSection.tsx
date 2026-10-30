import { useRef } from "react";
import { FOUNDER } from "@/data/founder";
import { revealChildren } from "@/components/sanmedia/anim";

/**
 * Founder section — portrait, identity and founder message.
 * Text blocks render only when real copy exists in src/data/founder.ts.
 */
export function FounderSection() {
  const ref = useRef<HTMLElement>(null);
  revealChildren(ref);
  const hasMessage = FOUNDER.message.length > 0;

  return (
    <section ref={ref} className="relative border-t border-hairline">
      <div className="mx-auto max-w-[1500px] px-6 py-28 md:py-40 lg:px-12">
        <div data-reveal className="flex items-center gap-4">
          <span className="h-px w-10 bg-foreground/40" />
          <p className="meta text-[10px] text-foreground/60">The Founder</p>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-16">
          {/* Portrait */}
          <figure data-reveal className="md:col-span-5">
            <div className="grain relative aspect-[4/5] overflow-hidden border border-hairline bg-card">
              {FOUNDER.photo && (
                <img
                  src={FOUNDER.photo}
                  alt={`${FOUNDER.name}, ${FOUNDER.title} of SAN MEDIA COMPANY`}
                  className="h-full w-full object-cover object-[center_25%]"
                  loading="lazy"
                />
              )}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent" />
              <span className="meta absolute bottom-5 left-5 text-[10px] text-foreground/80">
                SAN MEDIA COMPANY — Thiruvananthapuram
              </span>
            </div>
            <figcaption className="mt-5 flex items-baseline justify-between border-b border-hairline pb-4">
              <span className="display text-2xl tracking-wide text-foreground">{FOUNDER.name}</span>
              <span className="meta text-[10px] text-foreground/50">{FOUNDER.title}</span>
            </figcaption>
          </figure>

          {/* Message */}
          <div data-reveal className="flex flex-col justify-center md:col-span-6 md:col-start-7">
            <p className="meta text-[10px] text-foreground/50">{hasMessage || FOUNDER.quote ? "A message from the founder" : "Founder, SAN MEDIA COMPANY"}</p>
            <h2 className="display mt-6 text-[13vw] leading-[0.9] text-foreground md:text-[5.2vw]">
              {FOUNDER.name.toUpperCase()}
            </h2>
            <p className="meta mt-4 text-xs text-foreground/60">{FOUNDER.title}</p>

            {FOUNDER.quote && (
              <blockquote className="relative mt-12 pl-10">
                <span aria-hidden className="display absolute -top-4 left-0 text-6xl leading-none text-foreground/25">“</span>
                <p className="text-2xl font-light leading-snug text-foreground md:text-3xl">{FOUNDER.quote}</p>
              </blockquote>
            )}

            {hasMessage && (
              <div className="mt-10 max-w-xl space-y-5 border-l border-hairline pl-6">
                {FOUNDER.message.map((para, i) => (
                  <p key={i} className="text-base font-light leading-relaxed text-foreground/70 md:text-lg">
                    {para}
                  </p>
                ))}
              </div>
            )}

            {FOUNDER.bio && (
              <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-foreground/60">{FOUNDER.bio}</p>
            )}

            {(hasMessage || FOUNDER.quote) && (
              <div className="mt-12 flex items-center gap-4">
                <span className="h-px w-12 bg-foreground/50" />
                <span className="display text-lg tracking-[0.12em] text-foreground">{FOUNDER.name}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
