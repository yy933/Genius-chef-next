import {
  render,
  screen,
  fireEvent,
  act,

} from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import NewsletterForm from "@/components/NewsletterSection/NewsletterForm/NewsletterForm";

describe("NewsletterForm", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  // render the input and button
  it("successfully renders input and button", () => {
    render(<NewsletterForm />);
    expect(screen.getByRole("textbox", { name: /email/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /subscribe/i })
    ).toBeInTheDocument();
  });

  // shows error message when invalid email is submitted
  it("shows error message for invalid email", () => {
    render(<NewsletterForm />);
    const input = screen.getByRole("textbox", { name: /email/i });
    const button = screen.getByRole("button", { name: /subscribe/i });

    fireEvent.change(input, { target: { value: "invalid-email" } });
    fireEvent.click(button);
    expect(
      screen.getByText(/please provide a valid email/i)
    ).toBeInTheDocument();
  });

  // shows success message when valid email is submitted
  it("shows success message for valid email", () => {
    render(<NewsletterForm />);
    const input = screen.getByRole("textbox", { name: /email/i });
    const button = screen.getByRole("button", { name: /subscribe/i });

    fireEvent.change(input, { target: { value: "nRuej7hf@example.com" } });
    fireEvent.click(button);
    expect(screen.getByText(/thank you for subscribing/i)).toBeInTheDocument();
  });

  // success message disappears after 3 seconds
  it("success message disappears after 3 seconds", async () => {
    render(<NewsletterForm />);
    const input = screen.getByRole("textbox", { name: /email/i });
    const button = screen.getByRole("button", { name: /subscribe/i });
    fireEvent.change(input, { target: { value: "user@example.com" } });
    fireEvent.click(button);
    const successMessage = screen.getByText(/thank you for subscribing/i);
    expect(successMessage).toBeInTheDocument();

    // ensure that the timer is advanced by 3 seconds and wait for the UI to update
    act(() => {
      vi.advanceTimersByTime(3000);
    });

    // ensure that DOM has been updated
    expect(
      screen.queryByText(/thank you for subscribing/i)
    ).not.toBeInTheDocument();
   
  });
});
