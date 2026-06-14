"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { BOOKING_URL } from "@/app/lib/booking";

export type Soin = {
  id: string;
  nom: string;
  sous: string;
  accroche: string;
  description: string;
  bienfaits: string[];
  pourQui: string;
  duree: string;
  tarif: string;
  deroulement?: string;
  reservationUrl?: string;
  premium?: boolean;
  comingSoon?: boolean;
};

function SoinItem({
  soin,
  isOpen,
  onToggle,
}: {
  soin: Soin;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      className="rounded-[18px] overflow-hidden border transition-all duration-300"
      style={{
        background: "var(--background)",
        borderColor: isOpen ? "var(--rose-light)" : "var(--border)",
        boxShadow: isOpen ? "var(--shadow-m)" : "none",
      }}>
      {/* Header — always visible */}
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`soin-body-${soin.id}`}
        onClick={onToggle}
        className="w-full grid items-center gap-6 px-6 md:px-8 py-6 md:py-7 text-left cursor-pointer transition-colors duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
        style={{
          gridTemplateColumns: "1fr auto",
          background: isOpen ? "var(--secondary)" : "transparent",
        }}>
        <div>
          {soin.premium && (
            <span
              className="text-xs font-medium uppercase tracking-widest mb-2 inline-block px-3 py-1 rounded-full"
              style={{ background: "var(--cream-warm)", color: "var(--sage-deep)" }}>
              Soin d&apos;exception
            </span>
          )}
          {soin.comingSoon && (
            <span
              className="text-xs font-medium uppercase tracking-widest mb-2 inline-block px-3 py-1 rounded-full"
              style={{ background: "var(--secondary)", color: "var(--ink-mute)" }}>
              À venir
            </span>
          )}
          <div
            className="eyebrow mb-1"
            style={{ fontSize: "0.85rem", letterSpacing: "0.08em" }}>
            {soin.sous}
          </div>
          <h3
            className="font-heading font-medium leading-tight"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2rem)", color: "var(--primary)", margin: 0 }}>
            {soin.nom}
          </h3>
        </div>

        {/* Toggle button */}
        <div
          aria-hidden="true"
          className="rounded-full border flex items-center justify-center shrink-0 transition-all duration-300"
          style={{
            width: 44,
            height: 44,
            borderColor: isOpen ? "transparent" : "var(--border)",
            background: isOpen ? "var(--primary)" : "var(--background)",
            color: isOpen ? "#fff" : "var(--primary)",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            position: "relative",
          }}>
          <span
            className="absolute"
            style={{ width: 14, height: 1.5, background: "currentColor" }}
          />
          <span
            className="absolute"
            style={{ width: 1.5, height: 14, background: "currentColor" }}
          />
        </div>
      </button>

      {/* Body — animated */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            id={`soin-body-${soin.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}>
            <div
              className="grid gap-10 px-6 md:px-8 pb-10 pt-8 grid-cols-1 md:grid-cols-2"
              style={{ borderTop: "1px solid var(--border)" }}>
              {/* Left column */}
              <div className="flex flex-col gap-5">
                <p
                  className="italic leading-relaxed"
                  style={{
                    color: "var(--foreground)",
                    fontSize: "1.2rem",
                    borderLeft: "2px solid var(--rose-light)",
                    paddingLeft: "1rem",
                  }}>
                  {soin.accroche}
                </p>

                {!soin.comingSoon && (
                  <p className="leading-relaxed" style={{ fontSize: "1.1rem" }}>
                    {soin.description}
                  </p>
                )}

                {soin.bienfaits.length > 0 && (
                  <div>
                    <h4
                      className="uppercase tracking-widest mb-3"
                      style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: "0.88rem",
                        color: "var(--sage-deep)",
                        fontWeight: 500,
                      }}>
                      Les bienfaits
                    </h4>
                    <ul className="flex flex-col gap-0">
                      {soin.bienfaits.map((b, i) => (
                        <li
                          key={i}
                          className="flex gap-3 py-2 text-base"
                          style={{
                            color: "var(--muted-foreground)",
                            borderBottom: "1px dotted var(--border)",
                          }}>
                          <span style={{ color: "var(--primary)", flexShrink: 0 }}>✿</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {soin.pourQui && (
                  <div>
                    <h4
                      className="uppercase tracking-widest mb-2"
                      style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: "0.88rem",
                        color: "var(--sage-deep)",
                        fontWeight: 500,
                      }}>
                      Pour qui ?
                    </h4>
                    <p className="text-base leading-relaxed">{soin.pourQui}</p>
                  </div>
                )}
              </div>

              {/* Right column */}
              <div className="flex flex-col gap-6">
                {/* Meta box */}
                <div
                  className="rounded-xl flex flex-col"
                  style={{ background: "var(--secondary)", overflow: "hidden" }}>
                  {[
                    { label: "Durée", value: soin.duree, price: false },
                    { label: "Tarif", value: soin.tarif, price: true },
                    { label: "Lieu", value: "À domicile", price: false },
                  ].map((row, i, arr) => (
                    <div
                      key={row.label}
                      className="flex justify-between items-baseline px-6 py-3"
                      style={{
                        borderBottom:
                          i < arr.length - 1
                            ? "1px dotted var(--border)"
                            : "none",
                      }}>
                      <span
                        className="uppercase tracking-widest"
                        style={{ fontSize: "0.78rem", color: "var(--ink-mute)", fontWeight: 500 }}>
                        {row.label}
                      </span>
                      <span
                        className={row.price ? "font-heading" : "font-medium"}
                        style={{
                          color: row.price ? "var(--primary)" : "var(--foreground)",
                          fontSize: row.price ? "1.5rem" : "0.98rem",
                        }}>
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Déroulement */}
                <div>
                  <h4
                    className="uppercase tracking-widest mb-2"
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "0.88rem",
                      color: "var(--sage-deep)",
                      fontWeight: 500,
                    }}>
                    Déroulement
                  </h4>
                  <p className="text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                    {soin.deroulement ?? "Je me déplace à votre domicile avec tout le nécessaire. Nous prenons d'abord un temps d'échange pour adapter le soin à vos besoins, puis je réalise le soin avec des gestes doux et enveloppants, dans une position confortable."}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-3 flex-wrap">
                  <Link
                    href={soin.reservationUrl ?? BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Réserver ${soin.nom}`}
                    className="flex items-center justify-center px-6 h-12 bg-primary text-white rounded-full font-medium text-base shadow-m transition-all duration-300 hover:bg-foreground hover:-translate-y-px">
                    Réserver
                  </Link>
                  <Link
                    href="/offrir"
                    aria-label={`Offrir ${soin.nom}`}
                    className="flex items-center justify-center px-6 h-12 border border-primary text-foreground rounded-full font-medium text-base transition-all duration-300 hover:bg-primary hover:text-white">
                    Offrir
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export default function SoinsAccordion({ soins }: { soins: Soin[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-4">
      {soins.map((soin) => (
        <SoinItem
          key={soin.id}
          soin={soin}
          isOpen={openId === soin.id}
          onToggle={() => setOpenId(openId === soin.id ? null : soin.id)}
        />
      ))}
    </div>
  );
}
