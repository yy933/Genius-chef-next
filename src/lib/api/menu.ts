import { mockRecipes } from "@/data/mockRecipes";
// export async function getMenuData(
//   preference: string,
//   page: number,
//   limit: number
// ) {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/api/menus?preference=${preference}&page=${page}&limit=${limit}`
//   );
//   if (!res.ok) throw new Error("Failed to fetch menu data");
//   return res.json();
// }
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
