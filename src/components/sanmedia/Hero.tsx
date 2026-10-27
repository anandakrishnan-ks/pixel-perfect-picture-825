import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "@tanstack/react-router";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImg from "@/assets/hero.jpg";
import markWhite from "@/assets/sanmedia-mark-white.png.asset.json";
import { registerGsap, reducedMotion } from "./anim";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const filmRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const intro = introRef.current;
    const film = filmRef.current;
    const caption = captionRef.current;
    if (!section || !intro || !film || !caption || reducedMotion()) return;

    registerGsap();
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
        },
      });

      tl.fromTo(
        film,
        { clipPath: "inset(18% 18% 18% 18%)", opacity: 0 },
        { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, duration: 0.42, ease: "none" },
        0
      )
        .fromTo(
          film.querySelector("img"),
          { scale: 1.22 },
          { scale: 1.02, duration: 1, ease: "none" },
          0
        )
        .to(
          intro,
          { opacity: 0, scale: 0.86, y: -60, filter: "blur(6px)", duration: 0.3, ease: "power1.in" },
          0.18
        )
        .fromTo(
          caption,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.25, ease: "power1.out" },
          0.62
        );
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="top" className="relative h-[280vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-background">
        {/* Cinematic production image, revealed by scroll */}
        <div ref={filmRef} className="grain vignette absolute inset-0 will-change-transform">
          <img
            src={heroImg}
            alt="SAN MEDIA COMPANY film set at night, camera crane in a beam of light"
            width={1536}
            height={1024}
            className="h-full w-full object-cover will-change-transform"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />
          <div ref={captionRef} className="absolute bottom-10 left-6 opacity-0 lg:left-12">
            <p className="meta text-foreground/70">Scene 01 — The Production</p>
          </div>
        </div>

        {/* Opening titles */}
        <div
          ref={introRef}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
        >
          <img
            src={markWhite.url}
            alt=""
            width={72}
            height={72}
            className="mb-8 h-14 w-14 object-contain md:h-20 md:w-20"
          />
          <h1 className="display text-[15vw] leading-none tracking-[0.04em] text-foreground md:text-[9.5vw]">
            SAN MEDIA
          </h1>
          <p className="display mt-2 text-[6vw] leading-none tracking-[0.32em] text-foreground/90 md:text-[3.4vw]">
            COMPANY
          </p>
          <p className="mt-8 text-lg font-light tracking-wide text-foreground/90 md:text-2xl">
            Films. Stories. Brands. Visual Experiences.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-foreground/65 md:text-base">
            A creative media and production company based in Thiruvananthapuram, Kerala — creating
            films, campaigns and visual experiences for brands across Kerala and beyond.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/work"
              className="bg-foreground px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-85"
            >
              Explore Our Work
            </Link>
            <Link
              to="/contact"
              className="border border-foreground/40 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-foreground/10"
            >
              Start a Project
            </Link>
          </div>

          <p className="meta mt-10 text-[10px] text-foreground/60">
            Film • Advertising • Production • Visual Storytelling
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <span className="meta text-[9px] text-foreground/40">Scroll</span>
        </div>
      </div>
    </section>
  );
}
