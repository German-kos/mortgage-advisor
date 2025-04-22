import { CustomBox } from "@/components/custom-box";
import { CustomContainer } from "@/components/custom-container";
import { Grid } from "@radix-ui/themes/components/grid";
import { AboutContent } from "./components/about-content";
import { aboutImage } from "./constants";

const About = () => {
  return (
    <CustomBox id="about" className="bg-[#F8F9FA] py-8 sm:py-16">
      <CustomContainer>
        <Grid className="sm:justify-center min-lg:gap-16 sm:grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 text-center lg:text-right">
          <div className="flex justify-center order-[-1] lg:order-1 w-full">
            <img {...aboutImage} loading="lazy" />
          </div>

          <AboutContent />
        </Grid>
      </CustomContainer>
    </CustomBox>
  );
};

export default About;
