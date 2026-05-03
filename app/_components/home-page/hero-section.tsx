"use client";

import heroImage from "@/assets/IMG-20260323-WA0087.jpg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease, delay },
});

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
      {/* Text */}
      <div className="flex flex-col gap-7 order-2 lg:order-1">
        <motion.div className="flex items-center gap-4" {...fadeUp(0)}>
          <span className="block w-10 h-px bg-primary shrink-0" />
          <span className="eyebrow">Soins bien-être périnataux à domicile</span>
        </motion.div>

        <motion.h1
          className="text-foreground"
          style={{ color: "var(--foreground)" }}
          {...fadeUp(0.1)}>
          Des{" "}
          <span className="text-primary italic">parenthèses</span>
          <br />
          pour naître parents
          <br />
          en douceur.
        </motion.h1>

        <motion.p
          className="text-xl italic leading-relaxed max-w-md"
          style={{ color: "var(--muted-foreground)" }}
          {...fadeUp(0.2)}>
          Pour les bébés et leurs parents — à Versailles et ses environs.
          <br />
          À vivre, ou à offrir.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-4 flex-wrap" {...fadeUp(0.3)}>
          <Link
            href="/parentheses"
            aria-label="Découvrir les soins proposés"
            className="flex items-center justify-center gap-2 px-8 h-12 bg-primary text-white rounded-full font-medium text-base tracking-wide shadow-m transition-all duration-300 hover:bg-foreground hover:-translate-y-px">
            Découvrir les soins <span aria-hidden>→</span>
          </Link>
          <Link
            href="/offrir"
            aria-label="Offrir une parenthèse en cadeau"
            className="flex items-center justify-center px-8 h-12 bg-transparent text-foreground border border-primary rounded-full font-medium text-base tracking-wide transition-all duration-300 hover:bg-primary hover:text-white">
            Offrir une parenthèse
          </Link>
        </motion.div>
      </div>

      {/* Image */}
      <motion.div
        className="relative order-1 lg:order-2"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease, delay: 0.2 }}>
        {/* Image frame */}
        <div
          className="relative overflow-hidden"
          style={{
            aspectRatio: "4/5",
            borderRadius: "var(--radius-img)",
            boxShadow: "var(--shadow-l)",
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

        {/* Floating badge */}
        <div
          className="absolute -bottom-8 -left-6 lg:-left-8 bg-white flex items-center gap-3"
          style={{
            padding: "20px 24px",
            borderRadius: "var(--radius-card)",
            boxShadow: "var(--shadow-m)",
            maxWidth: "260px",
          }}>
          <span
            className="font-heading leading-none shrink-0"
            style={{ fontSize: "2.4rem", color: "var(--primary)" }}>
            15+
          </span>
          <span
            className="text-sm italic leading-snug"
            style={{ color: "var(--muted-foreground)" }}>
            années d&apos;expérience auprès des familles, depuis 2009
          </span>
        </div>
      </motion.div>
    </div>
  );
}
