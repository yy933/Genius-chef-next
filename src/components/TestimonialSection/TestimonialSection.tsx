import { TestimonialCarousel } from "./TestimonialCarousel";
import { SectionTitle } from "@/components/ui/section-title";

export default function TestimonialSection() {
  return (
    <section className="w-full py-12 bg-background">
      <div className="container mx-auto px-4 text-center">
        <SectionTitle>Voice from Customers</SectionTitle>
        <TestimonialCarousel />
      </div>
    </section>
  );
}
