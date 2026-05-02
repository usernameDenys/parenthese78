"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type Formation = {
  year: string;
  title: string;
  detail: string;
};

export default function FormationsTimeline({ formations }: { formations: Formation[] }) {
  return (
    <div className="flex flex-col gap-0">
      {formations.map((item, i) => {
        const showYear = item.year !== formations[i - 1]?.year;
        return (
          <motion.div
            key={i}
            className="flex gap-6 pb-8 relative"
            initial={{ opacity: 0, y: 36, x: -12 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.75, ease, delay: i * 0.1 }}>
            {/* Ligne verticale */}
            {i < formations.length - 1 && (
              <div className="absolute left-[72px] top-8 bottom-0 w-px bg-border" />
            )}
            {/* Badge année */}
            <div className="shrink-0 w-36 text-right">
              {showYear && (
                <span className="text-sm font-bold text-primary bg-secondary py-1.5 rounded-full inline-flex items-center justify-center w-full">
                  {item.year}
                </span>
              )}
            </div>
            {/* Dot */}
            <div className="shrink-0 w-3 h-3 rounded-full bg-primary mt-1.5 z-10" />
            {/* Contenu */}
            <div className="flex flex-col gap-1 pb-2">
              <p className="font-semibold">{item.title}</p>
              <p className="text-base text-muted-foreground">{item.detail}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
