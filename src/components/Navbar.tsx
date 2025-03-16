import { Grid } from "@radix-ui/themes/components/grid";
import { CustomContainer } from "./CustomContainer";
import { PrimaryButton } from "./PrimaryButton";
import { Logo } from "./Logo";
import { CustomBox } from "./CustomBox";
import { Link } from "react-scroll";

export const Navbar = () => {
  const links = [
    { title: "שירותים", ref: "features" },
    { title: "צור קשר", ref: "formSection" },
    { title: "עליי", ref: "about" },
    { title: "המלצות", ref: "testimonials" },
  ];

  return (
    <CustomBox className="py-2">
      <CustomContainer>
        <Grid className="items-center grid grid-cols-2 w-full">
          <div className="flex justify-start items-center gap-10">
            {/* Logo */}
            <Logo />

            {/* Navigation Links */}
            <div className="hidden lg:flex gap-8">
              {links.map((link, index) => (
                <Link
                  className="font-semibold text-[#475467] hover:text-blue-500 transition cursor-pointer select-none"
                  spy={true}
                  smooth={true}
                  key={index}
                  to={link.ref}
                  duration={500}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex justify-end">
            <PrimaryButton text="התחל עכשיו" />
          </div>
        </Grid>
      </CustomContainer>
    </CustomBox>
  );
};
