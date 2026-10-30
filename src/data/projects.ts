import falooda from "@/assets/be-falooda-nation.png.asset.json";
import muffin from "@/assets/be-muffin-house-onam.png.asset.json";
import luka from "@/assets/be-lukas-baptism.jpg.asset.json";
import rad from "@/assets/be-rad-fitness.jpg.asset.json";
import koilon from "@/assets/be-koilon-nuts.jpg.asset.json";
import diya from "@/assets/be-diya-krishna-aranyavedha.jpg.asset.json";
import inlifeT from "@/assets/be-inlife-testimonial.jpg.asset.json";
import aranya from "@/assets/be-aranyavedha-wellness.jpg.asset.json";
import inlife from "@/assets/be-inlife-interiors.jpg.asset.json";
import udaya from "@/assets/be-udaya-podcast.jpg.asset.json";

export const BEHANCE_URL = "https://www.behance.net/sanmediacompany1";
export const INSTAGRAM_URL = "https://www.instagram.com/sanmediacompany/";
export const YOUTUBE_URL = "https://www.youtube.com/@sanmediacompany";

export const SOCIALS = [
  { label: "Instagram", href: INSTAGRAM_URL },
  { label: "YouTube", href: YOUTUBE_URL },
  { label: "Behance", href: BEHANCE_URL },
] as const;

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  desc: string;
  img: string;
  behance: string;
};

export const CATEGORIES = [
  "Films",
  "Advertising",
  "Brand Films",
  "Corporate",
  "Product",
  "Social Media",
  "Campaigns",
  "Photography",
] as const;

export const FILTERS = ["All", ...CATEGORIES] as const;

const G = "https://www.behance.net/gallery";

/** All projects published on the SAN MEDIA COMPANY Behance profile. */
export const PROJECTS: Project[] = [
  {
    slug: "falooda-nation-pradhama-drishtya-kuttakkar",
    title: "Falooda Nation | Pradhama Drishtya Kuttakkar",
    client: "Falooda Nation",
    category: "Advertising",
    desc: "Pradhama Drishtya Kuttakkar — an advertising piece made for Falooda Nation.",
    img: falooda.url,
    behance: `${G}/256047179/Falooda-Nation-Pradhama-Drishtya-Kuttakkar`,
  },
  {
    slug: "onam-with-muffin-house-india",
    title: "Onam with Muffin House India | Reels",
    client: "Muffin House India",
    category: "Social Media",
    desc: "A set of Onam reels made for Muffin House India.",
    img: muffin.url,
    behance: `${G}/255308651/Onam-with-Muffin-House-India-Reels`,
  },
  {
    slug: "lukas-baptism",
    title: "Luka's Baptism",
    client: "Private event",
    category: "Films",
    desc: "A film capturing Luka's baptism.",
    img: luka.url,
    behance: `${G}/253481289/Lukas-Baptism`,
  },
  {
    slug: "rad-fitness",
    title: "For Rad Fitness",
    client: "Rad Fitness",
    category: "Brand Films",
    desc: "Brand content made for Rad Fitness.",
    img: rad.url,
    behance: `${G}/253399769/For-Rad-Fitness`,
  },
  {
    slug: "koilon-nuts",
    title: "For Koilon Nuts via BASE",
    client: "Koilon Nuts",
    category: "Product",
    desc: "Product content made for Koilon Nuts, produced via BASE.",
    img: koilon.url,
    behance: `${G}/253399251/For-Koilon-Nuts-via-BASE`,
  },
  {
    slug: "diya-krishna-aranyavedha-wellness",
    title: "Diya Krishna | For Aranyavedha Wellness",
    client: "Aranyavedha Wellness",
    category: "Campaigns",
    desc: "A campaign piece featuring Diya Krishna, made for Aranyavedha Wellness.",
    img: diya.url,
    behance: `${G}/253398737/Diya-Krishna-For-Aranyavedha-Wellness`,
  },
  {
    slug: "inlife-interior-designers-testimonial",
    title: "For InLife Interior Designers | Testimonial",
    client: "InLife Interior Designers",
    category: "Corporate",
    desc: "A client testimonial film made for InLife Interior Designers.",
    img: inlifeT.url,
    behance: `${G}/253398535/For-InLife-Interior-Designers-Testimonial`,
  },
  {
    slug: "aranyavedha-wellness",
    title: "For Aranyavedha Wellness",
    client: "Aranyavedha Wellness",
    category: "Brand Films",
    desc: "Brand content made for Aranyavedha Wellness.",
    img: aranya.url,
    behance: `${G}/253398229/For-Aranyavedha-Wellness`,
  },
  {
    slug: "inlife-interior-designers",
    title: "Work done for InLife Interior Designers",
    client: "InLife Interior Designers",
    category: "Photography",
    desc: "Visual work made for InLife Interior Designers.",
    img: inlife.url,
    behance: `${G}/253398009/Work-done-for-InLife-Interior-Designers`,
  },
  {
    slug: "udaya-agencies-podcast-highlights",
    title: "Work done for Udaya Agencies | Podcast Highlights",
    client: "Udaya Agencies",
    category: "Corporate",
    desc: "Podcast highlight edits made for Udaya Agencies.",
    img: udaya.url,
    behance: `${G}/253347475/Work-done-for-Udaya-Agencies-Podcast-Highlights`,
  },
];

export const projectBySlug = (slug: string) => PROJECTS.find((p) => p.slug === slug);

/** Grid span pattern for the editorial work grid. */
export const spanFor = (i: number) => (i % 2 === 0 ? "md:col-span-7" : "md:col-span-5");
