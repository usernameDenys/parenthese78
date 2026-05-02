import Link from "next/link";
import ZoneMapClient from "../zone-map-client";

const zones = [
  { zone: "Zone 1", distance: "Versailles + 10 km", tarif: "Inclus" },
  { zone: "Zone 2", distance: "10 à 20 km", tarif: "+ 10 €" },
  { zone: "Zone 3", distance: "20 à 30 km", tarif: "+ 20 €" },
];

export default function ZoneSection() {
  return (
    <div className="flex flex-col w-full gap-12">

      {/* Texte + Tableau */}
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex flex-col gap-4 lg:w-1/2">
          <h2 className="font-bold text-5xl md:text-6xl lg:text-7xl">
            Je viens à vous
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Je me déplace à votre domicile, à Versailles et ses environs, afin de
            vous offrir un moment de soin dans votre cocon, sans contraintes de
            déplacement, dans un environnement familier et rassurant, propice au
            lien et à la détente.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Au-delà de la zone incluse, un forfait déplacement s&apos;applique
            selon la distance. Vous êtes informés avant chaque réservation pour
            une totale transparence.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 w-full sm:w-auto pt-2">
            <Link
              href="/parentheses"
              aria-label="Découvrir les soins à domicile"
              className="flex items-center justify-center px-8 h-12 bg-primary text-secondary rounded-full font-medium hover:opacity-90 transition-opacity duration-200 shadow-m">
              Découvrir les soins
            </Link>
            <Link
              href="/contact"
              aria-label="Contactez-moi"
              className="flex items-center justify-center px-8 h-12 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-secondary transition-colors duration-200">
              Contactez-moi
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 rounded-2xl overflow-hidden border border-border">
          <table className="w-full text-base">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left px-4 py-3 font-semibold text-primary">Zone</th>
                <th className="text-left px-4 py-3 font-semibold text-primary">Distance</th>
                <th className="text-left px-4 py-3 font-semibold text-primary">Forfait</th>
              </tr>
            </thead>
            <tbody>
              {zones.map((row, i) => (
                <tr key={row.zone} className={i % 2 === 0 ? "bg-background" : "bg-secondary/40"}>
                  <td className="px-4 py-4 font-medium">{row.zone}</td>
                  <td className="px-4 py-4 text-muted-foreground">{row.distance}</td>
                  <td className="px-4 py-4 font-semibold text-primary">{row.tarif}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Carte pleine largeur */}
      <div
        className="w-full h-[480px] relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black 6%, black 94%, transparent), linear-gradient(to right, transparent, black 3%, black 97%, transparent)",
          maskComposite: "intersect",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 6%, black 94%, transparent), linear-gradient(to right, transparent, black 3%, black 97%, transparent)",
          WebkitMaskComposite: "source-in",
        }}>
        <ZoneMapClient />
      </div>

    </div>
  );
}
