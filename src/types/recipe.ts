export interface Ingredient {
  id: number;
  name: string;
  original: string;
  amount?: number;
  unit?: string;
}

export interface InstructionStep {
  number: number;
  step: string;
  ingredients?: { id: number; name: string }[];
  equipment?: { id: number; name: string }[];
  length?: { number: number; unit: string };
}
export interface RecipeProps {
  id: string;
  title: string;
  image: string;
  servings: number;
  readyInMinutes: number;
  vegetarian?: boolean;
  glutenFree?: boolean;
  dairyFree?: boolean;
  extendedIngredients: Ingredient[];
  analyzedInstructions: {
    name: string;
    steps: InstructionStep[];
  }[];
  sourceUrl?: string;
}
export interface RecipeCardProps {
  recipe: RecipeProps;
}
