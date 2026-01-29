import heroImage from "@/assets/Image Placeholder.jpg";
import Image from "next/image";
import ActionButton from "../action-button";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center w-full lg:flex-row ">
      <div className="order-1 lg:order-2 w-full rounded-[34%_66%_64%_36%/30%_32%_68%_70%] overflow-hidden max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto shadow-2xl">
        <Image
          alt="Illustration de soins spécialisés pour bébés, enfants et adultes"
          src={heroImage}
          className="object-cover"
        />
      </div>
      <div className="order-2 lg:order-1 w-full md:max-w-1/2 flex flex-col items-start *:pb-4 *:px-4">
        <h1 className="font-bold mb-4 text-3xl md:text-left md:text-4xl lg:text-5xl">
          Soins spécialisés pour bébés, enfants et adultes
        </h1>
        <p>
          Un espace pensé pour soutenir les familles dès les premiers instants
          de vie. Soins pour bébés, enfants et adultes basés sur la
          réflexologie, le toucher thérapeutique et l’accompagnement émotionnel.
        </p>

        <p className="text-sm text-muted-foreground">
          Mon approche favorise l’équilibre émotionnel, la détente et le lien
          parent-enfant.
        </p>

        <div className=" flex flex-col gap-3 pt-4 sm:flex-row sm:gap-4 w-full">
          <ActionButton href="rdv" ariaLabel="Prendre rendez-vous en ligne">
            Prendre rendez-vous
          </ActionButton>
          <ActionButton
            href="services"
            ariaLabel="Voir tous les services disponibles">
            Voir tous les services
          </ActionButton>
        </div>
      </div>
    </div>
  );
}
