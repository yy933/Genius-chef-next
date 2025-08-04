import { ReactNode } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { z } from "zod";
import { loginSchema, signupSchema } from "@/schemas/authFormSchema";

interface AuthFormWrapperProps {
  image?: ReactNode;
  children: ReactNode;
  className?: string;
}

type LoginFormInputs = z.infer<typeof loginSchema>;
type SignupFormInputs = z.infer<typeof signupSchema>;

interface InputFieldProps<T extends FieldValues> {
  id: keyof T;
  label: string;
  type: string;
  register: UseFormRegister<T>;
  error?: string;
  focusOnRender?: boolean;
}



interface AuthImageProps {
  imageSrc?: string;
  altText?: string;
}

interface AlertMessageProps {
  type: "success" | "error";
  message: string;
  focusOnRender?: boolean;
}

export type {
  AuthFormWrapperProps,
  InputFieldProps,
  SignupFormInputs,
  LoginFormInputs,
  AuthImageProps,
  AlertMessageProps,
};
