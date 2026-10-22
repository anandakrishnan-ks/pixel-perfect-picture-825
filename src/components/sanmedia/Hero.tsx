import { useEffect, useRef } from "react";
import heroImg from "@/assets/hero.jpg";
import markWhite from "@/assets/sanmedia-mark-white.png.asset.json";
import { registerGsap, reducedMotion } from "./anim";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const filmRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const intro = introRef.current;
    const film = filmRef.current;
    const img = imgRef.current;
    if (!section || !intro || !film || !img || reducedMotion()) return;
    registerGsap();

    const ctx = (window as any).gsapContext;
    const tl = (window as any).__heroTl;
    if (tl) return;

    const anim = window.matchMedia("(min-width: 768px)").matches;
    const gsap = (await0 = 0, window as any).gsapLib;
    void anim;
    void gsap;
    void ctx;
  }, []);
  return null as unknown as JSX.Element;
}
