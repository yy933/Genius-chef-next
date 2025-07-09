import { z } from "zod";
export const plansFormData = z.object({
  menu: z.string(),
  preferences: z.array(z.string()).optional(),
  servings: z.string(),
  meals: z.string(),
});

export type PlansFormSchema = z.infer<typeof plansFormData>;

