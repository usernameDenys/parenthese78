"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function PartnersSection() {
  return (
    <div className="flex flex-col items-center w-full gap-10">
      <motion.div
        className="text-center flex flex-col gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}>
        <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl">
          Les partenaires Parenthèse
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Sublimer chaque instant avec douceur et sensibilité
        </p>
      </motion.div>

      {/* Photos grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="rounded-2xl aspect-square bg-border"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, ease, delay: i * 0.07 }}
          />
        ))}
      </div>

      {/* Texte partenaire */}
      <motion.div
        className="w-full max-w-2xl rounded-2xl bg-background border border-border p-8 flex flex-col gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease, delay: 0.15 }}>
        <p className="font-bold text-primary text-lg">
          Regard&apos;Hélina Photographie
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Je collabore avec Cécile, photographe spécialisée dans la maternité
          et les premiers jours de vie. Elle capture avec délicatesse les
          moments précieux de votre famille — son approche douce et respectueuse
          s&apos;harmonise avec l&apos;univers de Parenthèse, pour que chaque
          souvenir soit authentique, apaisé et empreint de tendresse.
        </p>
      </motion.div>
    </div>
  );
}
