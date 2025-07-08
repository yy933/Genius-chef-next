import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { FieldValues } from "react-hook-form";
import { FormInputProps } from "@/types";

export default function FormTextarea<T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
}: FormInputProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel
            htmlFor={name}
            className="text-emerald-700 dark:text-emerald-100 text-lg md:text-xl"
          >
            {label}
          </FormLabel>
          <FormControl>
            <Textarea
              id={name}
              placeholder={placeholder}
              {...field}
              className="min-h-[120px]"
              value={field.value ?? ""}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
