"use client";

import { useState } from "react";
import { NewsletterInput } from "./NewsletterInput";
import { NewsletterButton } from "./NewsletterButton";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please provide a valid email.");
      return;
    }

    setError("");
    // TODO: Replace with your backend call (e.g. fetch or axios)
    console.log("Subscribe:", email);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row justify-center items-center gap-4"
      noValidate
    >
      <NewsletterInput
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={error}
      />
      <NewsletterButton />
    </form>
  );
}
