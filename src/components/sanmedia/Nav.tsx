import { useEffect, useRef, useState } from "react";
import markWhite from "@/assets/sanmedia-mark-white.png.asset.json";

const LINKS = [
  { label: "Work", target: "work" },
  { label: "Services", target: "services" },
  { label: "Process", target: "process" },
  { label: "About", target: "story" },
  { label: "Contact", target: "contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    const lenis = (window as unknown as { __lenis?: { scrollTo: (t: Element, o?: object) => void } }).__lenis;
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { duration: 1.6 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 mix-blend-difference text-[#f5f4f0] transition-[padding] duration-700 ${
        scrolled ? "py-4" : "py-7"
      }`}
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 lg:px-12">
        <button
          onClick={() => go("top")}
          className="flex items-center gap-3"
          aria-label="SANMEDIA — back to top"
        >
          <img
            src={markWhite.url}
            alt=""
            width={30}
            height={30}
            className="h-7 w-7 object-contain"
          />
          <span className="display text-lg tracking-[0.08em]">SANMEDIA</span>
        </button>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {LINKS.map((l) => (
            <button
              key={l.target}
              onClick={() => go(l.target)}
              className="meta text-[10px] text-[#f5f4f0]/80 transition-colors hover:text-[#f5f4f0]"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <button
          className="meta text-[10px] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background/95 backdrop-blur-sm"
          aria-label="Mobile"
        >
          {LINKS.map((l) => (
            <button
              key={l.target}
              onClick={() => go(l.target)}
              className="display text-4xl text-foreground"
            >
              {l.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
