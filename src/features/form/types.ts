export type FormData = {
  name: string;
  email: string;
  phone: string;
  time: string;
};

export type FormStatus = "idle" | "loading" | "success" | "error";
