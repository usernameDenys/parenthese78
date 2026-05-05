import { Container } from "../_components/container";
import { OffrirForm } from "./_components/offrir-form";

export const metadata = {
  title: "Offrir une parenthèse — PARENTHÈSE",
  description:
    "Offrez un moment de douceur avec une carte cadeau Parenthèse — soins bébé, massages, accompagnement. Valable 12 mois, personnalisable.",
};

export default function OffrirPage() {
  return (
    <main className="bg-background">
      <section className="pt-40 pb-20 text-center bg-secondary">
        <Container>
          <div className="max-w-2xl mx-auto flex flex-col gap-4">
            <span className="eyebrow">Offrir une parenthèse</span>
            <h1>Offrir une Parenthèse</h1>
            <p className="italic text-muted-foreground text-lg leading-relaxed max-w-lg mx-auto">
              Un cadeau doux, utile et profondément attentionné — pour
              accompagner les débuts de la vie.
            </p>
          </div>
        </Container>
      </section>

      <OffrirForm />
    </main>
  );
}
