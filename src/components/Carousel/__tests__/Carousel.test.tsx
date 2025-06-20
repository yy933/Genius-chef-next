import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import MainCarousel from "@/components/Carousel/Carousel";
import { slides } from "@/data/carouselContent";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("Main Carousel", () => {
  // mock timers
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
    vi.resetAllMocks();
  });

  describe("Rendering", () => {
    // render the Carousel component
    it("successfully renders the Carousel component", () => {
      render(<MainCarousel />);
      expect(
        screen.getByRole("region", { name: /promotional image carousel/i })
      ).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("should render all slides with correct aria attributes", () => {
      render(<MainCarousel />);
      const slidesInDom = screen.getAllByRole("group");
      expect(slidesInDom.length).toBe(slides.length);
      slidesInDom.forEach((slide, index) => {
        expect(slide).toHaveAttribute("aria-roledescription", "slide");
        expect(slide).toHaveAttribute(
          "aria-label",
          `Slide ${index + 1} of ${slides.length}`
        );
      });
    });

    it("has a region role with correct aria-label", () => {
      render(<MainCarousel />);
      // check if carousel has correct ARIA attributes
      const carousel = screen.getByRole("region", {
        name: /promotional image carousel/i,
      });
      expect(carousel).toHaveAttribute("aria-roledescription", "carousel");
    });

    it("carousel content is not live to avoid screen reader interruptions", () => {
      render(<MainCarousel />);
      const carouselContent = screen
        .getByRole("region", { name: /promotional image carousel/i })
        .querySelector("[aria-live]");
      expect(carouselContent).toHaveAttribute("aria-live", "off");
    });

  // carousel autoplay
  it.skip("has no accessibility violations", async () => {
    const { container } = render(<MainCarousel />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  }, 10000);
});
});
