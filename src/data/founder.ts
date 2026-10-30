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
  /** Founder message paragraphs — add Ajmal's real words here; the block stays hidden while empty. */
  message: [] as string[],
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
