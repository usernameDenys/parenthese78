"use client";

import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

type Status = "idle" | "loading" | "success" | "error";

export function GuideForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const payload = {
      prenom: (form.elements.namedItem("prenom") as HTMLInputElement).value,
      contact: (form.elements.namedItem("contact") as HTMLInputElement).value,
      besoin: (form.elements.namedItem("besoin") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/guide", {
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
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <FiCheckCircle size={36} style={{ color: "var(--primary)" }} />
        <h3 className="font-bold text-xl" style={{ color: "var(--primary)" }}>
          Message envoyé !
        </h3>
        <p style={{ color: "var(--muted-foreground)" }} className="max-w-sm leading-relaxed">
          Merci ! Faustine vous répondra dans les 24 à 48h pour vous orienter vers
          le soin le plus adapté à votre situation.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm underline underline-offset-4"
          style={{ color: "var(--primary)" }}>
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="guide-prenom" className="text-sm font-medium">
            Prénom <span style={{ color: "var(--primary)" }}>*</span>
          </label>
          <input
            id="guide-prenom"
            name="prenom"
            type="text"
            required
            placeholder="Votre prénom"
            className="h-11 px-4 rounded-xl border text-sm focus:outline-none transition"
            style={{
              borderColor: "var(--border)",
              background: "var(--background)",
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="guide-contact" className="text-sm font-medium">
            Email ou téléphone <span style={{ color: "var(--primary)" }}>*</span>
          </label>
          <input
            id="guide-contact"
            name="contact"
            type="text"
            required
            placeholder="votre@email.fr ou 06…"
            className="h-11 px-4 rounded-xl border text-sm focus:outline-none transition"
            style={{
              borderColor: "var(--border)",
              background: "var(--background)",
            }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="guide-besoin" className="text-sm font-medium">
          Parlez-moi de votre besoin <span style={{ color: "var(--primary)" }}>*</span>
        </label>
        <textarea
          id="guide-besoin"
          name="besoin"
          required
          rows={4}
          placeholder="Décrivez votre situation en quelques mots…"
          className="px-4 py-3 rounded-xl border text-sm resize-none focus:outline-none transition"
          style={{
            borderColor: "var(--border)",
            background: "var(--background)",
          }}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="h-12 rounded-full font-medium transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ background: "var(--primary)", color: "var(--secondary)" }}>
        {status === "loading" ? "Envoi en cours…" : "Envoyer →"}
      </button>

      {status === "error" && (
        <p className="text-sm text-center" style={{ color: "#ef4444" }}>
          Une erreur est survenue. Veuillez réessayer ou me contacter par email.
        </p>
      )}
    </form>
  );
}
