import { Box } from "@radix-ui/themes/components/box";
import { Container } from "@radix-ui/themes/components/container";
import { Grid } from "@radix-ui/themes/components/grid";

export const Features = () => {
  const list = [
    {
      title: "ייעוץ למשכנתאות",
      text: "מצא את המשכנתא המתאימה ביותר לצרכים שלך.",
      image: "/images/icons/receipt-item.png",
      alt: "receipt-item",
    },
    {
      title: "עסקאות בריבית נמוכה",
      text: "קבל ריביות תחרותיות מהבנקים המובילים.",
      image: "/images/icons/ticket-discount.png",
      alt: "ticket-discount",
    },
    {
      title: "סיוע בהגשת בקשת משכנתא",
      text: "סיוע בהגשת בקשת משכנתא",
      image: "/images/icons/home-sale.png",
      alt: "home-sale",
    },
    {
      title: "אפשרויות מיחזור משכנתא",
      text: "הקטן את תשלומי המשכנתא שלך.",
      image: "/images/icons/status-up.png",
      alt: "status-up",
    },
    {
      title: "ייעוץ מותאם אישית",
      text: "ייעוץ מומחה המותאם במיוחד עבורך.",
      image: "/images/icons/message-tick.png",
      alt: "message-tick",
    },
    {
      title: "שיפור דירוג האשראי",
      text: "שפר את דירוג האשראי שלך לתנאים טובים יותר.",
      image: "/images/icons/empty-wallet.png",
      alt: "empty-wallet",
    },
  ];
  return (
    <Box className="flex justify-center bg-[#F8F9FA] py-8 sm:py-16 w-full">
      <Container className="px-8 w-full max-w-screen-xl">
        <Grid className="gap-16 grid">
          <div className="flex justify-center w-full max-w-7xl">
            <div className="flex flex-col items-center gap-8 max-w-3xl text-center">
              <p className="font-semibold text-[#2C3E50] text-[16px]">
                השירותים שלנו
              </p>
              <h2 className="font-semibold text-[#101828] text-3xl sm:text-4xl">
                שירותי משכנתאות מקצועיים בהתאמה אישית עבורך
              </h2>
              <p className="font-normal text-[#475467] text-lg sm:text-xl">
                ממציאת ההלוואה הנכונה ועד להשגת הריביות הטובות ביותר, אנו מספקים
                ייעוץ מומחה וליווי ללא מאמץ כדי להפוך את תהליך המימון לביתך לחלק
                וללא לחץ.
              </p>
            </div>
          </div>

          <div className="max-w-7xl">
            <Grid className="gap-8 grid grid-cols-2 min-[500px]:grid-cols-3 grid-rows-3 min-[500px]:grid-rows-2">
              {list.map((item, index) => (
                <div
                  className="flex flex-col items-center gap-3 text-center"
                  key={index}
                >
                  {/* Outer Circle (Lighter Gray) */}
                  <div className="flex justify-center items-center bg-gray-200 rounded-full w-20 h-20">
                    {/* Inner Circle (Darker Gray) */}
                    <div className="flex justify-center items-center bg-gray-300 rounded-full w-14 h-14">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-7 h-7"
                      />
                    </div>
                  </div>

                  {/* Title & Text */}
                  <div>
                    <h3 className="font-semibold text-[#101828] text-base">
                      {item.title}
                    </h3>
                    <p className="font-normal text-[#475467] text-[16px]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </Grid>
          </div>
        </Grid>
      </Container>
    </Box>
  );
};
