import { HighlightItem } from "../types";

export const HighlightCard = ({ title, text, image, alt }: HighlightItem) => {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      {/* Outer Circle (Lighter Gray) */}
      <div className="flex justify-center items-center bg-gray-200 rounded-full w-20 h-20">
        {/* Inner Circle (Darker Gray) */}
        <div className="flex justify-center items-center bg-gray-300 rounded-full w-14 h-14">
          <img src={image} alt={alt} className="w-7 h-7" />
        </div>
      </div>

      {/* Title & Text */}
      <div>
        <h3 className="font-semibold text-[#101828] text-base">{title}</h3>
        <p className="font-normal text-[#475467] text-[16px]">{text}</p>
      </div>
    </div>
  );
};
