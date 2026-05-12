import { Container } from "@/app/_components/container";
import BookingWidget from "./_components/booking-widget";

export const metadata = {
  title: "Prendre rendez-vous | Parenthèse",
  description:
    "Réservez votre soin bien-être à domicile à Versailles — massage prénatal, postnatal, bain bébé, réflexologie et accompagnement périnatal.",
};

export default function RdvPage() {
  return (
    <main>
      <section className="pt-40 pb-16 text-center" style={{ background: "var(--secondary)" }}>
        <Container>
          <div className="flex flex-col items-center gap-4 max-w-2xl mx-auto">
            <span className="eyebrow">Réservation en ligne</span>
            <h1>Prendre rendez-vous</h1>
            <p className="leading-relaxed max-w-lg">
              Choisissez votre soin, sélectionnez un créneau et confirmez directement en ligne.
              Je me déplace à votre domicile, à Versailles et ses environs.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <BookingWidget />
        </Container>
      </section>
    </main>
  );
}
