import heroImage from "@/assets/Image Placeholder.jpg";
import Image from "next/image";
import ActionButton from "../action-button";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center w-full lg:flex-row ">
      <div className="order-1 lg:order-2 w-full rounded-[34%_66%_64%_36%/30%_32%_68%_70%] overflow-hidden max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto shadow-2xl">
        <Image
          alt="Faustine, accompagnante périnatale à domicile à Versailles"
          src={heroImage}
          className="object-cover"
        />
      </div>
      <div className="order-2 lg:order-1 w-full md:max-w-1/2 flex flex-col items-start *:pb-4 *:px-4">
        <div className="flex gap-3 flex-wrap">
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-primary">
            Pour les bébés et leurs parents
          </span>
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-primary">
            À vivre ou à offrir
          </span>
        </div>
        <h1 className="font-bold mb-4 text-3xl md:text-left md:text-4xl lg:text-5xl">
          Des parenthèses pour naître parents en douceur
        </h1>
        <p>
          Soins bien-être périnataux à domicile à Versailles et ses environs
        </p>

        <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:gap-4 w-full">
          <ActionButton href="/services" ariaLabel="Découvrir les soins proposés">
            Découvrir les soins
          </ActionButton>
          <ActionButton
            href="/offrir"
            ariaLabel="Offrir une parenthèse en cadeau"
            variant="outline">
            Offrir une parenthèse
          </ActionButton>
        </div>
      </div>
    </div>
  );
}
