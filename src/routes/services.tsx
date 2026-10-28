import { useRef } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import gsap from "gsap";
import { PageShell } from "@/components/sanmedia/PageShell";
import { PageHero } from "@/components/sanmedia/PageHero";
import { SERVICE_GROUPS } from "@/data/services";
import { revealChildren, registerGsap, reducedMotion } from "@/components/sanmedia/anim";

const SITE = "https://sanmedia.lovable.app";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Film, Video & Photography Production | SAN MEDIA COMPANY" },
      {
        name: "description",
        content:
          "Film and video production, advertising and campaigns, social media content, photography, post production and creative direction — by SAN MEDIA COMPANY, Trivandrum, Kerala.",
      },
      { property: "og:title", content: "Services | SAN MEDIA COMPANY" },
      {
        property: "og:description",
        content:
          "Six crafts, one standard — film production, advertising, social content, photography, post production and creative direction from a Kerala-based production house.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/services` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/services` }],
  }),
});

/** One service group — image with parallax scrub, editorial detail list. */
function ServiceBlock({ group, index }: { group: (typeof SERVICE_GROUPS)[number]; index: number }) {
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
    <section
      ref={ref}
      id={group.title.toLowerCase().replace(/[^a-z]+/g, "-")}
      className="relative bg-background"
    >
      <div className="mx-auto max-w-[1500px] px-6 py-20 lg:px-12">
        <div className={`grid items-center gap-10 md:grid-cols-12 md:gap-14`}>
          <div data-reveal className={`md:col-span-6 ${flip ? "md:order-2 md:col-start-7" : ""}`}>
            <div className="grain relative aspect-[4/3] overflow-hidden bg-card">
              <img
                src={group.img}
                alt={`${group.title} — SAN MEDIA COMPANY`}
                loading="lazy"
                width={1536}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04]"
              />
            </div>
          </div>
          <div className={`md:col-span-5 ${flip ? "md:order-1 md:col-start-1" : "md:col-start-8"}`}>
            <p data-reveal className="meta text-foreground/40">
              {group.n} — {group.tagline}
            </p>
            <h2 data-reveal className="display mt-5 text-[8.5vw] leading-[0.95] text-foreground md:text-[3.4vw]">
              {group.title}
            </h2>
            <p data-reveal className="mt-6 max-w-md text-base font-light leading-relaxed text-foreground/70">
              {group.desc}
            </p>
            <ul data-reveal className="mt-8 max-w-md space-y-0">
              {group.items.map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline justify-between border-b border-hairline py-3"
                >
                  <span className="text-sm font-light text-foreground/85 md:text-base">{item}</span>
                  <span className="meta text-[9px] text-foreground/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesPage() {
  const ref = useRef<HTMLDivElement>(null);
  revealChildren(ref, 0.07);

  return (
    <PageShell>
      <main className="bg-background">
        <PageHero
          label="Services"
          title={
            <>
              WHAT WE
              <br />
              CREATE.
            </>
          }
          sub="Six crafts under one roof — every one held to the same cinematic standard, at any budget."
        />

        <div ref={ref}>
          {SERVICE_GROUPS.map((g, i) => (
            <ServiceBlock key={g.n} group={g} index={i} />
          ))}
        </div>

        <section className="border-t border-hairline">
          <div className="mx-auto flex max-w-[1500px] flex-wrap items-end justify-between gap-8 px-6 py-24 lg:px-12">
            <h2 className="display text-[10vw] leading-none text-foreground md:text-[5vw]">
              NOT SURE WHAT
              <br />
              YOU NEED?
            </h2>
            <Link
              to="/contact"
              className="bg-foreground px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-85"
            >
              Talk to Us
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
