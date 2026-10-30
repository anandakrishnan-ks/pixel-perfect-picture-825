import { useRef } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/sanmedia/PageShell";
import { PageHero } from "@/components/sanmedia/PageHero";
import { FOUNDER } from "@/data/founder";
import { TEAM_MEMBERS } from "@/data/founder";
import { revealChildren } from "@/components/sanmedia/anim";

const SITE = "https://sanmedia.lovable.app";

const DISTRICTS = [
  "Thiruvananthapuram",
  "Kollam",
  "Pathanamthitta",
  "Alappuzha",
  "Kottayam",
  "Kochi / Ernakulam",
  "Idukki",
  "Thrissur",
  "Palakkad",
  "Malappuram",
  "Kozhikode",
  "Wayanad",
  "Kannur",
  "Kasaragod",
];

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — We Are SAN MEDIA COMPANY | Creative Production House, Kerala" },
      {
        name: "description",
        content:
          "SAN MEDIA COMPANY is a creative media company from Thiruvananthapuram, Kerala, built around one simple idea — every story deserves to be seen differently. Discover who we are, how we work and our Kerala-wide presence.",
      },
      { property: "og:title", content: "We Are SAN MEDIA COMPANY" },
      {
        property: "og:description",
        content:
          "A creative media company from Thiruvananthapuram, Kerala — every story deserves to be seen differently. Built in Trivandrum. Creating across Kerala.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/about` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/about` }],
  }),
});

function AboutPage() {
  const ref = useRef<HTMLDivElement>(null);
  revealChildren(ref, 0.09);

  return (
    <PageShell>
      <main className="bg-background">
        <PageHero
          label="About"
          number="01"
          variant="split"
          aside={<p className="meta text-foreground/50">Thiruvananthapuram — Kerala — Beyond</p>}
          title={
            <>
              WE ARE SAN MEDIA
              <br />
              COMPANY.
            </>
          }
          sub="A creative media company from Thiruvananthapuram, Kerala, built around one simple idea — every story deserves to be seen differently."
        />

        {/* Philosophy */}
        <section ref={ref} className="mx-auto max-w-[1500px] px-6 pb-32 lg:px-12">
          <div className="grid gap-16 border-t border-hairline pt-20 md:grid-cols-12">
            <div className="md:col-span-4">
              <p data-reveal className="meta text-foreground/60">What we believe</p>
              <h2 data-reveal className="display mt-6 text-4xl leading-tight text-foreground md:text-5xl">
                STORYTELLING
                <br />
                IS THE CRAFT.
                <br />
                CINEMA IS THE
                <br />
                STANDARD.
              </h2>
            </div>
            <div className="space-y-8 md:col-span-6 md:col-start-6">
              <p data-reveal className="text-base font-light leading-relaxed text-foreground/70 md:text-lg">
                We are directors, cinematographers, colourists, editors and photographers working
                under one roof and one obsession — images that carry feeling first and information
                second. Whether it's a 30-second commercial or a full documentary, every frame is
                composed, lit and cut with intent.
              </p>
              <p data-reveal className="text-base font-light leading-relaxed text-foreground/70 md:text-lg">
                Our approach to production is simple: understand the story before touching a camera.
                We develop the concept, the script and the visual language first — so every day of
                production and every hour of post serves one clear idea.
              </p>
              <p data-reveal className="text-base font-light leading-relaxed text-foreground/70 md:text-lg">
                Your budget doesn't define the quality of your story. We create the best possible
                visual experience within it — premium cinematic production, at any scale.
              </p>
              <p data-reveal>
                <Link
                  to="/process"
                  className="meta border-b border-foreground/40 pb-1 text-[10px] text-foreground/80 transition-colors hover:border-foreground hover:text-foreground"
                >
                  See how we work
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Kerala-wide positioning */}
        <section className="relative bg-paper text-ink">
          <div className="mx-auto max-w-[1500px] px-6 py-32 md:py-44 lg:px-12">
            <p data-reveal className="meta text-ink/60">Kerala-wide</p>
            <h2 data-reveal className="display mt-8 max-w-5xl text-[9.5vw] leading-[0.95] md:text-[5.5vw]">
              FROM TRIVANDRUM
              <br />
              TO EVERY CORNER
              <br />
              OF KERALA.
            </h2>
            <p data-reveal className="meta mt-10 text-[11px] tracking-[0.2em] text-ink/70">
              Home base: Thiruvananthapuram. Playground: Kerala.
            </p>
            <p data-reveal className="mt-6 max-w-xl text-base font-light leading-relaxed text-ink/70 md:text-lg">
              From the capital city to the coast, hills and cities across Kerala, SAN MEDIA COMPANY
              brings production, storytelling and visual creativity closer to brands, businesses and
              organisations wherever their story needs to be told.
            </p>
            <div data-reveal className="mt-14 grid grid-cols-2 gap-x-8 gap-y-3 md:grid-cols-4 lg:grid-cols-7">
              {DISTRICTS.map((d) => (
                <p key={d} className="meta border-t border-ink/15 pt-3 text-[9px] text-ink/60">
                  {d}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="mx-auto max-w-[1500px] px-6 py-32 md:py-44 lg:px-12">
          <p data-reveal className="meta text-foreground/60">The founder</p>
          <h2 data-reveal className="display mt-8 text-[10vw] leading-none text-foreground md:text-[5.5vw]">
            THE VISION
            <br />
            BEHIND THE LENS.
          </h2>

          <div data-reveal className="mt-20 grid gap-12 md:grid-cols-12">
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
              <h3 className="display mt-4 text-5xl text-foreground md:text-6xl">{FOUNDER.name}</h3>
              {FOUNDER.bio && (<p className="mt-8 max-w-xl text-base font-light leading-relaxed text-foreground/70 md:text-lg">
                {FOUNDER.bio}
              </p>)}
              {FOUNDER.vision && (<p className="mt-6 max-w-xl text-base font-light leading-relaxed text-foreground/70 md:text-lg">
                {FOUNDER.vision}
              </p>)}
              {FOUNDER.quote && (<blockquote className="mt-10 border-l-2 border-foreground/30 pl-6 text-xl font-light leading-relaxed text-foreground/85 md:text-2xl">
                {FOUNDER.quote}
              </blockquote>)}
            </div>
          </div>
        </section>

        {/* Team preview */}
        <section className="relative border-t border-hairline">
          <div className="mx-auto max-w-[1500px] px-6 py-24 md:py-32 lg:px-12">
            <div data-reveal className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="display text-4xl text-foreground md:text-6xl">THE PEOPLE
                <br />
                BEHIND THE FRAMES.</h2>
              <Link
                to="/team"
                className="meta border-b border-foreground/40 pb-1 text-[10px] text-foreground/80 transition-colors hover:border-foreground hover:text-foreground"
              >
                See every role
              </Link>
            </div>
            <div data-reveal className="mt-16 grid grid-cols-1 gap-px bg-foreground/10 md:grid-cols-3">
              {TEAM_MEMBERS.slice(0, 3).map((m) => (
                <div key={m.role} className="bg-background p-8">
                  <h3 className="display mt-4 text-2xl text-foreground">{m.role}</h3>
                  <p className="mt-4 text-sm font-light leading-relaxed text-foreground/60">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-hairline">
          <div className="mx-auto flex max-w-[1500px] flex-wrap items-end justify-between gap-8 px-6 py-24 lg:px-12">
            <h2 className="display text-[10vw] leading-none text-foreground md:text-[5vw]">
              LET'S TELL
              <br />
              YOUR STORY.
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
