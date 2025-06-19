import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import NavMenu from "@/components/Navbar/NavMenu";

describe("NavMenu", () => {
  beforeEach(() => {
    // reset DOM before each test
    document.body.innerHTML = "";
  });

  it("renders logo and title", () => {
    render(<NavMenu />);

    // check logo image
    const logo = screen.getAllByAltText("logo");
    expect(logo).toHaveLength(2);

    // check title
    const title = screen.getAllByText("Genius Chef");
    expect(title).toHaveLength(2);
  });

  it("includes all navigation items", () => {
    render(<NavMenu />);

    // check navigation items
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Menu")).toBeInTheDocument();
    expect(screen.getByText("Plans")).toBeInTheDocument();
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("should render ModeToggle", () => {
    render(<NavMenu />);

    // check if ModeToggle is rendered
    const modeToggles = screen.getAllByTestId("mode-toggle");
    expect(modeToggles.length).toBeGreaterThan(0);
  });

  it("mobile menu should be able to open", () => {
    render(<NavMenu />);

    // check if mobile menu button is present
    const menuButton = screen.getByLabelText("Toggle mobile menu");
    expect(menuButton).toBeInTheDocument();

    // click the menu button to open the mobile menu
    fireEvent.click(menuButton);
    const aboutItem = screen.getByText("About");
    expect(aboutItem).toBeInTheDocument();
  });

  it("should contain correct links", () => {
    render(<NavMenu />);

    // check if homelink is present
    const homeLinks = screen.getAllByRole("link");
    const homeLink = homeLinks.find(
      (link) => link.getAttribute("href") === "/"
    );
    expect(homeLink).toBeInTheDocument();
  });
});
