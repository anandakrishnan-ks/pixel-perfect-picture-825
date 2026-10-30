import { useEffect, useRef } from "react";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import gsap from "gsap";
import { PROJECTS, projectBySlug } from "@/data/projects";
import { PageShell } from "@/components/sanmedia/PageShell";
import { registerGsap, reducedMotion } from "@/components/sanmedia/anim";

const SITE = "https://sanmedia.lovable.app";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = projectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: ProjectPage,
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    return {
      meta: [
        { title: p ? `${p.title} — ${p.category} | SAN MEDIA COMPANY` : "Project | SAN MEDIA COMPANY" },
        {
          name: "description",
          content: p
            ? `${p.desc} A ${p.category.toLowerCase()} project by SAN MEDIA COMPANY, a film and video production company based in Trivandrum, Kerala.`
            : "A project by SAN MEDIA COMPANY, a film and video production company based in Trivandrum, Kerala.",
        },
        { property: "og:title", content: p ? `${p.title} | SAN MEDIA COMPANY` : "Project | SAN MEDIA COMPANY" },
        { property: "og:description", content: p?.desc ?? "A project by SAN MEDIA COMPANY." },
        { property: "og:type", content: "article" },
        { property: "og:url", content: p ? `${SITE}/work/${p.slug}` : `${SITE}/work` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: p ? `${SITE}/work/${p.slug}` : `${SITE}/work` }],
    };
  },
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const idx = PROJECTS.findIndex((p) => p.slug === project.slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length] ?? project;

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el || reducedMotion()) return;
    registerGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelector("img"),
        { scale: 1.15 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <PageShell>
      <main className="bg-background">
        {/* Full-bleed opening frame */}
        <div ref={heroRef} className="grain vignette relative h-[68vh] overflow-hidden bg-card md:h-[78vh]">
          <img
            src={project.img}
            alt={`${project.title} — ${project.category}`}
            width={1536}
            height={1024}
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/40" />
          <div className="absolute bottom-10 left-6 right-6 lg:left-12">
            <p className="meta text-foreground/70">
              {project.category} — {project.year}
            </p>
            <h1 className="display mt-4 text-[12vw] leading-none text-foreground md:text-[7.5vw]">
              {project.title}
            </h1>
          </div>
        </div>

        {/* Story */}
        <section className="mx-auto max-w-[1500px] px-6 py-24 md:py-36 lg:px-12">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="meta text-foreground/60">The film</p>
              <p className="mt-8 text-lg font-light leading-relaxed text-foreground/80 md:text-2xl md:leading-relaxed">
                {project.desc}
              </p>
            </div>
            <div className="space-y-6 md:col-span-4 md:col-start-9">
              <div className="border-t border-hairline pt-5">
                <p className="meta text-foreground/50">Category</p>
                <p className="mt-2 text-sm font-light text-foreground/85">{project.category}</p>
              </div>
              <div className="border-t border-hairline pt-5">
                <p className="meta text-foreground/50">Year</p>
                <p className="mt-2 text-sm font-light text-foreground/85">{project.year}</p>
              </div>
              <div className="border-t border-hairline pt-5">
                <p className="meta text-foreground/50">Full credits</p>
                <p className="mt-2 text-sm font-light text-foreground/85">
                  Available on request — contact@sanmediacompany.in
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-block border border-foreground/40 px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-foreground/10"
              >
                Start a project like this
              </Link>
            </div>
          </div>
        </section>

        {/* Next project */}
        <section className="border-t border-hairline">
          <Link
            to="/work/$slug"
            params={{ slug: next.slug }}
            className="group mx-auto flex max-w-[1500px] flex-wrap items-end justify-between gap-6 px-6 py-20 lg:px-12"
          >
            <div>
              <p className="meta text-foreground/50">Next project</p>
              <p className="display mt-4 text-[10vw] leading-none text-foreground transition-transform duration-700 group-hover:translate-x-3 md:text-[5.5vw]">
                {next.title}
              </p>
            </div>
            <span className="meta pb-2 text-foreground/50 transition-transform duration-700 group-hover:translate-x-3">
              {next.category} — {next.year} ▶
            </span>
          </Link>
        </section>
      </main>
    </PageShell>
  );
}
