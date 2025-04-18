import { useState } from "react";

export const useFormState = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [showError, setShowError] = useState(false);
  const [_status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [showEmailError, setShowEmailError] = useState(false);

  return {
    isChecked,
    setIsChecked,
    showError,
    setShowError,
    // status, // add later with loading feature
    setStatus,
    showEmailError,
    setShowEmailError,
  };
};
