import { FormData } from "../types";
import { sendToGitHub } from "./send-to-github";

export const sendForm = async (data: FormData) => {
  return await sendToGitHub(data);
};
