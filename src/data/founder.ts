import founderPhoto from "@/assets/ajmal-niaz.png.asset.json";

/**
 * EDITABLE PLACEHOLDERS — replace these with the real founder details when supplied.
 * Nothing here should be presented as real information until replaced.
 */
export const FOUNDER = {
  name: "Ajmal Niaz",
  title: "Founder & CEO",
  bio: "",
  vision: "",
  quote: "",
  /** Condensed note shown on About and Team — kept short so it sits level with the portrait. */
  message: [
    "I started SAN MEDIA COMPANY in Thiruvananthapuram with a simple belief — every story deserves to be told with honesty, intention, and a perspective of its own.",
    "For every client we work with, the story comes first. We take the time to understand what makes a brand, person, or idea unique — and translate that into work that feels authentic, not manufactured.",
    "As we grow, one thing never changes: the standard we hold ourselves to. Every brief, large or small, gets the same attention to detail, creativity, and commitment to doing the work right.",
    "Thank you for considering SAN MEDIA COMPANY. Whether you're here from Thiruvananthapuram, across Kerala, or beyond, we'd be honoured to hear your story.",
  ] as string[],
  /** Full founder's note as supplied — kept for reference, not rendered. */
  messageFull: [
    "I started SAN MEDIA COMPANY in Thiruvananthapuram with a simple belief — every story deserves to be told with honesty, intention, and a perspective of its own. What began as a passion for visual storytelling has grown into a space where ideas can take shape and connect with people in a meaningful way.",
    "For every client we work with, the story comes first. We take the time to understand what makes a brand, person, or idea unique, and translate that into work that feels authentic rather than manufactured. We believe the best stories aren't just seen — they are felt.",
    "As we grow, one thing will never change: the standard we hold ourselves to. Whether it's a large production or a small project, we approach every brief with the same attention to detail, creativity, and commitment to doing the work right.",
    "Thank you for considering SAN MEDIA COMPANY. Whether you're here from Thiruvananthapuram, somewhere across Kerala, or beyond, we'd be honoured to hear your story and explore what we can create together.",
  ] as string[],

  photo: founderPhoto.url as string | null,
};

export type TeamMember = {
  role: string;
  desc: string;
  founder?: boolean;
};

/** Production roles the company covers. */
export const TEAM_MEMBERS: TeamMember[] = [
  { role: "Creative Director", desc: "Owns the idea — concept, tone and the visual language of every project." },
  { role: "Director", desc: "Leads the shoot — performance, blocking and the feeling inside each frame." },
  { role: "Cinematographer", desc: "Paints with light — composition, camera movement and the look of the film." },
  { role: "Editor", desc: "Finds the rhythm — structure, pacing and the cut that makes it land." },
  { role: "Motion Graphics Designer", desc: "Designs in motion — titles, graphics and animation with intent." },
  { role: "Photographer", desc: "Stills with a director's eye — brand, product and event photography." },
  { role: "Production Manager", desc: "Keeps the machine honest — schedules, logistics, locations and crew." },
  { role: "Social Media Manager", desc: "Carries the story online — platform-native cuts and community." },
  { role: "Administrator", desc: "Holds the spine — accounts, coordination and everything behind the camera." },
  { role: "Production Assistant", desc: "The hands on deck — support on set and in the edit, learning the craft." },
];
