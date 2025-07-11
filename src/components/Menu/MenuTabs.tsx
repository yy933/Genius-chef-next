"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/className-merge";
import { MenuTabsProps } from "@/types";

export default function MenuTabs({ page, limit, active }: MenuTabsProps) {
  // const pathname = usePathname();

  const tabs = [
    { label: "Classic", value: "classic" },
    { label: "Vegetarian", value: "vegetarian" },
  ];

  return (
    <ul className="flex justify-center gap-4 mb-6">
      {tabs.map((tab) => {
        const isActive = active === tab.value;

        return (
          <li key={tab.value}>
            <Link
              href={`/menu/${tab.value}?page=${page}&limit=${limit}`}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-t border-b-2 transition-colors",
                isActive
                  ? "text-primary border-primary"
                  : "text-muted-foreground border-transparent"
              )}
              aria-current={isActive ? "page" : undefined}
            >
              {tab.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
