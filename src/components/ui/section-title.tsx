import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function SectionTitle({
  children,
  className,
  ...props
}: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "text-3xl md:text-4xl font-semibold text-center mb-10",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
