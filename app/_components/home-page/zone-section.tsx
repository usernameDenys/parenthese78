import Link from "next/link";
import Image from "next/image";
import mapImage from "@/assets/carte.webp";

const zones = [
  { zone: "Zone 1", distance: "Versailles + 10 km", tarif: "Inclus" },
  { zone: "Zone 2", distance: "10 à 20 km", tarif: "+ 10 €" },
  { zone: "Zone 3", distance: "20 à 30 km", tarif: "+ 20 €" },
];

export default function ZoneSection() {
  return (
    <div className="flex flex-col items-center w-full lg:flex-row gap-12">
      {/* Texte */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl">
          Je viens à vous
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Je me déplace à votre domicile, à Versailles et ses environs, afin de
          vous offrir un moment de soin dans votre cocon, sans contraintes de
          déplacement.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Au-delà de la zone incluse, un forfait déplacement s&apos;applique
          selon la distance. Vous êtes informés avant chaque réservation pour
          une totale transparence.
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
              {zones.map((row, i) => (
                <tr key={row.zone} className={i % 2 === 0 ? "bg-background" : "bg-secondary/40"}>
                  <td className="px-4 py-3 font-medium">{row.zone}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.distance}</td>
                  <td className="px-4 py-3 font-semibold text-primary">{row.tarif}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 w-full sm:w-auto">
          <Link
            href="/contact"
            aria-label="Contactez-moi"
            className="flex items-center justify-center px-8 h-12 bg-primary text-secondary rounded-full font-medium hover:opacity-90 transition-opacity duration-200 shadow-m">
            Contactez-moi
          </Link>
          <Link
            href="/rdv"
            aria-label="Réserver un RDV"
            className="flex items-center justify-center px-8 h-12 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-secondary transition-colors duration-200">
            Réserver un RDV
          </Link>
        </div>
      </div>

      {/* Carte */}
      <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-l">
        <Image
          src={mapImage}
          alt="Zone de déplacement — Versailles et ses environs"
          className="object-cover w-full"
        />
      </div>
    </div>
  );
}
