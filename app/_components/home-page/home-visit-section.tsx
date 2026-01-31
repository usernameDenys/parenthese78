import Image from "next/image";
import mapImage from "@/assets/carte.webp";
import Link from "next/link";

export default function HomeVisit() {
  return (
    <div className="flex flex-col items-center w-full lg:flex-row bg-secondary rounded-4xl p-12">
      <div className="relative order-1 lg:order-2 w-full h-fit rounded overflow-hidden max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto shadow-2xl">
        <Link
          href="services"
          aria-label="Prendre rendez-vous en ligne"
          role="link"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center px-6 h-12 bg-white text-primary rounded-full  hover:bg-primary hover:text-secondary shadow-m">
          Vérifier l&apos;aire de service
        </Link>
        <Image
          alt="Illustration de soins spécialisés pour bébés, enfants et adultes"
          src={mapImage}
          className="object-cover"
        />
      </div>
      <div className="order-2 lg:order-1 w-full md:max-w-1/2 flex flex-col items-start *:pb-4 *:px-4">
        <h3 className="font-bold mb-4 text-3xl md:text-left md:text-4xl lg:text-5xl">
          Déplacement à domicile
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          accusantium accusamus hic iure cupiditate provident voluptates dolorum
          repellendus! Quis, in deleniti. Totam odit asperiores illo cum animi.
          Et, sunt suscipit.
        </p>
      </div>
    </div>
  );
}
