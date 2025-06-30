"use client";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CustomFormLabel } from "@/components/ui/custom-form-label";
import FormRadioGroup from "./FormRadioGroup";


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

            <FormField
              control={form.control}
              name="preferences"
              render={() => (
                <FormItem>
                  <CustomFormLabel>
                    Tell us your Preferences (Optional)
                  </CustomFormLabel>
                  <div className="flex flex-col space-y-2 mt-2">
                    {[
                      "Dairy Free",
                      "Gluten Free",
                      "Vegetarian",
                      "Quick & Easy",
                    ].map((option) => (
                      <FormField
                        key={option}
                        control={form.control}
                        name="preferences"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={option}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(option)}
                                  onCheckedChange={(checked) => {
                                    const newValue = field.value || [];
                                    if (checked) {
                                      field.onChange([...newValue, option]);
                                    } else {
                                      field.onChange(
                                        newValue.filter((v) => v !== option)
                                      );
                                    }
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {option}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="servings"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Servings</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the servings " />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">
                        m@example.com
                      </SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value="m@support.com">
                        m@support.com
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Let us know how many servings you&#39;d like to prepare
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="meals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Meals per week</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select meals per week" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">
                        m@example.com
                      </SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value="m@support.com">
                        m@support.com
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Let us know how many meals you&#39;re going to cook in a
                    week
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
