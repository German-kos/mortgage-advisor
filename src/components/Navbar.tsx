import { Grid } from "@radix-ui/themes/components/grid";
import { Link } from "@radix-ui/themes/src/index.js";
import { CustomContainer } from "./CustomContainer";
import { PrimaryButton } from "./PrimaryButton";
import { Logo } from "./Logo";
import { CustomBox } from "./CustomBox";

export const Navbar = () => {
  const links = [
    { title: "שירותים", url: "#features" },
    { title: "צור קשר", url: "#contact" },
    { title: "עליי", url: "#about" },
    { title: "המלצות", url: "#testimonials" },
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
                  className="font-semibold text-[#475467] text-[16px] hover:text-blue-500 transition"
                  key={index}
                  href={link.url}
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
