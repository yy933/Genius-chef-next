import { TestimonialCarousel } from "./TestimonialCarousel";

export default function TestimonialSection() {
  return (
    <section className="w-full py-12 bg-background">
      <div className="container mx-auto px-4 text-center ">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">
          Voice from Customers
        </h2>
        <TestimonialCarousel />
      </div>
    </section>
  );
}
