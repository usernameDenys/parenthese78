import { testimonials } from "./testimonialsItems";

export default function TestimonialCard() {
  return (
    <div className="flex touch-pan-y">
      {testimonials.map((item) => (
        <div
          key={item.id}
          className="shrink-0 flex flex-col justify-between w-70 md:w-110 min-h-60 rounded-2xl p-8 text-text bg-secondary mx-2 first:ml-4 last:mr-4">
          <p className="text-text text-sm leading-relaxed italic">
            &ldquo;{item.comment}&rdquo;
          </p>
          <p className="font-semibold text-primary mt-4">{item.name}</p>
        </div>
      ))}
    </div>
  );
}
