"use client";

import { useEffect, useState } from "react";

const categories = [
  { id: "femme", label: "Pour la femme" },
  { id: "bebe", label: "Pour le bébé" },
  { id: "parents", label: "Pour les parents" },
  { id: "enfants", label: "Pour les enfants" },
];

export default function CatNav() {
  const [activeCat, setActiveCat] = useState("femme");

  useEffect(() => {
    const onScroll = () => {
      for (const cat of categories) {
        const el = document.getElementById("cat-" + cat.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top < 200 && rect.bottom > 200) {
          setActiveCat(cat.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById("cat-" + id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 140;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav
      className="sticky z-10 border-b"
      style={{
        top: 72,
        background: "rgba(251,247,242,0.92)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderColor: "var(--border)",
        padding: "12px 0",
      }}
      aria-label="Naviguer par catégorie">
      <div className="flex gap-2 justify-center flex-wrap px-6">
        {categories.map((cat) => {
          const active = activeCat === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => scrollTo(cat.id)}
              className="italic transition-all duration-200 cursor-pointer"
              style={{
                padding: "8px 18px",
                borderRadius: "var(--radius-pill)",
                fontSize: "0.95rem",
                fontFamily: "var(--font-cormorant), serif",
                border: `1px solid ${active ? "transparent" : "transparent"}`,
                background: active ? "var(--primary)" : "transparent",
                color: active ? "#fff" : "var(--muted-foreground)",
                fontWeight: active ? 500 : 400,
              }}
              onMouseEnter={(e) => {
                if (!active) {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--rose-light)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--primary)";
                }
              }}
              onMouseLeave={(e) => {
                if (!active) {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--muted-foreground)";
                }
              }}>
              {cat.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
