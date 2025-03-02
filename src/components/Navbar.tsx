import { Box } from "@radix-ui/themes/components/box";
import { Container } from "@radix-ui/themes/components/container";

export const Navbar = () => {
  return (
    <Box className="relative bg-orange-100 w-screen max-w-full h-16">
      <Container className="mx-auto px-6 py-2 max-w-7xl h-full">
        <img
          className="w-auto h-14 md:h-16"
          src="/images/placeholder_logo.png"
          alt="logo"
        />
      </Container>
    </Box>
  );
};
