import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sanmedia/Hero";
import { About } from "@/components/sanmedia/About";
import { Statement } from "@/components/sanmedia/Statement";
import { Work } from "@/components/sanmedia/Work";
import { Services } from "@/components/sanmedia/Services";
import { Story } from "@/components/sanmedia/Story";
import { Budget } from "@/components/sanmedia/Budget";
import { Contact } from "@/components/sanmedia/Contact";

const SITE = "https://sanmedia.lovable.app";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "SAN MEDIA COMPANY — Film & Video Production Company in Kerala",
      },
      {
        name: "description",
        content:
          "A creative media and production company based in Thiruvananthapuram, Kerala — films, stories, brands and visual experiences for clients across Kerala and beyond.",
      },
      {
        property: "og:title",
        content: "SAN MEDIA COMPANY — Films. Stories. Brands. Visual Experiences.",
      },
      {
        property: "og:description",
        content:
          "Creative media and production company based in Trivandrum, creating across Kerala. Advertising films, brand films, corporate films, photography and campaigns.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "SAN MEDIA COMPANY",
          url: `${SITE}/`,
          email: "contact@sanmediacompany.in",
          description:
            "Creative media and production company based in Thiruvananthapuram, Kerala, serving clients across Kerala and beyond.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Thiruvananthapuram",
            addressRegion: "Kerala",
            addressCountry: "IN",
          },
          areaServed: "Kerala",
          knowsAbout: [
            "Film production",
            "Advertising films",
            "Brand films",
            "Corporate films",
            "Social media content",
            "Photography",
            "Post production",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background">
      <Hero />
      <About />
      <Statement />
      <Work />
      <Services />
      <Story />
      <Budget />
      <Contact />
    </main>
  );
}
