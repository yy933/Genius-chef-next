import { cn } from "@/lib/utils/className-merge";
import { ComponentProps } from "react";

export function FormLegend({ className, ...props }: ComponentProps<"legend">) {
  return (
    <legend
      className={cn(
        "text-emerald-700 dark:text-emerald-100 text-lg md:text-xl",
        className
      )}
      {...props}
    />
  );
}
