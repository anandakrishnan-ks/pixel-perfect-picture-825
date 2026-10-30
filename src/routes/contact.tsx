import { useRef, useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/sanmedia/PageShell";
import { PageHero } from "@/components/sanmedia/PageHero";
import { revealChildren } from "@/components/sanmedia/anim";
import { SERVICE_GROUPS } from "@/data/services";

const SITE = "https://sanmedia.lovable.app";
const EMAIL = "contact@sanmediacompany.in";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Start a Project | SAN MEDIA COMPANY, Trivandrum Kerala" },
      {
        name: "description",
        content:
          "Have a story, campaign or idea in mind? Start a project with SAN MEDIA COMPANY — a film and video production company based in Thiruvananthapuram, serving clients across Kerala and beyond.",
      },
      { property: "og:title", content: "Start a Project | SAN MEDIA COMPANY" },
      {
        property: "og:description",
        content:
          "Have a story, campaign or idea in mind? Let's build it. SAN MEDIA COMPANY — Thiruvananthapuram, Kerala, serving clients across Kerala and beyond.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/contact` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/contact` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "SAN MEDIA COMPANY",
          email: EMAIL,
          sameAs: ["https://www.instagram.com/sanmediacompany/", "https://www.youtube.com/@sanmediacompany", "https://www.behance.net/sanmediacompany1"],
          url: `${SITE}/`,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Thiruvananthapuram",
            addressRegion: "Kerala",
            addressCountry: "IN",
          },
          areaServed: "Kerala",
          description:
            "Creative media and production company — films, advertising, social content, photography and post production.",
        }),
      },
    ],
  }),
});

const BUDGETS = ["Under ₹1 lakh", "₹1–5 lakh", "₹5–20 lakh", "₹20 lakh+", "Not sure yet"];
const TIMELINES = ["As soon as possible", "Within 1 month", "1–3 months", "3–6 months", "Flexible"];

const inputCls =
  "w-full border-b border-hairline bg-transparent py-3 text-[1rem] font-light text-foreground placeholder:text-foreground/30 focus:border-foreground focus:outline-none transition-colors";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  timeline: string;
  details: string;
};

const EMPTY: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  timeline: "",
  details: "",
};

function ContactPage() {
  const ref = useRef<HTMLDivElement>(null);
  revealChildren(ref, 0.08);

  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof FormState) => (value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    if (!form.name.trim()) next.name = "Please add your name.";
    if (!form.email.trim()) next.email = "Please add your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "That email doesn't look right.";
    if (!form.details.trim()) next.details = "Tell us a little about the project.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const subject = `Project enquiry — ${form.name.trim()}${form.company.trim() ? ` (${form.company.trim()})` : ""}`;
    const body = [
      `Name: ${form.name.trim()}`,
      `Company: ${form.company.trim() || "—"}`,
      `Email: ${form.email.trim()}`,
      `Phone: ${form.phone.trim() || "—"}`,
      `Service required: ${form.service || "—"}`,
      `Budget range: ${form.budget || "—"}`,
      `Preferred timeline: ${form.timeline || "—"}`,
      "",
      "Project details:",
      form.details.trim(),
    ].join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <PageShell>
      <main className="bg-background">
        <PageHero
          label="Contact"
          number="05"
          variant="statement"
          aside={
            <a href="mailto:contact@sanmediacompany.in" className="display block break-all text-[clamp(1.05rem,6.2vw,1.75rem)] leading-none text-foreground/90 underline decoration-foreground/20 underline-offset-[0.2em] transition-colors hover:decoration-foreground md:text-[4.2vw]">
              contact@sanmediacompany.in
            </a>
          }
          title={
            <>
              START A
              <br />
              PROJECT.
            </>
          }
          sub="Have a story, campaign or idea in mind? Let's build it."
        />

        <div ref={ref} className="mx-auto max-w-[1500px] px-6 pb-32 lg:px-12">
          <div className="grid gap-16 border-t border-hairline pt-16 md:grid-cols-12">
            {/* Info column */}
            <div data-reveal className="space-y-10 md:col-span-4">
              <div>
                <p className="meta text-foreground/50">Email</p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="display mt-4 block break-all text-[clamp(1rem,6.6vw,1.5rem)] text-foreground transition-opacity hover:opacity-80 md:text-[1.75rem]"
                >
                  {EMAIL}
                </a>
              </div>
              <div>
                <p className="meta text-foreground/50">Location</p>
                <p className="mt-4 text-base font-light leading-relaxed text-foreground/80">
                  Thiruvananthapuram, Kerala, India
                </p>
                <p className="meta mt-3 text-[10px] text-foreground/45">
                  Serving clients across Kerala and beyond
                </p>
              </div>
              <div>
                <p className="meta text-foreground/50">What happens next</p>
                <p className="mt-4 text-base font-light leading-relaxed text-foreground/70">
                  Tell us the story, the screen it's meant for and the budget you have in mind.
                  We'll come back with a plan — and a picture of what it can become.
                </p>
              </div>
            </div>

            {/* Form column */}
            <form data-reveal className="md:col-span-7 md:col-start-6" onSubmit={submit} noValidate>
              <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
                <label className="block">
                  <span className="meta text-[9px] text-foreground/50">Name *</span>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => set("name")(e.target.value)}
                    placeholder="Your name"
                    className={inputCls}
                    autoComplete="name"
                  />
                  {errors.name && <span className="meta mt-2 block text-[9px] text-red-400">{errors.name}</span>}
                </label>
                <label className="block">
                  <span className="meta text-[9px] text-foreground/50">Company</span>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => set("company")(e.target.value)}
                    placeholder="Brand or company"
                    className={inputCls}
                    autoComplete="organization"
                  />
                </label>
                <label className="block">
                  <span className="meta text-[9px] text-foreground/50">Email *</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => set("email")(e.target.value)}
                    placeholder="you@company.com"
                    className={inputCls}
                    autoComplete="email"
                  />
                  {errors.email && <span className="meta mt-2 block text-[9px] text-red-400">{errors.email}</span>}
                </label>
                <label className="block">
                  <span className="meta text-[9px] text-foreground/50">Phone</span>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => set("phone")(e.target.value)}
                    placeholder="+91"
                    className={inputCls}
                    autoComplete="tel"
                  />
                </label>
                <label className="block">
                  <span className="meta text-[9px] text-foreground/50">Service required</span>
                  <select
                    value={form.service}
                    onChange={(e) => set("service")(e.target.value)}
                    className={`${inputCls} appearance-none`}
                  >
                    <option value="" className="bg-background text-foreground">Select a service</option>
                    {SERVICE_GROUPS.map((g) => (
                      <option key={g.n} value={g.title} className="bg-background text-foreground">
                        {g.title}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="meta text-[9px] text-foreground/50">Budget range</span>
                  <select
                    value={form.budget}
                    onChange={(e) => set("budget")(e.target.value)}
                    className={`${inputCls} appearance-none`}
                  >
                    <option value="" className="bg-background text-foreground">Select a range</option>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b} className="bg-background text-foreground">
                        {b}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block md:col-span-2">
                  <span className="meta text-[9px] text-foreground/50">Preferred timeline</span>
                  <select
                    value={form.timeline}
                    onChange={(e) => set("timeline")(e.target.value)}
                    className={`${inputCls} appearance-none`}
                  >
                    <option value="" className="bg-background text-foreground">Select a timeline</option>
                    {TIMELINES.map((t) => (
                      <option key={t} value={t} className="bg-background text-foreground">
                        {t}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block md:col-span-2">
                  <span className="meta text-[9px] text-foreground/50">Project details *</span>
                  <textarea
                    value={form.details}
                    onChange={(e) => set("details")(e.target.value)}
                    placeholder="The story, the screen it's meant for, and anything else we should know."
                    rows={5}
                    className={`${inputCls} resize-none`}
                  />
                  {errors.details && <span className="meta mt-2 block text-[9px] text-red-400">{errors.details}</span>}
                </label>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-6">
                <button
                  type="submit"
                  className="bg-foreground px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-85"
                >
                  Submit Enquiry
                </button>
                <p className="meta text-[9px] text-foreground/40">
                  Opens your email app with the brief pre-filled
                </p>
              </div>

              {sent && (
                <p className="meta mt-8 border border-hairline p-5 text-[10px] leading-relaxed text-foreground/70">
                  Your email app should now be open with the brief pre-filled. If nothing opened,
                  write to us directly at {EMAIL}.
                </p>
              )}
            </form>
          </div>
        </div>
      </main>
    </PageShell>
  );
}
