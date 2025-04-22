import { PrimaryButton } from "@/components/primary-button";
import { heroContent } from "../constants";

export const HeroText = ({ onCTAClick }: { onCTAClick: () => void }) => {
  const { title, subtitle, buttonText } = heroContent;
  return (
    <div className="gap-12 grid max-w-5xl">
      <div className="gap-4 xs:gap-6 sm:gap-8 grid">
        <h1 className="font-semibold text-[#101828] text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          {title}
        </h1>
        <p className="max-w-[300px] sm:max-w-[450px] md:max-w-[575px] font-normal text-[#475467] text-base sm:text-lg md:text-2xl">
          {subtitle}
        </p>
      </div>
      <PrimaryButton onClick={onCTAClick} text={buttonText} />
    </div>
  );
};
