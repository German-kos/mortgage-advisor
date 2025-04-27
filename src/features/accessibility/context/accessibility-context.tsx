import { createContext, useState, ReactNode, useContext } from "react";

type FontSize = "normal" | "large" | "small";

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

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error(
      "useAccessibility must be used within an AccessibilityProvider"
    );
  }
  return context;
};
