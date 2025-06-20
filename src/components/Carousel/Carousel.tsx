"use client";
import Image from "next/image";
import { slides } from "@/data/carouselContent";
import AutoPlay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef } from "react";

export default function MainCarousel() {
  const plugin = useRef(AutoPlay({ delay: 2000, stopOnInteraction: false }));
  return (
    <section className="w-full overflow-hidden relative">
      <Carousel
        className="relative h-[350px] md:h-[500px] w-full"
        plugins={[plugin.current]}
        role="region"
        aria-roledescription="carousel"
        aria-label="Promotional image carousel"
      >
        <CarouselContent aria-live="off">
          {slides.map((slide, index) => (
            <CarouselItem
              key={index}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${slides.length}`}
            >
              <div className="relative w-full h-[350px] md:h-[500px]">
                <Image
                  src={slide.image}
                  alt={slide.caption}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <h1 className="text-white text-3xl md:text-5xl font-semibold text-center px-4">
                    {slide.caption}
                  </h1>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
