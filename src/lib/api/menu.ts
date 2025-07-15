// import { mockRecipes } from "@/data/mockRecipes";
import { RecipeProps, APIMenuDataProps } from "@/types";




export async function getMenuDataAPI({
  number = 1,
  includeTags = "",
  excludeTags = "",
  includeNutrition = false,
  page=1,
  limit=6
}: {
  number?: number;
  includeTags?: string; 
  excludeTags?: string; 
  includeNutrition?: boolean;
  page?: number;
  limit?: number;
}): Promise<APIMenuDataProps> {
  const apiKey = process.env.SPOONACULAR_API_KEY;
  if (!apiKey)
    throw new Error("Missing SPOONACULAR_API_KEY in environment variables");

  const baseUrl = "https://api.spoonacular.com/recipes/random";

  // 建立 URLSearchParams
  const params = new URLSearchParams({
    apiKey,
    number: number.toString(),
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
  
  if (!data.recipes || !Array.isArray(data.recipes)) {
    throw new Error("Unexpected API response structure.");
  }

  const allRecipes = data.recipes as RecipeProps[];
  const totalItems = allRecipes.length;

  const safePage = Math.max(1, page)
  const start = (safePage - 1) * limit;
  const end = start + limit;
  const paginated = allRecipes.slice(start, end);


  
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
