import img from "@/assets/char.png";
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
        <h2 className="font-bold mb-4 text-4xl md:text-left md:text-5xl lg:text-6xl">
          Une parenthèse de douceur pour votre famille
        </h2>
        <p>
          Je suis Faustine, infirmière puéricultrice depuis plus de 15 ans,
          et j&apos;accompagne les futurs et jeunes parents dans ces moments si
          précieux et parfois fragiles que sont la grossesse, la naissance et
          les premières années de vie.
        </p>

        <p className="text-muted-foreground">
          À travers des soins et ateliers à domicile, je vous propose des temps
          pour ralentir, prendre soin du corps, apaiser les émotions et
          renforcer la confiance, dans un cadre doux et sécurisant. Mon approche
          s&apos;appuie sur mon expérience auprès des tout-petits et sur des
          formations certifiées, pour vous offrir un accompagnement profondément
          humain, respectueux de votre rythme et de votre histoire.
        </p>

        <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:gap-4 w-full sm:w-auto">
          <ActionButton href="/about" ariaLabel="En savoir plus sur Faustine">
            En savoir plus
          </ActionButton>
        </div>
      </div>
    </div>
  );
}
