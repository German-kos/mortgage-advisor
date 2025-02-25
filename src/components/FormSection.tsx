import { useState } from "react";
import { handleFormSubmit } from "../utils/formHandler";

export const FormSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleFormSubmit(e);
    setIsSubmitted(true);
  };

  return (
    <section className="flex flex-col items-center justify-center w-full h-screen px-6 bg-transparent sm:px-12 md:px-20 text-emerald-800">
      {/* Title */}
      <div className="mb-8 text-center text-elerald-800">
        <h2 className="text-3xl font-bold text-emerald-800 sm:text-5xl">
          השאר פרטים ונחזור אליך בהקדם
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center w-full max-w-6xl gap-12 px-6 mx-auto text-center md:flex-row md:items-stretch sm:px-12 md:px-20 md:text-right">
        {/* Right side */}
        <div className="items-center justify-center flex-1 hidden h-full xl:flex">
          <img
            className="object-contain w-full h-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"
            src="/images/business_stock.jpg"
            alt="Eliran"
          />
        </div>

        {/* Form */}
        <div className="flex flex-col flex-1 justify-center bg-transparent p-8 border-2 border-emerald-800 w-full max-w-md h-full min-h-[380px]">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="text-2xl font-bold text-center text-emerald-900">
                הפרטים נשלחו בהצלחה
              </h2>
              <p className="mt-2 text-lg text-center text-gray-700">
                נחזור אליך בהקדם האפשרי.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col w-full">
              {/* Name */}
              <div className="mb-4">
                <input
                  className="w-full p-3 text-black bg-white border rounded-md border-stone-400 placeholder-stone-400"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="שם מלא"
                  required
                  autoComplete="name"
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <input
                  className="w-full p-3 text-black bg-white border rounded-md border-stone-400 placeholder-stone-400"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="אימייל"
                  required
                  autoComplete="email"
                />
              </div>

              {/* Phone Number */}
              <div className="mb-4">
                <input
                  className="w-full p-3 text-black bg-white border rounded-md border-stone-400 placeholder-stone-400"
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="טלפון"
                  required
                  autoComplete="tel"
                />
              </div>

              <button className="px-6 py-3 mt-6 font-semibold text-white transition bg-red-400 border-2 border-red-400 rounded-lg hover:bg-orange-600 hover:border-orange-600 hover:text-white">
                חזרו אליי!
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
