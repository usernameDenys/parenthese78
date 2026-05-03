"use client";

import heroImage from "@/assets/2.webp";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay },
});

export default function HeroSection() {
  return (
    <div className="relative h-svh flex flex-col">

      <div className="absolute inset-0 overflow-hidden">
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100vh",
            height: "100vw",
            transform: "translate(-50%, -50%) rotate(-90deg)",
          }}>
          <Image
            alt="Faustine, accompagnante périnatale à domicile à Versailles"
            src={heroImage}
            fill
            className="object-cover"
            style={{ filter: "grayscale(0.1) contrast(1.02)" }}
            priority
          />
        </div>
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(43,33,28,0.92) 0%, rgba(43,33,28,0.6) 40%, rgba(43,33,28,0.1) 100%)",
        }}
      />

      <div className="flex-1" style={{ minHeight: "96px" }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28" style={{ backdropFilter: "blur(1px)" }}>
        <div className="max-w-2xl flex flex-col gap-7">
          <motion.h1
            style={{ color: "#fff", textShadow: "0 2px 24px rgba(0,0,0,0.18)" }}
            {...fadeUp(0.1)}>
            Des{" "}
            <span className="italic" style={{ color: "var(--rose-light)" }}>parenthèses</span>
            <br />
            pour naître
            <br />
            parents en douceur.
          </motion.h1>

          <motion.p
            className="text-xl italic leading-relaxed"
            style={{ color: "rgba(255,255,255,0.75)" }}
            {...fadeUp(0.2)}>
            Pour les bébés et leurs parents — à Versailles et ses environs.
            <br />
            À vivre, ou à offrir.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 flex-wrap" {...fadeUp(0.3)}>
            <Link
              href="/parentheses"
              aria-label="Découvrir les soins proposés"
              className="flex items-center justify-center gap-2 px-8 h-12 bg-primary text-white rounded-full font-medium text-base tracking-wide shadow-m transition-all duration-300 hover:bg-white hover:text-foreground hover:-translate-y-px">
              Découvrir les soins <span aria-hidden>→</span>
            </Link>
            <Link
              href="/offrir"
              aria-label="Offrir une parenthèse en cadeau"
              className="flex items-center justify-center px-8 h-12 bg-transparent text-white border border-white/50 rounded-full font-medium text-base tracking-wide transition-all duration-300 hover:bg-white/20">
              Offrir une parenthèse
            </Link>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
