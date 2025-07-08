"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ContactFormData,
  contactFormSchema,
} from "@/schemas/contactFormSchema";
import { useState } from "react";

export function useContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return { form, onSubmit, status };
}
