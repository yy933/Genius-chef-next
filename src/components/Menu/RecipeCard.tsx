"use client";

import { RecipeCardProps } from "@/types/recipe";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Users, Clock, ShoppingBasket, List } from "lucide-react";



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
              <Button size="sm" className="w-full">
                See More
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{recipe.dishName}</DialogTitle>
              </DialogHeader>

              <Image
                src={recipe.image}
                alt={recipe.dishName}
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded"
              />

              <div className="my-4 space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Users size={16} /> Servings: {recipe.servings}
                </p>
                <p className="flex items-center gap-2">
                  <Clock size={16} /> Cooking Time: {recipe.cookingTime} min
                </p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-base font-semibold mb-2">
                  <ShoppingBasket size={18} /> Ingredients
                </h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {recipe.ingredient.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="flex items-center gap-2 text-base font-semibold mb-2">
                  <List size={18} /> Instructions
                </h4>
                <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
                  {recipe.instruction.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className="pt-4">
                <a
                  href={recipe.fullDetailsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="w-full">
                    Full Recipe
                  </Button>
                </a>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
