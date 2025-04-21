import { Status } from "@/types";
import { createContext, useContext, useState } from "react";

const FormStatusContext = createContext<{
  status: Status;
  setStatus: React.Dispatch<React.SetStateAction<Status>>;
} | null>(null);

export const FormStatusProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [status, setStatus] = useState<Status>("idle");
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
