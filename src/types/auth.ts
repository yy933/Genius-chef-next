import { useForm } from "react-hook-form";
interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  register: ReturnType<typeof useForm>["register"];
  error?: string;
}

export type { InputFieldProps };
