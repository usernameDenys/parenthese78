"use client";

import { useState } from "react";

const subjects = [
  "Réservation d'un soin",
  "Réservation d'un atelier",
  "Carte cadeau",
  "Question sur les tarifs",
  "Autre demande",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    // TODO: brancher un service d'envoi (Resend, EmailJS, etc.)
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <span className="text-4xl">🌸</span>
        <h3 className="font-bold text-xl text-primary">Message envoyé !</h3>
        <p className="text-muted-foreground text-base max-w-sm">
          Merci pour votre message. Je vous répondrai dans les 24 à 48h.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm text-primary underline underline-offset-4">
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium">
            Nom et prénom <span className="text-primary">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Faustine Dupont"
            className="h-11 px-4 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="votre@email.fr"
            className="h-11 px-4 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-sm font-medium">
          Téléphone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="06 00 00 00 00"
          className="h-11 px-4 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Sujet <span className="text-primary">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          defaultValue=""
          className="h-11 px-4 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition appearance-none">
          <option value="" disabled>
            Choisissez un sujet…
          </option>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Décrivez votre demande…"
          className="px-4 py-3 rounded-xl border border-border bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="h-12 bg-primary text-secondary rounded-full font-medium hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed">
        {status === "loading" ? "Envoi en cours…" : "Envoyer →"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-500 text-center">
          Une erreur est survenue. Veuillez réessayer ou me contacter par email.
        </p>
      )}
    </form>
  );
}
