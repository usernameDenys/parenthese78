import TestimonialsSlider from "../testimonials/testimonials-slider";

export default function TestimonialsSection() {
  return (
    <div className="flex flex-col w-full items-center ">
      <h2 className="font-bold my-10  text-3xl md:text-left md:text-4xl lg:text-5xl">
        Témoignages
      </h2>
      <h3 className="w-full md:w-1/2 text-center">
        Ce que disent les personnes qui m&apos;ont fait confiance
      </h3>

      <TestimonialsSlider />
    </div>
  );
}
