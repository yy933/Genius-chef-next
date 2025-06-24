import { NewsletterForm } from "./NewsletterForm/NewsletterForm";
import Image from "next/image";

export function NewsletterSection() {
  return (
    <section className="relative w-full py-10 bg-background overflow-hidden">
      <Image
        src="/newsletter.jpg"
        className="object-cover object-center z-0"
        fill={true}
        priority={true}
        alt="newsletter"
      />
      <div className="absolute inset-0 bg-black/30 dark:bg-black/50 z-10" />
      <div className="relative container mx-auto px-4 text-center z-20 text-white dark:text-white">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">Stay tuned!</h2>
        <NewsletterForm />
      </div>
    </section>
  );
}
