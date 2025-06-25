import { useState } from "react";

export function useNewsletterForm(onSuccess?: (email: string) => void) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please provide a valid email.");
      setSuccessMessage("");

      return;
    }

    setError("");
    setSuccessMessage("Thank you for subscribing!");
    setTimeout(() => setSuccessMessage(""), 3000);

    console.log("Subscribe:", email);
    onSuccess?.(email);
  };

  return {
    email,
    setEmail,
    error,
    successMessage,
    handleSubmit,
  };
}
