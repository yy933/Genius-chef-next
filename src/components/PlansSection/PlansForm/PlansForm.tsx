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
              name="menu"
              label="Choose your menu"
              control={form.control}
              options={[
                { label: "Classic", value: "classic" },
                { label: "Vegetarian", value: "vegetarian" },
              ]}
            />

            <FormCheckbox
              name="preferences"
              label="Tell us your Preferences (Optional)"
              options={[
                { label: "Dairy Free", value: "dairy-free" },
                { label: "Gluten Free", value: "gluten-free" },
                { label: "Vegetarian", value: "vegetarian" },
                { label: "Quick and Easy", value: "Quick and Easy" },
              ]}
              control={form.control}
            />

            <FormSelect
              name="servings"
              control={form.control}
              label="Servings"
              placeholder="Select the servings"
              description="Let us know how many servings you'd like to prepare"
              options={[
                { label: "2", value: "2" },
                { label: "4", value: "4" },
                { label: "6", value: "6" },
              ]}
            />

            <FormSelect
              name="meals"
              control={form.control}
              label="Meals per week"
              placeholder="Select meals per week"
              description="Let us know how many meals you're going to cook in a week"
              options={[
                { label: "2", value: "2" },
                { label: "3", value: "3" },
                { label: "4", value: "4" },
                { label: "5", value: "5" },
                { label: "6", value: "6" },
              ]}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
