/**
 * Title: Weekly Menu Page (Dynamic route: [preference])
 * Description:
 * This page displays weekly menus for different dietary preferences,
 * including Classic and Vegetarian. Recipes are shown as cards with
 * modals, tabs for switching categories, and pagination.
 */
import { getMenuData } from "@/lib/api/menu"; 
import { RecipeProps } from "@/types/recipe";
import MenuTabs from "@/components/Menu/MenuTabs";
import RecipeCard from "@/components/Menu/RecipeCard";
// import Pagination from "@/components/Menu/Pagination";
// import GoBackButtonGroup from "@/components/Menu/GoBackButtonGroup";
import { MenuParamsProps } from "@/types";



export default async function WeeklyMenuPage({ params, searchParams }: MenuParamsProps) {
  const preference = params.preference;
  const page = Number(searchParams.page) || 1;
  const limit = Number(searchParams.limit) || 6;

  const { recipes, pagination } = await getMenuData(preference, page, limit); 
  
  console.log("Mock Recipes:", recipes);
  console.log("Pagination:", pagination);

  return (
    <section className="container mx-auto px-4 py-10 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Weekly Menu</h1>
      </div>
      {/* <pre>{JSON.stringify({ recipes, pagination }, null, 2)}</pre> */}
      <MenuTabs page={page} limit={limit} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {recipes.map((recipe: RecipeProps) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {/* <Pagination
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        preference={preference}
        limit={limit}
      />

      <GoBackButtonGroup />  */}
    </section>
  );
}
