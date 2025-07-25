import { ReactNode } from "react";
import { UseFormRegister } from "react-hook-form";
import { z } from "zod";
import { loginSchema } from "@/schemas/loginFormSchema";

interface AuthFormWrapperProps {
  image?: ReactNode;
  children: ReactNode;
  className?: string;
}
type LoginFormInputs = z.infer<typeof loginSchema>;
interface InputFieldProps {
  id: keyof LoginFormInputs;
  label: string;
  type: string;
  register: UseFormRegister<LoginFormInputs>;
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

export type { AuthFormWrapperProps, InputFieldProps, AuthImageProps, AlertMessageProps };
