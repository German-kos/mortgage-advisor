import { CustomBox } from "@/components/custom-box";
import { CustomContainer } from "@/components/custom-container";
import { Grid } from "@radix-ui/themes/components/grid";
import { HighlightCard } from "./components/highlight-card";
import { highlightList } from "./constants";

const Highlights = () => (
  <CustomBox id="features" className="bg-[#F9FAFB] py-8 sm:py-16">
    <CustomContainer>
      <Grid className="gap-16 grid">
        <div className="flex justify-center w-full max-w-7xl">
          <div className="flex flex-col items-center gap-8 max-w-3xl text-center">
            <h2 className="font-semibold text-[#101828] text-3xl sm:text-4xl">
              השירותים שלנו בהתאמה אישית עבורך
            </h2>
            <p className="font-normal text-[#475467] text-lg sm:text-xl">
              מבניית התמהיל הנכון עבורכם ועד להשגת הריביות הטובות ביותר, אנו
              מספקים ייעוץ מומחה וליווי מלא כדי להפוך את התהליך המימון לביתכם
              לחלק ובטוח.
            </p>
          </div>
        </div>
        <Grid className="gap-8 grid grid-cols-2 min-[500px]:grid-cols-3 grid-rows-3 min-[500px]:grid-rows-2">
          {highlightList.map((item, i) => (
            <HighlightCard key={i} {...item} />
          ))}
        </Grid>
      </Grid>
    </CustomContainer>
  </CustomBox>
);

export default Highlights;
