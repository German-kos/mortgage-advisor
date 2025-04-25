import { createContext, ReactNode, useState } from "react";
import { FontSize } from "./types";

interface AccessibilityContextProps {
  fontSize: FontSize;
  contrastMode: boolean;
  showFocusOutline: boolean;
  setFontSize: (size: FontSize) => void;
  toggleContrastMode: () => void;
  toggleFocusOutline: () => void;
}

// context
const AccessibilityContext = createContext<
  AccessibilityContextProps | undefined
>(undefined);

// provider
export const AccessibilityProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [fontSize, setFontSize] = useState<FontSize>("normal");
  const [contrastMode, setContrastMode] = useState(false);
  const [showFocusOutline, setShowFocusOutline] = useState(true);

  const toggleContrastMode = () => setContrastMode((prev) => !prev);
  const toggleFocusOutline = () => setShowFocusOutline((prev) => !prev);

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        contrastMode,
        showFocusOutline,
        setFontSize,
        toggleContrastMode,
        toggleFocusOutline,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};
