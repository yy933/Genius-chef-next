import { TestimonialProps as Props } from "@/types";

export function TestimonialCard({ quote, name, age, profession }: Props) {
  return (
    <blockquote className="flex flex-col justify-center bg-card text-card-foreground rounded-xl shadow-md p-6 text-lg leading-relaxed h-full">
      <p className="mb-4">&quot;{quote}&quot;</p>
      <footer>
        <cite className="text-muted-foreground text-sm not-italic">
          — {name}, {age}, {profession}
        </cite>
      </footer>
    </blockquote>
  );
}
