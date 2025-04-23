import { ImageMeta } from "@/types";
import { CheckmarkItems } from "./types";

export const checkmarkImage: ImageMeta = {
  src: "/images/icons/Check.png",
  alt: "Check",
  className: "w-6 h-6",
};

export const aboutImage: ImageMeta = {
  src: "/images/About.png",
  alt: "תמונה של אלירן שלומוב",
  className: "pb-10 sm:pb-0 w-full max-w-[576px] h-auto object-contain",
};

export const checkmarkItems: CheckmarkItems[] = [
  "בניית תמהיל שמתאים לכם, לא לבנק.",
  "חיסכון אמיתי – גם בכסף וגם בעצבים.",
  "ליווי אישי לאורך כל הדרך.",
];
