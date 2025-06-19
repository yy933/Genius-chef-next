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
import Image from "next/image";
import Link from "next/link";

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileOpenClass = isOpen
    ? "w-screen right-0 bg-background p-4 shadow-md rounded-sm z-50"
    : "hidden";

  return (
    <div className="w-full relative px-4 md:flex md:justify-center">
      {/* mobile display  */}
      <div className="flex items-center justify-between py-2 md:hidden">
        {/* mobile: logo + title */}
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image src="/favicon.svg" alt="logo" width={30} height={30} />
            <h1 className="text-lg font-bold font-serif">Genius Chef</h1>
          </div>
        </Link>

        {/* mobile: mode toggle + hamburger */}
        <div className="flex items-center gap-2">
          <ModeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md border"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {/* Desktop display  */}
      {/* Navmenu: mobile - logo + title at the left; desktop - all items centered  */}
      <NavigationMenu className="relative">
        <NavigationMenuList
          className={clsx(
            "flex-col gap-2 mt-2",
            "md:mt-0 md:flex md:flex-row md:gap-6 md:justify-center md:items-center",
            mobileOpenClass,
            "md:static md:bg-transparent md:p-0 md:shadow-none md:rounded-none"
          )}
        >
          {/* logo + title */}
          <Link href="/">
            <div className="hidden md:flex items-center gap-2 pr-6">
              <Image src="/favicon.svg" alt="logo" width={30} height={30} />
              <h1 className="text-xl font-bold font-serif">Genius Chef</h1>
            </div>
          </Link>

          {/* menu items */}
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

          {/* desktop: mode toggle */}
          <div className="hidden md:block">
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
