import Link from "next/link";
import { Container } from "../_components/container";
import ActionButton from "../_components/action-button";
import { categories, formulas } from "../_components/services/servicesData";
import { FiClock, FiTag, FiInfo } from "react-icons/fi";

export const metadata = {
  title: "Prestations & Tarifs — PARENTHÈSE",
  description:
    "Soins bébé, massages prénataux et postnataux, accompagnement parental, ateliers collectifs. Découvrez toutes les prestations Parenthèse à domicile à Versailles.",
};

export default function ServicesPage() {
  return (
    <main className="bg-background">

      {/* Header */}
      <section className="pt-36 pb-16 bg-secondary">
        <Container>
          <div className="max-w-2xl flex flex-col gap-6">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">
              Prestations & Tarifs
            </h1>
            <p className="text-muted-foreground leading-relaxed text-lg">
              De la naissance aux premières années, je vous accompagne avec des
              soins et ateliers pensés pour répondre à vos besoins, avec douceur
              et expertise. Toutes les prestations sont réalisées à domicile,
              à Versailles et ses environs.
            </p>
          </div>
        </Container>
      </section>

      {/* Navigation ancres */}
      <nav className="sticky top-0 z-40 bg-background border-b border-border">
        <Container>
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.anchor}`}
                className="shrink-0 text-sm font-medium px-4 py-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-colors duration-200">
                {cat.title}
              </a>
            ))}
            <a
              href="#formules"
              className="shrink-0 text-sm font-medium px-4 py-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-colors duration-200">
              Formules
            </a>
          </div>
        </Container>
      </nav>

      {/* Catégories */}
      {categories.map((cat, catIndex) => (
        <section
          key={cat.id}
          id={cat.anchor}
          className={`py-20 ${catIndex % 2 !== 0 ? "bg-secondary" : "bg-background"}`}>
          <Container>
            <div className="flex flex-col gap-10">
              {/* Titre catégorie */}
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold text-primary uppercase tracking-widest">
                  {cat.subtitle}
                </p>
                <h2 className="font-bold text-4xl md:text-5xl">{cat.title}</h2>
              </div>

              {/* Grille de services */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cat.services.map((service) => (
                  <div
                    key={service.id}
                    className={`flex flex-col justify-between gap-5 p-8 rounded-2xl border border-border ${catIndex % 2 !== 0 ? "bg-background" : "bg-secondary/40"}`}>
                    <div className="flex flex-col gap-3">
                      <h3 className="font-bold text-xl text-primary">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                      {service.note && (
                        <p className="flex items-center gap-1.5 text-xs text-primary bg-secondary px-3 py-1.5 rounded-full w-fit">
                          <FiInfo size={12} />
                          {service.note}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-4">
                        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <FiClock size={14} className="text-primary" />
                          {service.duration}
                        </span>
                        <span className="flex items-center gap-1.5 text-sm font-semibold text-primary">
                          <FiTag size={14} />
                          {service.price}
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <Link
                          href="/rdv"
                          className="flex items-center justify-center px-5 h-10 bg-primary text-secondary rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                          Réserver
                        </Link>
                        <Link
                          href="/offrir"
                          className="flex items-center justify-center px-5 h-10 border border-primary text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-secondary transition-colors">
                          Offrir ce soin
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* Formules */}
      <section id="formules" className="py-20 bg-secondary">
        <Container>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest">
                Packs
              </p>
              <h2 className="font-bold text-4xl md:text-5xl">
                Les Formules Parenthèse
              </h2>
              <p className="text-muted-foreground max-w-xl mt-2">
                Un parcours sur mesure, en douceur et en confiance. Des formules
                pensées pour vous offrir continuité, sérénité et cohérence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {formulas.map((formula) => (
                <div
                  key={formula.id}
                  className="flex flex-col justify-between gap-6 p-8 rounded-2xl bg-background border border-border">
                  <div className="flex flex-col gap-4">
                    <span className="text-3xl">{formula.emoji}</span>
                    <div>
                      <h3 className="font-bold text-xl text-primary">
                        {formula.title}
                      </h3>
                      {formula.variant && (
                        <p className="text-sm text-muted-foreground capitalize">
                          {formula.variant}
                        </p>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {formula.subtitle}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {formula.includes.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-baseline gap-3">
                      <span className="text-2xl font-bold text-primary">
                        {formula.price} €
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        {formula.originalPrice} €
                      </span>
                    </div>
                    <Link
                      href="/rdv"
                      className="flex items-center justify-center px-6 h-11 bg-primary text-secondary rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                      Réserver cette formule
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Frais de déplacement */}
      <section className="py-16">
        <Container>
          <div className="max-w-2xl mx-auto flex flex-col gap-6">
            <h2 className="font-bold text-2xl">Frais de déplacement</h2>
            <p className="text-muted-foreground text-sm">
              Toutes les prestations sont réalisées à votre domicile, à
              Versailles et ses environs. Un forfait déplacement s&apos;applique
              au-delà de la zone incluse. Vous êtes informés avant chaque
              réservation.
            </p>
            <div className="rounded-2xl overflow-hidden border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-secondary">
                    <th className="text-left px-4 py-3 font-semibold text-primary">Zone</th>
                    <th className="text-left px-4 py-3 font-semibold text-primary">Distance</th>
                    <th className="text-left px-4 py-3 font-semibold text-primary">Forfait</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-background">
                    <td className="px-4 py-3 font-medium">Zone 1</td>
                    <td className="px-4 py-3 text-muted-foreground">Versailles + 10 km</td>
                    <td className="px-4 py-3 font-semibold text-primary">Inclus</td>
                  </tr>
                  <tr className="bg-secondary/40">
                    <td className="px-4 py-3 font-medium">Zone 2</td>
                    <td className="px-4 py-3 text-muted-foreground">10 à 20 km</td>
                    <td className="px-4 py-3 font-semibold text-primary">+ 10 €</td>
                  </tr>
                  <tr className="bg-background">
                    <td className="px-4 py-3 font-medium">Zone 3</td>
                    <td className="px-4 py-3 text-muted-foreground">20 à 30 km</td>
                    <td className="px-4 py-3 font-semibold text-primary">+ 20 €</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-secondary">
        <Container>
          <div className="flex flex-col items-center text-center gap-6">
            <h2 className="font-bold text-4xl md:text-5xl">
              Prête à réserver votre parenthèse ?
            </h2>
            <p className="text-muted-foreground max-w-md">
              Toutes les prestations et formules peuvent être offertes en carte
              cadeau. Validité 6 mois.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 w-full sm:w-auto">
              <ActionButton href="/rdv" ariaLabel="Prendre rendez-vous">
                Prendre rendez-vous
              </ActionButton>
              <ActionButton href="/offrir" ariaLabel="Offrir une parenthèse" variant="outline">
                Offrir une parenthèse
              </ActionButton>
            </div>
          </div>
        </Container>
      </section>

    </main>
  );
}
