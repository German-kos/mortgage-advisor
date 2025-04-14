import { Grid } from "@radix-ui/themes/components/grid";
import { CustomContainer } from "./CustomContainer";
import { PrimaryButton } from "./PrimaryButton";
import { Logo } from "./Logo";
import { CustomBox } from "./CustomBox";
import { Link } from "react-scroll";
import { Link as LinkRadix } from "@radix-ui/themes/src/index.js";

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
            <LinkRadix
              className="relative rounded-full focus:outline-none transition-transform"
              href="https://wa.me/972547963334?text=היי,%20אני%20אשמח%20שנדבר%20על%20המשכנתא%20:)"
              target="_blank"
              rel="noreferrer"
            >
              <PrimaryButton text="התחל עכשיו" />
            </LinkRadix>
          </div>
        </Grid>
      </CustomContainer>
    </CustomBox>
  );
};
