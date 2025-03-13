import { Grid } from "@radix-ui/themes/components/grid";
import { Button } from "@radix-ui/themes/src/index.js";
import { CustomContainer } from "./CustomContainer";
import { PrimaryButton } from "./PrimaryButton";
import { Logo } from "./Logo";
import { CustomBox } from "./CustomBox";

interface NavbarProps {
  testimonialsRef: React.RefObject<HTMLDivElement | null>;
  formRef: React.RefObject<HTMLDivElement | null>;
  aboutRef: React.RefObject<HTMLDivElement | null>;
  featuresRef: React.RefObject<HTMLDivElement | null>;
}

export const Navbar = ({
  testimonialsRef,
  formRef,
  aboutRef,
  featuresRef,
}: NavbarProps) => {
  const links = [
    { title: "שירותים", ref: featuresRef },
    { title: "צור קשר", ref: formRef },
    { title: "עליי", ref: aboutRef },
    { title: "המלצות", ref: testimonialsRef },
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
                <Button
                  key={index}
                  className="font-semibold text-[#475467] hover:text-blue-500 transition cursor-pointer"
                  onClick={() =>
                    link.ref.current?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  {link.title}
                </Button>
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
