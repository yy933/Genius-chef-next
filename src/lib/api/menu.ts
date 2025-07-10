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


export async function getMenuData(
  preference: string,
  page: number,
  limit: number
) {
  
  const total = mockRecipes.length;
  const start = (page - 1) * limit;
  const end = start + limit;

  const paginated = mockRecipes.slice(start, end);

  return {
    recipes: paginated,
    pagination: {
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      next: Math.min(page + 1, Math.ceil(total / limit)),
      prev: Math.max(page - 1, 1),
      pages: Array.from({ length: Math.ceil(total / limit) }, (_, i) => i + 1),
    },
  };
}
