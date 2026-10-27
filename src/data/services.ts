import imgCampaign from "@/assets/service-campaign.jpg";
import imgAds from "@/assets/service-ads.jpg";
import imgSocial from "@/assets/service-social.jpg";
import imgFrame from "@/assets/story-frame.jpg";
import imgBts from "@/assets/bts-2.jpg";
import imgIdea from "@/assets/story-idea.jpg";

export type ServiceGroup = {
  n: string;
  title: string;
  tagline: string;
  desc: string;
  img: string;
  items: string[];
};

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    n: "01",
    title: "FILM & VIDEO PRODUCTION",
    tagline: "The craft at our core.",
    desc: "Full-scale film production — directed, shot and finished with cinema's eye, at any budget.",
    img: imgCampaign,
    items: [
      "Corporate films",
      "Brand films",
      "Commercials",
      "Product videos",
      "Promotional films",
      "Short films",
      "Documentary production",
    ],
  },
  {
    n: "02",
    title: "ADVERTISING & CAMPAIGNS",
    tagline: "Stories built to move markets.",
    desc: "Campaign content with a spine — one idea carried across every screen your audience owns.",
    img: imgAds,
    items: ["Advertising films", "Campaign content", "Digital campaigns", "Brand launches", "Promotional campaigns"],
  },
  {
    n: "03",
    title: "SOCIAL MEDIA CONTENT",
    tagline: "Short-form, cut with intent.",
    desc: "Feeds move fast. Ours move people — built for scroll-stopping, branded for recall.",
    img: imgSocial,
    items: ["Reels", "Short-form video", "Social media campaigns", "Creative content", "Product reels", "Brand storytelling"],
  },
  {
    n: "04",
    title: "PHOTOGRAPHY",
    tagline: "Frames that hold their ground.",
    desc: "Stills directed with the same obsession as motion — light, composition and character first.",
    img: imgFrame,
    items: ["Brand photography", "Product photography", "Corporate photography", "Event photography"],
  },
  {
    n: "05",
    title: "POST PRODUCTION",
    tagline: "Where the film is truly made.",
    desc: "Finishing that carries feeling — rhythm, colour and sound tuned frame by frame.",
    img: imgBts,
    items: ["Video editing", "Color grading", "Motion graphics", "Sound design", "Visual effects"],
  },
  {
    n: "06",
    title: "CREATIVE & VISUAL DIRECTION",
    tagline: "The thought before the frame.",
    desc: "Strategy, concept and visual language — so every rupee of production serves one clear idea.",
    img: imgIdea,
    items: ["Creative direction", "Concept development", "Script development", "Storyboarding", "Visual strategy"],
  },
];
