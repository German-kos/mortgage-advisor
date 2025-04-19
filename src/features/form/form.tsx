import { Grid } from "@radix-ui/themes/components/grid";
import { Form as RadixForm } from "radix-ui";
import { Box } from "@radix-ui/themes/components/box";
import { Button } from "@radix-ui/themes/src/index.js";
import { CustomRadixField } from "@/features/form/components/custom-radix-field";
import { isValidEmail } from "./validation";
import { useFormState } from "./hooks/use-form-state";
import { fullNameFields } from "./form-config";
import { sendToGitHub } from "./utils/send-to-github";
import { useFormStatus } from "@/features/form/context/form-status-context";
import { FormFeedback } from "./components/form-feedback";
import { AnimatePresence, motion } from "framer-motion";
type FormProps = {
  showSubtext?: boolean;
};

export const Form = ({ showSubtext = true }: FormProps) => {
  const {
    isChecked,
    setIsChecked,
    showError,
    setShowError,
    showEmailError,
    setShowEmailError,
  } = useFormState();

  const { status, setStatus } = useFormStatus();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("loading");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const name = `${formData.get("firstName")} ${formData.get("lastName")}`;

    console.log("Form Data:", { email, phone, name });
    if (!isValidEmail(email)) {
      setShowEmailError(true);
      return;
    }

    if (!isChecked) {
      setShowError(true);
      return;
    }

    const time = new Date().toLocaleString("he-IL", {
      timeZone: "Asia/Jerusalem",
      dateStyle: "short",
      timeStyle: "short",
    });

    try {
      await sendToGitHub({ name, email, phone, time });
      await new Promise((res) => setTimeout(res, 500));
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <Box className="flex flex-col lg:justify-between md:gap-4 xl:gap-5 max-w-[480px] h-full">
      <AnimatePresence mode="wait" initial={false}>
        {status === "idle" && (
          <motion.div
            className="flex flex-col lg:justify-between md:gap-4 xl:gap-5 max-w-[480px] h-full"
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="gap-2 md:gap-4 xl:gap-5 grid max-w-md">
              <h2 className="font-semibold text-[#101828] text-3xl xl:text-4xl">
                קבל ייעוץ חינם
              </h2>
              {showSubtext && (
                <p className="font-normal text-[#475467] text-lg">
                  הצוות שלנו ישמח לשוחח איתך ולעזור לך למצוא את הפתרון הטוב
                  ביותר.
                </p>
              )}
            </div>
            <RadixForm.Root
              className="pb-6 md:pb-0 w-full"
              onSubmit={handleSubmit}
            >
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
          </motion.div>
        )}
        {status !== "idle" && (
          <motion.div
            className="flex justify-center items-center w-full h-full"
            key="feedback"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <FormFeedback />
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};
