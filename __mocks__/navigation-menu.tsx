import { vi } from "vitest";
import { PropsWithChildren } from "react";
vi.mock("@/components/ui/navigation-menu", () => {
  const Wrapper = ({
    children,
    className,
  }: PropsWithChildren<{ className?: string }>) => (
    <div className={className}>{children}</div>
  );

  return {
    NavigationMenu: Wrapper,
    NavigationMenuList: Wrapper,
    NavigationMenuItem: (props: PropsWithChildren) => <li>{props.children}</li>,
    NavigationMenuTrigger: (props: PropsWithChildren) => (
      <button>{props.children}</button>
    ),
    NavigationMenuContent: (props: PropsWithChildren) => (
      <div>{props.children}</div>
    ),
    NavigationMenuLink: ({
      children,
      asChild,
    }: PropsWithChildren<{ asChild?: boolean }>) =>
      asChild ? children : <a>{children}</a>,
    navigationMenuTriggerStyle: () => "trigger-style",
  };
});

// mock mode toggle component
vi.mock("@/components/modeToggle", () => ({
  default: () => <button data-testid="mode-toggle">Mode Toggle</button>,
}));