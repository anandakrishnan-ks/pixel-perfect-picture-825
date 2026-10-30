import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import markWhite from "@/assets/sanmedia-mark-white.png.asset.json";

const LINKS = [
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Process", to: "/process" },
  { label: "Team", to: "/team" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Close the overlay whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 mix-blend-difference text-[#f5f4f0] transition-[padding] duration-700 ${
          scrolled ? "py-4" : "py-8"
        }`}
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-6 px-6 lg:px-12">
          <Link to="/" className="flex shrink-0 items-center gap-3" aria-label="SAN MEDIA COMPANY — home">
            <img src={markWhite.url} alt="" width={30} height={30} className="h-8 w-8 object-contain lg:h-10 lg:w-10" />
            <span className="display text-base tracking-[0.08em] md:text-xl lg:text-2xl">SAN MEDIA COMPANY</span>
          </Link>

          <nav className="hidden items-center gap-10 lg:flex xl:gap-14" aria-label="Primary">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: false }}
                className="relative font-sans text-[13px] font-extrabold uppercase tracking-[0.22em] text-[#f5f4f0]/75 transition-colors after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-[#f5f4f0] after:transition-all after:duration-500 hover:text-[#f5f4f0] hover:after:w-full"
                activeProps={{ className: "!text-[#f5f4f0] after:!w-full" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden shrink-0 bg-[#f5f4f0] px-7 py-3.5 font-sans text-[12px] font-extrabold uppercase tracking-[0.22em] text-[#0a0a0a] transition-opacity hover:opacity-85 lg:block"
          >
            Start a Project
          </Link>

          <button
            className="meta text-[10px] lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {/* Full-screen mobile menu, cinematic open — outside the blend header so it reads cleanly */}
      <nav
        aria-label="Mobile"
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-background transition-opacity duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {[...LINKS, { label: "Contact", to: "/contact" }].map((l, i) => (
          <Link
            key={l.to}
            to={l.to}
            style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
            className={`display text-5xl text-foreground transition-all duration-700 ${
              open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {l.label}
          </Link>
        ))}
        <p className="meta mt-8 text-[10px] text-foreground/50">Thiruvananthapuram — Kerala</p>
      </nav>
    </>
  );
}
