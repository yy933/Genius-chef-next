import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { FormCheckboxGroupProps } from "@/types";
import { FormLegend } from "@/components/ui/form-legend";
import { FieldValues } from "react-hook-form";
export default function FormCheckbox<T extends FieldValues>({
  name,
  label,
  options,
  control,
}: FormCheckboxGroupProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem>
          <div className="flex flex-col space-y-2 mt-2">
            <fieldset className="space-y-2">
              <FormLegend>{label}</FormLegend>
              {options.map((option) => {
                const checkboxId = `${name}-${option.value}`;
                return (
                  <FormField
                    key={option.value}
                    control={control}
                    name={name}
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={option.value}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              id={checkboxId}
                              checked={field.value?.includes(option.value)}
                              onCheckedChange={(checked) => {
                                const newValue = field.value || [];
                                if (checked) {
                                  field.onChange([...newValue, option.value]);
                                } else {
                                  field.onChange(
                                    newValue.filter((v) => v !== option.value)
                                  );
                                }
                              }}
                            />
                          </FormControl>
                          <FormLabel
                            htmlFor={checkboxId}
                            className="font-normal"
                          >
                            {option.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                );
              })}
            </fieldset>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
