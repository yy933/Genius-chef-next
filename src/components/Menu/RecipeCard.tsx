"use client";

import { RecipeCardProps } from "@/types/recipe";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import RecipeModal from "@/components/Menu/RecipeModal";
import Image from "next/image";
import { Users, Clock } from "lucide-react";

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div className="border rounded-xl overflow-hidden shadow-sm flex flex-col bg-white dark:bg-muted">
      <Image
        src={recipe.image}
        alt={recipe.dishName}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex flex-col h-full">
        <h2 className="text-lg font-semibold mb-2">{recipe.dishName}</h2>

        <div className="flex flex-wrap gap-2 mb-2">
          {recipe.vegetarian && (
            <Badge
              variant="secondary"
              className="bg-orange-500 text-white dark:bg-orange-600"
            >
              Vegetarian
            </Badge>
          )}
          {recipe.glutenFree && (
            <Badge
              variant="secondary"
              className="bg-yellow-800 text-white dark:bg-yellow-700"
            >
              Gluten Free
            </Badge>
          )}
          {recipe.dairyFree && (
            <Badge
              variant="secondary"
              className="bg-sky-500 text-white dark:bg-sky-600"
            >
              Dairy Free
            </Badge>
          )}
        </div>

        <ul className="text-sm text-muted-foreground mb-4 space-y-1">
          <li className="flex items-center gap-2">
            <Users size={16} /> Servings: {recipe.servings}
          </li>
          <li className="flex items-center gap-2">
            <Clock size={16} /> Cooking Time: {recipe.cookingTime} min
          </li>
        </ul>

        <div className="mt-auto">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" className="w-full" disabled={ !recipe.fullDetailsUrl }>
                See More
              </Button>
            </DialogTrigger>
            <RecipeModal recipe={recipe} />
          </Dialog>
        </div>
      </div>
    </div>
  );
}
