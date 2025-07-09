"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { plansFormData, PlansFormSchema } from "@/schemas/plansFormSchema";
import { toast } from "sonner";

export function usePlansForm() {
  const form = useForm<PlansFormSchema>({
    resolver: zodResolver(plansFormData),
  });

  const onSubmit = async (data: PlansFormSchema) => {
    try {
      console.log(data);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  };

  return { form, onSubmit };
}
