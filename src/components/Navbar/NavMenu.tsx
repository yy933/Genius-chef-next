import { NavItem } from "./NavItem";
import ModeToggle from "@/components/modeToggle";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
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
        <ModeToggle></ModeToggle>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
