import { Label } from "@radix-ui/react-label";
import { cn } from "@/lib/utils";

export function CustomFormLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  return (
    <Label
      className={cn(
        "text-emerald-700 dark:text-emerald-100 text-lg md:text-xl",
        className
      )}
      {...props}
    />
  );
}
