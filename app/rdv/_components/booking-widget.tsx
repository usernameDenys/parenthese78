"use client";

import { useState } from "react";
import Cal from "@calcom/embed-react";
import { CAL_USERNAME } from "@/app/lib/booking";

const SERVICES = [
  {
    id: "maternite",
    label: "Parenthèse Maternité",
    sous: "Massage prénatal",
  },
  {
    id: "postnatale",
    label: "Parenthèse Postnatale",
    sous: "Massage postnatal",
  },
  {
    id: "soin-rebozo",
    label: "Soin Rebozo",
    sous: "Enveloppement & bercement",
  },
  {
    id: "equilibre-feminin",
    label: "Équilibre féminin",
    sous: "Massage holistique",
  },
  {
    id: "reflexologie",
    label: "Réflexologie émotionnelle",
    sous: "Pieds & centres énergétiques",
  },
  {
    id: "rituel-rebozo",
    label: "Rituel Rebozo",
    sous: "Soin d'exception",
  },
  {
    id: "parenthese-naissance",
    label: "Parenthèse Naissance",
    sous: "Bain Bébé®",
  },
  {
    id: "parenthese-lien",
    label: "Parenthèse Lien",
    sous: "Bain enveloppé",
  },
  {
    id: "massage-bebe",
    label: "Massage bébé",
    sous: "Toucher et présence",
  },
  {
    id: "reflexologie-bebe",
    label: "Réflexologie Bébé Émotionnelle®",
    sous: "0–13 ans",
  },
  {
    id: "soutien-parentalite",
    label: "Soutien à la parentalité",
    sous: "Post-Partum",
  },
  {
    id: "sommeil-enfant",
    label: "Sommeil de l'enfant",
    sous: "0–3 ans",
  },
  {
    id: "massage-enfant",
    label: "Massage enfant",
    sous: "4–13 ans",
  },
];

export default function BookingWidget() {
  const [selected, setSelected] = useState(SERVICES[0].id);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap justify-center gap-2">
        {SERVICES.map((s) => {
          const active = selected === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setSelected(s.id)}
              className="flex flex-col items-start px-5 py-3 rounded-2xl border transition-all duration-200 text-left w-[calc(50%-4px)] sm:w-52"
              style={{
                background: active ? "var(--primary)" : "var(--background)",
                borderColor: active ? "var(--primary)" : "var(--border)",
                color: active ? "#fff" : "var(--foreground)",
              }}>
              <span
                className="font-medium leading-tight"
                style={{ fontSize: "1rem" }}>
                {s.label}
              </span>
              <span
                className="leading-tight mt-0.5"
                style={{
                  fontSize: "0.88rem",
                  color: active ? "rgba(255,255,255,0.75)" : "var(--ink-mute)",
                }}>
                {s.sous}
              </span>
            </button>
          );
        })}
      </div>

      <div
        className="rounded-3xl overflow-hidden"
        style={{ border: "1px solid var(--border)" }}>
        <Cal
          key={selected}
          calLink={`${CAL_USERNAME}/${selected}`}
          calOrigin="https://cal.eu"
          embedJsUrl="https://cal.eu/embed/embed.js"
          style={{ width: "100%", minHeight: 680 }}
          config={{ theme: "light" }}
        />
      </div>
    </div>
  );
}
