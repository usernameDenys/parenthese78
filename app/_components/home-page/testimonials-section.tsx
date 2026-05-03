import Link from "next/link";

const testimonials = [
  {
    quote:
      "J'ai énormément apprécié mon massage prénatal. C'est un soin enveloppant, j'étais comme dans un cocon. Le toucher était doux et bienveillant. Un vrai moment de reconnexion à mon corps et mon bébé. Faustine est très attentionnée et douce, me permettant de lâcher prise. Soulagement des tensions et bien-être total !",
    name: "Hélène B.",
    meta: "Massage prénatal",
    initial: "H",
  },
  {
    quote:
      "Une expérience magique et magnifique pour notre fille et pour nous, parents. Un moment rempli de douceur et d'émotion, Yuna était apaisée, détendue et en totale confiance. Un immense merci Faustine pour ta bienveillance, ton professionnalisme, ta délicatesse et ton écoute.",
    name: "Joyce D.",
    meta: "Bain bébé",
    initial: "J",
  },
  {
    quote:
      "Le tout premier bain de notre fille a été le bain thérapeutique réalisé par Faustine dès notre retour de la maternité. Notre petite Lison était apaisée et Faustine a su nous accompagner en tant que parents. Toujours disponible et à l'écoute. Une grande professionnelle, passionnée par son métier.",
    name: "Emilène M.",
    meta: "Thérapeutique Bain Bébé",
    initial: "E",
  },
];

export default function TestimonialsSection() {
  return (
    <div className="flex flex-col w-full items-center">
      {/* Section header */}
      <div className="section-head">
        <span className="eyebrow">Ils en parlent</span>
        <h2>Des moments de douceur</h2>
        <p>partagés par les familles que j&apos;ai accompagnées.</p>
      </div>

      {/* 3-col testimonial grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="relative bg-background rounded-[18px] border border-border p-10"
            style={{ paddingTop: "2.5rem" }}>
            {/* Decorative quote mark */}
            <span
              aria-hidden
              className="absolute font-heading leading-none pointer-events-none select-none"
              style={{
                top: "-1.75rem",
                left: "1.5rem",
                fontSize: "6rem",
                color: "var(--rose-light)",
                lineHeight: 1,
              }}>
              &ldquo;
            </span>

            <p
              className="italic leading-relaxed mb-6"
              style={{ color: "var(--foreground)", fontSize: "1.05rem" }}>
              {t.quote}
            </p>

            <div
              className="flex items-center gap-4 pt-5"
              style={{ borderTop: "1px solid var(--border)" }}>
              <div
                className="rounded-full flex items-center justify-center font-heading shrink-0"
                style={{
                  width: 44,
                  height: 44,
                  background: "var(--rose-mist)",
                  color: "var(--primary)",
                  fontSize: "1.4rem",
                }}>
                {t.initial}
              </div>
              <div>
                <div className="font-medium" style={{ color: "var(--foreground)" }}>
                  {t.name}
                </div>
                <div
                  className="text-sm italic"
                  style={{ color: "var(--ink-mute)" }}>
                  {t.meta}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-14">
        <Link
          href="/parentheses"
          aria-label="Découvrir les soins proposés"
          className="flex items-center justify-center gap-2 px-8 h-12 bg-primary text-white rounded-full font-medium text-base shadow-m transition-all duration-300 hover:bg-foreground hover:-translate-y-px">
          Découvrir les soins
        </Link>
        <Link
          href="/offrir"
          aria-label="Offrir une parenthèse en cadeau"
          className="flex items-center justify-center px-8 h-12 border border-primary text-foreground rounded-full font-medium text-base transition-all duration-300 hover:bg-primary hover:text-white">
          Offrir une parenthèse
        </Link>
      </div>
    </div>
  );
}
