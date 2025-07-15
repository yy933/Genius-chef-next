/**
 * Title: Weekly Menu Page (Dynamic route: [preference])
 * Description:
 * This page displays weekly menus for different dietary preferences,
 * including Classic and Vegetarian. Recipes are shown as cards with
 * modals, tabs for switching categories, and pagination.
 */
import RecipeCard from "@/components/Menu/RecipeCard";
import MenuTabs from "@/components/Menu/MenuTabs";
import MenuPagination from "@/components/Menu/Pagination";
import { getMenuDataAPI } from "@/lib/api/menu";
import { MenuParamsProps, RecipeProps } from "@/types";
import { validatePaginationParams } from "@/lib/utils/pagination";

export default async function WeeklyMenuPage({
  params,
  searchParams,
}: MenuParamsProps) {
  const preference = params.preference;
  const page = Number(searchParams.page) || 1;
  const limit = Number(searchParams.limit) || 6;

  const apiRecipe = await getMenuDataAPI({
    number: 30,
    includeTags: params.preference === "vegetarian" ? "vegetarian" : "",
    excludeTags: "",
    includeNutrition: false,
  });

  const recipes = apiRecipe.recipes;
  const pagination = apiRecipe.pagination;
  const totalItems = recipes.length;

  const { safePage, safeLimit } = validatePaginationParams({
    page,
    limit,
    totalItems,
    basePath: `/menu/${preference}`,
  });

  const offset = (safePage - 1) * safeLimit;
  const offsetData = recipes.slice(offset, offset + safeLimit);

  const transformedApiRecipes: RecipeProps[] = Array.isArray(recipes)
    ? offsetData.map((recipe) => {
        return {
          id: recipe.id.toString() || "unknown-id",
          title: recipe.title || "Untitled Recipe",
          image: recipe.image || "/placeholder-image.jpg",
          servings: recipe.servings || 1,
          readyInMinutes: recipe.readyInMinutes || 30,
          vegetarian: recipe.vegetarian ?? false,
          glutenFree: recipe.glutenFree ?? false,
          dairyFree: recipe.dairyFree ?? false,
          extendedIngredients: Array.isArray(recipe.extendedIngredients)
            ? recipe.extendedIngredients
            : [],
          analyzedInstructions: Array.isArray(recipe.analyzedInstructions)
            ? recipe.analyzedInstructions
            : [],
          sourceUrl: recipe.sourceUrl || "#",
        };
      })
    : [];

  return (
    <section className="container mx-auto px-4 py-10 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Weekly Menu</h1>
      </div>

      <MenuTabs page={safePage} limit={safeLimit} active={preference} />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {transformedApiRecipes && transformedApiRecipes.length > 0 ? (
          transformedApiRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No recipes found.
          </div>
        )}
      </div>
      <MenuPagination
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        preference={preference}
        limit={safeLimit}
      />
    </section>
  );
}
