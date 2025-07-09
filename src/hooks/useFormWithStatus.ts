"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { z } from "zod";
import { FieldValues } from "react-hook-form";

export function useFormWithStatus<
  TInput extends FieldValues,
  TSchema extends z.ZodTypeAny
>(params: { schema: TSchema; onSubmit: (data: z.infer<TSchema>) => Promise<void> }) {
  const form = useForm<z.infer<TSchema>>({
    resolver: zodResolver(params.schema),
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (data: TInput) => {
    try {
      await params.onSubmit(data);
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Form submission failed:", error);
      setStatus("error");
    }
  };

  return { form, status, onSubmit: handleSubmit };
}
