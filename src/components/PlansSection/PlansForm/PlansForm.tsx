"use client";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form
} from "@/components/ui/form";
import FormRadioGroup from "./FormRadioGroup";
import FormCheckbox from "./FormCheckbox";
import FormSelect from "./FormSelect";
import { menuOptions, preferencesOptions, servingsOptions, mealsPerWeekOptions } from "@/data/plansForm";



const formSchema = z.object({
  menu: z.string(),
  preferences: z.array(z.string()).optional(),
  servings: z.string(),
  meals: z.string(),
});

export default function PlansForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <section className="w-full py-10">
      <h3 className="text-xl font-semibold text-center mb-6">
        Enjoy fresh food from us with just a few clicks away!
      </h3>
      <div className="container w-max md:w-2/3 mx-auto px-4 border rounded-lg bg-white dark:bg-slate-800 shadow-md">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 max-w-3xl mx-auto py-10 "
          >
            <FormRadioGroup
              name={menuOptions.name}
              label={menuOptions.label}
              control={form.control}
              options={menuOptions.options}
            />

            <FormCheckbox
              name={preferencesOptions.name}
              label={preferencesOptions.label}
              options={preferencesOptions.options}
              control={form.control}
            />

            <FormSelect
              name={servingsOptions.name}
              control={form.control}
              label={servingsOptions.label}
              placeholder={servingsOptions.placeholder}
              description={servingsOptions.description}
              options={servingsOptions.options}
            />

            <FormSelect
              name={mealsPerWeekOptions.name}
              control={form.control}
              label={mealsPerWeekOptions.label}
              placeholder={mealsPerWeekOptions.placeholder}
              description={mealsPerWeekOptions.description}
              options={mealsPerWeekOptions.options}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
