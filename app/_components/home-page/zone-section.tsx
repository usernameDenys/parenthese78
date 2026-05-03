import Link from "next/link";
import ZoneMapClient from "../zone-map-client";

const zones = [
  { zone: "Zone 1", distance: "Versailles + 10 km", tarif: "Inclus" },
  { zone: "Zone 2", distance: "10 à 20 km", tarif: "+ 10 €" },
  { zone: "Zone 3", distance: "20 à 30 km", tarif: "+ 20 €" },
];

export default function ZoneSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
      {/* Text + tarifs */}
      <div className="flex flex-col gap-6">
        <div>
          <span className="eyebrow block mb-4">Chez vous, en toute sérénité</span>
          <h2>Je viens à vous.</h2>
        </div>
        <p className="leading-relaxed">
          Je me déplace à votre domicile, à Versailles et ses environs, afin de
          vous offrir un moment de soin dans votre cocon, sans contraintes de
          déplacement, dans un environnement familier et rassurant, propice au
          lien et à la détente.
        </p>
        <p className="leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
          Au-delà de la zone incluse, un forfait déplacement s&apos;applique
          selon la distance. Vous êtes informés avant chaque réservation pour
          une totale transparence.
        </p>

        {/* Tarifs table */}
        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
          <table className="w-full text-base">
            <thead>
              <tr style={{ background: "var(--secondary)" }}>
                <th className="text-left px-5 py-3 font-medium uppercase tracking-widest" style={{ fontSize: "0.78rem", color: "var(--ink-mute)" }}>Zone</th>
                <th className="text-left px-5 py-3 font-medium uppercase tracking-widest" style={{ fontSize: "0.78rem", color: "var(--ink-mute)" }}>Distance</th>
                <th className="text-left px-5 py-3 font-medium uppercase tracking-widest" style={{ fontSize: "0.78rem", color: "var(--ink-mute)" }}>Forfait</th>
              </tr>
            </thead>
            <tbody>
              {zones.map((row, i) => (
                <tr
                  key={row.zone}
                  style={{
                    background: i % 2 === 0 ? "var(--background)" : "var(--secondary)",
                    borderTop: "1px dotted var(--border)",
                  }}>
                  <td className="px-5 py-4 font-medium" style={{ color: "var(--foreground)" }}>{row.zone}</td>
                  <td className="px-5 py-4" style={{ color: "var(--muted-foreground)" }}>{row.distance}</td>
                  <td className="px-5 py-4 font-heading" style={{ color: "var(--primary)", fontSize: "1.1rem" }}>{row.tarif}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Link
          href="/parentheses"
          aria-label="Découvrir les soins à domicile"
          className="mt-2 self-start italic text-primary border-b border-primary/40 pb-0.5 text-sm tracking-wide hover:border-primary transition-colors duration-200">
          Découvrir les soins à domicile →
        </Link>
      </div>

      {/* Interactive Leaflet Map */}
      <div
        className="rounded-3xl overflow-hidden"
        style={{
          aspectRatio: "1/1",
          boxShadow: "var(--shadow-m)",
          isolation: "isolate",
        }}>
        <ZoneMapClient />
      </div>
    </div>
  );
}
