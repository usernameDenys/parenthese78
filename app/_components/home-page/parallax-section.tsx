"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import bg from "@/assets/bain6.jpg";

export default function ParallaxSection() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden w-full"
      style={{ height: "clamp(480px, 70vh, 720px)" }}>
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 w-full"
        style={{ y }}
        aria-hidden="true">
        <Image
          src={bg}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
      </motion.div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(20,20,24,0.32), rgba(20,20,24,0.55))",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 gap-6">
        <p className="text-white/70 text-sm font-medium uppercase tracking-widest italic">
          Manifeste Parenthèse
        </p>
        <blockquote className="text-white text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl leading-snug">
          Prendre soin n&apos;est pas un détail.<br />
          C&apos;est une fondation.
        </blockquote>
        <p className="text-white/60 text-base italic max-w-xl">
          Parenthèse est un espace pour ralentir, comprendre et tisser le lien.
        </p>
      </div>
    </div>
  );
}
