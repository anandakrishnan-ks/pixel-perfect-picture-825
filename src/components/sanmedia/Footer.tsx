import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import markWhite from "@/assets/sanmedia-mark-white.png.asset.json";
import { revealChildren } from "./anim";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "Process", to: "/process" },
  { label: "Team", to: "/team" },
  { label: "Contact", to: "/contact" },
] as const;

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  revealChildren(ref);

  return (
    <footer ref={ref} className="relative bg-background">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div data-reveal className="flex flex-wrap items-end justify-between gap-10 border-t border-hairline pt-14">
          <div>
            <div className="flex items-center gap-3">
              <img src={markWhite.url} alt="" width={28} height={28} className="h-6 w-6 object-contain" />
              <span className="display text-xl tracking-[0.08em] text-foreground">SAN MEDIA COMPANY</span>
            </div>
            <p className="meta mt-4 text-[10px] text-foreground/50">
              Film • Advertising • Production • Visual Storytelling
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-10 gap-y-3">
            {NAV.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="meta text-[10px] text-foreground/60 transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div data-reveal className="mt-12 flex flex-wrap items-start justify-between gap-8">
          <div className="space-y-2">
            <a
              href="mailto:contact@sanmediacompany.in"
              className="display block text-2xl text-foreground transition-opacity hover:opacity-80 md:text-3xl"
            >
              contact@sanmediacompany.in
            </a>
            <p className="meta text-[10px] text-foreground/50">Thiruvananthapuram, Kerala, India</p>
            <p className="meta text-[10px] text-foreground/40">Serving clients across Kerala and beyond</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2" aria-label="Social profiles (links to be added)">
            <span className="meta text-[10px] text-foreground/40">Instagram — link to be added</span>
            <span className="meta text-[10px] text-foreground/40">YouTube — link to be added</span>
            <span className="meta text-[10px] text-foreground/40">LinkedIn — link to be added</span>
          </div>
          <span className="meta text-[10px] text-foreground/40">© 2026 SAN MEDIA COMPANY. All rights reserved.</span>
        </div>

        <p data-reveal aria-hidden className="wordmark-outline mt-10 select-none whitespace-nowrap text-[8vw] leading-[0.9]">
          SAN MEDIA COMPANY
        </p>
        <div className="h-10" />
      </div>
    </footer>
  );
}
