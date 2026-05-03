import Link from "next/link";

export default function CTASection() {
  return (
    <section
      className="text-center py-24 px-8"
      style={{ background: "var(--rose-mist)" }}>
      <span className="eyebrow block mb-4">Une parenthèse pour vous</span>
      <h2 className="mt-4 mb-5">À vivre… ou à offrir.</h2>
      <p
        className="text-xl italic mx-auto mb-9 max-w-xl"
        style={{ color: "var(--muted-foreground)" }}>
        Un cadeau doux, utile et profondément attentionné — pour soi, pour une
        amie, pour accompagner les débuts de la vie.
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <Link
          href="/parentheses"
          aria-label="Découvrir les soins proposés"
          className="flex items-center justify-center gap-2 px-8 h-12 bg-primary text-white rounded-full font-medium text-base shadow-m transition-all duration-300 hover:bg-foreground hover:-translate-y-px">
          Découvrir les soins <span aria-hidden>→</span>
        </Link>
        <Link
          href="/offrir"
          aria-label="Offrir une parenthèse en cadeau"
          className="flex items-center justify-center px-8 h-12 border border-primary text-foreground rounded-full font-medium text-base transition-all duration-300 hover:bg-primary hover:text-white">
          Offrir une parenthèse
        </Link>
      </div>
    </section>
  );
}
