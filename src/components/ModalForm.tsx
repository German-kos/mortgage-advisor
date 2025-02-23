import { useState } from "react";
import { handleFormSubmit } from "../utils/formHandler";
import {
  closeButton,
  modalForm,
  modalFormContainer,
  modalFormTitle,
  xButton,
} from "../styles/modalStyles";
import {
  inputContainer,
  inputField,
  submitButton,
  successContainer,
  successText,
  successTitle,
} from "../styles/formStyles";

type ModalFormProps = {
  onClose: () => void;
};

const ModalForm: React.FC<ModalFormProps> = ({ onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleFormSubmit(e);
    setIsSubmitted(true); // Transition to success message
  };

  return (
    <div className={modalFormContainer}>
      {isSubmitted ? (
        // Success Message
        <div className={successContainer}>
          <h2 className={successTitle}>הפרטים נשלחו בהצלחה</h2>
          <p className={successText}>נחזור אליך בהקדם האפשרי.</p>
          <button className={closeButton} onClick={onClose}>
            סגור
          </button>
        </div>
      ) : (
        <>
          <button className={xButton} onClick={onClose}>
            ✕
          </button>
          <h2 className={modalFormTitle}>השאירו פרטים ונחזור אליכם בהקדם</h2>

          <form onSubmit={handleSubmit} className={modalForm}>
            <div className={inputContainer}>
              {/* Name */}
              <input
                id="name"
                type="text"
                name="name"
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
                type="email"
                name="email"
                className={inputField}
                placeholder="אימייל"
                required
                autoComplete="email"
              />
            </div>

            {/* Phone */}
            <div className={inputContainer}>
              <input
                id="phone"
                type="text"
                name="phone"
                className={inputField}
                placeholder="טלפון"
                required
                autoComplete="tel"
              />
            </div>

            <button type="submit" className={submitButton}>
              חזרו אליי!
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ModalForm;
