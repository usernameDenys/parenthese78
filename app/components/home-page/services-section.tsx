import ServicesSlider from "../services-slider";

export default function ServicesSection() {
  return (
    <div className="flex flex-col w-full items-center ">
      <h2 className="font-bold my-10  text-3xl md:text-left md:text-4xl lg:text-5xl">
        Mes services
      </h2>
      <h3 className="w-full md:w-1/2 text-center">
        Découvrez un accompagnement bienveillant et personnalisé autour du
        bien-être émotionnel et corporel du bébé, de l’enfant et de l’adulte.
      </h3>

      <ServicesSlider />
    </div>
  );
}
