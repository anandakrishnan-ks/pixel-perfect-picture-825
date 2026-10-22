import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const reducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const registerGsap = () => {
  gsap.registerPlugin(ScrollTrigger);
};

export const isDesktopMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches;

/** Reveals children marked [data-reveal] with a slow cinematic rise as the section enters. */
export function revealChildren(ref: RefObject<HTMLElement | null>, stagger = 0.12) {
  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;
    registerGsap();
    const targets = el.querySelectorAll("[data-reveal]");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { y: 56, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out",
          stagger,
          scrollTrigger: { trigger: el, start: "top 78%", once: true },
        }
      );
    }, el);
    return () => ctx.revert();
  }, [ref, stagger]);
}

/** Scrubs a value from 0..1 across the element's scroll runway. */
export function scrubProgress(
  trigger: RefObject<HTMLElement | null>,
  onUpdate: (p: number) => void,
  length = 1
) {
  useEffect(() => {
    const el = trigger.current;
    if (!el || reducedMotion()) return;
    registerGsap();
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top top",
      end: () => `+=${el.offsetHeight * length}`,
      scrub: true,
      onUpdate: (self) => onUpdate(self.progress),
    });
    return () => st.kill();
  });
}
