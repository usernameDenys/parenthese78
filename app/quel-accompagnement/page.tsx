import Link from "next/link";
import { Container } from "@/app/_components/container";
import { GuideForm } from "./_components/guide-form";

export const metadata = {
  title: "Quel accompagnement choisir ? — Parenthèse",
  description:
    "Vous ne savez pas quel soin choisir ? Ce guide vous oriente vers la Parenthèse la plus adaptée à votre besoin — pour vous, votre bébé, votre enfant ou votre famille.",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const categories = [
  {
    id: "femmes",
    eyebrow: "Pour vous",
    title: "Vous êtes une femme",
    bg: "var(--background)",
    needs: [
      {
        question: "J'ai besoin de me recentrer ou de me détendre",
        suggestions: [
          { label: "Parenthèse Équilibre féminin", href: "/parentheses#cat-femme" },
          { label: "Réflexologie émotionnelle", href: "/parentheses#cat-femme" },
        ],
      },
      {
        question: "Je suis enceinte",
        suggestions: [
          { label: "Parenthèse Maternité — Massage prénatal", href: "/parentheses#cat-femme" },
        ],
      },
      {
        question: "Je suis en post-partum",
        suggestions: [
          { label: "Parenthèse Postnatale — Massage postnatal", href: "/parentheses#cat-femme" },
          { label: "Soin Rebozo", href: "/parentheses#cat-femme" },
        ],
      },
    ],
  },
  {
    id: "tout-petits",
    eyebrow: "Pour votre bébé",
    title: "Pour les tout-petits",
    bg: "var(--secondary)",
    needs: [
      {
        question: "Mon bébé vient de naître (ou très récemment)",
        suggestions: [
          { label: "Thérapeutique Bain Bébé® — Méthode Sonia Krief", href: "/parentheses#cat-bebe" },
          { label: "Parenthèse Lien — Bain enveloppé", href: "/parentheses#cat-bebe" },
        ],
      },
      {
        question: "J'ai besoin de créer du lien avec mon bébé",
        suggestions: [
          { label: "Massage bébé", href: "/parentheses#cat-bebe" },
        ],
      },
      {
        question: "Mon bébé a des émotions ou des inconforts du quotidien",
        suggestions: [
          { label: "Réflexologie Bébé Émotionnelle®", href: "/parentheses#cat-bebe" },
        ],
      },
    ],
  },
  {
    id: "enfants",
    eyebrow: "Pour votre enfant",
    title: "Pour les enfants de 4 à 13 ans",
    bg: "var(--background)",
    needs: [
      {
        question: "Mon enfant a besoin de détente et de relâchement",
        suggestions: [
          { label: "Massage enfant", href: "/parentheses#cat-enfants" },
        ],
      },
      {
        question: "Mon enfant traverse des émotions fortes",
        suggestions: [
          { label: "Réflexologie Bébé Émotionnelle®", href: "/parentheses#cat-enfants" },
          { label: "Massage enfant avec option RBE", href: "/parentheses#cat-enfants" },
        ],
      },
    ],
  },
  {
    id: "parents",
    eyebrow: "Pour vous en tant que parents",
    title: "Pour les parents",
    bg: "var(--accent)",
    needs: [
      {
        question: "Je me sens fatigué(e), dépassé(e), ou j'ai des questions de puériculture",
        suggestions: [
          { label: "Soutien à la parentalité — Post-Partum", href: "/parentheses#cat-parents" },
        ],
      },
      {
        question: "Mon enfant a des difficultés de sommeil",
        suggestions: [
          { label: "Sommeil de l'enfant — 0 à 3 ans", href: "/parentheses#cat-parents" },
        ],
      },
    ],
  },
];

// ─── Components ───────────────────────────────────────────────────────────────

function NeedCard({
  question,
  suggestions,
}: {
  question: string;
  suggestions: { label: string; href: string }[];
}) {
  return (
    <div
      className="rounded-2xl flex flex-col gap-5 p-6 md:p-8 transition-all duration-300 hover:-translate-y-px"
      style={{
        background: "var(--background)",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow-s)",
      }}>
      <p
        className="italic leading-relaxed"
        style={{ fontSize: "1.1rem", color: "var(--foreground)" }}>
        {question}
      </p>

      <div
        className="flex flex-col gap-3 pt-4"
        style={{ borderTop: "1px solid var(--border)" }}>
        <span
          className="uppercase tracking-widest"
          style={{
            fontSize: "0.72rem",
            color: "var(--sage-deep)",
            fontFamily: "var(--font-cormorant), serif",
            fontWeight: 500,
          }}>
          Je vous suggère
        </span>
        {suggestions.map((s, i) => (
          <Link
            key={i}
            href={s.href}
            className="group flex items-center justify-between gap-4">
            <span
              className="font-medium transition-colors duration-200 group-hover:text-primary"
              style={{ color: "var(--foreground)", fontSize: "1rem" }}>
              {s.label}
            </span>
            <span
              className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
              style={{ color: "var(--primary)" }}>
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function CategorySection({
  eyebrow,
  title,
  bg,
  needs,
}: {
  eyebrow: string;
  title: string;
  bg: string;
  needs: { question: string; suggestions: { label: string; href: string }[] }[];
}) {
  const cols =
    needs.length === 2
      ? "grid-cols-1 md:grid-cols-2"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="py-24" style={{ background: bg }}>
      <Container>
        <div className="section-head mb-14">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
        </div>
        <div className={`grid gap-6 ${cols}`}>
          {needs.map((n, i) => (
            <NeedCard key={i} {...n} />
          ))}
        </div>
      </Container>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function QuelAccompagnementPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="pt-40 pb-16 text-center"
        style={{ background: "var(--secondary)" }}>
        <Container>
          <div className="flex flex-col items-center gap-4 max-w-2xl mx-auto">
            <span className="eyebrow">Trouver votre soin</span>
            <h1>Quel accompagnement choisir ?</h1>
            <p className="text-xl italic" style={{ color: "var(--muted-foreground)" }}>
              Un guide simple pour vous orienter vers la Parenthèse la plus adaptée
              à votre besoin ou à celui de votre enfant.
            </p>
          </div>
        </Container>
      </section>

      {/* Categories */}
      {categories.map((cat) => (
        <CategorySection key={cat.id} {...cat} />
      ))}

      {/* Bottom CTA with form */}
      <section className="py-24" style={{ background: "var(--rose-mist, #F5E6E2)" }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col gap-6">
              <span className="eyebrow">Vous hésitez encore ?</span>
              <h2 className="text-left">Je vous aide à choisir</h2>
              <p className="leading-relaxed text-lg" style={{ color: "var(--muted-foreground)" }}>
                Parfois, quelques échanges suffisent pour trouver le soin le plus
                adapté à votre situation.
              </p>
              <p className="leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                Partagez-moi votre besoin en quelques mots — je vous répondrai dans
                les 24 à 48h pour vous orienter avec bienveillance.
              </p>
              <ul className="flex flex-col gap-3 mt-2">
                {[
                  "Réponse personnalisée sous 24 à 48h",
                  "Aucun engagement, juste de l'écoute",
                  "Je m'adapte à votre situation et à votre rythme",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "var(--muted-foreground)" }}>
                    <span style={{ color: "var(--primary)", flexShrink: 0, marginTop: 2 }}>✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl p-8 md:p-10"
              style={{ background: "var(--background)", boxShadow: "var(--shadow-m)" }}>
              <GuideForm />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
