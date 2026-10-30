import { PROJECTS } from "@/data/projects";
import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerGsap, reducedMotion } from "./anim";

const SERVICES = [
  { n: "01", title: "ADVERTISING FILMS", desc: "Spots built to move markets.", img: PROJECTS.find((p) => p.slug === "falooda-nation-pradhama-drishtya-kuttakkar")!.img },
  { n: "02", title: "BRAND FILMS", desc: "Identity, told in motion.", img: PROJECTS.find((p) => p.slug === "rad-fitness")!.img },
  { n: "03", title: "CORPORATE FILMS", desc: "Companies, filmed with cinema's eye.", img: PROJECTS.find((p) => p.slug === "inlife-interior-designers-testimonial")!.img },
  { n: "04", title: "PRODUCT FILMS", desc: "Objects lit like protagonists.", img: PROJECTS.find((p) => p.slug === "koilon-nuts")!.img },
  { n: "05", title: "SOCIAL CONTENT", desc: "Short-form, cut with intent.", img: PROJECTS.find((p) => p.slug === "onam-with-muffin-house-india")!.img },
  { n: "06", title: "CINEMATIC CAMPAIGNS", desc: "Full-scale stories across screens.", img: PROJECTS.find((p) => p.slug === "diya-krishna-aranyavedha-wellness")!.img },
];

export function Services() {
  const wrapRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap || reducedMotion()) return;
    registerGsap();

    const items = itemRefs.current.filter((el): el is HTMLDivElement => Boolean(el));
    const imgs = imgRefs.current.filter((el): el is HTMLDivElement => Boolean(el));

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.7,
        },
      });

      SERVICES.forEach((_, i) => {
        const prevImg = imgs[i - 1];
        const prevItem = items[i - 1];
        const curImg = imgs[i];
        const curItem = items[i];
        if (i === 0 || !prevImg || !prevItem || !curImg || !curItem) {
          if (items[0]) gsap.set(items[0], { opacity: 1 });
          if (imgs[0]) gsap.set(imgs[0], { opacity: 1 });
          gsap.set(items.slice(1), { opacity: 0.18 });
          gsap.set(imgs.slice(1), { opacity: 0 });
          return;
        }
        tl.to(prevImg, { opacity: 0, duration: 0.3, ease: "none" }, i - 0.2)
          .to(prevItem, { opacity: 0.18, duration: 0.2, ease: "none" }, i - 0.2)
          .to(curImg, { opacity: 1, duration: 0.35, ease: "none" }, i)
          .to(curItem, { opacity: 1, duration: 0.2, ease: "none" }, i);
      });
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrapRef} id="services" className="relative h-[560vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-background">
        {/* Background imagery per service */}
        {SERVICES.map((s, i) => (
          <div
            key={s.n}
            ref={(el) => {
              imgRefs.current[i] = el;
            }}
            className="grain vignette absolute inset-0 will-change-opacity"
          >
            <img
              src={s.img}
              alt={s.title}
              loading="lazy"
              width={1536}
              height={1024}
              className="h-full w-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-background/62" />
          </div>
        ))}

        <div className="relative z-10 flex h-full flex-col justify-center">
          <div className="mx-auto w-full max-w-[1500px] px-6 lg:px-12">
            <p className="meta mb-8 text-foreground/60">What we make</p>
            <div className="flex flex-col gap-2 md:gap-3">
              {SERVICES.map((s, i) => (
                <div
                  key={s.n}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  className="flex items-baseline gap-5 border-b border-hairline pb-2 md:gap-10 md:pb-4"
                >
                  <span className="meta shrink-0 text-foreground/50">{s.n}</span>
                  <h3 className="display text-[7.5vw] leading-none text-foreground md:text-[4.6vw] lg:text-[3.8vw]">
                    {s.title}
                  </h3>
                  <span className="ml-auto hidden shrink-0 text-sm font-light text-foreground/60 md:block">
                    {s.desc}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-12 flex items-center justify-between">
              <p className="meta hidden text-foreground/50 md:block">Six crafts — one standard</p>
              <Link
                to="/services"
                className="meta border-b border-foreground/40 pb-1 text-[10px] text-foreground/80 transition-colors hover:border-foreground hover:text-foreground"
              >
                Explore all services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
