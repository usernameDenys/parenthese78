import Image from "next/image";
import Link from "next/link";
import { Container } from "../_components/container";
import faustineImage from "@/assets/faustine.webp";
import FormationsTimeline from "./_components/formations-timeline";

const formations = [
  {
    year: "2009",
    title: "Diplôme d'État d'Infirmière Puéricultrice",
    detail: "Institut de Puériculture et de Périnatalogie de Paris",
  },
  {
    year: "2009–2025",
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
    detail: "Formée par Caroline Hamon — École du Bien Naître (EDBN®, Suresnes)",
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

      {/* Page header */}
      <section className="pt-40 pb-20 text-center bg-secondary">
        <Container>
          <div className="max-w-xl mx-auto flex flex-col gap-4">
            <span className="eyebrow">À propos</span>
            <h1>Faustine</h1>
            <p className="italic text-muted-foreground text-lg leading-relaxed max-w-md mx-auto">
              Infirmière puéricultrice diplômée d&apos;État depuis 2009,
              accompagnante périnatale à domicile. Maman, basée à Versailles.
            </p>
          </div>
        </Container>
      </section>

      {/* Split: image + Mon histoire */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div
              className="relative overflow-hidden w-full"
              style={{
                borderRadius: "var(--radius-img)",
                aspectRatio: "4 / 5",
                boxShadow: "var(--shadow-m)",
              }}
            >
              <Image
                src={faustineImage}
                alt="Faustine, accompagnante périnatale à domicile à Versailles"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="flex flex-col gap-5">
              <span className="eyebrow">Mon histoire</span>
              <h2>Qui suis-je&nbsp;?</h2>
              <p>
                Je suis Faustine, Infirmière Puéricultrice diplômée d&apos;État
                depuis 2009, avec plus de 15&nbsp;ans d&apos;expérience en
                service de néonatologie. Aujourd&apos;hui, je mets cette
                expertise au service des parents et de leurs enfants à domicile,
                avec un accompagnement sur mesure, en douceur et en confiance.
              </p>
              <p>
                Chaque soin et chaque atelier est pensé pour renforcer le lien
                parent-enfant, favoriser le bien-être et apporter sérénité et
                confiance aux familles.
              </p>
              <p>
                Quand je suis devenue maman à mon tour, j&apos;ai compris
                combien le retour à la maison pouvait être vertigineux. Combien
                on avait besoin, pendant ces premiers mois, qu&apos;on vienne —
                non pas pour vérifier, mais pour soutenir.
              </p>
              <div
                className="font-heading text-primary leading-none mt-2"
                style={{ fontSize: "2rem" }}
              >
                — Faustine
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-secondary">
        <Container>
          <div className="section-head">
            <span className="eyebrow">Parcours &amp; formations</span>
            <h2>Mon expertise</h2>
            <p>
              Plus de 15&nbsp;années de formation et d&apos;expérience auprès
              des familles.
            </p>
          </div>
          <FormationsTimeline formations={formations} />
        </Container>
      </section>

      {/* Manifeste */}
      <section className="py-20 lg:py-28 bg-rose-mist">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="eyebrow">Manifeste</span>
              <h2 className="mt-4">Ce en quoi je crois</h2>
            </div>
            <ul className="flex flex-col gap-6">
              {manifesteLines.map((line, i) => (
                <li key={i} className="flex gap-4 items-start" style={{ lineHeight: 1.6 }}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="shrink-0 mt-1"
                    style={{ color: "var(--color-primary)" }}
                  >
                    <path
                      d="M12 2C9 6 4 8 4 13a8 8 0 0 0 16 0c0-5-5-7-8-11Z"
                      fill="currentColor"
                      opacity="0.25"
                    />
                    <path
                      d="M12 2C15 6 20 8 20 13a8 8 0 0 1-16 0c0-5 5-7 8-11Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 2v18"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      opacity="0.4"
                    />
                  </svg>
                  <span
                    className="text-foreground"
                    style={{ fontSize: "1.1rem" }}
                  >
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* CTA banner */}
      <section className="text-center py-20 lg:py-28 bg-secondary">
        <Container>
          <div className="max-w-xl mx-auto flex flex-col items-center gap-6">
            <h2>Faisons connaissance.</h2>
            <p className="italic text-lg leading-relaxed max-w-md">
              Le premier appel est offert — quelques minutes pour parler de
              vous, de votre famille, de ce dont vous avez besoin.
            </p>
            <Link
              href="/contact"
              aria-label="Me contacter"
              className="h-12 px-8 flex items-center justify-center bg-primary text-secondary rounded-full font-sans font-medium text-lg shadow-m hover:-translate-y-0.5 transition-transform duration-200"
            >
              Me contacter →
            </Link>
          </div>
        </Container>
      </section>

    </main>
  );
}
