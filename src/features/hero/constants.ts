import { ImageMeta } from "@/types";
import { HeroContent } from "./types";

export const heroImage: ImageMeta = {
  src: "/images/Hero.png",
  alt: "Hero",
  className: "w-full h-auto object-cover",
};

export const heroContent: HeroContent = {
  title: "משכנתא חכמה, מתחילה בייעוץ נכון!",
  subtitle: "נוציא מהבנק את המקסימום כדי שתשלמו פחות ותרוויחו יותר.",
  buttonText: "צור קשר",
};
