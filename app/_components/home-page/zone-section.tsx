import Link from "next/link";

const cities = [
  "Versailles", "Le Chesnay", "Viroflay", "Vélizy",
  "Saint-Cloud", "Marnes-la-Coquette", "Bougival", "La Celle Saint-Cloud",
  "Buc", "Jouy-en-Josas", "Bièvres", "Vaucresson",
];

export default function ZoneSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
      {/* Text + city list */}
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

        {/* City list */}
        <ul className="grid grid-cols-2 gap-x-6 gap-y-3 mt-2">
          {cities.map((city) => (
            <li key={city} className="flex items-center gap-3 text-base" style={{ color: "var(--muted-foreground)" }}>
              <span
                className="rounded-full shrink-0"
                style={{ width: 6, height: 6, background: "var(--primary)" }}
                aria-hidden
              />
              {city}
            </li>
          ))}
        </ul>

        <Link
          href="/parentheses"
          aria-label="Découvrir les soins à domicile"
          className="mt-2 self-start italic text-primary border-b border-primary/40 pb-0.5 text-sm tracking-wide hover:border-primary transition-colors duration-200">
          Découvrir les soins à domicile →
        </Link>
      </div>

      {/* SVG Zone Map */}
      <div
        className="rounded-3xl overflow-hidden"
        style={{
          aspectRatio: "1/1",
          background: "var(--cream-warm)",
          boxShadow: "var(--shadow-m)",
        }}>
        <ZoneMapSVG />
      </div>
    </div>
  );
}

function ZoneMapSVG() {
  return (
    <svg viewBox="0 0 400 400" width="100%" height="100%" style={{ display: "block" }}>
      <defs>
        <radialGradient id="zoneGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8CFCF" stopOpacity="0.6" />
          <stop offset="60%" stopColor="#E8CFCF" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#E8CFCF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill="#F4ECDF" />
      <path
        d="M-20 130 C 80 100, 160 180, 260 140 S 420 120, 440 160"
        stroke="#9CAB8E" strokeOpacity="0.35" strokeWidth="1.5" fill="none"
      />
      <path
        d="M-20 280 C 100 250, 200 310, 320 280 S 420 260, 440 300"
        stroke="#9CAB8E" strokeOpacity="0.25" strokeWidth="1.5" fill="none"
      />
      {Array.from({ length: 36 }).map((_, i) => {
        const x = (i * 53) % 400;
        const y = ((i * 71) % 380) + 10;
        return (
          <circle key={i} cx={x} cy={y} r="2" fill="#9CAB8E" opacity="0.25" />
        );
      })}
      <circle cx="200" cy="200" r="150" fill="url(#zoneGrad)" />
      <circle
        cx="200" cy="200" r="150"
        fill="none" stroke="#D4A0A0" strokeOpacity="0.55" strokeDasharray="4 6"
      />
      <circle
        cx="200" cy="200" r="100"
        fill="none" stroke="#D4A0A0" strokeOpacity="0.3" strokeDasharray="2 6"
      />
      <circle cx="200" cy="200" r="7" fill="#B88A8A" />
      <circle cx="200" cy="200" r="14" fill="#B88A8A" opacity="0.25" />
      <text
        x="200" y="230"
        textAnchor="middle"
        fontFamily="Dancing Script, cursive"
        fontSize="22"
        fill="#B88A8A">
        Versailles
      </text>
      {[
        { x: 110, y: 130, name: "Le Chesnay" },
        { x: 305, y: 150, name: "Vélizy" },
        { x: 90, y: 260, name: "Saint-Cloud" },
        { x: 320, y: 280, name: "Jouy-en-Josas" },
        { x: 200, y: 90, name: "Bougival" },
        { x: 200, y: 330, name: "Buc" },
      ].map((c) => (
        <g key={c.name}>
          <circle cx={c.x} cy={c.y} r="3" fill="#7A8B6E" />
          <text
            x={c.x}
            y={c.y - 8}
            textAnchor="middle"
            fontFamily="Cormorant Garamond, serif"
            fontSize="13"
            fill="#6B5F58"
            fontStyle="italic">
            {c.name}
          </text>
        </g>
      ))}
    </svg>
  );
}
