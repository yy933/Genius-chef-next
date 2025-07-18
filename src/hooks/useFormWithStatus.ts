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

  const handleSubmit = async (data: TInput) => {
    try {
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
    }
  };

  return {
    form,
    status,
    errorMessage,
    setErrorMessage,
    onSubmit: handleSubmit,
  };
}
