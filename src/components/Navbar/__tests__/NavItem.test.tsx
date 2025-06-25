import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { NavItem } from "@/components/Navbar/NavItem";

describe("NavItem", () => {
  it("renders dropdown and shows links on trigger click", () => {
    render(
      <NavItem
        title="Menu"
        links={[
          { label: "Our Menu", href: "/menu/our-menu" },
          { label: "Menu Ideas", href: "/menu/ideas" },
        ]}
      />
    );

    // navigate to the trigger
    const trigger = screen.getByRole("button", { name: /menu/i });
    expect(trigger).toBeInTheDocument();

    // click the trigger to open the dropdown
    fireEvent.click(trigger);

    // dropdown should now be visible
    expect(screen.getByText("Our Menu")).toBeInTheDocument();
    expect(screen.getByText("Menu Ideas")).toBeInTheDocument();
  });

  // check if the links have correct href attributes
  it("should have correct href attributes", () => {
    render(
      <NavItem
        title="Menu"
        links={[
          { label: "Our Menu", href: "/menu/our-menu" },
          { label: "Menu Ideas", href: "/menu/ideas" },
        ]}
      />
    );

    // open the dropdown menu
    fireEvent.click(screen.getByRole("button", { name: /menu/i }));

    // check if the links have correct href attributes
    const ourMenuLink = screen.getByRole("link", { name: /our menu/i });
    const ideasLink = screen.getByRole("link", { name: /menu ideas/i });

    expect(ourMenuLink).toHaveAttribute("href", "/menu/our-menu");
    expect(ideasLink).toHaveAttribute("href", "/menu/ideas");
  });
});
