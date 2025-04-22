import { CustomBox, CustomContainer } from "@/components";
import { TestimonialCarousel } from "./components";

const Testimonials = () => {
  return (
    <CustomBox
      id="testimonials"
      className="flex flex-col items-center bg-white py-8 sm:py-16"
    >
      <CustomContainer>
        <div className="flex flex-col items-center gap-3 pb-6 w-full">
          <h3 className="font-semibold text-[#2C3E50] text-base">המלצות</h3>
          <h2 className="font-semibold text-[#101828] text-4xl">
            המלצות הלקוחות
          </h2>
        </div>
      </CustomContainer>

      <TestimonialCarousel />
    </CustomBox>
  );
};

export default Testimonials;
