import * as React from "react";
import Link from "next/link";
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { NavItemProps } from "@/types";



export function NavItem(props: NavItemProps) {
  const isDropdown = "links" in props;

  if (!isDropdown) {
    // without dropdown
    return (
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href={props.href}>{props.title}</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    );
  }
  // with dropdown
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{props.title}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[300px] gap-4 p-4">
          {props.links.map((link) => (
            <li key={link.href}>
              <NavigationMenuLink asChild>
                <Link href={link.href} className="flex flex-col gap-1">
                  {link.icon && (
                    <div className="text-muted-foreground">{link.icon}</div>
                  )}
                  <div className="font-medium">{link.label}</div>
                  {link.description && (
                    <p className="text-sm text-muted-foreground">
                      {link.description}
                    </p>
                  )}
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
