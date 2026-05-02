"use client";

import { FiAward, FiHeart, FiHome, FiSliders } from "react-icons/fi";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const points = [
  {
    id: 1,
    icon: <FiSliders size={28} />,
    title: "Accompagnement sur mesure",
    desc: "Chaque rencontre est pensée selon vos besoins, dans le respect de votre rythme et de votre histoire.",
  },
  {
    id: 2,
    icon: <FiAward size={28} />,
    title: "Expertise certifiée",
    desc: "Plus de 15 ans d'expérience en néonatologie et des formations certifiées à l'École du Bien Naître.",
  },
  {
    id: 3,
    icon: <FiHeart size={28} />,
    title: "Respect du rythme",
    desc: "Une approche bienveillante, centrée sur les besoins de chaque enfant et de chaque parent.",
  },
  {
    id: 4,
    icon: <FiHome size={28} />,
    title: "À domicile, dans les Yvelines",
    desc: "Je me déplace chez vous pour un moment de soin dans votre cocon, sans contraintes de déplacement.",
  },
];

export default function ApproachSection() {
  return (
    <div className="flex flex-col w-full items-center">
      <motion.h2
        className="font-bold my-10 text-5xl md:text-6xl lg:text-7xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}>
        Pourquoi choisir Parenthèse ?
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {points.map((point, i) => (
          <motion.div
            key={point.id}
            className="flex flex-col gap-4 p-8 rounded-2xl bg-secondary"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease, delay: i * 0.15 }}>
            <span className="text-primary">{point.icon}</span>
            <h3 className="font-bold text-lg text-primary">{point.title}</h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              {point.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
