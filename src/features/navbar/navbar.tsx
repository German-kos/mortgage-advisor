import { Grid } from "@radix-ui/themes/components/grid";
import { CustomBox, CustomContainer, Logo } from "@/components";
import { NavLinks, NavCTA } from "./components";

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
