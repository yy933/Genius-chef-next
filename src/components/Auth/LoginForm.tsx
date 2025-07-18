'use client'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { loginSchema } from "@/schemas/loginFormSchema";
import { useFormWithStatus } from "@/hooks/useFormWithStatus";
export default function LoginForm() {
  const { form, status, errorMessage, onSubmit } = useFormWithStatus({
    schema: loginSchema,
    onSubmit: async (data) => {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Login failed");
      }

      window.location.href = "/dashboard";
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Login</h1>
      </div>
      {/* Optional: CSRF token */}
      <input type="hidden" name="_csrf" value="" />
      <div>
        <div className="my-4 space-y-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...register("email")}></Input>
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4 space-y-3">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            {...register("password")}
          ></Input>
          {errors.password && (
            <p className="text-sm text-red-500 mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        {errorMessage && (
          <p className="text-sm text-red-500 font-medium">{errorMessage}</p>
        )}

        {status === "success" && (
          <p className="text-sm text-green-600 font-medium">
            Logged in successfully!
          </p>
        )}

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Logging in..." : "Log in"}
        </Button>
      </div>
    </form>
  );
}
