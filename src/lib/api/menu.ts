import { mockRecipes } from "@/data/mockRecipes";
import { RecipeProps, GetMenuDataProps } from "@/types";

export function isPreviewOnly(
  data: GetMenuDataProps
): data is { previewOnly: true; totalItems: number } {
  return "totalItems" in data;
}

export function isFullMenuData(data: GetMenuDataProps): data is {
  recipes: RecipeProps[];
  pagination: {
    currentPage: number;
    totalPages: number;
    next: number;
    prev: number;
    pages: number[];
  };
} {
  return "pagination" in data && "recipes" in data;
}

export async function getMenuData(
  preference: string,
  page: number,
  limit: number,
  previewOnly = false
): Promise<GetMenuDataProps> {
  const totalItems = mockRecipes.length;
  if (previewOnly) {
    return { previewOnly: true, totalItems };
  }

  const start = (page - 1) * limit;
  const end = start + limit;

  const paginated = mockRecipes.slice(start, end);
  return {
    recipes: paginated,
    pagination: {
      currentPage: page,
      totalPages: Math.ceil(totalItems / limit),
      next: Math.min(page + 1, Math.ceil(totalItems / limit)),
      prev: Math.max(page - 1, 1),
      pages: Array.from(
        { length: Math.ceil(totalItems / limit) },
        (_, i) => i + 1
      ),
    },
  };
}

export async function getMenuDataAPI({
  number = 1,
  includeTags = "",
  excludeTags = "",
  includeNutrition = false,
}: {
  number?: number;
  includeTags?: string; 
  excludeTags?: string; 
  includeNutrition?: boolean;
}): Promise<RecipeProps[]> {
  const apiKey = process.env.SPOONACULAR_API_KEY;
  if (!apiKey)
    throw new Error("Missing SPOONACULAR_API_KEY in environment variables");

  const baseUrl = "https://api.spoonacular.com/recipes/random";

  // 建立 URLSearchParams
  const params = new URLSearchParams({
    apiKey,
    number: number.toString(),
    addRecipeInformation: "true",
    includeNutrition: includeNutrition ? "true" : "false",
  });
  params.append("apiKey", apiKey);
  params.append("number", number.toString());
  if (includeTags) params.append("includeTags", includeTags);
  if (excludeTags) params.append("excludeTags", excludeTags);
 params.append("includeNutrition", includeNutrition ? "true" : "false");

  const url = `${baseUrl}?${params.toString()}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(
      `Failed to fetch recipes from Spoonacular API: ${res.status} ${res.statusText}`
    );
  }
  const data = await res.json();
  console.log(data)

  if (!data.recipes || !Array.isArray(data.recipes)) {
    throw new Error("Unexpected API response structure.");
  }

  
  return data.recipes as RecipeProps[];
}
