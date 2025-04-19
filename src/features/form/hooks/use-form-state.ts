import { useState } from "react";

export const useFormState = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);

  return {
    isChecked,
    setIsChecked,
    showError,
    setShowError,
    showEmailError,
    setShowEmailError,
  };
};
