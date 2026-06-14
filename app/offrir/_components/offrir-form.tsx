"use client";

import { useState, Fragment } from "react";
import { FiCheckCircle } from "react-icons/fi";
import type { GiftCardPayload } from "@/app/api/gift-card/route";

const SOINS_OPTIONS = [
  {
    label: "Pour la femme",
    options: [
      { value: "prenatal", label: "Massage prénatal", tarif: 110 },
      { value: "postnatal", label: "Massage postnatal", tarif: 110 },
      { value: "rebozo", label: "Soin Rebozo", tarif: 170 },
      { value: "holistique", label: "Massage holistique au féminin", tarif: 110 },
      { value: "reflexo", label: "Réflexologie émotionnelle", tarif: 90 },
      { value: "rituel-rebozo", label: "Rituel Rebozo", tarif: 500 },
    ],
  },
  {
    label: "Pour le bébé",
    options: [
      { value: "bain-therapeutique", label: "Thérapeutique Bain Bébé", tarif: 130 },
      { value: "bain-enveloppe", label: "Bain enveloppé", tarif: null },
      { value: "massage-bebe", label: "Massage bébé", tarif: null },
      { value: "reflexo-bebe", label: "Réflexologie bébé émotionnelle", tarif: null },
    ],
  },
  {
    label: "Pour les parents",
    options: [
      { value: "post-partum", label: "Soutien à la parentalité", tarif: null },
      { value: "sommeil", label: "Sommeil de l'enfant (0–3 ans)", tarif: null },
    ],
  },
  {
    label: "Pour les enfants",
    options: [
      { value: "massage-enfant", label: "Massage enfant", tarif: null },
      { value: "reflexo-enfant", label: "Réflexologie émotionnelle enfant", tarif: null },
    ],
  },
];

const AMOUNTS = [90, 110, 130, 170];

const inputCls =
  "w-full px-4 py-3.5 border border-border rounded-xl bg-secondary text-foreground font-sans text-base focus:outline-none focus:border-primary focus:bg-background transition-colors duration-200";
const labelCls =
  "block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-sans";

export function OffrirForm() {
  const [step, setStep] = useState(1);
  const [selectedSoin, setSelectedSoin] = useState("");
  const [selectedSoinLabel, setSelectedSoinLabel] = useState("");
  const [amount, setAmount] = useState(130);
  const [custom, setCustom] = useState("");
  const [fromFirstName, setFromFirstName] = useState("");
  const [toFirstName, setToFirstName] = useState("");
  const [message, setMessage] = useState("");
  const [fromLastName, setFromLastName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [fromPhone, setFromPhone] = useState("");
  const [toLastName, setToLastName] = useState("");
  const [toEmail, setToEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const finalAmount = custom ? parseInt(custom) || amount : amount;

  const handleSoinChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedSoin(value);
    if (!value) { setSelectedSoinLabel(""); return; }
    for (const group of SOINS_OPTIONS) {
      const found = group.options.find((o) => o.value === value);
      if (found) {
        setSelectedSoinLabel(found.label);
        if (found.tarif) { setAmount(found.tarif); setCustom(""); }
        break;
      }
    }
  };

  const handleSubmit = async () => {
    if (!fromFirstName || !fromEmail || !fromPhone) {
      setErrorMsg("Veuillez renseigner votre prénom, email et téléphone.");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const payload: GiftCardPayload = {
        soinLabel: selectedSoinLabel,
        amount: finalAmount,
        fromFirstName,
        fromLastName,
        fromEmail,
        fromPhone,
        toFirstName,
        toLastName,
        toEmail,
        message,
      };
      const res = await fetch("/api/gift-card", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Erreur inconnue");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Une erreur est survenue.");
    }
  };

  if (status === "success") {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center py-16">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8"
              style={{ background: "var(--color-rose-mist)" }}
            >
              <FiCheckCircle className="text-primary" size={32} />
            </div>
            <h2 className="mb-4">Merci !</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              Votre commande est bien enregistrée. Faustine vous contactera
              prochainement pour organiser le règlement.
            </p>
            <p className="text-muted-foreground leading-relaxed italic text-sm">
              Un email de confirmation avec la carte cadeau en PDF vous a été envoyé.
              {toEmail && ` La carte a également été transmise à ${toFirstName || "le destinataire"}.`}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 lg:gap-20 items-start">

          {/* Gift card preview */}
          <div>
            <div
              className="rounded-[18px] border border-rose-light shadow-l overflow-hidden relative flex flex-col justify-between"
              style={{
                background:
                  "linear-gradient(140deg, var(--color-rose-mist) 0%, var(--color-secondary) 60%, var(--color-cream-warm) 100%)",
                aspectRatio: "5 / 3",
                padding: "3rem",
              }}
            >
              <div
                className="absolute top-[-60px] right-[-60px] w-[220px] h-[220px] rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, var(--color-rose-light), transparent 70%)",
                  opacity: 0.6,
                }}
              />
              <div className="relative z-10">
                <div className="font-heading text-primary leading-none" style={{ fontSize: "1.7rem" }}>
                  Parenthèse
                </div>
                <p className="italic text-muted-foreground mt-2" style={{ fontSize: "0.95rem" }}>
                  Carte cadeau · {selectedSoinLabel || "Soin à domicile"}
                </p>
              </div>
              <div className="relative z-10">
                <div className="font-heading text-primary leading-none" style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)" }}>
                  {finalAmount} €
                </div>
                <p className="italic text-muted-foreground mt-3 leading-relaxed" style={{ fontSize: "1.05rem" }}>
                  Pour{" "}
                  <span className="font-medium not-italic text-foreground">
                    {[toFirstName, toLastName].filter(Boolean).join(" ") || "·····"}
                  </span>
                  <br />
                  De la part de{" "}
                  <span className="font-medium not-italic text-foreground">
                    {[fromFirstName, fromLastName].filter(Boolean).join(" ") || "·····"}
                  </span>
                </p>
              </div>
            </div>
            <p className="mt-8 italic text-muted-foreground leading-relaxed" style={{ fontSize: "0.95rem" }}>
              La carte est envoyée par email à la personne de votre choix (ou à
              vous, pour la remettre en main propre). Valable 6 mois.
            </p>
          </div>

          {/* Step form */}
          <div
            className="bg-background rounded-[18px] border border-border p-10 sm:p-12"
            style={{ boxShadow: "var(--shadow-s)" }}
          >
            {/* Step indicator */}
            <nav aria-label="Étapes de commande" className="flex items-center mb-8">
              {[1, 2, 3].map((n) => (
                <Fragment key={n}>
                  {n < step ? (
                    <button
                      type="button"
                      onClick={() => setStep(n)}
                      aria-label={`Retour à l'étape ${n}`}
                      className="w-8 h-8 rounded-full flex items-center justify-center font-heading leading-none transition-all duration-300 shrink-0 cursor-pointer"
                      style={{
                        fontSize: "1.2rem",
                        background: "var(--color-primary)",
                        color: "white",
                      }}
                    >
                      {n}
                    </button>
                  ) : (
                    <span
                      aria-current={step === n ? "step" : undefined}
                      aria-label={`Étape ${n}${step === n ? " (actuelle)" : ""}`}
                      className="w-8 h-8 rounded-full flex items-center justify-center font-heading leading-none transition-all duration-300 shrink-0"
                      style={{
                        fontSize: "1.2rem",
                        background: step >= n ? "var(--color-primary)" : "var(--color-secondary)",
                        color: step >= n ? "white" : "var(--color-ink-mute)",
                      }}
                    >
                      {n}
                    </span>
                  )}
                  {n < 3 && (
                    <div
                      aria-hidden="true"
                      className="flex-1 h-px mx-1 transition-all duration-300"
                      style={{ background: step > n ? "var(--color-primary)" : "var(--color-border)" }}
                    />
                  )}
                </Fragment>
              ))}
            </nav>

            {/* ── Step 1 ── */}
            {step === 1 && (
              <div>
                <h3 className="font-heading text-primary mb-2" style={{ fontSize: "1.8rem" }}>
                  Choisir un soin
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Sélectionnez un soin spécifique, ou une carte au montant libre.
                </p>

                <div className="mb-6">
                  <label htmlFor="gift-soin" className={labelCls}>Soin à offrir</label>
                  <select id="gift-soin" value={selectedSoin} onChange={handleSoinChange} className={inputCls}>
                    <option value="">Carte cadeau (montant libre)</option>
                    {SOINS_OPTIONS.map((group) => (
                      <optgroup key={group.label} label={group.label}>
                        {group.options.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                            {opt.tarif ? ` — ${opt.tarif} €` : " — sur demande"}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>

                <p className="text-xs font-sans italic tracking-widest uppercase text-muted-foreground mb-3">
                  Ou choisir un montant
                </p>
                <div className="grid grid-cols-4 gap-3 mb-6">
                  {AMOUNTS.map((a) => (
                    <button
                      key={a}
                      onClick={() => { setAmount(a); setCustom(""); }}
                      className="py-4 border rounded-xl text-center text-lg font-sans transition-all duration-200"
                      style={{
                        borderColor: amount === a && !custom ? "var(--color-primary)" : "var(--color-border)",
                        background: amount === a && !custom ? "var(--color-rose-mist)" : "var(--color-background)",
                        color: amount === a && !custom ? "var(--color-primary)" : "var(--color-foreground)",
                      }}
                    >
                      {a} €
                    </button>
                  ))}
                </div>

                <div className="mb-8">
                  <label htmlFor="gift-custom-amount" className={labelCls}>Montant libre</label>
                  <input
                    id="gift-custom-amount"
                    type="number"
                    placeholder="Votre montant en €"
                    value={custom}
                    onChange={(e) => setCustom(e.target.value)}
                    className={inputCls}
                  />
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="w-full h-12 bg-primary text-secondary rounded-full font-sans font-medium text-lg shadow-m hover:-translate-y-0.5 transition-transform duration-200"
                >
                  Continuer →
                </button>
              </div>
            )}

            {/* ── Step 2 ── */}
            {step === 2 && (
              <div>
                <h3 className="font-heading text-primary mb-2" style={{ fontSize: "1.8rem" }}>
                  Pour qui ?
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Personnalisez la carte avec vos prénoms et un petit mot.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="gift-from-preview" className={labelCls}>Votre prénom</label>
                    <input
                      id="gift-from-preview"
                      value={fromFirstName}
                      onChange={(e) => setFromFirstName(e.target.value)}
                      placeholder="Camille"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label htmlFor="gift-to-preview" className={labelCls}>Prénom du destinataire</label>
                    <input
                      id="gift-to-preview"
                      value={toFirstName}
                      onChange={(e) => setToFirstName(e.target.value)}
                      placeholder="Élise"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label htmlFor="gift-message" className={labelCls}>Petit mot (optionnel)</label>
                  <textarea
                    id="gift-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ma chère Élise, prends ce moment pour toi..."
                    className={`${inputCls} min-h-[130px] resize-y`}
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 h-12 bg-transparent border border-primary text-foreground rounded-full font-sans font-medium text-lg hover:bg-rose-mist transition-colors duration-200"
                  >
                    Retour
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="flex-1 h-12 bg-primary text-secondary rounded-full font-sans font-medium text-lg shadow-m hover:-translate-y-0.5 transition-transform duration-200"
                  >
                    Continuer →
                  </button>
                </div>
              </div>
            )}

            {/* ── Step 3 ── */}
            {step === 3 && (
              <div>
                <h3 className="font-heading text-primary mb-2" style={{ fontSize: "1.8rem" }}>
                  Coordonnées
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Pour la confirmation et le règlement avec Faustine.
                </p>

                {/* Sender */}
                <p
                  className="text-xs uppercase tracking-widest mb-3 font-sans"
                  style={{ color: "var(--color-sage-deep)" }}
                >
                  Vous — l'offreur
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="gift-from-firstname" className={labelCls}>Prénom</label>
                    <input
                      id="gift-from-firstname"
                      value={fromFirstName}
                      onChange={(e) => setFromFirstName(e.target.value)}
                      placeholder="Camille"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label htmlFor="gift-from-lastname" className={labelCls}>Nom</label>
                    <input
                      id="gift-from-lastname"
                      value={fromLastName}
                      onChange={(e) => setFromLastName(e.target.value)}
                      placeholder="Martin"
                      className={inputCls}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="gift-from-email" className={labelCls}>Email <span aria-hidden="true">*</span><span className="sr-only">(requis)</span></label>
                    <input
                      id="gift-from-email"
                      type="email"
                      required
                      value={fromEmail}
                      onChange={(e) => setFromEmail(e.target.value)}
                      placeholder="vous@exemple.fr"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label htmlFor="gift-from-phone" className={labelCls}>Téléphone <span aria-hidden="true">*</span><span className="sr-only">(requis)</span></label>
                    <input
                      id="gift-from-phone"
                      type="tel"
                      required
                      value={fromPhone}
                      onChange={(e) => setFromPhone(e.target.value)}
                      placeholder="06 00 00 00 00"
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Recipient */}
                <p
                  className="text-xs uppercase tracking-widest mb-3 font-sans"
                  style={{ color: "var(--color-sage-deep)" }}
                >
                  Le destinataire du cadeau
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="gift-to-firstname" className={labelCls}>Prénom</label>
                    <input
                      id="gift-to-firstname"
                      value={toFirstName}
                      onChange={(e) => setToFirstName(e.target.value)}
                      placeholder="Élise"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label htmlFor="gift-to-lastname" className={labelCls}>Nom</label>
                    <input
                      id="gift-to-lastname"
                      value={toLastName}
                      onChange={(e) => setToLastName(e.target.value)}
                      placeholder="Dupont"
                      className={inputCls}
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <label htmlFor="gift-to-email" className={labelCls}>Email du destinataire (optionnel)</label>
                  <input
                    id="gift-to-email"
                    type="email"
                    value={toEmail}
                    onChange={(e) => setToEmail(e.target.value)}
                    placeholder="elise@exemple.fr"
                    className={inputCls}
                  />
                  <p className="text-xs italic mt-1.5" style={{ color: "var(--color-ink-mute)" }}>
                    Si renseigné, la carte lui est envoyée directement. Sinon, elle vous est envoyée.
                  </p>
                </div>

                {/* Summary */}
                <div className="rounded-xl p-5 my-6 bg-secondary">
                  <div className="flex justify-between items-baseline mb-1.5">
                    <span className="text-sm text-muted-foreground">
                      {selectedSoinLabel || "Carte cadeau Parenthèse"}
                    </span>
                    <span className="font-heading text-primary" style={{ fontSize: "1.4rem" }}>
                      {finalAmount} €
                    </span>
                  </div>
                  <p className="text-xs italic" style={{ color: "var(--color-ink-mute)" }}>
                    Valable 6 mois · Règlement après contact de Faustine
                  </p>
                </div>

                {errorMsg && (
                  <p role="alert" className="text-sm mb-4" style={{ color: "#b85a5a", fontStyle: "italic" }}>
                    {errorMsg}
                  </p>
                )}

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(2)}
                    disabled={status === "loading"}
                    className="flex-1 h-12 bg-transparent border border-primary text-foreground rounded-full font-sans font-medium text-lg hover:bg-rose-mist transition-colors duration-200 disabled:opacity-50"
                  >
                    Retour
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={status === "loading"}
                    className="flex-1 h-12 bg-primary text-secondary rounded-full font-sans font-medium text-lg shadow-m hover:-translate-y-0.5 transition-transform duration-200 disabled:opacity-70 disabled:translate-y-0"
                  >
                    {status === "loading" ? "Envoi…" : "Commander →"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
