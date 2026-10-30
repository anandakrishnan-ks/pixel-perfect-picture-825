import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerGsap, reducedMotion } from "./anim";

const LINES = [
  "WE DON'T JUST SHOOT VIDEOS.",
  "WE BUILD VISUAL EXPERIENCES.",
];

export function Statement() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;
    registerGsap();

    const words = el.querySelectorAll<HTMLElement>("[data-word]");
    gsap.set(words, { opacity: 0.12 });
    const ctx = gsap.context(() => {
      gsap.to(words, {
        opacity: 1,
        ease: "none",
        stagger: 0.5,
        scrollTrigger: {
          trigger: el,
          start: "top 72%",
          end: "bottom 55%",
          scrub: 0.4,
        },
      });
      gsap.fromTo(
        el.querySelector("[data-rule]"),
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.6,
          ease: "power3.inOut",
          scrollTrigger: { trigger: el, start: "top 70%", once: true },
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="statement" className="relative bg-paper text-ink">
      <div className="mx-auto max-w-[1500px] px-6 py-32 md:py-48 lg:px-12">
        <div data-rule className="h-px w-full origin-left bg-ink/30" />
        <p className="meta mt-10 text-ink/60">SAN MEDIA COMPANY — Trivandrum, Kerala</p>
        <h2 className="display mt-10 text-[11vw] text-ink md:text-[7.2vw] lg:text-[6.4vw]">
          {LINES.map((line) => (
            <span key={line} className="block">
              {line.split(" ").map((w) => (
                <span key={w} data-word className="inline-block pr-[0.28em]">
                  {w}
                </span>
              ))}
            </span>
          ))}
        </h2>
        <p className="lead mt-12 max-w-xl text-base leading-relaxed text-ink/70 md:text-lg">
          Your budget doesn't define the quality of your story. We create the best possible
          visual experience within it — premium cinematic production, at any scale.
        </p>
      </div>
    </section>
  );
}
