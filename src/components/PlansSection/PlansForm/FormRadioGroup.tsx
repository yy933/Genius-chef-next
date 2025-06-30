import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CustomFormLabel } from "@/components/ui/custom-form-label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormRadioGroupProps } from "@/types";
import { FieldValues} from "react-hook-form";

export default function FormRadioGroup<T extends FieldValues>({
  name,
  label,
  options,
  control,
}: FormRadioGroupProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-3 ">
          {label && <CustomFormLabel>{label}</CustomFormLabel>}
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              className="flex flex-col space-y-1"
            >
              {options.map((option: typeof options[number]) => (
                <FormItem
                  className="flex items-center space-x-3 space-y-0"
                  key={option.value}
                >
                  <FormControl>
                    <RadioGroupItem value={option.value} />
                  </FormControl>
                  <FormLabel className="font-normal">{option.label}</FormLabel>
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
