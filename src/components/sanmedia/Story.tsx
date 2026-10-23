import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imgIdea from "@/assets/story-idea.jpg";
import imgFrame from "@/assets/story-frame.jpg";
import imgProduction from "@/assets/story-production.jpg";
import imgFilm from "@/assets/story-film.jpg";
import { registerGsap, reducedMotion } from "./anim";

const STAGES = [
  { n: "01", title: "THE IDEA", quote: "Every film begins with a thought.", img: imgIdea },
  { n: "02", title: "THE FRAME", quote: "We turn that thought into a visual language.", img: imgFrame },
  { n: "03", title: "THE PRODUCTION", quote: "Every detail is planned. Every frame has a purpose.", img: imgProduction },
  { n: "04", title: "THE FILM", quote: "Your story becomes something people remember.", img: imgFilm },
];

export function Story() {
  const wrapRef = useRef<HTMLElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap || reducedMotion()) return;
    registerGsap();

    const texts = textRefs.current.filter((el): el is HTMLDivElement => Boolean(el));
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

      // Stage 0 is visible from the start.
      gsap.set(texts[0], { autoAlpha: 1 });
      gsap.set(texts.slice(1), { autoAlpha: 0 });
      gsap.set(imgs[0], { opacity: 1 });
      gsap.set(imgs.slice(1), { opacity: 0 });

      STAGES.forEach((_, i) => {
        if (i === 0) return;
        const prevText = texts[i - 1];
        const prevImg = imgs[i - 1];
        const nextText = texts[i];
        const nextImg = imgs[i];
        if (!prevText || !prevImg || !nextText || !nextImg) return;
        tl.to(prevText, { autoAlpha: 0, y: -50, duration: 0.2, ease: "power1.in" }, i - 0.25)
          .to(prevImg, { opacity: 0, duration: 0.3, ease: "none" }, i - 0.25)
          .fromTo(
            nextText,
            { autoAlpha: 0, y: 50 },
            { autoAlpha: 1, y: 0, duration: 0.25, ease: "power1.out" },
            i
          )
          .to(nextImg, { opacity: 1, duration: 0.35, ease: "none" }, i);
      });

      if (barRef.current) {
        tl.fromTo(barRef.current, { scaleX: 0 }, { scaleX: 1, duration: STAGES.length, ease: "none" }, 0);
      }
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrapRef} id="story" className="relative h-[480vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-background">
        {/* Stage imagery */}
        {STAGES.map((s, i) => (
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
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-background/55" />
          </div>
        ))}

        {/* Stage text */}
        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto w-full max-w-[1500px] px-6 pb-24 lg:px-12">
            {STAGES.map((s, i) => (
              <div
                key={s.n}
                ref={(el) => {
                  textRefs.current[i] = el;
                }}
                className="absolute bottom-24 left-6 lg:left-12"
              >
                <p className="meta text-foreground/60">{s.n}</p>
                <h3 className="display mt-3 text-5xl text-foreground md:text-7xl">{s.title}</h3>
                <p className="mt-4 max-w-md text-base font-light text-foreground/75 md:text-lg">
                  {s.quote}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Progress */}
        <div className="absolute bottom-10 left-6 right-6 z-10 h-px bg-foreground/15 lg:left-12 lg:right-12">
          <div ref={barRef} className="h-full origin-left bg-foreground/80" />
        </div>
      </div>
    </section>
  );
}
