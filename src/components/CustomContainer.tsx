import { Container } from "@radix-ui/themes/components/container";

export const CustomContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Container className="px-4 lg:px-8 w-full max-w-3xl lg:max-w-7xl">
      {children}
    </Container>
  );
};
