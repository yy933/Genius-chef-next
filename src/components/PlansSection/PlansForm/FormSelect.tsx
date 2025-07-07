import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldValues } from "react-hook-form";
import { FormSelectProps } from "@/types";
import { cn } from "@/lib/utils";

export default function FormSelect<T extends FieldValues>({
  name,
  control,
  label,
  description,
  placeholder,
  options,
}: FormSelectProps<T>) {
  const labelId = `${name}-label`;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <fieldset className="space-y-3 border-0 p-0">
            {label && (
              <legend
                id={labelId}
                className={cn(
                  "text-emerald-700 dark:text-emerald-100 text-lg md:text-xl"
                )}
              >
                {label}
              </legend>
            )}

            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
              aria-labelledby={label ? labelId : undefined}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue
                    placeholder={placeholder || "Select an option"}
                  />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </fieldset>
        </FormItem>
      )}
    />
  );
}
