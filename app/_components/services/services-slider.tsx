"use client";
import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import Card from "./services-card";

export default function ServicesSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("init", onInit);
    emblaApi.on("reInit", onInit);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("init", onInit);
      emblaApi.off("reInit", onInit);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-6 p-4 sm:p-8 w-full mx-auto">
      {/* Slider */}
      <div className="w-full overflow-hidden" ref={emblaRef}>
        <Card />
        <div className="absolute top-0 left-0 w-10 sm:w-20 h-full bg-linear-to-r from-white to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-10 sm:w-20 h-full bg-linear-to-l from-white to-transparent pointer-events-none z-10"></div>
      </div>

      {/* Dots */}
      <div className="flex gap-2 sm:hidden">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === selectedIndex ? "bg-blue-600 w-6" : "bg-gray-300"
            }`}
            aria-label={`Voir service n ${index + 1}`}
          />
        ))}
      </div>
      {/* Buttons */}
      <div className="flex gap-2 sm:gap-4 w-full sm:w-auto">
        <button
          onClick={scrollPrev}
          className="flex-1 sm:flex-initial flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-text text-white rounded-full hover:bg-gray-700 active:bg-gray-600 transition-colors">
          <FaChevronCircleLeft size={18} className="sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={scrollNext}
          className="flex-1 sm:flex-initial flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-text text-white rounded-full hover:bg-gray-700 active:bg-gray-600 transition-colors">
          <FaChevronCircleRight size={18} className="sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
}
