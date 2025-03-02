import { Box } from "@radix-ui/themes/components/box";
import { Grid } from "@radix-ui/themes/components/grid";
import { Container } from "@radix-ui/themes/components/container";
import { Modal } from "./Modal_temp";
import { useState } from "react";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Box className="relative flex justify-center items-center bg-orange-100 w-screen max-w-full min-h-[calc(100vh-64px)]">
      <Container className="mx-auto px-6 py-2 max-w-7xl h-full">
        <Grid className="gap-8 grid grid-cols-1 md:grid-cols-2 h-full">
          {/* Right */}
          <div className="flex flex-col justify-center items-center md:items-end py-2 w-full">
            <h1 className="w-full font-bold text-emerald-800 text-4xl sm:text-5xl text-center md:text-right leading-tight">
              ייעוץ המשכנתאות הטוב ביותר בשבילכם
            </h1>
            <p className="mt-4 w-full font-semibold text-stone-500 text-lg sm:text-xl text-center md:text-right">
              אנחנו כאן לעזור לכם לעשות את הבחירה הנכונה ביותר בשבילכם
            </p>
            <div className="md:w-full">
              <Modal open={isModalOpen} setOpen={setIsModalOpen} />
            </div>
          </div>

          {/* Left */}
          <div className="flex bg-emerald-800 py-2">
            <img
              className="w-full h-auto max-h-[50vh] md:max-h-full object-contain"
              src="/images/business_stock.jpg"
              alt="Eliran"
            />
          </div>
        </Grid>
      </Container>
    </Box>
  );
};
