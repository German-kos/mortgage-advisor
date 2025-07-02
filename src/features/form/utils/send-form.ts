import { FormData } from "../types";

export const sendForm = async (data: FormData) => {
  const res = await fetch("/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorData = await res
      .json()
      .catch(() => ({ message: "Unknown error" }));
    console.error("Email send failed:", res.status, errorData);
    throw new Error(errorData.message || "Failed to send email");
  }

  return res.json();
};
