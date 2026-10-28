import { useRef, useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { FILTERS, PROJECTS, spanFor } from "@/data/projects";
import { PageHero } from "@/components/sanmedia/PageHero";
import { WorkCard } from "@/components/sanmedia/WorkCard";
import { revealChildren } from "@/components/sanmedia/anim";

const SITE = "https://sanmedia.lovable.app";

export const Route = createFileRoute("/work/")({
  component: WorkPage,
  head: () => ({
    meta: [
      { title: "Work — Films, Campaigns & Photography | SAN MEDIA COMPANY" },
      {
        name: "description",
        content:
          "Selected films, advertising campaigns, brand films and photography by SAN MEDIA COMPANY — a film and video production company based in Trivandrum, Kerala.",
      },
      { property: "og:title", content: "Selected Work | SAN MEDIA COMPANY" },
      {
        property: "og:description",
        content:
          "Films, campaigns and photography from a Kerala-based creative production house — 2023 to 2025.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/work` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/work` }],
  }),
});

function WorkPage() {
  const [filter, setFilter] = useState<string>("All");
  const ref = useRef<HTMLDivElement>(null);
  revealChildren(ref, 0.06);

  const projects = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <main className="bg-background">
      <PageHero
        label="Work"
        title={
          <>
            SELECTED
            <br />
            WORK.
          </>
        }
        sub="Films, campaigns and photography — 2023 to 2025. More work is being cut right now."
      />

      {/* Category filter */}
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div
          className="flex flex-wrap gap-x-7 gap-y-3 border-y border-hairline py-5"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {FILTERS.map((c) => {
            const active = filter === c;
            const count = c === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === c).length;
            return (
              <button
                key={c}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(c)}
                className={`meta text-[10px] transition-all duration-500 ${
                  active
                    ? "border-b border-foreground pb-1 text-foreground"
                    : "border-b border-transparent pb-1 text-foreground/45 hover:text-foreground/80"
                }`}
              >
                {c} <span className="text-foreground/30">{count}</span>
              </button>
            );
          })}
        </div>

        <div ref={ref} className="grid grid-cols-1 gap-x-10 gap-y-20 pt-16 pb-32 md:grid-cols-12 md:gap-y-28">
          {projects.map((p, i) => (
            <WorkCard key={`${filter}-${p.slug}`} project={p} span={spanFor(i)} eager={i < 2} />
          ))}

          {projects.length === 0 && (
            <div className="col-span-1 flex flex-col items-start gap-6 py-16 md:col-span-12">
              <p className="display text-3xl text-foreground/80 md:text-5xl">
                {filter} — the next reel is being cut.
              </p>
              <p className="max-w-md text-base font-light leading-relaxed text-foreground/60">
                We're working on new {filter.toLowerCase()} projects right now. Ask us what's in
                production — or bring yours to us first.
              </p>
              <Link
                to="/contact"
                className="meta border-b border-foreground/40 pb-1 text-[10px] text-foreground/80 transition-colors hover:border-foreground hover:text-foreground"
              >
                Start a project
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
