import { Form as RadixForm } from "radix-ui";

export const Form = () => (
  <RadixForm.Root className="flex justify-center items-center bg-white p-6 border-2 border-emerald-800 w-full h-full">
    <div className="w-full max-w-md">
      {/* Form Title */}
      <h2 className="mb-4 font-bold text-emerald-800 text-4xl text-center">
        השאירו פרטים ונחזור אליכם!
      </h2>

      {/* Name */}
      <RadixForm.Field className="grid mx-auto mb-4 w-full" name="name">
        <div className="flex justify-between w-full">
          <RadixForm.Label className="font-bold text-stone-500 text-lg text-right">
            שם מלא
          </RadixForm.Label>
          <RadixForm.Message
            className="opacity-80 font-semibold text-md text-red-600 text-left"
            match="valueMissing"
          >
            שדה חובה *
          </RadixForm.Message>
        </div>
        <RadixForm.Control asChild>
          <input
            className="px-3 border border-gray-300 focus:border-emerald-600 rounded focus:outline-none w-full h-[45px] text-gray-800 text-right"
            type="text"
            required
          />
        </RadixForm.Control>
      </RadixForm.Field>

      {/* Email */}
      <RadixForm.Field className="grid mx-auto mb-4 w-full" name="email">
        <div className="flex justify-between w-full">
          <RadixForm.Label className="font-bold text-stone-500 text-lg text-right">
            אימייל
          </RadixForm.Label>
          <RadixForm.Message
            className="opacity-80 font-semibold text-md text-red-600 text-left"
            match="valueMissing"
          >
            שדה חובה *
          </RadixForm.Message>
          <RadixForm.Message
            className="opacity-80 font-semibold text-md text-red-600 text-left"
            match="typeMismatch"
          >
            כתובת אימייל לא תקינה *
          </RadixForm.Message>
        </div>
        <RadixForm.Control asChild>
          <input
            className="px-3 border border-gray-300 focus:border-emerald-600 rounded focus:outline-none w-full h-[45px] text-gray-800 text-right"
            type="email"
            required
          />
        </RadixForm.Control>
      </RadixForm.Field>

      {/* Phone */}
      <RadixForm.Field className="grid mx-auto mb-4 w-full" name="phone">
        <div className="flex justify-between w-full">
          <RadixForm.Label className="font-bold text-stone-500 text-lg text-right">
            טלפון
          </RadixForm.Label>
          <RadixForm.Message
            className="opacity-80 font-semibold text-md text-red-600 text-left"
            match="valueMissing"
          >
            שדה חובה *
          </RadixForm.Message>
        </div>
        <RadixForm.Control asChild>
          <input
            className="px-3 border border-gray-300 focus:border-emerald-600 rounded focus:outline-none w-full h-[45px] text-gray-800 text-right"
            type="tel"
            required
          />
        </RadixForm.Control>
      </RadixForm.Field>

      {/* Submit */}
      <RadixForm.Submit asChild>
        <button className="bg-red-400 hover:bg-red-500 mx-auto rounded-lg w-full h-[45px] font-bold text-white text-xl transition">
          חזרו אליי!
        </button>
      </RadixForm.Submit>
    </div>
  </RadixForm.Root>
);
