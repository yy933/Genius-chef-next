import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormRadioGroupProps } from "@/types";
import { FieldValues } from "react-hook-form";

export default function FormRadioGroup<T extends FieldValues>({
  name,
  label,
  options,
  control,
}: FormRadioGroupProps<T>) {
  const labelId = `${name}-label`;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-3 ">
          <fieldset>
            {label && (
              <legend
                id={labelId}
                className="text-base font-semibold text-emerald-700 dark:text-emerald-100"
              >
                {label}
              </legend>
            )}
          </fieldset>

          <FormControl>
            <RadioGroup
              aria-labelledby={label ? labelId : undefined}
              onValueChange={field.onChange}
              value={field.value}
              className="flex flex-col space-y-1"
            >
              {options.map((option) => (
                <FormItem
                  className="flex items-center space-x-3 space-y-0"
                  key={option.value}
                >
                  <FormControl>
                    <RadioGroupItem
                      value={option.value}
                      id={`${name}-${option.value}`}
                    />
                  </FormControl>
                  <FormLabel
                    htmlFor={`${name}-${option.value}`}
                    className="font-normal"
                  >
                    {option.label}
                  </FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
