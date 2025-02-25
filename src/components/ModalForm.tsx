import { useState } from "react";
import { handleFormSubmit } from "../utils/formHandler";

type ModalFormProps = {
  onClose: () => void;
};

export const ModalForm: React.FC<ModalFormProps> = ({ onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleFormSubmit(e);
    setIsSubmitted(true); // Transition to success message
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-md p-6">
      {isSubmitted ? (
        // Success Message
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-2xl font-bold text-center text-emerald-900">
            הפרטים נשלחו בהצלחה
          </h2>
          <p className="mt-2 text-lg text-center text-gray-700">
            נחזור אליך בהקדם האפשרי.
          </p>
          <button
            className="px-6 py-3 mt-6 font-semibold text-white transition bg-red-400 border-2 border-red-400 rounded-lg hover:bg-orange-600 hover:border-orange-600 hover:text-white"
            onClick={onClose}
          >
            סגור
          </button>
        </div>
      ) : (
        <>
          <button
            className="absolute top-0 right-0 text-2xl text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            ✕
          </button>
          <h2 className="mb-6 text-4xl font-bold text-center text-emerald-900">
            השאירו פרטים ונחזור אליכם בהקדם
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col w-full">
            <div className="mb-4">
              {/* Name */}
              <input
                className="w-full p-3 text-black bg-white border rounded-md border-stone-400 placeholder-stone-400"
                id="name"
                type="text"
                name="name"
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
                type="email"
                name="email"
                placeholder="אימייל"
                required
                autoComplete="email"
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <input
                className="w-full p-3 text-black bg-white border rounded-md border-stone-400 placeholder-stone-400"
                id="phone"
                type="text"
                name="phone"
                placeholder="טלפון"
                required
                autoComplete="tel"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 mt-6 font-semibold text-white transition bg-red-400 border-2 border-red-400 rounded-lg hover:bg-orange-600 hover:border-orange-600 hover:text-white"
            >
              חזרו אליי!
            </button>
          </form>
        </>
      )}
    </div>
  );
};
