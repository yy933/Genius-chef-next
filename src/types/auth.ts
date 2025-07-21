import {  UseFormRegister } from "react-hook-form";
import { z } from "zod";
import { loginSchema } from "@/schemas/loginFormSchema";
type LoginFormInputs = z.infer<typeof loginSchema>;
interface InputFieldProps {
  id: keyof LoginFormInputs;
  label: string;
  type: string;
  register: UseFormRegister<LoginFormInputs>;
  error?: string;
}

export type { InputFieldProps };
