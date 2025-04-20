// export const sendToGitHub = async (data: Record<string, string>) => {
//   console.log("📦 Sending data to GitHub:", data);

//   const githubToken = import.meta.env.VITE_GITHUB_PAT;
//   const repo = "German-kos/mortgage-advisor";

//   const response = await fetch(
//     `https://api.github.com/repos/${repo}/dispatches`,
//     {
//       method: "POST",
//       headers: {
//         Accept: "application/vnd.github.v3+json",
//         Authorization: `Bearer ${githubToken}`,
//       },
//       body: JSON.stringify({
//         event_type: "form-submission",
//         client_payload: data,
//       }),
//     }
//   );

//   console.log("📬 GitHub responded:", response.status, await response.text());

//   if (!response.ok) {
//     throw new Error(`GitHub dispatch failed: ${response.statusText}`);
//   }
// };

import { FormData } from "../types";

export const sendToGitHub = async (data: FormData) => {
  const token = import.meta.env.VITE_GITHUB_PAT;
  const repo = "German-kos/mortgage-advisor";

  const response = await fetch(
    `https://api.github.com/repos/${repo}/dispatches`,
    {
      method: "POST",
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github+json",
      },
      body: JSON.stringify({
        event_type: "form-submit",
        client_payload: data,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("GitHub dispatch failed");
  }
};
