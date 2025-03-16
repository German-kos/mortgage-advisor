import { Grid } from "@radix-ui/themes/components/grid";
import { CustomBox } from "./CustomBox";
import { CustomContainer } from "./CustomContainer";
import { AboutContent } from "./AboutContent";

export const About = () => {
  return (
    <CustomBox id="about" className="bg-[#F8F9FA] py-8 sm:py-16">
      <CustomContainer>
        <Grid className="sm:justify-center min-lg:gap-16 sm:grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 text-center lg:text-right">
          <div className="flex justify-center order-[-1] lg:order-1 w-full">
            <img
              className="pb-10 sm:pb-0 w-full max-w-[576px] h-auto object-contain"
              src="/images/About.png"
              alt="About Image"
              loading="lazy"
            />
          </div>

          <AboutContent />
        </Grid>
      </CustomContainer>
    </CustomBox>
  );
};
