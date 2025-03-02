import { Box } from "@radix-ui/themes/components/box";
import { Container } from "@radix-ui/themes/components/container";

export const Reasons = () => {
  return (
    <Box className="relative flex justify-center items-center bg-white w-screen max-w-full min-h-screen">
      <Container className="flex flex-col gap-6 bg-emerald-800 p-8 pt-20 pb-20 w-full max-w-2xl text-white">
        <div className="mb-8 text-center">
          <h2 className="font-bold text-4xl sm:text-6xl">למה לבחור באלירן?</h2>
          <p className="mt-2 pt-4 font-bold text-stone-200 text-lg sm:text-xl text-right">
            המומחיות שלנו היא לעזור לכם לקבל את ההחלטות הפיננסיות הנכונות
          </p>
        </div>
        {/* List of Reasons */}
        <div className="flex flex-col gap-6">
          {/* Reason 1 */}
          <div className="flex flex-col gap-2 text-white">
            <h3 className="font-semibold text-white text-xl">
              ייעוץ פיננסי מותאם אישית
            </h3>
            <p className="text-stone-200 text-lg">
              אנו מנתחים את הצרכים האישיים שלכם ומציעים תוכניות שמותאמות בדיוק
              עבורכם.
            </p>
          </div>

          {/* Reason 2 */}
          <div className="flex flex-col gap-2 text-white">
            <h3 className="font-semibold text-white text-xl">
              ניסיון עשיר ומומחיות
            </h3>
            <p className="text-stone-200 text-lg">
              צוות המומחים שלנו בעל שנים של ניסיון בשוק ההון, משכנתאות, והשקעות.
            </p>
          </div>

          {/* Reason 3 */}
          <div className="flex flex-col gap-2 text-white">
            <h3 className="font-semibold text-white text-xl">
              שירות לקוחות מעולה
            </h3>
            <p className="text-stone-200 text-lg">
              אנו מתחייבים ללוות אתכם לאורך כל התהליך, עם תמיכה מקצועית ומענה
              לכל שאלה.
            </p>
          </div>
        </div>
      </Container>
    </Box>
  );
};
