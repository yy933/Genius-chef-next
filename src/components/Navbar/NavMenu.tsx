"use client";
import { NavItem } from "./NavItem";
import ModeToggle from "@/components/modeToggle";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { clsx } from "clsx";

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileOpenClass = isOpen
    ? "w-screen right-0 bg-background p-4 shadow-md rounded-sm z-50"
    : "hidden";

  return (
    <div className="w-full relative">
      <div className="flex justify-end md:hidden">
        <ModeToggle className="block md:hidden" />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md border"
        >
          {isOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
        </button>
      </div>
      <NavigationMenu className="relative">
        <NavigationMenuList
          className={clsx(
            "flex-col gap-2 mt-2",
            "md:mt-0 md:flex-row md:gap-4 md:flex",
            mobileOpenClass,
            "md:static md:bg-transparent md:p-0 md:shadow-none md:rounded-none"
          )}
        >
          <NavItem title="About" href="/about" />
          <NavItem
            title="Menu"
            links={[
              {
                label: "Our Menu",
                href: "/menu/our-menu",
                description: "Check out our latest menu!",
              },
              {
                label: "Menu Ideas",
                href: "/menu/ideas",
                description:
                  "Running out of dinner ideas? We've got you covered!",
              },
            ]}
          />
          <NavItem title="Plans" href="/plans" />
          <NavItem title="Contact Us" href="/contact" />
          <NavItem title="Login" href="/login" isButton />
          <div className="hidden md:block">
            <ModeToggle /> {/* 桌機顯示 */}
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
