import { CustomBox } from "@/components/custom-box";
import { CustomContainer } from "@/components/custom-container";
import { Grid } from "@radix-ui/themes/components/grid";
import { Logo } from "@/components/logo";
import { NavLinks } from "./components/nav-links";
import { NavCTA } from "./components/nav-cta";

const Navbar = () => {
  return (
    <CustomBox className="py-2">
      <CustomContainer>
        <Grid className="items-center grid grid-cols-2 w-full">
          <div className="flex justify-start items-center gap-10">
            <Logo />
            <NavLinks />
          </div>
          <div className="flex justify-end">
            <NavCTA />
          </div>
        </Grid>
      </CustomContainer>
    </CustomBox>
  );
};

export default Navbar;
