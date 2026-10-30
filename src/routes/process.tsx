import { useEffect, useRef } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import gsap from "gsap";
import { PageShell } from "@/components/sanmedia/PageShell";
import { PageHero } from "@/components/sanmedia/PageHero";
import { revealChildren, registerGsap, reducedMotion } from "@/components/sanmedia/anim";
import imgDiscover from "@/assets/story-idea.jpg";
import imgConcept from "@/assets/story-frame.jpg";
import imgPrep from "@/assets/location.jpg";
import imgProduction from "@/assets/story-production.jpg";
import imgPost from "@/assets/story-film.jpg";
import imgDelivery from "@/assets/hero.jpg";

const SITE = "https://sanmedia.lovable.app";

const STAGES = [
  {
    n: "01",
    title: "DISCOVER",
    desc: "Understanding the brand, audience, objective and story — the groundwork that decides everything after it.",
    img: imgDiscover,
  },
  {
    n: "02",
    title: "CONCEPT",
    desc: "Developing the creative direction, concept and narrative — the idea the whole film will serve.",
    img: imgConcept,
  },
  {
    n: "03",
    title: "PRE-PRODUCTION",
    desc: "Planning locations, crew, schedule and visual language — so production days carry no surprises.",
    img: imgPrep,
  },
  {
    n: "04",
    title: "PRODUCTION",
    desc: "Filming, directing, cinematography and production execution — every detail planned, every frame with a purpose.",
    img: imgProduction,
  },
  {
    n: "05",
    title: "POST-PRODUCTION",
    desc: "Editing, colour grading, motion graphics, sound design and finishing — where the film is truly made.",
    img: imgPost,
  },
  {
    n: "06",
    title: "DELIVERY",
    desc: "Final delivery optimised for cinema, television, web and social platforms — one story, every screen.",
    img: imgDelivery,
  },
];

export const Route = createFileRoute("/process")({
  component: ProcessPage,
  head: () => ({
    meta: [
      { title: "Process — How We Make Films | SAN MEDIA COMPANY" },
      {
        name: "description",
        content:
          "From idea to final frame — discover, concept, pre-production, production, post-production and delivery. The production process of SAN MEDIA COMPANY, a film and video production company in Trivandrum, Kerala.",
      },
      { property: "og:title", content: "The Process | SAN MEDIA COMPANY" },
      {
        property: "og:description",
        content:
          "Six stages from idea to final frame — how a Kerala-based production house builds films, campaigns and visual experiences.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/process` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/process` }],
  }),
});

function Stage({ stage, index }: { stage: (typeof STAGES)[number]; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const flip = index % 2 === 1;

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;
    registerGsap();
    const ctx = gsap.context(() => {
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
    <section ref={ref} className="relative bg-background">
      <div className="mx-auto max-w-[1500px] px-6 py-16 lg:px-12">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-14">
          <div data-reveal className={`md:col-span-6 ${flip ? "md:order-2 md:col-start-7" : ""}`}>
            <div className="grain relative aspect-[4/3] overflow-hidden bg-card">
              <img
                src={stage.img}
                alt={`Stage ${stage.n} — ${stage.title}`}
                loading="lazy"
                width={1536}
                height={1024}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-background/25" />
              <p className="display absolute bottom-4 left-5 text-6xl text-foreground/90 md:text-7xl">
                {stage.n}
              </p>
            </div>
          </div>
          <div className={`md:col-span-5 ${flip ? "md:order-1 md:col-start-1" : "md:col-start-8"}`}>
            <p data-reveal className="meta text-foreground/40">Stage {stage.n}</p>
            <h2 data-reveal className="display mt-5 text-[9vw] leading-none text-foreground md:text-[3.8vw]">
              {stage.title}
            </h2>
            <p data-reveal className="mt-6 max-w-md text-base font-light leading-relaxed text-foreground/70 md:text-lg">
              {stage.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessPage() {
  const ref = useRef<HTMLDivElement>(null);
  revealChildren(ref, 0.07);

  return (
    <PageShell>
      <main className="bg-background">
        <PageHero
          label="The process"
          title={
            <>
              FROM IDEA TO
              <br />
              FINAL FRAME.
            </>
          }
          sub="Six stages, one obsession — a process built so nothing is left to chance and every frame has a purpose."
        />

        <div ref={ref}>
          {STAGES.map((s, i) => (
            <Stage key={s.n} stage={s} index={i} />
          ))}
        </div>

        <section className="border-t border-hairline">
          <div className="mx-auto flex max-w-[1500px] flex-wrap items-end justify-between gap-8 px-6 py-24 lg:px-12">
            <h2 className="display text-[10vw] leading-none text-foreground md:text-[5vw]">
              READY FOR
              <br />
              STAGE 01?
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
