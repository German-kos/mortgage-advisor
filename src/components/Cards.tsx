import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Box } from "@radix-ui/themes/components/box";
import { Container } from "@radix-ui/themes/components/container";

export const Cards = () => {
  return (
    <Box className="relative flex justify-center items-center bg-orange-100 w-screen max-w-full min-h-screen">
      <Container className="flex flex-col gap-6 bg-emerald-800 p-8 pt-20 pb-20 w-full max-w-2xl text-white">
        <CardSpotlight className="flex justify-between items-center bg-white shadow-md p-6 border border-gray-200 rounded-full w-full">
          <span className="font-semibold text-blue-600 text-lg">
            משא ומתן מקיף מול הבנקים
          </span>
          <img src="" alt="Icon" className="w-8 h-8" />
        </CardSpotlight>
      </Container>
    </Box>
  );
};
