import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import markWhite from "@/assets/sanmedia-mark-white.png.asset.json";
import { revealChildren } from "./anim";
import { SOCIALS } from "@/data/projects";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "Process", to: "/process" },
  { label: "Team", to: "/team" },
  { label: "Contact", to: "/contact" },
] as const;

const linkCls =
  "group relative inline-flex w-fit items-center gap-2 text-sm font-light text-foreground/65 transition-colors duration-300 hover:text-foreground";

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  revealChildren(ref);

  return (
    <footer ref={ref} className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        {/* CTA band */}
        <div
          data-reveal
          className="flex flex-col items-start justify-between gap-8 border-t border-hairline py-16 md:flex-row md:items-end md:py-20"
        >
          <div>
            <p className="meta text-[10px] text-foreground/50">Have a story to tell?</p>
            <a
              href="mailto:contact@sanmediacompany.in"
              className="display mt-4 block break-all text-[8vw] leading-none text-foreground transition-opacity hover:opacity-75 md:text-[4.2vw]"
            >
              contact@sanmediacompany.in
            </a>
          </div>
          <Link
            to="/contact"
            className="shrink-0 bg-foreground px-8 py-4 text-xs font-extrabold uppercase tracking-[0.22em] text-background transition-opacity hover:opacity-85"
          >
            Start a Project
          </Link>
        </div>

        {/* Columns */}
        <div data-reveal className="grid grid-cols-2 gap-x-8 gap-y-12 border-t border-hairline py-14 md:grid-cols-12">
          <div className="col-span-2 md:col-span-5">
            <div className="flex items-center gap-3">
              <img src={markWhite.url} alt="" width={28} height={28} className="h-7 w-7 object-contain" />
              <span className="display text-xl tracking-[0.08em] text-foreground">SAN MEDIA COMPANY</span>
            </div>
            <p className="mt-5 max-w-sm text-sm font-light leading-relaxed text-foreground/55">
              Film • Advertising • Production • Visual Storytelling. Based in Thiruvananthapuram,
              serving clients across Kerala and beyond.
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-2 md:col-start-7">
            <p className="meta mb-5 text-[10px] text-foreground/40">Pages</p>
            <ul className="flex flex-col gap-3">
              {NAV.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Social profiles" className="md:col-span-2">
            <p className="meta mb-5 text-[10px] text-foreground/40">Follow</p>
            <ul className="flex flex-col gap-3">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className={linkCls}>
                    {s.label}
                    <span className="text-xs transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 md:col-span-2">
            <p className="meta mb-5 text-[10px] text-foreground/40">Studio</p>
            <p className="text-sm font-light leading-relaxed text-foreground/65">
              Thiruvananthapuram
              <br />
              Kerala, India
            </p>
          </div>
        </div>

        {/* Centred outlined wordmark */}
        <p
          data-reveal
          aria-hidden
          className="wordmark-outline select-none whitespace-nowrap text-center text-[11vw] leading-[0.85] md:text-[9.5vw]"
        >
          SAN MEDIA COMPANY
        </p>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-hairline py-6 text-center md:flex-row md:text-left">
          <span className="meta text-[10px] text-foreground/40">© 2026 SAN MEDIA COMPANY. All rights reserved.</span>
          <span className="meta text-[10px] text-foreground/40">Built in Trivandrum. Created across Kerala.</span>
        </div>
      </div>
    </footer>
  );
}
