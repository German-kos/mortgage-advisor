import type { FormData } from "../types";

export const parseForm = (form: HTMLFormElement): FormData => {
  const formData = new FormData(form);

  const name = `${formData.get("firstName")} ${formData.get("lastName")}`;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;

  const time = new Date().toLocaleString("he-IL", {
    timeZone: "Asia/Jerusalem",
    dateStyle: "short",
    timeStyle: "short",
  });

  return { name, email, phone, time };
};
