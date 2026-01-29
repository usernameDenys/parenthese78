"use client";
import { useEffect, useCallback, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import TestimonialCard from "./testimonial-card";

export default function TestimonialsSlider() {
  const autoplayRef = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: true,
    },
    [autoplayRef.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((api: typeof emblaApi) => {
    if (!api) return;
    setScrollSnaps(api.scrollSnapList());
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  const onSelect = useCallback((api: typeof emblaApi) => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-6 p-4 sm:p-8 w-full mx-auto">
      {/* Slider */}
      <div className="w-full overflow-hidden relative" ref={emblaRef}>
        <TestimonialCard />

        <div
          className="absolute top-0 left-0 w-20 h-full bg-linear-to-r from-white to-transparent pointer-events-none z-10 hidden sm:block"
          aria-hidden="true"
        />
        <div
          className="absolute top-0 right-0 w-20 h-full bg-linear-to-l from-white to-transparent pointer-events-none z-10 hidden sm:block"
          aria-hidden="true"
        />
      </div>

      {/* Dots */}
      {scrollSnaps.length > 1 && (
        <div
          className="flex gap-2"
          role="tablist"
          aria-label="Review navigation">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex ? "bg-primary w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to review ${index + 1}`}
              aria-current={index === selectedIndex ? "true" : "false"}
              role="tab"
            />
          ))}
        </div>
      )}
    </div>
  );
}
