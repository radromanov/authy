import { Input } from "../types/Input";

export const loginFields: Input[] = [
  { type: "email", placeholder: "john.doe@example.com", label: "email" },
  {
    type: "password",
    placeholder: "Enter password...",
    label: "password",
  },
];

export const signupFields: Input[] = [
  { type: "email", placeholder: "john.doe@example.com", label: "email" },
  { type: "text", placeholder: "john.doe", label: "username" },
  { type: "password", placeholder: "Enter password...", label: "password" },
  {
    type: "password",
    placeholder: "Confirm password...",
    label: "confirm password",
  },
];
