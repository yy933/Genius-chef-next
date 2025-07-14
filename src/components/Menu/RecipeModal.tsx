import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Users, Clock, ShoppingBasket, List } from "lucide-react";
import { RecipeCardProps } from "@/types";
export default function RecipeModal({ recipe }: RecipeCardProps) {
  return (
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
  );
}