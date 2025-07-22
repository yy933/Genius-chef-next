"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { z } from "zod";
import { FieldValues } from "react-hook-form";

export function useFormWithStatus<
  TInput extends FieldValues,
  TSchema extends z.ZodTypeAny
>(params: {
  schema: TSchema;
  onSubmit: (data: z.infer<TSchema>) => Promise<void>;
}) {
  const form = useForm<z.infer<TSchema>>({
    resolver: zodResolver(params.schema),
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = form.handleSubmit(async (data: TInput) => {
    try {
      setIsSubmitting(true);
      setStatus("idle");
      setErrorMessage("");
      await params.onSubmit(data);
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Form submission failed:", error);
      setStatus("error");
      if (error instanceof Error && error.message) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Something went wrong.");
      }
    } finally {
      setIsSubmitting(false); // 確保loading狀態會被清除
    }
  });

  return {
    form: {
      ...form,
      handleSubmit,
    },
    status,
    errors: form.formState.errors,
    errorMessage,
    setErrorMessage,
    isSubmitting,
    setStatus,
  };
}
