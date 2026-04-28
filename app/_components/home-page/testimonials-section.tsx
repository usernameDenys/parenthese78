import ActionButton from "../action-button";
import TestimonialsSlider from "../testimonials/testimonials-slider";

export default function TestimonialsSection() {
  return (
    <div className="flex flex-col w-full items-center">
      <h2 className="font-bold my-10 text-4xl md:text-left md:text-5xl lg:text-6xl">
        Ils en parlent
      </h2>
      <p className="w-full md:w-1/2 text-center text-muted-foreground">
        Des moments de douceur partagés par les familles que j&apos;ai
        accompagnées
      </p>

      <TestimonialsSlider />

      <div className="flex flex-col gap-3 mt-6 sm:flex-row sm:gap-4 w-full sm:w-auto">
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
  );
}
