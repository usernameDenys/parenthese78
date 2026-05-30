"use client";

import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import type { FormulePayload } from "@/app/api/formule/route";

const FORMULES = [
  {
    id: "maternite",
    nom: "Parenthèse Continuité Maternité",
    desc: "Accompagner la grossesse avec 2 à 3 temps de soin pour soulager le corps et se reconnecter, au fil des mois.",
    seances: [
      "Parenthèse Maternité — Massage prénatal",
      "Parenthèse Équilibre féminin — Massage holistique",
      "Réflexologie émotionnelle",
      "Soin Rebozo",
    ],
  },
  {
    id: "naissance",
    nom: "Parenthèse Continuité Naissance",
    desc: "Accueillir bébé et accompagner les premiers jours de vie avec douceur et présence.",
    seances: [
      "Thérapeutique Bain Bébé® — Méthode Sonia Krief",
      "Parenthèse Lien — Bain enveloppé",
      "Massage bébé",
      "Réflexologie Bébé Émotionnelle®",
      "Soutien à la parentalité",
    ],
  },
  {
    id: "postpartum",
    nom: "Parenthèse Continuité Post-partum",
    desc: "Soutenir la récupération physique et émotionnelle, et l'adaptation à la vie avec bébé.",
    seances: [
      "Parenthèse Postnatale — Massage postnatal",
      "Soin Rebozo",
      "Soutien à la parentalité",
      "Sommeil de l'enfant",
      "Réflexologie émotionnelle",
    ],
  },
  {
    id: "enfance",
    nom: "Parenthèse Continuité Enfance",
    desc: "Accompagner l'enfant dans son bien-être et ses émotions sur plusieurs séances.",
    seances: [
      "Massage enfant (4–7 ans)",
      "Massage enfant (8–12 ans)",
      "Réflexologie Bébé Émotionnelle®",
    ],
  },
];

const inputCls =
  "w-full h-11 px-4 rounded-xl border text-sm focus:outline-none focus:ring-2 transition";
const inputStyle = {
  borderColor: "var(--border)",
  background: "var(--background)",
};

type Step = 1 | 2 | 3 | 4;
type Mode = "moi" | "offrir";
type Status = "idle" | "loading" | "success" | "error";

const STEP_LABELS = ["La formule", "Les séances", "Pour qui ?", "Vos coordonnées"];

function StepIndicator({ step }: { step: Step }) {
  return (
    <div className="flex items-center gap-2 mb-10">
      {STEP_LABELS.map((label, i) => {
        const n = (i + 1) as Step;
        const done = step > n;
        const active = step === n;
        return (
          <div key={n} className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 transition-all"
                style={{
                  background: done ? "var(--sage)" : active ? "var(--primary)" : "var(--border)",
                  color: done || active ? "#fff" : "var(--ink-mute)",
                }}>
                {done ? "✓" : n}
              </div>
              <span
                className="text-sm hidden sm:block"
                style={{ color: active ? "var(--foreground)" : "var(--ink-mute)", fontWeight: active ? 600 : 400 }}>
                {label}
              </span>
            </div>
            {i < STEP_LABELS.length - 1 && (
              <div className="w-6 h-px mx-1 shrink-0" style={{ background: "var(--border)" }} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export function FormulesForm() {
  const [step, setStep] = useState<Step>(1);
  const [selectedFormule, setSelectedFormule] = useState("");
  const [selectedSeances, setSelectedSeances] = useState<string[]>([]);
  const [mode, setMode] = useState<Mode | "">("");
  const [prenom, setPrenom] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [destinatairePrenom, setDestinatairePrenom] = useState("");
  const [destinataireContact, setDestinataireContact] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const formule = FORMULES.find((f) => f.id === selectedFormule);

  function toggleSeance(s: string) {
    setSelectedSeances((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  }

  function canProceed() {
    if (step === 1) return !!selectedFormule;
    if (step === 2) return selectedSeances.length >= 1;
    if (step === 3) return !!mode;
    if (step === 4) {
      if (!prenom || !contact) return false;
      if (mode === "offrir" && !destinatairePrenom) return false;
      return true;
    }
    return false;
  }

  async function handleSubmit() {
    setStatus("loading");

    const payload: FormulePayload = {
      formuleNom: formule?.nom ?? selectedFormule,
      seances: selectedSeances,
      mode: mode as Mode,
      prenom,
      contact,
      message,
      destinatairePrenom: mode === "offrir" ? destinatairePrenom : undefined,
      destinataireContact: mode === "offrir" ? destinataireContact : undefined,
    };

    try {
      const res = await fetch("/api/formule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-6 py-16 text-center">
        <FiCheckCircle size={44} style={{ color: "var(--primary)" }} />
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl">Demande envoyée !</h2>
          <p className="text-lg leading-relaxed max-w-md mx-auto" style={{ color: "var(--muted-foreground)" }}>
            {mode === "offrir"
              ? `Votre demande de formule pour ${destinatairePrenom} a bien été reçue. Faustine vous contactera dans les 24 à 48h pour finaliser les détails.`
              : "Votre demande a bien été reçue. Faustine vous contactera dans les 24 à 48h pour finaliser les détails et convenir des dates."}
          </p>
        </div>
        <button
          onClick={() => {
            setStep(1); setSelectedFormule(""); setSelectedSeances([]); setMode("");
            setPrenom(""); setContact(""); setMessage("");
            setDestinatairePrenom(""); setDestinataireContact("");
            setStatus("idle");
          }}
          className="text-sm underline underline-offset-4"
          style={{ color: "var(--primary)" }}>
          Faire une nouvelle demande
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <StepIndicator step={step} />

      {/* Step 1 — Formule */}
      {step === 1 && (
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl mb-2">Quelle formule vous correspond ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FORMULES.map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFormule(f.id)}
                className="text-left rounded-2xl p-6 flex flex-col gap-3 transition-all duration-200"
                style={{
                  border: selectedFormule === f.id ? "2px solid var(--primary)" : "1px solid var(--border)",
                  background: selectedFormule === f.id ? "var(--rose-mist, #F5E6E2)" : "var(--background)",
                  boxShadow: selectedFormule === f.id ? "var(--shadow-m)" : "none",
                }}>
                <span
                  className="font-heading font-medium leading-tight"
                  style={{ fontSize: "1.3rem", color: "var(--primary)" }}>
                  {f.nom}
                </span>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  {f.desc}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2 — Séances */}
      {step === 2 && formule && (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1 mb-2">
            <h2 className="text-2xl">Composez vos séances</h2>
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              Choisissez les soins que vous souhaitez inclure dans votre formule.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {formule.seances.map((s) => {
              const checked = selectedSeances.includes(s);
              return (
                <label
                  key={s}
                  className="flex items-center gap-4 rounded-xl px-5 py-4 cursor-pointer transition-all duration-200"
                  style={{
                    border: checked ? "1.5px solid var(--primary)" : "1px solid var(--border)",
                    background: checked ? "var(--rose-mist, #F5E6E2)" : "var(--background)",
                  }}>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleSeance(s)}
                    className="w-4 h-4 accent-primary shrink-0"
                  />
                  <span className="text-base font-medium" style={{ color: "var(--foreground)" }}>
                    {s}
                  </span>
                </label>
              );
            })}
          </div>
          {selectedSeances.length > 0 && (
            <p className="text-sm" style={{ color: "var(--sage-deep)" }}>
              {selectedSeances.length} séance{selectedSeances.length > 1 ? "s" : ""} sélectionnée{selectedSeances.length > 1 ? "s" : ""}
            </p>
          )}
        </div>
      )}

      {/* Step 3 — Mode */}
      {step === 3 && (
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl mb-2">Cette formule est…</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {([
              { value: "moi", label: "Pour moi", desc: "Je souhaite vivre cette formule moi-même." },
              { value: "offrir", label: "À offrir", desc: "Je souhaite l'offrir à quelqu'un que j'aime." },
            ] as const).map((opt) => (
              <button
                key={opt.value}
                onClick={() => setMode(opt.value)}
                className="text-left rounded-2xl p-6 flex flex-col gap-3 transition-all duration-200"
                style={{
                  border: mode === opt.value ? "2px solid var(--primary)" : "1px solid var(--border)",
                  background: mode === opt.value ? "var(--rose-mist, #F5E6E2)" : "var(--background)",
                  boxShadow: mode === opt.value ? "var(--shadow-m)" : "none",
                }}>
                <span
                  className="font-heading font-medium"
                  style={{ fontSize: "1.4rem", color: "var(--primary)" }}>
                  {opt.label}
                </span>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  {opt.desc}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 4 — Coordonnées */}
      {step === 4 && (
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl mb-1">
            {mode === "offrir" ? "Les coordonnées" : "Vos coordonnées"}
          </h2>

          {mode === "offrir" && (
            <div
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{ background: "var(--secondary)", border: "1px solid var(--border)" }}>
              <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--sage-deep)" }}>
                La personne à qui vous offrez
              </p>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">
                  Prénom du destinataire <span style={{ color: "var(--primary)" }}>*</span>
                </label>
                <input
                  type="text" required value={destinatairePrenom}
                  onChange={(e) => setDestinatairePrenom(e.target.value)}
                  placeholder="Son prénom"
                  className={inputCls} style={inputStyle} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Email ou téléphone du destinataire</label>
                <input
                  type="text" value={destinataireContact}
                  onChange={(e) => setDestinataireContact(e.target.value)}
                  placeholder="Si vous souhaitez qu'elle soit contactée directement"
                  className={inputCls} style={inputStyle} />
              </div>
            </div>
          )}

          <div
            className="rounded-2xl p-6 flex flex-col gap-4"
            style={{ background: "var(--secondary)", border: "1px solid var(--border)" }}>
            <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--sage-deep)" }}>
              {mode === "offrir" ? "Vos coordonnées (l'offreur)" : "Vos coordonnées"}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">
                  Votre prénom <span style={{ color: "var(--primary)" }}>*</span>
                </label>
                <input
                  type="text" required value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  placeholder="Votre prénom"
                  className={inputCls} style={inputStyle} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">
                  Email ou téléphone <span style={{ color: "var(--primary)" }}>*</span>
                </label>
                <input
                  type="text" required value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="votre@email.fr ou 06…"
                  className={inputCls} style={inputStyle} />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Message (facultatif)</label>
              <textarea
                rows={3} value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Une question, une précision, une date souhaitée…"
                className="w-full px-4 py-3 rounded-xl border text-sm resize-none focus:outline-none transition"
                style={inputStyle} />
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8">
        {step > 1 ? (
          <button
            onClick={() => setStep((s) => (s - 1) as Step)}
            className="font-medium px-6 h-11 rounded-full border transition-colors"
            style={{ borderColor: "var(--border)", color: "var(--foreground)" }}>
            ← Retour
          </button>
        ) : (
          <div />
        )}

        {step < 4 ? (
          <button
            onClick={() => setStep((s) => (s + 1) as Step)}
            disabled={!canProceed()}
            className="h-11 px-8 rounded-full font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ background: "var(--primary)", color: "var(--secondary)" }}>
            Suivant →
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!canProceed() || status === "loading"}
            className="h-11 px-8 rounded-full font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ background: "var(--primary)", color: "var(--secondary)" }}>
            {status === "loading" ? "Envoi en cours…" : "Envoyer ma demande →"}
          </button>
        )}
      </div>

      {status === "error" && (
        <p className="text-sm text-center mt-4" style={{ color: "#ef4444" }}>
          Une erreur est survenue. Veuillez réessayer ou contacter Faustine directement.
        </p>
      )}
    </div>
  );
}
