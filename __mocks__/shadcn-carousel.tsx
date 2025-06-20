// test/__mocks__/shadcn-carousel.ts
import React from "react";
import { vi } from "vitest";

vi.mock("@/components/ui/carousel", async () => {
  const React = await vi.importActual("react");
  return {
    __esModule: true,
    Carousel: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <div {...props}>{children}</div>,
    CarouselContent: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => (
      <div {...props}>{children}</div>
    ),
    CarouselItem: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => (
      <div {...props}>{children}</div>
    ),
    CarouselNext: () => <button>Next</button>,
    CarouselPrevious: () => <button>Previous</button>,
  };
});
