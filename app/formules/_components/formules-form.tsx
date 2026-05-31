"use client";

import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

const FORMULES = [
  {
    id: "maternite",
    nom: "Parenthèse Continuité Maternité",
    desc: "2 à 3 séances au choix pour accompagner la grossesse, soulager le corps et se reconnecter au fil des mois.",
  },
  {
    id: "naissance",
    nom: "Parenthèse Continuité Naissance",
    desc: "Plusieurs moments de douceur pour accueillir bébé et accompagner les premiers jours de vie.",
  },
  {
    id: "postpartum",
    nom: "Parenthèse Continuité Post-partum",
    desc: "Soins et accompagnement pour soutenir la récupération et l'adaptation à la vie avec bébé.",
  },
  {
    id: "enfance",
    nom: "Parenthèse Continuité Enfance",
    desc: "Plusieurs séances pour accompagner l'enfant dans son bien-être et ses émotions.",
  },
];

const inputCls = "w-full h-11 px-4 rounded-xl border text-sm focus:outline-none focus:ring-2 transition";
const inputStyle = { borderColor: "var(--border)", background: "var(--background)" };

type Mode = "moi" | "offrir";
type Status = "idle" | "loading" | "success" | "error";

export function FormulesForm() {
  const [selectedFormule, setSelectedFormule] = useState("");
  const [mode, setMode] = useState<Mode | "">("");
  const [prenom, setPrenom] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [destinatairePrenom, setDestinatairePrenom] = useState("");
  const [destinataireContact, setDestinataireContact] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const formule = FORMULES.find((f) => f.id === selectedFormule);

  const canSubmit =
    !!selectedFormule &&
    !!mode &&
    !!prenom &&
    !!contact &&
    (mode === "moi" || !!destinatairePrenom);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/formule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formuleNom: formule?.nom,
          formuleDesc: formule?.desc,
          seances: [],
          mode,
          prenom,
          contact,
          message,
          destinatairePrenom: mode === "offrir" ? destinatairePrenom : undefined,
          destinataireContact: mode === "offrir" ? destinataireContact : undefined,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-6 py-20 text-center max-w-md mx-auto">
        <FiCheckCircle size={44} style={{ color: "var(--primary)" }} />
        <h2 className="text-3xl">Demande envoyée !</h2>
        <p className="text-lg leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
          {mode === "offrir"
            ? `Votre demande de formule pour ${destinatairePrenom} a bien été reçue. Faustine vous contactera dans les 24 à 48h.`
            : "Votre demande a bien été reçue. Faustine vous contactera dans les 24 à 48h pour finaliser les détails."}
        </p>
        <button
          onClick={() => {
            setSelectedFormule(""); setMode(""); setPrenom(""); setContact("");
            setMessage(""); setDestinatairePrenom(""); setDestinataireContact("");
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
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex flex-col gap-12">

      {/* 1. Formule */}
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl">Quelle formule vous correspond ?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {FORMULES.map((f) => {
            const active = selectedFormule === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setSelectedFormule(f.id)}
                className="text-left rounded-2xl p-6 flex flex-col gap-2 transition-all duration-200 cursor-pointer"
                style={{
                  border: active ? "2px solid var(--primary)" : "1px solid var(--border)",
                  background: active ? "var(--rose-mist, #F5E6E2)" : "var(--background)",
                  boxShadow: active ? "var(--shadow-m)" : "none",
                }}>
                <span
                  className="font-heading font-medium leading-tight"
                  style={{ fontSize: "1.2rem", color: "var(--primary)" }}>
                  {f.nom}
                </span>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  {f.desc}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Mode */}
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl">Cette formule est…</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {([
            { value: "moi" as Mode, label: "Pour moi", desc: "Je souhaite vivre cette formule." },
            { value: "offrir" as Mode, label: "À offrir", desc: "Je souhaite l'offrir à quelqu'un." },
          ]).map((opt) => {
            const active = mode === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => setMode(opt.value)}
                className="text-left rounded-2xl p-6 flex flex-col gap-2 transition-all duration-200 cursor-pointer"
                style={{
                  border: active ? "2px solid var(--primary)" : "1px solid var(--border)",
                  background: active ? "var(--rose-mist, #F5E6E2)" : "var(--background)",
                  boxShadow: active ? "var(--shadow-m)" : "none",
                }}>
                <span
                  className="font-heading font-medium"
                  style={{ fontSize: "1.3rem", color: "var(--primary)" }}>
                  {opt.label}
                </span>
                <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                  {opt.desc}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Coordonnées */}
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl">Vos coordonnées</h2>

        {mode === "offrir" && (
          <div
            className="rounded-2xl p-6 flex flex-col gap-4"
            style={{ background: "var(--secondary)", border: "1px solid var(--border)" }}>
            <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--sage-deep)" }}>
              La personne à qui vous offrez
            </p>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">
                Prénom <span style={{ color: "var(--primary)" }}>*</span>
              </label>
              <input
                type="text" value={destinatairePrenom} required={mode === "offrir"}
                onChange={(e) => setDestinatairePrenom(e.target.value)}
                placeholder="Son prénom"
                className={inputCls} style={inputStyle} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Email ou téléphone</label>
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
          {mode === "offrir" && (
            <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--sage-deep)" }}>
              Vos coordonnées
            </p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">
                Prénom <span style={{ color: "var(--primary)" }}>*</span>
              </label>
              <input
                type="text" value={prenom} required
                onChange={(e) => setPrenom(e.target.value)}
                placeholder="Votre prénom"
                className={inputCls} style={inputStyle} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">
                Email ou téléphone <span style={{ color: "var(--primary)" }}>*</span>
              </label>
              <input
                type="text" value={contact} required
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

      <div className="flex flex-col gap-3">
        <button
          type="submit"
          disabled={!canSubmit || status === "loading"}
          className="h-12 px-8 rounded-full font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          style={{ background: "var(--primary)", color: "var(--secondary)" }}>
          {status === "loading" ? "Envoi en cours…" : "Envoyer ma demande →"}
        </button>
        {status === "error" && (
          <p className="text-sm text-center" style={{ color: "#ef4444" }}>
            Une erreur est survenue. Veuillez réessayer ou contacter Faustine directement.
          </p>
        )}
      </div>

    </form>
  );
}
