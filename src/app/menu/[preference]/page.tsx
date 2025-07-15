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
import {
  isFullMenuData,
  isPreviewOnly,
  getMenuData,
  getMenuDataAPI,
} from "@/lib/api/menu";
import { MenuParamsProps, RecipeProps } from "@/types";
import { validatePaginationParams } from "@/lib/utils/pagination";

export default async function WeeklyMenuPage({
  params,
  searchParams,
}: MenuParamsProps) {

  const preference = params.preference;
  const page = Number(searchParams.page) || 1;
  const limit = Number(searchParams.limit) || 6;

  const preview = await getMenuData(preference, 1, 6, true);

  if (!isPreviewOnly(preview)) {
    throw new Error("Expected previewOnly data but got recipes");
  }
  const totalItems = preview.totalItems ?? 0;

  const { safePage, safeLimit, totalPages } = validatePaginationParams({
    page,
    limit,
    totalItems,
    basePath: `/menu/${preference}`,
  });

  const data = await getMenuData(preference, safePage, safeLimit);

  if (!isFullMenuData(data)) {
    throw new Error("Invalid data structure: missing pagination or recipes");
  }

  const { recipes, pagination } = data;

  const apiRecipe = await getMenuDataAPI({
    number: 6,
    includeTags: "vegetarian,gluten",
    excludeTags: "dairy",
    includeNutrition: false,
  });

  const transformedApiRecipes: RecipeProps[] = apiRecipe.map((recipe: any) => ({
    id: recipe.id.toString(),
    dishName: recipe.title,
    image: recipe.image,
    servings: recipe.servings,
    cookingTime: recipe.readyInMinutes,
    vegetarian: recipe.vegetarian,
    glutenFree: recipe.glutenFree,
    dairyFree: recipe.dairyFree,
    ingredient: recipe.extendedIngredients?.map((ing) => ing.original) || [],
    instruction:
      recipe.analyzedInstructions?.[0]?.steps?.map((step: any) => step.step) ||
      [],
    fullDetailsUrl: recipe.sourceUrl,
  }));

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
