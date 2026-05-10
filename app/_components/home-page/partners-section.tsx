"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import bain4 from "@/assets/bain4.webp";
import bain5 from "@/assets/bain5.webp";
import bain6 from "@/assets/bain6.webp";
import bain7 from "@/assets/bain7.webp";
import edbn from "@/assets/Macaron_ABN.webp";

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
        <h2 className="font-bold text-5xl md:text-6xl lg:text-7xl">
          Les partenaires Parenthèse
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Sublimer chaque instant avec douceur et sensibilité
        </p>
      </motion.div>

      {/* Photos grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
        {[bain4, bain5, bain6, bain7].map((img, i) => (
          <motion.div
            key={i}
            className="rounded-2xl aspect-square overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, ease, delay: i * 0.07 }}>
            <Image src={img} alt="Soin Parenthèse" className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>

      {/* Badge EDBN */}
      <motion.div
        className="flex items-center gap-6 p-6 rounded-2xl bg-background border border-border"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}>
        <Image src={edbn} alt="École du Bien Naître — EDBN" className="h-20 w-auto shrink-0" />
        <div className="flex flex-col gap-1">
          <p className="font-bold text-primary">Ambassadrice École du Bien Naître</p>
          <p className="text-muted-foreground text-[1.2rem] leading-relaxed">
            Praticienne formée et certifiée par l&apos;EDBN® — Méthodes Sonia Krief.
            Une approche transmise et reconnue, centrée sur le respect du rythme
            et des besoins de chacun.
          </p>
        </div>
      </motion.div>

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
        <p className="text-muted-foreground text-[1.2rem] leading-relaxed">
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
