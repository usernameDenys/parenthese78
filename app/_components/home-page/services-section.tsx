import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FiHeart, FiDroplet, FiUsers } from "react-icons/fi";
import femmeImg from "@/assets/IMG-20260323-WA0087.webp";
import bebeImg from "@/assets/IMG-20250912-WA0075.webp";
import parentsImg from "@/assets/bain6.webp";

const categories: {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  image: StaticImageData;
  alt: string;
  objectPosition?: string;
}[] = [
  {
    id: "femme",
    title: "Pour la femme",
    desc: "Accompagner et soulager les différentes étapes du parcours féminin, avec douceur et écoute.",
    icon: <FiHeart size={22} />,
    image: femmeImg,
    alt: "Massage prénatal et postnatal — Parenthèse",
    objectPosition: "bottom",
  },
  {
    id: "bebe",
    title: "Pour bébé",
    desc: "Accueillir, apaiser et offrir un moment de bien-être à votre bébé dans ses premiers instants de vie.",
    icon: <FiDroplet size={22} />,
    image: bebeImg,
    alt: "Bain thérapeutique bébé — Parenthèse",
  },
  {
    id: "parents",
    title: "Pour les parents",
    desc: "Soutenir, rassurer et vous aider à prendre confiance dans votre nouveau rôle.",
    icon: <FiUsers size={22} />,
    image: parentsImg,
    alt: "Accompagnement parental — Parenthèse",
  },
];

export default function ServicesSection() {
  return (
    <div className="flex flex-col w-full items-center">
      {/* Section header */}
      <div className="section-head">
        <span className="eyebrow">Les soins proposés</span>
        <h2>Des parenthèses de douceur<br />à vivre ou à offrir</h2>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {categories.map((cat) => (
          <article
            key={cat.id}
            className="svc-card flex flex-col bg-background rounded-[18px] overflow-hidden border border-border transition-all duration-300 hover:-translate-y-1">
            {/* Image */}
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src={cat.image}
                alt={cat.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.04]"
                style={{ filter: "grayscale(0.1)", objectPosition: cat.objectPosition ?? "center" }}
              />
            </div>

            {/* Floating icon */}
            <div className="flex justify-center">
              <div
                className="relative -mt-9 z-10 flex items-center justify-center rounded-full bg-white border border-border text-primary"
                style={{
                  width: 64,
                  height: 64,
                  boxShadow: "var(--shadow-s)",
                }}>
                {cat.icon}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col items-center text-center px-7 pb-8 pt-4 gap-3">
              <h3
                className="font-heading font-medium"
                style={{ color: "var(--primary)", fontSize: "1.9rem" }}>
                {cat.title}
              </h3>
              <p className="text-base leading-relaxed">{cat.desc}</p>
              <Link
                href="/parentheses"
                aria-label={`Découvrir les soins ${cat.title}`}
                className="mt-2 italic text-primary border-b border-primary/40 pb-0.5 text-sm tracking-wide hover:border-primary transition-colors duration-200">
                Découvrir →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-14">
        <Link
          href="/parentheses"
          aria-label="Découvrir tous les soins"
          className="flex items-center justify-center gap-2 px-8 h-12 bg-primary text-white rounded-full font-medium text-base shadow-m transition-all duration-300 hover:bg-foreground hover:-translate-y-px">
          Découvrir les soins
        </Link>
        <Link
          href="/offrir"
          aria-label="Offrir une parenthèse en cadeau"
          className="flex items-center justify-center px-8 h-12 border border-primary text-foreground rounded-full font-medium text-base transition-all duration-300 hover:bg-primary hover:text-white">
          Offrir une parenthèse
        </Link>
      </div>
    </div>
  );
}
