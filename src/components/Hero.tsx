import { Box } from "@radix-ui/themes/components/box";
import { Grid } from "@radix-ui/themes/components/grid";
import { Container } from "@radix-ui/themes/components/container";
import { Button, Link } from "@radix-ui/themes/src/index.js";

export const Hero = () => {
  return (
    <Box className="flex justify-center bg-transparent w-full">
      <Grid className="gap-16 grid py-16">
        <Container className="px-8 max-w-7xl">
          <div className="gap-12 grid max-w-5xl">
            <div className="gap-4 xs:gap-6 sm:gap-8 grid">
              <h1 className="font-semibold text-[#101828] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                פשטות במשכנתאות – היועץ האמין שלך למשכנתאות
              </h1>
              <p className="max-w-[300px] sm:max-w-[450px] md:max-w-[575px] font-normal text-[#475467] text-base sm:text-lg md:text-xl">
                קבל ייעוץ מומחה ואת אפשרויות ההלוואה הטובות ביותר לבית חלומותיך.
              </p>

              {/* <div className="bg-red-500 sm:bg-blue-500 min-[375px]:bg-green-500 md:bg-yellow-500 lg:bg-purple-500 xl:bg-gray-500 p-4">
                Test me
              </div> */}
            </div>
            <Button className="bg-[#F39C12] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] px-[22px] py-4 border-[#F39C12] border-[1px] rounded-[8px] max-w-[116px] font-semibold text-white text-lg">
              צור קשר
            </Button>
          </div>
        </Container>
        <div className="relative px-8">
          <img src="/images/Hero.png" alt="Hero" />
          <Link
            className="right-[-8px] bottom-[-46px] absolute rounded-full"
            href="https://wa.me/972547963334"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/Whatsapp.png" alt="whatsapp" />
          </Link>
        </div>
      </Grid>
    </Box>
  );
};
