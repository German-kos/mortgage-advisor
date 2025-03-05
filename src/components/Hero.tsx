import { Grid } from "@radix-ui/themes/components/grid";
import { CustomContainer } from "./CustomContainer";
import { PrimaryButton } from "./PrimaryButton";
import { CustomBox } from "./CustomBox";

export const Hero = () => {
  return (
    <CustomBox>
      <Grid className="gap-12 sm:gap-16 grid py-8 sm:py-16">
        <CustomContainer>
          <div className="gap-12 grid max-w-5xl">
            <div className="gap-4 xs:gap-6 sm:gap-8 grid">
              <h1 className="font-semibold text-[#101828] text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                פשטות במשכנתאות – היועץ האמין שלך למשכנתאות
              </h1>
              <p className="max-w-[300px] sm:max-w-[450px] md:max-w-[575px] font-normal text-[#475467] text-base sm:text-lg md:text-xl">
                קבל ייעוץ מומחה ואת אפשרויות ההלוואה הטובות ביותר לבית חלומותיך.
              </p>
            </div>
            <PrimaryButton text="צור קשר" />
          </div>
        </CustomContainer>
        <div className="relative flex justify-center lg:justify-end px-4 lg:px-8 w-full max-w-3xl lg:max-w-7xl">
          <img
            src="/images/Hero.png"
            alt="Hero"
            className="w-full h-auto object-cover"
            loading="lazy"
          />

          {/* <Link
            className="right-[-8px] bottom-[-46px] absolute rounded-full"
            href="https://wa.me/972547963334"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/Whatsapp.png" alt="whatsapp" />
          </Link> */}
        </div>
      </Grid>
    </CustomBox>
  );
};
