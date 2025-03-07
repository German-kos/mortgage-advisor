import { Grid } from "@radix-ui/themes/components/grid";
import { Form as RadixForm } from "radix-ui";
import { CustomRadixField } from "./CustomFormComponents";
import { Checkbox } from "radix-ui";
import { CheckIcon } from "@radix-ui/react-icons";
import { Box } from "@radix-ui/themes/components/box";

export const Form = () => {
  const fullNameFields = [
    { name: "firstName", label: "שם פרטי", type: "text" },
    { name: "lastName", label: "שם משפחה", type: "text" },
  ];

  return (
    <Box className="flex flex-col lg:justify-between md:gap-4 xl:gap-5 max-w-[480px] h-full">
      {/* <Box className="flex flex-col justify-between max-w-[480px] h-full"> */}
      {/* Title Section - Shrinks on smaller screens */}
      <div className="gap-2 md:gap-4 xl:gap-5 grid max-w-md">
        <h2 className="font-semibold text-[#101828] text-3xl xl:text-4xl">
          קבל ייעוץ חינם
        </h2>
        <p className="font-normal text-[#475467] text-lg">
          הצוות שלנו ישמח לשוחח איתך ולעזור לך למצוא את הפתרון הטוב ביותר.
        </p>
      </div>

      <RadixForm.Root className="pb-6 md:pb-0 w-full">
        <Grid className="gap-4 md:gap-6 grid">
          {/* Name Fields */}
          <div className="gap-8 grid grid-cols-2 grid-rows-1">
            {fullNameFields.map((field, index) => (
              <CustomRadixField
                name={field.name}
                key={index}
                text={field.label}
                type={field.type}
                placeholder={`${field.label}...`}
              />
            ))}
          </div>

          {/* Phone */}
          <CustomRadixField
            name="phone"
            key={3}
            text="טלפון"
            type="tel"
            placeholder="0501234567"
          />

          {/* Email */}
          <CustomRadixField
            name="email"
            key={4}
            text="אימייל"
            type="email"
            placeholder="example@mail.com"
            mismatch={true}
            mismatchText="כתובת אימייל לא תקינה *"
          />

          {/* Terms & Conditions */}
          <Grid className="flex items-center gap-3">
            <Checkbox.Root
              className="flex justify-center items-center bg-white hover:bg-[#f1f1f1] focus:bg-[#f1f1f1] border border-[#D0D5DD] rounded outline-none size-[25px] transition appearance-none"
              required
              id="c1"
            >
              <Checkbox.Indicator className="text-violet11">
                <CheckIcon />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <label
              className="font-normal text-[#475467] text-base text-right leading-none"
              htmlFor="c1"
            >
              אתה מסכים למדיניות הפרטיות הידידותית שלנו.
            </label>
          </Grid>

          {/* Submit Button */}
          <RadixForm.Submit asChild>
            <button className="bg-red-400 hover:bg-red-500 mx-auto rounded-lg w-full h-[45px] font-bold text-white text-xl transition">
              חזרו אליי!
            </button>
          </RadixForm.Submit>
        </Grid>
      </RadixForm.Root>
    </Box>
  );
};
