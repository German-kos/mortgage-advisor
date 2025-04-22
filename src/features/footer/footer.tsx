import { Grid } from "@radix-ui/themes/components/grid";
import { CustomBox, CustomContainer, Logo } from "@/components";
import { FooterContact, FooterLegal, FooterSocials } from "./components";

const Footer = () => {
  return (
    <CustomBox className="bg-[#2C3E50]">
      <CustomContainer>
        <Grid className="flex md:flex-row flex-col justify-center md:justify-between gap-12 sm:gap-16 py-8 sm:py-16 w-full">
          <div className="flex justify-center">
            <Grid className="gap-8 grid max-w-80">
              <Logo className="text-white" />
              <p className="text-[#EAECF0] text-base">
                קבל ייעוץ מומחה ואת אפשרויות המשכנתא הטובות ביותר לבית חלומותיך.
              </p>
              <FooterSocials />
            </Grid>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <div className="justify-center lg:justify-start gap-3 grid w-full">
              <h3 className="flex font-semibold text-[#D0D5DD] text-sm text-center">
                צור קשר
              </h3>
              <FooterContact />
            </div>
          </div>
        </Grid>
        <div className="px-8 w-full">
          <div className="flex justify-between gap-2 py-8 border-[#ffffff25] border-t-1">
            <p className="font-normal text-[#D0D5DD] text-base">
              © 2025 משכנת'ס. כל הזכויות שמורות.
            </p>
            <FooterLegal />
          </div>
        </div>
      </CustomContainer>
    </CustomBox>
  );
};

export default Footer;
