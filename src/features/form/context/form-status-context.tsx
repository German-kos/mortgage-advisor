import { createContext, useContext, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

const FormStatusContext = createContext<{
  status: FormStatus;
  setStatus: React.Dispatch<React.SetStateAction<FormStatus>>;
} | null>(null);

export const FormStatusProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [status, setStatus] = useState<FormStatus>("idle");
  return (
    <FormStatusContext.Provider value={{ status, setStatus }}>
      {children}
    </FormStatusContext.Provider>
  );
};

export const useFormStatus = () => {
  const ctx = useContext(FormStatusContext);
  if (!ctx)
    throw new Error("useFormStatus must be used within FormStatusProvider");
  return ctx;
};
