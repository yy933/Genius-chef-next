"use client";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoPlay from "embla-carousel-autoplay";
import type { AutoplayType } from "embla-carousel-autoplay";
import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "./TestimonialCard";

export function TestimonialCarousel() {
  const plugin = useRef<AutoplayType | null>(null);
  if (!plugin.current) {
    plugin.current = AutoPlay({ delay: 3000, stopOnInteraction: false });
  }

  return (
    <Carousel
      className="overflow-hidden relative  min-h-[250px] px-8"
      role="region"
      plugins={[plugin.current]}
      aria-roledescription="carousel"
      aria-label="Testimonial from customers"
    >
      <span className="sr-only">
        Use left and right arrow keys to navigate through customer testimonials
      </span>
      <CarouselContent className="flex gap-6 h-[250px] flex" aria-live="polite">
        {testimonials.map((testimonial, index) => (
          <CarouselItem
            key={testimonial.id}
            className=" min-w-full h-[250px]"
            role="group"
            aria-label={`Slide ${index + 1} of ${testimonials.length}`}
          >
            <TestimonialCard {...testimonial} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
