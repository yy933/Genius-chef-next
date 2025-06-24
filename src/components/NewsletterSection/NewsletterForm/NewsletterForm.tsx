"use client";

import { NewsletterInput } from "./NewsletterInput";
import { NewsletterButton } from "./NewsletterButton";
import { useNewsletterForm } from "@/hooks/useNewsletterForm";

export function NewsletterForm() {
  const { email, setEmail, error, successMessage, handleSubmit } =
    useNewsletterForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex flex-col md:flex-row justify-center items-center gap-4"
      noValidate
    >
      <NewsletterInput
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={error}
      />

      <NewsletterButton />
      {successMessage && (
        <div className="absolute inset-0 flex items-center justify-center bg-emerald-700/70 rounded-md z-10">
          <p
            className="text-lg text-white  px-4 py-2 rounded shadow-lg"
            role="status"
          >
            {successMessage}
          </p>
        </div>
      )}
    </form>
  );
}
