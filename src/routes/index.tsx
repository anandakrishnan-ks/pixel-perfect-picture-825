import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Nav } from "@/components/sanmedia/Nav";
import { Hero } from "@/components/sanmedia/Hero";
import { Work } from "@/components/sanmedia/Work";
import { Services } from "@/components/sanmedia/Services";
import { Story } from "@/components/sanmedia/Story";
import { Statement } from "@/components/sanmedia/Statement";
import { Budget } from "@/components/sanmedia/Budget";
import { About } from "@/components/sanmedia/About";
import { Contact } from "@/components/sanmedia/Contact";
import { GrainOverlay } from "@/components/sanmedia/GrainOverlay";
import { registerGsap, reducedMotion } from "@/components/sanmedia/anim";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useEffect(() => {
    if (reducedMotion()) return;
    registerGsap();
    const lenis = new Lenis({ duration: 1.25, smoothWheel: true });
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      (window as unknown as { __lenis?: Lenis }).__lenis = undefined;
    };
  }, []);

  return (
    <main className="bg-background">
      <Nav />
      <GrainOverlay />
      <Hero />
      <Work />
      <Services />
      <Story />
      <Statement />
      <Budget />
      <About />
      <Contact />
    </main>
  );
}
