"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type Formation = { year: string; title: string; detail: string };

export default function FormationsTimeline({
  formations,
}: {
  formations: Formation[];
}) {
  return (
    <ol className="relative max-w-2xl mx-auto list-none">
      <div
        aria-hidden="true"
        className="absolute top-2 bottom-12 w-px"
        style={{
          left: "4px",
          background:
            "linear-gradient(to bottom, var(--color-rose-light), transparent)",
        }}
      />
      {formations.map((item, i) => (
        <motion.li
          key={i}
          className="relative pl-12 pb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease, delay: i * 0.07 }}
        >
          <div
            aria-hidden="true"
            className="absolute top-2 w-2.5 h-2.5 rounded-full bg-primary z-10"
            style={{ left: 0, boxShadow: "0 0 0 4px var(--color-secondary)" }}
          />
          <p className="font-medium text-foreground mb-1">{item.title}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {item.detail}
          </p>
        </motion.li>
      ))}
    </ol>
  );
}
