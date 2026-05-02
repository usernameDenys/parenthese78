"use client";

import heroImage from "@/assets/IMG-20260323-WA0087.jpg";
import Image from "next/image";
import ActionButton from "../action-button";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease, delay },
});

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center w-full lg:flex-row ">
      <motion.div
        className="order-1 lg:order-2 w-full rounded-[34%_66%_64%_36%/30%_32%_68%_70%] overflow-hidden max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto shadow-2xl"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease, delay: 0.2 }}>
        <Image
          alt="Faustine, accompagnante périnatale à domicile à Versailles"
          src={heroImage}
          className="object-cover"
        />
      </motion.div>
      <div className="order-2 lg:order-1 w-full md:max-w-1/2 flex flex-col items-start *:pb-4 *:px-4">
        <motion.div className="flex gap-3 flex-wrap" {...fadeUp(0)}>
          <span className="text-sm font-medium px-3 py-1 rounded-full bg-secondary text-primary">
            Pour les bébés et leurs parents
          </span>
          <span className="text-sm font-medium px-3 py-1 rounded-full bg-secondary text-primary">
            À vivre ou à offrir
          </span>
        </motion.div>
        <motion.h1
          className="font-bold mb-4 text-5xl md:text-left md:text-6xl lg:text-7xl xl:text-8xl"
          {...fadeUp(0.1)}>
          Des parenthèses pour naître parents en douceur
        </motion.h1>
        <motion.p className="text-xl" {...fadeUp(0.2)}>
          Soins bien-être périnataux à domicile à Versailles et ses environs
        </motion.p>

        <motion.div
          className="flex flex-col gap-3 pt-4 sm:flex-row sm:gap-4 w-full"
          {...fadeUp(0.3)}>
          <ActionButton href="/parentheses" ariaLabel="Découvrir les soins proposés">
            Découvrir les soins
          </ActionButton>
          <ActionButton
            href="/offrir"
            ariaLabel="Offrir une parenthèse en cadeau"
            variant="outline">
            Offrir une parenthèse
          </ActionButton>
        </motion.div>
      </div>
    </div>
  );
}
