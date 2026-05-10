"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import bg from "@/assets/bain5.webp";

export default function ParallaxSection() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-22%", "22%"]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden w-full"
      style={{ height: "clamp(480px, 70vh, 720px)" }}>
      <div
        className="absolute inset-x-0"
        style={{ top: "-25%", bottom: "-25%" }}
        aria-hidden="true">
        <motion.div className="relative w-full h-full" style={{ y }}>
          <Image
            src={bg}
            alt=""
            fill
            className="object-cover object-[center_10%]"
            sizes="100vw"
            priority={false}
          />
        </motion.div>
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,20,24,0.32) 0%, rgba(20,20,24,0.45) 50%, rgba(20,20,24,0.55) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 gap-5 max-w-3xl mx-auto">
        <span className="eyebrow" style={{ color: "rgba(255,255,255,0.85)" }}>
          Une présence, un souffle
        </span>
        <h2
          className="font-heading font-medium"
          style={{
            color: "#fff",
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            textShadow: "0 2px 24px rgba(0,0,0,0.25)",
            margin: "0.5rem 0",
          }}>
          Le temps suspendu d&apos;une parenthèse
        </h2>
        <p
          className="text-[1.2rem] italic leading-relaxed max-w-xl"
          style={{ color: "rgba(255,255,255,0.92)" }}>
          Un instant pour ralentir, écouter, recevoir. Pour soi, pour son bébé,
          pour ce nouveau lien qui se tisse — avec douceur et conscience.
        </p>
      </div>
    </div>
  );
}
