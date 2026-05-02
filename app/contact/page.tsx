import { Container } from "../_components/container";
import ContactForm from "./_components/contact-form";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";

export const metadata = {
  title: "Contact — PARENTHÈSE",
  description:
    "Contactez Faustine pour réserver un soin, un atelier ou en savoir plus sur l'accompagnement périnatal à domicile à Versailles.",
};

const infos = [
  {
    icon: <FiPhone className="text-primary shrink-0" size={20} />,
    label: "Téléphone",
    value: "06.22.00.90.39",
    href: "tel:+33622009039",
  },
  {
    icon: <FiMail className="text-primary shrink-0" size={20} />,
    label: "Email",
    value: "parenthese78.faustine@gmail.com",
    href: "mailto:parenthese78.faustine@gmail.com",
  },
  {
    icon: <FiMapPin className="text-primary shrink-0" size={20} />,
    label: "Zone",
    value: "Versailles et ses environs (78)",
    href: null,
  },
  {
    icon: <FiClock className="text-primary shrink-0" size={20} />,
    label: "Réponse",
    value: "Sous 24 à 48h",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <main className="bg-background">

      {/* Header */}
      <section className="pt-36 pb-16 bg-secondary">
        <Container>
          <div className="max-w-2xl flex flex-col gap-4">
            <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl">
              Contact
            </h1>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Je suis là pour répondre à vos questions et vous accompagner.
              Vous souhaitez réserver un soin, un atelier, ou simplement en
              savoir plus ? Je vous accueille avec écoute, bienveillance et
              professionnalisme.
            </p>
          </div>
        </Container>
      </section>

      {/* Contenu */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Coordonnées */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-6">
                <h2 className="font-bold text-2xl">Mes coordonnées</h2>
                <ul className="flex flex-col gap-5">
                  {infos.map((info) => (
                    <li key={info.label} className="flex items-start gap-4">
                      <div className="mt-0.5">{info.icon}</div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                          {info.label}
                        </span>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="font-medium hover:text-primary transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <span className="font-medium">{info.value}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4 p-8 rounded-2xl bg-secondary">
                <h3 className="font-semibold text-primary">
                  Informations pratiques
                </h3>
                <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✦</span>
                    Tous les soins sont réalisés à votre domicile.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✦</span>
                    Les prestations peuvent être offertes en carte cadeau.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✦</span>
                    Pour toute question sur les tarifs ou formules, je suis
                    disponible.
                  </li>
                </ul>
              </div>
            </div>

            {/* Formulaire */}
            <div className="flex flex-col gap-6">
              <h2 className="font-bold text-2xl">Envoyez-moi un message</h2>
              <ContactForm />
            </div>

          </div>
        </Container>
      </section>

    </main>
  );
}
