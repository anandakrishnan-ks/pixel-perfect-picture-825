import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";
import { registerGsap, reducedMotion } from "./anim";

type Project = {
  title: string;
  client: string;
  year: string;
  desc: string;
  img: string;
  span: string;
  ratio: string;
};

const PROJECTS: Project[] = [
  {
    title: "THE INHERITANCE",
    client: "Short film",
    year: "2025",
    desc: "A generational drama shot across the heritage homes of Kerala — silence, sunlight and a single door left open.",
    img: work1,
    span: "md:col-span-7",
    ratio: "aspect-[16/10]",
  },
  {
    title: "STILL WATERS",
    client: "Tourism campaign",
    year: "2025",
    desc: "Backwater mornings, mist and nets — a tourism film that trades postcards for patience.",
    img: work2,
    span: "md:col-span-5",
    ratio: "aspect-[16/10]",
  },
  {
    title: "BODIES IN MOTION",
    client: "Cultural festival",
    year: "2024",
    desc: "Two dancers, one warehouse, one light — a festival identity film about gravity and grace.",
    img: work3,
    span: "md:col-span-5",
    ratio: "aspect-[16/10]",
  },
  {
    title: "NIGHT DRIVE",
    client: "Automotive brand",
    year: "2024",
    desc: "A launch film for a classic reborn — wet asphalt, one streetlight and a city that never looks back.",
    img: work4,
    span: "md:col-span-7",
    ratio: "aspect-[16/10]",
  },
  {
    title: "HALF LIGHT",
    client: "Fashion film",
    year: "2023",
    desc: "A portrait series in single-source light — character over costume.",
    img: work5,
    span: "md:col-span-5",
    ratio: "aspect-[16/10]",
  },
  {
    title: "THE CARVER",
    client: "Craft documentary",
    year: "2023",
    desc: "Behind the hands of a Kathakali mask maker — a documentary short about devotion and detail.",
    img: work6,
    span: "md:col-span-7",
    ratio: "aspect-[16/10]",
  },
];

export function Work() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;
    registerGsap();
    const ctx = gsap.context(() => {
      el.querySelectorAll<HTMLElement>("[data-card]").forEach((card) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.3,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 85%", once: true },
          }
        );
        const img = card.querySelector("img");
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.12 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: true },
            }
          );
        }
      });
    }, el);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section ref={ref} id="work" className="relative bg-background">
      <div className="mx-auto max-w-[1500px] px-6 py-32 md:py-44 lg:px-12">
        <div className="flex items-end justify-between">
          <h2 className="display text-[13vw] leading-none text-foreground md:text-[8vw]">
            Selected
            <br />
            Work
          </h2>
          <p className="meta hidden pb-3 text-foreground/50 md:block">06 films — 2023 → 2025</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-12 md:gap-y-28">
          {PROJECTS.map((p) => (
            <article key={p.title} data-card className={`col-span-1 ${p.span}`}>
              <button
                onClick={() => setActive(p)}
                className="group block w-full text-left"
                aria-label={`Open ${p.title}`}
              >
                <div className={`grain relative overflow-hidden ${p.ratio} bg-card`}>
                  <img
                    src={p.img}
                    alt={`${p.title} — ${p.client}`}
                    loading="lazy"
                    width={1536}
                    height={1024}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045]"
                  />
                  <div className="absolute inset-0 bg-background/0 transition-colors duration-700 group-hover:bg-background/10" />
                  <div className="absolute right-5 top-5 flex h-12 w-12 translate-y-2 items-center justify-center rounded-full border border-foreground/40 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-foreground">▶</span>
                  </div>
                </div>
                <div className="mt-5 flex items-baseline justify-between border-t border-hairline pt-4">
                  <h3 className="display text-xl text-foreground transition-transform duration-500 group-hover:translate-x-2 md:text-2xl">
                    {p.title}
                  </h3>
                  <span className="meta text-foreground/50">
                    {p.client} — {p.year}
                  </span>
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>

      {/* Cinematic lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-background/95 p-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-h-full w-full max-w-4xl overflow-y-auto bg-card"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.img}
              alt={active.title}
              width={1536}
              height={1024}
              className="grain max-h-[62vh] w-full object-cover"
            />
            <div className="p-8 md:p-12">
              <p className="meta text-foreground/50">
                {active.client} — {active.year}
              </p>
              <h3 className="display mt-3 text-4xl text-foreground md:text-5xl">{active.title}</h3>
              <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-muted-foreground">
                {active.desc}
              </p>
              <p className="meta mt-8 text-foreground/40">
                Full film available on request — hello@sanmedia.in
              </p>
            </div>
            <button
              onClick={() => setActive(null)}
              className="meta absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/60 text-foreground backdrop-blur"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
