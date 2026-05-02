"use client";

import ActionButton from "../action-button";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ManifesteSection() {
  return (
    <motion.div
      className="flex flex-col items-center w-full rounded-2xl bg-secondary p-12 md:p-16 text-center"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease }}>
      <h2 className="font-bold mb-6 text-5xl md:text-6xl lg:text-7xl text-primary max-w-2xl">
        Un accompagnement humain
      </h2>
      <p className="text-muted-foreground leading-relaxed max-w-2xl mb-4">
        Devenir parent est une transformation profonde. Un passage. Un
        bouleversement. Une rencontre.
      </p>
      <p className="text-muted-foreground leading-relaxed max-w-2xl mb-10">
        Parenthèse est un espace pour ralentir, comprendre et tisser le lien.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 w-full sm:w-auto">
        <ActionButton href="/about" ariaLabel="En savoir plus sur Parenthèse">
          En savoir plus sur Parenthèse
        </ActionButton>
      </div>
    </motion.div>
  );
}
