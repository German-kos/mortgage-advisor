import { Box } from "@radix-ui/themes/components/box";
import { Grid } from "@radix-ui/themes/components/grid";
import { PrimaryButton } from "./PrimaryButton";
import { Link } from "react-scroll";

export const AboutContent = () => {
  const checkItems = [
    "יועץ משכנתאות מוסמך",
    "יועץ משכנתאות מדורג מוביל",
    "למעלה מ-10 שנות נסיון",
  ];
  return (
    <Box className="flex">
      <Grid className="gap-12 grid my-auto w-full">
        <div>
          <h3 className="font-semibold text-[#2C3E50] text-base">עליי</h3>
          <h2 className="font-semibold text-[#101828] text-[32px]">
            מומחה המשכנתאות שלך
          </h2>
        </div>

        <div className="mx-auto max-w-[576px] text-center lg:text-right">
          <p className="font-normal text-[#475467] text-lg">
            עם למעלה מ-10 שנות ניסיון, עזרתי למאות משפחות להשיג את תנאי המשכנתא
            הטובים ביותר. המטרה שלי היא להפוך את תהליך המימון לפשוט וללא לחץ.
          </p>
        </div>

        <div className="justify-center lg:justify-start gap-5 grid w-full">
          {checkItems.map((item, index) => (
            <div
              className="flex items-center gap-3 w-full max-w-[300px] text-right"
              key={index}
            >
              <img
                className="w-6 h-6"
                src="/images/icons/Check.png"
                alt="Check"
              />
              <p className="font-medium text-[#2C3E50] text-lg leading-none">
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center lg:justify-start">
          <Link
            className="font-semibold text-[#475467] hover:text-blue-500 transition cursor-pointer select-none"
            spy={true}
            smooth={true}
            to={"formSection"}
            offset={-100}
            duration={500}
          >
            <PrimaryButton text="צור קשר" />
          </Link>
        </div>
      </Grid>
    </Box>
  );
};
