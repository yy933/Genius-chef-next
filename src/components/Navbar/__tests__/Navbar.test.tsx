import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import Navbar from "@/components/Navbar/Navbar";

describe("Navbar", () => {
  it("successfully renders the Navbar component", () => {
    render(<Navbar />)
  })
})