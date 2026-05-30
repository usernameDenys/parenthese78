import { Container } from "@/app/_components/container";
import { FormulesForm } from "./_components/formules-form";

export const metadata = {
  title: "Construire ma Parenthèse — Formules | Parenthèse",
  description:
    "Composez votre formule d'accompagnement sur mesure — choisissez vos séances, pour vous ou pour offrir. Faustine vous contacte pour finaliser.",
};

export default function FormulesPage() {
  return (
    <main className="bg-background">
      <section className="pt-40 pb-20 bg-secondary text-center">
        <Container>
          <div className="max-w-2xl mx-auto flex flex-col gap-4">
            <span className="eyebrow">Dans la durée</span>
            <h1>Construire ma Parenthèse</h1>
            <p className="text-xl italic text-muted-foreground leading-relaxed max-w-lg mx-auto">
              Un accompagnement dans la durée, pour prendre soin de chaque étape — à vivre ou à offrir.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <FormulesForm />
        </Container>
      </section>
    </main>
  );
}
