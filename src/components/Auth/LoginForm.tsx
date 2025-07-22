"use client";

import { Button } from "@/components/ui/button";
import { FaSpinner, FaGoogle } from "react-icons/fa";
import { loginSchema } from "@/schemas/loginFormSchema";
import { useFormWithStatus } from "@/hooks/useFormWithStatus";
import InputField from "@/components/Auth/InputField";
import AlertMessage from "@/components/Auth/AlertMessage";

export default function LoginForm() {
  const {
    form: { register, handleSubmit },
    isSubmitting,
    errors,
    status,
    errorMessage,
  } = useFormWithStatus({
    schema: loginSchema,
    onSubmit: async (data) => {
      console.log("模擬登入中...", data);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // 增加延遲時間以測試loading狀態

      // 模擬API響應 - 可以模擬成功或失敗的情況
      const shouldSimulateSuccess = true; // 改為 false 來測試錯誤狀態

      if (shouldSimulateSuccess) {
        // 模擬成功登入
        window.location.href = "/dashboard";
      } else {
        // 模擬登入失敗
        throw new Error("Invalid email or password");
      }
      // 實際API請求示例（取消註釋以使用）
      //     const res = await fetch("/api/login", {
      //       method: "POST",
      //       headers: { "Content-Type": "application/json" },
      //       body: JSON.stringify(data),
      //     });

      //     const result = await res.json();

      //     if (!res.ok) {
      //       throw new Error(result.message || "Login failed");
      //     }

      //     await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay

      //     window.location.href = "/dashboard";
      //   },
      // });
    },
  });

  return (
    <>
      {errorMessage && (
        <AlertMessage type="error" message={errorMessage} focusOnRender />
      )}
      {status === "success" && (
        <AlertMessage type="success" message="Logged in successfully!" />
      )}
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
        aria-labelledby="login-title"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold" id="login-title">
            Login
          </h1>
        </div>
        {/* TODO(Optional): CSRF token */}
        {/* <input type="hidden" name="_csrf" value="" /> */}
        <div>
          <InputField
            id="email"
            label="Email"
            type="email"
            register={register}
            error={errors.email?.message}
            focusOnRender={!!errors.email}
          />
          <InputField
            id="password"
            label="Password"
            type="password"
            register={register}
            error={errors.password?.message}
            focusOnRender={!errors.email && !!errors.password}
          />

          {status === "success" && (
            <p className="text-sm text-green-600 font-medium">
              Logged in successfully!
            </p>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className=" w-full sm:w-1/2 sm:h-10 text-lg font-semibold mx-auto my-8 block flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <FaSpinner className="animate-spin mr-2" /> Logging in...
              </>
            ) : (
              "Login"
            )}
          </Button>
        </div>
      </form>

      <div className="text-center">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-center my-6">
            Or login with:
          </h3>
        </div>
        <div className="flex justify-center gap-6 text-muted-foreground">
          <Button
            variant="ghost"
            type="button"
            className="bg-transparent border-none shadow-none flex items-center gap-2 justify-center"
            aria-label="Login with Google"
          >
            <FaGoogle
              size={45}
              className="hover:text-primary transition-colors size-7 "
            />
          </Button>
        </div>
      </div>
    </>
  );
}
