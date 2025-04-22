import { heroImage } from "../constants";

export const HeroImage = () => (
  <div className="relative flex justify-center lg:justify-end px-4 lg:px-8 w-full max-w-3xl lg:max-w-7xl">
    <img {...heroImage} loading="lazy" />
  </div>
);
