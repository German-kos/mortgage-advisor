import { Container } from "@radix-ui/themes/components/container";
import { Grid } from "@radix-ui/themes/components/grid";
import { Form as RadixForm } from "radix-ui";
import { CustomRadixField } from "./CustomFormComponents";
import { Checkbox } from "radix-ui";
import { CheckIcon } from "@radix-ui/react-icons";

export const Form = () => {
  const fullNameFields = [
    { name: "firstName", label: "שם פרטי", type: "text" },
    { name: "lastName", label: "שם משפחה", type: "text" },
  ];

  return (
    <Container className="flex flex-col justify-between max-w-[480px] h-full">
      {/* Title Section - Hugs the Top */}
      <div className="gap-5 grid max-w-md">
        <h2 className="font-semibold text-[#101828] text-4xl">
          קבל ייעוץ חינם
        </h2>
        <p className="font-normal text-[#475467] text-lg">
          הצוות שלנו ישמח לשוחח איתך ולעזור לך למצוא את הפתרון הטוב ביותר.
        </p>
      </div>

      {/* Spacer - Moves the Form Down While Keeping Section Height Equal to the Image */}
      <div className="flex-grow" />

      {/* Form Section - Now Sits at the Bottom, Adjusted */}
      <RadixForm.Root className="w-full">
        <Grid className="gap-6 grid">
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
              className="flex justify-center items-center bg-white hover:bg-violet3 shadow-[0_2px_10px] shadow-blackA4 focus:shadow-[0_0_0_2px_black] rounded outline-none size-[25px] appearance-none"
              defaultChecked
              id="c1"
            >
              <Checkbox.Indicator className="text-violet11">
                <CheckIcon />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <label
              className="pl-[15px] text-[15px] text-white leading-none"
              htmlFor="c1"
            >
              Accept terms and conditions.
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
    </Container>
  );
};
