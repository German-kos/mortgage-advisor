import { Box } from "@radix-ui/themes/components/box";
import { Grid } from "@radix-ui/themes/components/grid";
import { Container } from "@radix-ui/themes/components/container";
import { Button } from "@radix-ui/themes/src/index.js";

export const Hero = () => {
  return (
    <Box className="flex justify-center bg-white w-full">
      <Grid className="gap-16 grid py-16">
        <Container className="px-8 max-w-7xl">
          <div className="gap-12 grid max-w-5xl">
            <div className="gap-6 grid">
              <h1 className="font-semibold text-[#101828] text-6xl">
                פשטות במשכנתאות – היועץ האמין שלך למשכנתאות
              </h1>
              <p className="max-w-[575px] font-normal text-[#475467] text-xl">
                קבל ייעוץ מומחה ואת אפשרויות ההלוואה הטובות ביותר לבית חלומותיך.
              </p>
            </div>
            <Button className="bg-[#F39C12] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] px-[22px] py-4 border-[#F39C12] border-[1px] rounded-[8px] max-w-[116px] font-semibold text-white text-lg">
              צור קשר
            </Button>
          </div>
        </Container>
        <div className="px-8">
          <img src="/images/Hero.png" alt="Hero" />
        </div>
      </Grid>
    </Box>
  );
};
