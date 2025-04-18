import { Grid } from "@radix-ui/themes/components/grid";
import { Form as RadixForm } from "radix-ui";
import { Box } from "@radix-ui/themes/components/box";
import { Button } from "@radix-ui/themes/src/index.js";
import { CustomRadixField } from "@/features/form/components/custom-radix-field";
import { isValidEmail } from "./validation";
import { useFormState } from "./hooks/use-form-state";
import { fullNameFields } from "./form-config";

type FormProps = {
  showSubtext?: boolean;
};

export const Form = ({ showSubtext = true }: FormProps) => {
  const {
    isChecked,
    setIsChecked,
    showError,
    setShowError,
    // status, // add later with loading feature
    setStatus,
    showEmailError,
    setShowEmailError,
  } = useFormState();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    if (!isValidEmail(formData.get("email") as string)) {
      setShowEmailError(true);
      return;
    } else {
      setShowEmailError(false);
    }

    if (!isChecked) {
      e.preventDefault(); // Prevent submission if checkbox is not checked
      setShowError(true); // Show error message
      return;
    }
    setShowError(false); // Hide error if checkbox is checked

    setStatus("loading");

    try {
      const ilTime = new Date().toLocaleString("he-IL", {
        timeZone: "Asia/Jerusalem",
        hour12: false,
        dateStyle: "short",
        timeStyle: "short",
      });

      const response = await fetch("https://formspree.io/f/xyzevypk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("firstName") + " " + formData.get("lastName"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          _subject: formData.get("firstName") + " " + formData.get("lastName"),
          message: `טופס חדש התקבל מהאתר \n ${ilTime}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        console.error("Formspree Error:", await response.text());
        setStatus("error");
      }
    } catch (err) {
      console.error("Network Error:", err);
      setStatus("error");
    }
  };

  return (
    <Box className="flex flex-col lg:justify-between md:gap-4 xl:gap-5 max-w-[480px] h-full">
      <div className="gap-2 md:gap-4 xl:gap-5 grid max-w-md">
        <h2 className="font-semibold text-[#101828] text-3xl xl:text-4xl">
          קבל ייעוץ חינם
        </h2>
        {showSubtext && (
          <p className="font-normal text-[#475467] text-lg">
            הצוות שלנו ישמח לשוחח איתך ולעזור לך למצוא את הפתרון הטוב ביותר.
          </p>
        )}
      </div>

      <RadixForm.Root className="pb-6 md:pb-0 w-full" onSubmit={handleSubmit}>
        <Grid className="gap-4 md:gap-6 grid">
          {/* Name Fields */}
          <div className="gap-8 grid grid-cols-2 grid-rows-1">
            {fullNameFields.map((field, index) => (
              <CustomRadixField
                key={index}
                name={field.name}
                text={field.label}
                type={field.type}
                placeholder={`${field.label}...`}
              />
            ))}
          </div>

          {/* Phone */}
          <CustomRadixField
            key="phone"
            name="phone"
            text="טלפון"
            type="tel"
            placeholder="0501234567"
          />

          {/* Email */}
          <CustomRadixField
            key="email"
            name="email"
            text="אימייל"
            type="email"
            placeholder="example@mail.com"
            mismatch={true}
            mismatchText="כתובת אימייל לא תקינה *"
            badEmail={showEmailError}
            setBadEmail={setShowEmailError}
          />

          {/* Terms & Conditions */}
          <Grid className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="c1"
                checked={isChecked}
                onChange={(e) => {
                  setIsChecked(e.target.checked);
                  setShowError(false); // Hide error if checked
                }}
                className="border border-[#D0D5DD] rounded w-5 h-5 cursor-pointer"
              />
              <label
                className="font-normal text-base text-right leading-none"
                htmlFor="c1"
              >
                אתה מסכים למדיניות הפרטיות הידידותית שלנו.
              </label>
            </div>

            {/* Error Message */}
            {showError && (
              <p className="mt-1 text-red-500 text-sm">
                יש לאשר את התנאים לפני שליחת הטופס.
              </p>
            )}
          </Grid>

          {/* Submit Button */}
          <RadixForm.Submit asChild>
            <Button className="bg-[#F39C12] hover:bg-[#f36c12] mx-auto rounded-lg w-full h-[45px] font-semibold text-white text-base transition">
              בקשת שיחה חינם
            </Button>
          </RadixForm.Submit>
        </Grid>
      </RadixForm.Root>
    </Box>
  );
};
