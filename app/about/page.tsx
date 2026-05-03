import Image from "next/image";
import { Container } from "../_components/container";
import ActionButton from "../_components/action-button";
import placeholderImage from "@/assets/IMG-20260323-WA0087.jpg";
import { FiAward, FiBookOpen } from "react-icons/fi";
import FormationsTimeline from "./_components/formations-timeline";

const formations = [
  {
    year: "2009",
    title: "Diplôme d'État d'Infirmière Puéricultrice",
    detail: "Institut de Puériculture et de Périnatalogie de Paris",
  },
  {
    year: "2009-2025",
    title: "Expérience en néonatologie",
    detail: "Accompagnement de nouveau-nés et de leurs familles",
  },
  {
    year: "2025",
    title: "Praticienne Thérapeutique Bain Bébé®",
    detail: "Méthode Sonia Krief — École du Bien Naître (EDBN®, Suresnes)",
  },
  {
    year: "2025",
    title: "Accompagnatrice sommeil EDBN®",
    detail: "École du Bien Naître (EDBN®, Suresnes)",
  },
  {
    year: "2025",
    title: "Massage bébé",
    detail: "École du Bien Naître (EDBN®, Suresnes)",
  },
  {
    year: "2026",
    title: "Praticienne Réflexologie Bébé Émotionnelle EDBN®",
    detail:
      "Formée par Caroline Hamon — École du Bien Naître (EDBN®, Suresnes)",
  },
  {
    year: "2026",
    title: "Massage enfant",
    detail: "École du Bien Naître (EDBN®, Suresnes)",
  },
  {
    year: "2026",
    title: "Praticienne Massage Holistique du féminin EDBN®",
    detail: "École du Bien Naître (EDBN®, Suresnes)",
  },
  {
    year: "2026",
    title: "Prévention des accidents domestiques & gestes de premiers secours",
    detail: "École du Bien Naître (EDBN®, Suresnes)",
  },
];

const manifesteLines = [
  "Devenir parent est une transformation profonde. Un passage. Un bouleversement. Une rencontre.",
  "Chaque famille mérite un accompagnement respectueux, individualisé et éclairé. Pas de méthode toute faite. Pas de réponse universelle. Mais une écoute attentive, des gestes sûrs et des repères solides.",
  "Je crois que le soin est un langage. Un langage du corps, du toucher, de la présence. Un langage qui rassure, qui relie, qui apaise.",
  "Les parents portent en eux les compétences nécessaires. Mon rôle est de soutenir, transmettre et sécuriser. En douceur. En confiance.",
  "Parenthèse est un espace pour ralentir. Un espace pour comprendre. Un espace pour tisser le lien.",
  "Parce que prendre soin n'est pas un détail. C'est une fondation.",
];

export const metadata = {
  title: "À propos — PARENTHÈSE",
  description:
    "Découvrez Faustine, infirmière puéricultrice depuis plus de 15 ans, accompagnante périnatale à domicile à Versailles et ses environs.",
};

export default function AboutPage() {
  return (
    <main className="bg-background">
      {/* Qui suis-je */}
      <section className="min-h-screen pt-30 lg:pt-0 flex items-center">
        <Container>
          <div className="flex flex-col items-center w-full lg:flex-row gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-72 h-80 md:w-96 md:h-[480px] rounded-[34%_66%_64%_36%/30%_32%_68%_70%] overflow-hidden shadow-2xl">
                <Image
                  src={placeholderImage}
                  alt="Faustine, accompagnante périnatale à domicile à Versailles"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl">
                Qui suis-je ?
              </h1>
              <p className="leading-relaxed">
                Je suis Faustine, Infirmière Puéricultrice diplômée d&apos;État
                depuis 2009, avec plus de 15 ans d&apos;expérience en service de
                néonatologie. Aujourd&apos;hui, je mets cette expertise au
                service des parents et de leurs enfants à domicile, avec un
                accompagnement sur mesure, en douceur et en confiance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Chaque soin et chaque atelier est pensé pour renforcer le lien
                parent-enfant, favoriser le bien-être et apporter sérénité et
                confiance aux familles.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 w-full sm:w-auto">
                <ActionButton
                  href="/parentheses"
                  ariaLabel="Découvrir les prestations">
                  Découvrir les prestations
                </ActionButton>
                <ActionButton
                  href="/contact"
                  ariaLabel="Me contacter"
                  variant="outline">
                  Me contacter
                </ActionButton>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Manifeste */}
      <section className="py-24 bg-secondary">
        <Container>
          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2">
              <FiBookOpen className="text-primary" size={24} />
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">
                Manifeste Parenthèse
              </span>
            </div>
            <h2 className="font-bold text-5xl md:text-6xl text-primary">
              Ce en quoi je crois
            </h2>
            <div className="flex flex-col gap-5">
              {manifesteLines.map((line, i) => (
                <p
                  key={i}
                  className={
                    i === manifesteLines.length - 1
                      ? "font-semibold text-primary text-lg"
                      : "text-muted-foreground leading-relaxed"
                  }>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Formations */}
      <section className="py-24">
        <Container>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <FiAward className="text-primary" size={24} />
                <span className="text-sm font-semibold text-primary uppercase tracking-widest">
                  Parcours & formations
                </span>
              </div>
              <h2 className="font-bold text-5xl md:text-6xl lg:text-7xl">
                Mon expertise
              </h2>
            </div>

            <FormationsTimeline formations={formations} />
          </div>
        </Container>
      </section>

      {/* Engagement */}
      <section className="py-24 bg-secondary">
        <Container>
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
            <h2 className="font-bold text-5xl md:text-6xl lg:text-7xl">
              Mon engagement
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Parenthèse est un espace où prendre soin n&apos;est pas un détail,
              mais une fondation. Chaque famille que j&apos;accompagne reçoit
              écoute, attention et gestes professionnels, dans la douceur et la
              confiance.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Mon objectif est simple : vous offrir un accompagnement qui vous
              ressemble, sécurisant et sur mesure, pour vous et votre enfant.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 w-full sm:w-auto mt-4">
              <ActionButton
                href="/parentheses"
                ariaLabel="Découvrir les prestations">
                Découvrir les prestations
              </ActionButton>
              <ActionButton
                href="/rdv"
                ariaLabel="Prendre rendez-vous"
                variant="outline">
                Prendre rendez-vous
              </ActionButton>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
