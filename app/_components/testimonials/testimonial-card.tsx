import { testimonials } from "./testimonialsItems";
import Image from "next/image";

export default function TestimonialCard() {
  return (
    <div className="flex touch-pan-y">
      {testimonials.map((item) => (
        <div
          key={item.id}
          className="shrink-0 flex items-center w-70 md:w-110 h-60 rounded-2xl py-8  text-text bg-secondary mx-2 sm:mx-2 first:ml-4 last:mr-4 ">
          <div className="flex flex-1 items-center justify-center p-4">
            {" "}
            <Image
              src={item?.image || "/placeholder.png"}
              alt={item?.imageAlt || "Testimonial"}
              width={80}
              height={80}
              className="rounded-full w-full h-auto object-cover m-4"
            />
          </div>

          <div className="flex flex-2 flex-col items-center justify-between">
            <h4 className="font-bold text-2xl text-center">
              {item?.name || "Anonymous"}
            </h4>
            <span className="text-muted-foreground text-sm py-2 ">
              {item?.date || "Jan 1, 2024"}
            </span>
            <p className=" text-text text-sm px-4">
              {item?.comment || "Testimonial"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
