import { useRef } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/sanmedia/PageShell";
import { PageHero } from "@/components/sanmedia/PageHero";
import { FOUNDER, TEAM_MEMBERS } from "@/data/founder";
import { revealChildren } from "@/components/sanmedia/anim";

const SITE = "https://sanmedia.lovable.app";

export const Route = createFileRoute("/team")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: "Team — The People Behind the Frames | SAN MEDIA COMPANY" },
      {
        name: "description",
        content:
          "Directors, cinematographers, editors, motion designers, photographers and production crew — the people behind SAN MEDIA COMPANY, a creative production company in Trivandrum, Kerala.",
      },
      { property: "og:title", content: "The Team | SAN MEDIA COMPANY" },
      {
        property: "og:description",
        content:
          "The people behind the frames — a Kerala-based creative production company built around storytelling and visual craft.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/team` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/team` }],
  }),
});

function TeamPage() {
  const ref = useRef<HTMLDivElement>(null);
  revealChildren(ref, 0.07);

  return (
    <PageShell>
      <main className="bg-background">
        <PageHero
          label="Team"
          variant="centered"
          aside={<p className="meta text-paper-foreground/60">Direction — Camera — Edit — Sound — Design</p>}
          title={
            <>
              THE PEOPLE BEHIND
              <br />
              THE FRAMES.
            </>
          }
          sub="A small crew with a large standard — every role filled, every production covered."
        />

        <div ref={ref} className="mx-auto max-w-[1500px] px-6 pb-32 lg:px-12">
          {/* Founder — visually distinct */}
          <section data-reveal className="grid gap-10 border-t border-hairline pt-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="grain relative flex aspect-[3/4] items-center justify-center overflow-hidden border border-hairline bg-card">
                {FOUNDER.photo ? (
                  <img src={FOUNDER.photo} alt={`${FOUNDER.name} — ${FOUNDER.title}`} className="h-full w-full object-cover object-[center_30%]" loading="lazy" />
                ) : (
                  <p className="meta px-8 text-center text-[10px] leading-loose text-foreground/40">
                    Founder portrait
                    <br />
                    — add image —
                  </p>
                )}
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="meta text-foreground/50">{FOUNDER.title}</p>
              <h2 className="display mt-4 text-6xl text-foreground md:text-7xl">{FOUNDER.name}</h2>
              <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-foreground/70 md:text-lg">
                {FOUNDER.bio}
              </p>
              <blockquote className="mt-8 border-l-2 border-foreground/30 pl-6 text-xl font-light leading-relaxed text-foreground/85 md:text-2xl">
                {FOUNDER.quote}
              </blockquote>
            </div>
          </section>

          <p data-reveal className="meta mt-24 border-b border-hairline pb-5 text-[10px] text-foreground/40">
            Crew — profiles are placeholders until each member's details are finalised
          </p>

          {/* Editorial role grid */}
          <div className="grid grid-cols-1 gap-px bg-foreground/10 md:grid-cols-3">
            {TEAM_MEMBERS.map((m) => (
              <div key={m.role} data-reveal className="group bg-background p-8 transition-colors duration-700 hover:bg-card">
                <div className="flex items-baseline justify-between">
                  <p className="meta text-foreground/40">[Name]</p>
                  <p className="meta text-[9px] text-foreground/20">Profile link — add</p>
                </div>
                <h3 className="display mt-5 text-2xl text-foreground md:text-3xl">{m.role}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-foreground/60">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="border-t border-hairline">
          <div className="mx-auto flex max-w-[1500px] flex-wrap items-end justify-between gap-8 px-6 py-24 lg:px-12">
            <h2 className="display text-[10vw] leading-none text-foreground md:text-[5vw]">
              WANT TO WORK
              <br />
              WITH US?
            </h2>
            <Link
              to="/contact"
              className="bg-foreground px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-85"
            >
              Start a Project
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
