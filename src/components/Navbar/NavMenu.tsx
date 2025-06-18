import { NavItem } from "./NavItem"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";
import ModeToggle from "@/components/modeToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
export default function NavMenu(){
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavItem title="About" href="/about" />
        <NavItem
          title="With Icon"
          links={[
            { label: "Backlog", href: "#", icon: <CircleHelpIcon /> },
            { label: "To Do", href: "#", icon: <CircleIcon /> },
            { label: "Done", href: "#", icon: <CircleCheckIcon /> },
          ]}
        />
        <ModeToggle></ModeToggle>
      </NavigationMenuList>
    </NavigationMenu>
  );
}