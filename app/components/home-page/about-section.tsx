import img from "@/assets/img.png";
import Image from "next/image";
import ActionButton from "../action-button";

export default function AboutSection() {
  return (
    <div className="flex flex-col-reverse items-center w-full lg:flex-row ">
      {/* Image */}
      <div className="order-2 lg:order-1 w-full md:w-1/2 relative flex justify-center items-center">
        <div className="relative w-75 h-87.5 md:w-100 md:h-112.5">
          <div className="absolute top-0 -left-5 w-4/5 h-4/5 bg-primary rounded-[24%_76%_27%_73%/31%_57%_43%_69%] mix-blend-multiply filter blur-sm opacity-70"></div>
          <div className="absolute -bottom-7.5 -right-7.5 w-4/5 h-4/5 bg-text rounded-[83%_17%_84%_16%/84%_19%_81%_16%] mix-blend-multiply filter blur-sm opacity-70"></div>

          <div className="relative z-10 w-full h-full overflow-hidden flex items-end justify-center">
            <Image
              src={img}
              alt="Photo"
              fill
              className="object-cover object-top  shadow-lg md:shadow-none "
            />
          </div>
        </div>
      </div>
      {/* Text */}
      <div className="order-1 lg:order-2 w-full mt-8 md:max-w-1/2 flex flex-col items-start *:pb-4 *:px-4">
        <h2 className="font-bold mb-4 text-3xl md:text-left md:text-4xl lg:text-5xl">
          Qui suis-je?
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, eius
          dolor eaque animi iste aperiam odio nemo fugiat. Animi debitis totam
          dicta, vitae pariatur aliquam repellat voluptates voluptatem alias.
          Quisquam?
        </p>

        <p className="text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          consequatur reprehenderit excepturi, eaque alias sapiente delectus
          architecto aliquam eos sed magni aspernatur at sunt soluta libero
          molestias nemo vitae officia.
        </p>

        <div className=" flex flex-col gap-3 pt-4 sm:flex-row sm:gap-4 w-1/2">
          <ActionButton href="about" ariaLabel="Voir plus">
            Voir plus
          </ActionButton>
        </div>
      </div>
    </div>
  );
}
