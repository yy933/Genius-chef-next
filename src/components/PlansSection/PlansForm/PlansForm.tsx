"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormRadioGroup from "./FormRadioGroup";
import FormCheckbox from "./FormCheckbox";
import FormSelect from "./FormSelect";
import {
  menuOptions,
  preferencesOptions,
  servingsOptions,
  mealsPerWeekOptions,
} from "@/data/plansForm";
import AlertMessage from "@/components/ui/AlertMessage";
import { useFormWithStatus } from "@/hooks/useFormWithStatus";
import { plansFormSchema } from "@/schemas/plansFormSchema";
import { apiSubmit } from "@/lib/utils/apiSubmit";

export default function PlansForm() {
  const { form, status, onSubmit } = useFormWithStatus({
    schema: plansFormSchema,
    onSubmit: (data) => apiSubmit("/api/plans", data),
  });

  return (
    <section className="w-full py-10">
      <h3 className="text-xl font-semibold text-center mb-6">
        Enjoy fresh food from us with just a few clicks away!
      </h3>
      <div className="container w-max md:w-2/3 mx-auto px-4 border rounded-lg bg-white dark:bg-slate-800 shadow-md">
        {status === "success" && (
          <AlertMessage
            status="success"
            alertTitle="Success!"
            alertDescription="We have received your request!"
          />
        )}
        {status === "error" && (
          <AlertMessage
            status="error"
            alertTitle="Something went wrong!"
            alertDescription="Please try again."
          />
        )}
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
