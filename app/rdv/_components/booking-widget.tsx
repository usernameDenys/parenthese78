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
];

export default function BookingWidget() {
  const [selected, setSelected] = useState(SERVICES[0].id);

  return (
    <div className="flex flex-col gap-8">
      <div
        className="flex gap-2 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}>
        {SERVICES.map((s) => {
          const active = selected === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setSelected(s.id)}
              className="flex flex-col items-start shrink-0 px-5 py-3 rounded-2xl border transition-all duration-200 text-left"
              style={{
                background: active ? "var(--primary)" : "var(--background)",
                borderColor: active ? "var(--primary)" : "var(--border)",
                color: active ? "#fff" : "var(--foreground)",
              }}>
              <span
                className="font-medium leading-tight"
                style={{ fontSize: "0.92rem" }}>
                {s.label}
              </span>
              <span
                className="leading-tight mt-0.5"
                style={{
                  fontSize: "0.78rem",
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
          style={{ width: "100%", minHeight: 680 }}
          config={{ theme: "light", layout: "month_view" }}
        />
      </div>
    </div>
  );
}
