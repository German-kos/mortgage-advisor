import { createContext, useState } from "react";

// Define Context + Provider
export const AccessibilityContext = createContext<AccessibilityContextProps | undefined>(undefined);

// Export Provider Component (no hook)
export const AccessibilityProvider = ({ children }: { children: React.ReactNode }) => {
  // state logic...
  return (
    <AccessibilityContext.Provider value={...}>
      {children}
    </AccessibilityContext.Provider>
  );
};
