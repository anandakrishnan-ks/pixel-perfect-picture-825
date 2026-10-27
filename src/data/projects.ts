import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  desc: string;
  img: string;
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

export const PROJECTS: Project[] = [
  {
    slug: "the-inheritance",
    title: "THE INHERITANCE",
    category: "Films",
    year: "2025",
    desc: "A generational drama shot across the heritage homes of Kerala — silence, sunlight and a single door left open.",
    img: work1,
  },
  {
    slug: "still-waters",
    title: "STILL WATERS",
    category: "Campaigns",
    year: "2025",
    desc: "Backwater mornings, mist and nets — a tourism film that trades postcards for patience.",
    img: work2,
  },
  {
    slug: "bodies-in-motion",
    title: "BODIES IN MOTION",
    category: "Brand Films",
    year: "2024",
    desc: "Two dancers, one warehouse, one light — a festival identity film about gravity and grace.",
    img: work3,
  },
  {
    slug: "night-drive",
    title: "NIGHT DRIVE",
    category: "Advertising",
    year: "2024",
    desc: "A launch film for a classic reborn — wet asphalt, one streetlight and a city that never looks back.",
    img: work4,
  },
  {
    slug: "half-light",
    title: "HALF LIGHT",
    category: "Photography",
    year: "2023",
    desc: "A portrait series in single-source light — character over costume.",
    img: work5,
  },
  {
    slug: "the-carver",
    title: "THE CARVER",
    category: "Films",
    year: "2023",
    desc: "Behind the hands of a Kathakali mask maker — a documentary short about devotion and detail.",
    img: work6,
  },
];

export const projectBySlug = (slug: string) => PROJECTS.find((p) => p.slug === slug);

/** Grid span pattern for the editorial work grid. */
export const spanFor = (i: number) => (i % 2 === 0 ? "md:col-span-7" : "md:col-span-5");
