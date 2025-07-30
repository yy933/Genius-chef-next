'use client'
import InputField from "@/components/Auth/InputField";
import { Button } from "@/components/ui/button";
import BaseAuthFormLayout from "@/components/Auth/BaseAuthFormLayout";
import { useFormWithStatus } from "@/hooks/useFormWithStatus";
import { signupSchema } from "@/schemas/authFormSchema";
import { SignupFormInputs } from "@/types";
import AlertMessage from "@/components/Auth/AlertMessage";
import { FaGoogle, FaSpinner } from "react-icons/fa";

export default function SignupForm() {
  const {
    form: { register, handleSubmit },
    isSubmitting,
    errors,
    errorMessage,
    status,
  } = useFormWithStatus({
    schema: signupSchema,
    onSubmit: async (data) => {
      console.log("模擬註冊中...", data);
      await new Promise((r) => setTimeout(r, 2000));
      window.location.href = "/dashboard";
    },
  });
  return (
    <>
      {errorMessage && <AlertMessage type="error" message={errorMessage} />}
      {status === "success" && (
        <AlertMessage
          type="success"
          message="We've sent you an email. Please check your inbox."
        />
      )}

      <BaseAuthFormLayout
        formTitle="Sign up"
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        bottomContent={
          <div className="text-center">
            <h3 className="text-xl font-semibold my-6">Or continue with:</h3>
            <Button variant="ghost" type="button" className="mx-auto">
              <FaGoogle
                size={45}
                className="hover:text-primary transition-colors size-7 "
              />
            </Button>
          </div>
        }
      >
        <InputField<SignupFormInputs>
          id="email"
          label="Email"
          type="email"
          register={register}
          error={errors.email?.message}
        />
        <InputField<SignupFormInputs>
          id="password"
          label="Password"
          type="password"
          register={register}
          error={errors.password?.message}
        />
        <InputField<SignupFormInputs>
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          register={register}
          error={errors.password?.message}
        />

        <Button type="submit" className="w-full">
          {isSubmitting ? <FaSpinner className="animate-spin mr-2" /> : null}
          Login
        </Button>
      </BaseAuthFormLayout>
    </>
  );
}
