import { useState } from "react";
import {
  formWrapper,
  formTitleContainer,
  formTitle,
  formContentContainer,
  formContainer,
  formImageContainer,
  formImage,
  inputContainer,
  inputField,
  submitButton,
  successContainer,
  successTitle,
  successText,
} from "../styles/formStyles";
import { handleFormSubmit } from "../utils/formHandler";

const FormSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleFormSubmit(e);
    setIsSubmitted(true);
  };

  return (
    <section className={formWrapper}>
      {/* Title */}
      <div className={formTitleContainer}>
        <h2 className={formTitle}>השאר פרטים ונחזור אליך בהקדם</h2>
      </div>

      <div className={formContentContainer}>
        {/* Right side */}
        <div className={formImageContainer}>
          <img
            src="/src/assets/images/business_stock.jpg"
            alt="Financial Consultation"
            className={formImage}
          />
        </div>

        {/* Form */}
        <div className={formContainer}>
          {isSubmitted ? (
            <div className={successContainer}>
              <h2 className={successTitle}>הפרטים נשלחו בהצלחה</h2>
              <p className={successText}>נחזור אליך בהקדם האפשרי.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full flex flex-col">
              {/* Name */}
              <div className={inputContainer}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={inputField}
                  placeholder="שם מלא"
                  required
                  autoComplete="name"
                />
              </div>

              {/* Email */}
              <div className={inputContainer}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={inputField}
                  placeholder="אימייל"
                  required
                  autoComplete="email"
                />
              </div>

              {/* Phone Number */}
              <div className={inputContainer}>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  className={inputField}
                  placeholder="טלפון"
                  required
                  autoComplete="tel"
                />
              </div>

              <button className={submitButton}>חזרו אליי!</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default FormSection;
