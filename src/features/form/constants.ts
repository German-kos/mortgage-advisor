import { ImageMeta } from "@/types";
import { FieldConfig } from "./types";

export const fullNameFields: FieldConfig[] = [
  { name: "firstName", label: "שם פרטי", type: "text" },
  { name: "lastName", label: "שם משפחה", type: "text" },
];

export const formImage: ImageMeta = {
  src: "/images/Form.png",
  alt: "Form",
  className: "pb-10 sm:pb-0 w-full max-w-[576px] h-auto object-contain",
};
