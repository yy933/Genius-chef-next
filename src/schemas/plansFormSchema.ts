import { z } from "zod";
export const plansFormSchema = z.object({
  menu: z.string(),
  preferences: z.array(z.string()).optional(),
  servings: z.string(),
  meals: z.string(),
});

export type PlansFormSchemaType = z.infer<typeof plansFormSchema>;

