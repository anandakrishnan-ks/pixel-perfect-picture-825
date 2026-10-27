import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { registerGsap, reducedMotion } from "./anim";

/** Wraps every page so route changes get the same cinematic fade-and-rise entrance. */
export function PageShell({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;
    registerGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1.1, ease: "power3.out" }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return <div ref={ref}>{children}</div>;
}
