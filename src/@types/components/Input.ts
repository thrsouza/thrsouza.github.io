export type InputType = {
  name: string;
  type: "text" | "email" | "password" | "multiline";
  label: string;
  required?: boolean;
  placeholder?: string;
};
