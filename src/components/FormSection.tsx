import { Container } from "@radix-ui/themes/components/container";
import { Grid } from "@radix-ui/themes/components/grid";
import { Box } from "@radix-ui/themes/src/index.js";
import { Form } from "./Form";

export const FormSection = () => {
  return (
    <Box className="relative flex justify-center items-center bg-white w-screen max-w-full min-h-screen">
      <Container className="mx-auto px-6 py-2 max-w-7xl h-full">
        <Grid className="gap-8 grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* Right (Image) - Hidden on screens ≤ 768px */}
          <div className="hidden lg:flex bg-emerald-800 py-2">
            <img
              className="w-full h-auto max-h-[50vh] md:max-h-full object-contain"
              src="/images/business_stock.jpg"
              alt="Eliran"
            />
          </div>

          {/* Left (Form) */}
          <div className="flex justify-center items-center">
            <Form />
          </div>
        </Grid>
      </Container>
    </Box>
  );
};
