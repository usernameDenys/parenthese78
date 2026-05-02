import Link from "next/link";
import { Container } from "../_components/container";
import ActionButton from "../_components/action-button";
import { FiGift, FiMail, FiSmartphone, FiCalendar } from "react-icons/fi";

export const metadata = {
  title: "Offrir une parenthèse — PARENTHÈSE",
  description:
    "Offrez un moment de douceur avec une carte cadeau Parenthèse — soins bébé, massages, accompagnement. Valable 6 mois, personnalisable.",
};

const giftIdeas = [
  {
    occasion: "Pour une naissance",
    soin: "Thérapeutique Bain Bébé®",
    emoji: "🌸",
    price: "130 €",
    href: "/services#soins-bebe",
  },
  {
    occasion: "Pour une future maman",
    soin: "Massage prénatal",
    emoji: "🌺",
    price: "110 €",
    href: "/services#soins-femme",
  },
  {
    occasion: "Pour un post-partum soutenu",
    soin: "Soin Rebozo",
    emoji: "🌿",
    price: "170 €",
    href: "/services#soins-femme",
  },
  {
    occasion: "Pour un jeune parent",
    soin: "Accompagnement sommeil",
    emoji: "🌙",
    price: "80 €",
    href: "/services#accompagnement-parental",
  },
  {
    occasion: "Pour un enfant",
    soin: "Massage enfant",
    emoji: "🌼",
    price: "45 €",
    href: "/services#soins-enfant",
  },
  {
    occasion: "Pour un accompagnement complet",
    soin: "Formule « Premiers jours »",
    emoji: "✨",
    price: "185 €",
    href: "/services#formules",
  },
];

const steps = [
  {
    icon: <FiMail className="text-primary" size={22} />,
    title: "Contactez-moi",
    desc: "Par message ou via le formulaire de contact en précisant le soin ou le montant souhaité.",
  },
  {
    icon: <FiSmartphone className="text-primary" size={22} />,
    title: "Personnalisez",
    desc: "Indiquez le prénom de la personne bénéficiaire et le message à inscrire sur la carte.",
  },
  {
    icon: <FiGift className="text-primary" size={22} />,
    title: "Recevez la carte",
    desc: "La carte est envoyée après réception du règlement — en version numérique ou imprimée.",
  },
  {
    icon: <FiCalendar className="text-primary" size={22} />,
    title: "Profitez",
    desc: "La carte cadeau est valable 6 mois à compter de la date d'émission.",
  },
];

export default function OffrirPage() {
  return (
    <main className="bg-background">

      {/* Header */}
      <section className="pt-36 pb-16 bg-secondary">
        <Container>
          <div className="max-w-2xl flex flex-col gap-4">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest">
              Carte cadeau
            </p>
            <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl">
              Offrir une parenthèse
            </h1>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Offrez un moment de douceur, de soin et de présence à ceux que
              vous aimez. La carte cadeau Parenthèse est disponible pour un
              soin spécifique, une formule ou un montant libre.
            </p>
          </div>
        </Container>
      </section>

      {/* Infos pratiques */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
            <div className="flex flex-col gap-2 p-6 rounded-2xl bg-secondary">
              <span className="text-2xl">🎁</span>
              <p className="font-semibold text-primary">Personnalisable</p>
              <p className="text-base text-muted-foreground">
                Soin spécifique, formule ou montant libre — avec prénom et
                message.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-6 rounded-2xl bg-secondary">
              <span className="text-2xl">📅</span>
              <p className="font-semibold text-primary">Valable 6 mois</p>
              <p className="text-base text-muted-foreground">
                À compter de la date d&apos;émission. Prolongation
                exceptionnelle sur demande.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-6 rounded-2xl bg-secondary">
              <span className="text-2xl">💌</span>
              <p className="font-semibold text-primary">Numérique ou imprimée</p>
              <p className="text-base text-muted-foreground">
                Nominative et non remboursable. Envoyée après réception du
                règlement.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Idées cadeaux */}
      <section className="py-16 bg-secondary">
        <Container>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-5xl md:text-6xl">
                Idées de cadeaux
              </h2>
              <p className="text-muted-foreground">
                Les soins les plus offerts, pour chaque occasion.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {giftIdeas.map((idea) => (
                <Link
                  key={idea.soin}
                  href={idea.href}
                  className="group flex flex-col gap-3 p-6 rounded-2xl bg-background border border-border hover:border-primary transition-colors duration-200">
                  <span className="text-3xl">{idea.emoji}</span>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      {idea.occasion}
                    </p>
                    <p className="font-bold text-primary group-hover:underline underline-offset-4">
                      {idea.soin}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-primary mt-auto">
                    à partir de {idea.price}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Comment commander */}
      <section className="py-16">
        <Container>
          <div className="flex flex-col gap-10">
            <h2 className="font-bold text-5xl md:text-6xl">
              Comment commander ?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold">{step.title}</p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <Container>
          <div className="flex flex-col items-center text-center gap-6 max-w-xl mx-auto">
            <span className="text-4xl">🎁</span>
            <h2 className="font-bold text-5xl md:text-6xl">
              Prête à offrir ce moment ?
            </h2>
            <p className="text-muted-foreground">
              Contactez-moi pour commander votre carte cadeau Parenthèse.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 w-full sm:w-auto">
              <ActionButton href="/contact" ariaLabel="Commander une carte cadeau">
                Commander une carte cadeau
              </ActionButton>
              <ActionButton href="/services" ariaLabel="Voir tous les soins" variant="outline">
                Voir tous les soins
              </ActionButton>
            </div>
          </div>
        </Container>
      </section>

    </main>
  );
}
