import { z } from "zod";
import {
  FormRadioGroupProps,
  FormCheckboxGroupProps,
  FormSelectProps,
} from "@/types";

const formSchema = z.object({
  menu: z.string(),
  preferences: z.array(z.string()).optional(),
  servings: z.string(),
  meals: z.string(),
});

type FormType = z.infer<typeof formSchema>;

const menuOptions: FormRadioGroupProps<FormType> = {
  name: "menu",
  label: "Choose your menu",
  options: [
    { label: "Classic", value: "classic" },
    { label: "Vegetarian", value: "vegetarian" },
  ],
};

const preferencesOptions: FormCheckboxGroupProps<FormType> = {
  name: "preferences",
  label: "Tell us your Preferences (Optional)",
  options: [
    { label: "Dairy Free", value: "dairy-free" },
    { label: "Gluten Free", value: "gluten-free" },
    { label: "Nutritious and healthy", value: "Nutritious and healthy" },
    { label: "Quick and Easy", value: "Quick and Easy" },
    { label: "Pescatarian", value: "Pescatarian" },
    { label: "Lacto-ovo vegetarian", value: "Lacto-ovo vegetarian" },
  ],
};

const servingsOptions: FormSelectProps<FormType> = {
  name: "servings",
  label: "Servings",
  placeholder: "Select the servings",
  description: "Let us know how many servings you'd like to prepare",
  options: [
    { label: "2", value: "2" },
    { label: "4", value: "4" },
    { label: "6", value: "6" },
  ],
};

const mealsPerWeekOptions: FormSelectProps<FormType> = {
  name: "meals",
  label: "Meals per week",
  placeholder: "Select meals per week",
  description: "Let us know how many meals you're going to cook in a week",
  options: [
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
  ],
};

export {
  menuOptions,
  preferencesOptions,
  servingsOptions,
  mealsPerWeekOptions,
};
