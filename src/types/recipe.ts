export interface Recipe {
  id: string;
  dishName: string;
  image: string;
  servings: number;
  cookingTime: number;
  vegetarian?: boolean;
  glutenFree?: boolean;
  dairyFree?: boolean;
  ingredient: string[];
  instruction: string[];
  fullDetailsUrl?: string;
}
