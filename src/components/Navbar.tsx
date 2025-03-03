import { Box } from "@radix-ui/themes/components/box";
import { Container } from "@radix-ui/themes/components/container";
import { Grid } from "@radix-ui/themes/components/grid";
import { Button, Link } from "@radix-ui/themes/src/index.js";

export const Navbar = () => {
  const links = [
    { title: "בית", url: "#hero" },
    { title: "שירותים", url: "#features" },
    { title: "צור קשר", url: "#contact" },
    { title: "עליי", url: "#about" },
    { title: "המלצות", url: "#testimonials" },
  ];

  return (
    <Box className="flex justify-center bg-transparent py-4.5 w-full">
      <Container className="px-8 w-full max-w-7xl">
        <Grid className="items-center grid grid-cols-2 w-full">
          <div className="flex justify-start items-center gap-10">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src="/images/Logo.png" alt="logo" className="h-10" />
              <h1 className="font-bold text-[#2C3E50] text-[26px]">MC LOGO</h1>
            </div>

            {/* Navigation Links */}
            <div className="flex gap-8">
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
            <Button className="bg-[#F39C12] px-5 py-[9px] border rounded-[8px] font-semibold text-[16px] text-white">
              התחל עכשיו
            </Button>
          </div>
        </Grid>
      </Container>
    </Box>
  );
};
