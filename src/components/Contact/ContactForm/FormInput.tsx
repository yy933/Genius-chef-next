import {
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormInputProps } from "@/types";
import { FieldValues } from "react-hook-form";

export default function FormInput<T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  type,
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
            <Input
              id={name}
              type={type ?? "text"}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
