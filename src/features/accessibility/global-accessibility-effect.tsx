import { useEffect } from "react";
import { useAccessibility } from "./context/accessibility-context";

export const GlobalAccessibilityEffect = () => {
  const { fontSize, contrastMode, showFocusOutline } = useAccessibility();

  useEffect(() => {
    const body = document.body;

    // Apply contrast mode
    contrastMode
      ? body.classList.add("contrast-mode")
      : body.classList.remove("contrast-mode");

    // Apply font size
    body.classList.remove("font-small", "font-normal", "font-large");
    body.classList.add(`font-${fontSize}`);

    // Apply focus outline
    showFocusOutline
      ? body.classList.remove("focus-hidden")
      : body.classList.add("focus-hidden");
  }, [fontSize, contrastMode, showFocusOutline]);

  return null;
};
