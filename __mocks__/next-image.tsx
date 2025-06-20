import { vi } from "vitest";
import React from "react";

vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ComponentProps<'img'> & { fill?: boolean; priority?: boolean }) => {
    const { fill, priority, ...rest } = props;
    return <img {...rest} />;
  },
}));
