import { FormData } from "../types";

export const sendForm = async (data: FormData) => {
  const token = import.meta.env.VITE_GITHUB_PAT;
  const repo = "German-kos/mortgage-advisor";

  const res = await fetch(`https://api.github.com/repos/${repo}/dispatches`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      event_type: "form-submission",
      client_payload: data,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("GitHub Dispatch Failed:", res.status, text);
    throw new Error("Dispatch failed");
  }
};
