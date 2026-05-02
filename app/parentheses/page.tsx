import { Container } from "@/app/_components/container";
import ActionButton from "@/app/_components/action-button";
import Image from "next/image";
import bain4 from "@/assets/bain4.jpg";
import bain5 from "@/assets/bain5.jpg";
import bain6 from "@/assets/bain6.jpg";
import bain7 from "@/assets/bain7.jpg";

export const metadata = {
  title: "Les Parenthèses — Soins & accompagnements | Parenthèse",
  description:
    "Soins bien-être pour la femme, le bébé et les parents à domicile à Versailles. Massage prénatal, postnatal, bain bébé, réflexologie et accompagnement périnatal.",
};

// ─── Data ────────────────────────────────────────────────────────────────────

const soinsF = [
  {
    id: "maternite",
    nom: "Parenthèse Maternité",
    sous: "Massage prénatal",
    accroche: "Un moment pour ralentir, relâcher les tensions et vous reconnecter à votre corps… et à votre bébé.",
    description:
      "La grossesse transforme le corps et les émotions. Cette Parenthèse Maternité vous offre un temps pour vous, pour soulager les tensions et vous détendre en profondeur.",
    bienfaits: [
      "Soulager les tensions du dos, des lombaires et des jambes",
      "Favoriser la détente et le lâcher-prise",
      "Améliorer le sommeil",
      "Se reconnecter à son corps",
      "Créer un moment de lien avec son bébé",
    ],
    pourQui: "Pour toutes les femmes enceintes, à partir du 2ᵉ trimestre.",
    duree: "1h ou 1h30",
    tarif: "110 € – 150 €",
  },
  {
    id: "postnatale",
    nom: "Parenthèse Postnatale",
    sous: "Massage postnatal",
    accroche: "Un moment pour se retrouver, relâcher le corps et s'accorder une pause après la naissance.",
    description:
      "Le post-partum est une période intense, faite de bouleversements physiques et émotionnels. Cette Parenthèse Postnatale vous offre un temps pour vous, pour relâcher les tensions, vous détendre en profondeur et vous reconnecter à votre corps.",
    bienfaits: [
      "Soulager les tensions accumulées (dos, épaules, bassin)",
      "Favoriser la récupération après l'accouchement",
      "Apaiser les émotions et le mental",
      "Améliorer la détente et le sommeil",
      "Se réapproprier son corps en douceur",
    ],
    pourQui:
      "Pour toutes les jeunes mamans, dès les premiers jours après la naissance (selon votre état de fatigue et votre récupération).",
    duree: "1h – 1h30",
    tarif: "110 € – 150 €",
  },
  {
    id: "rebozo",
    nom: "Soin Rebozo",
    sous: "Enveloppement & bercement",
    accroche: "Un soin enveloppant pour se recentrer, relâcher les tensions et se reconnecter à soi.",
    description:
      "Le soin Rebozo est un soin d'origine mexicaine, réalisé à l'aide de tissus. Il associe un temps de massage à des mouvements de bercement, d'enveloppement et de resserrage pour relâcher les tensions et retrouver une sensation d'unité dans le corps.",
    bienfaits: [
      "Relâcher les tensions physiques et émotionnelles",
      "Se recentrer et se reconnecter à son corps",
      "Apporter un sentiment de sécurité et d'enveloppement",
      "Marquer une étape ou un passage de vie",
      "Favoriser le lâcher-prise",
    ],
    pourQui:
      "Pour les femmes, à différentes étapes de leur vie : en post-partum, lors d'un changement ou d'une transition, ou simplement pour prendre un temps pour soi.",
    duree: "1h30",
    tarif: "170 €",
  },
  {
    id: "equilibre",
    nom: "Parenthèse Équilibre féminin",
    sous: "Massage holistique au féminin",
    accroche: "Un soin pour accompagner le corps féminin dans ses cycles, ses transitions et ses besoins profonds.",
    description:
      "Le corps féminin traverse de nombreuses variations au fil du cycle et des étapes de vie. Ce soin d'accompagnement global agit à la fois sur le corps et les émotions, pour favoriser l'équilibre et le mieux-être.",
    bienfaits: [
      "Favoriser la détente profonde du corps",
      "Accompagner les périodes de transition hormonale",
      "Soulager les tensions liées au cycle menstruel",
      "Soutenir le lien au corps dans un projet de grossesse",
      "Apaiser les émotions et le mental",
    ],
    pourQui:
      "Pour les femmes en désir de grossesse, ou concernées par des inconforts liés au cycle menstruel.",
    duree: "1h ou 1h30",
    tarif: "110 € – 150 €",
  },
  {
    id: "reflexologie",
    nom: "Réflexologie émotionnelle",
    sous: "Pieds & centres énergétiques",
    accroche: "Un soin pour apaiser les émotions, relâcher les tensions et retrouver un mieux-être, en douceur.",
    description:
      "La réflexologie émotionnelle s'appuie sur la stimulation de zones réflexes au niveau des pieds, en lien avec les centres énergétiques du corps. Elle permet d'accompagner les émotions et d'apaiser le corps, pour retrouver plus de calme et de légèreté.",
    bienfaits: [
      "Apaiser les émotions",
      "Relâcher les tensions",
      "Favoriser le mieux-être global",
      "Retrouver un équilibre intérieur",
      "Se reconnecter à ses ressentis",
    ],
    pourQui:
      "Pour les femmes adultes qui ressentent le besoin de se recentrer, d'apaiser leurs émotions, ou de traverser une période plus sensible. Soin proposé hors grossesse.",
    duree: "1h10",
    tarif: "90 €",
  },
  {
    id: "rituel",
    nom: "Rituel Rebozo",
    sous: "Soin d'exception",
    accroche: "Un rituel profond pour accompagner les grandes étapes de vie et offrir un temps de reconnexion intense à soi.",
    description:
      "Ce soin associe un massage à 4 mains, un temps de chaleur enveloppante et un travail au Rebozo — bercements, enveloppements, resserrage du corps. Un enchaînement complet qui permet au corps de relâcher profondément les tensions et de retrouver un ancrage intérieur.",
    bienfaits: [],
    pourQui: "",
    duree: "Environ 3h",
    tarif: "500 €",
    premium: true,
  },
];

const soinsBebe = [
  {
    id: "naissance",
    nom: "Parenthèse Naissance",
    sous: "Thérapeutique Bain Bébé® — Méthode Sonia Krief",
    accroche: "Un moment suspendu pour accueillir votre bébé, apaiser ses tensions et lui permettre de revivre en douceur les sensations de la vie in utero.",
    description:
      "La naissance est un passage intense pour le bébé. Le Thérapeutique Bain Bébé est un soin unique, qui lui permet de relâcher les tensions liées à la grossesse et à l'accouchement, dans un environnement sécurisant et enveloppant. Un moment profondément émouvant, pour votre bébé… et pour vous.",
    bienfaits: [
      "Apaiser les tensions et les éventuels inconforts liés à la naissance",
      "Favoriser la détente et un relâchement profond",
      "Permettre à bébé de retrouver des sensations connues et rassurantes",
      "Soutenir l'adaptation au monde extérieur",
      "Offrir un moment de lien intense entre bébé et ses parents",
    ],
    pourQui:
      "Pour les nouveau-nés, idéalement dans les 21 premiers jours qui suivent la naissance ou le terme prévu.",
    duree: "Environ 1h30",
    tarif: "130 €",
  },
  {
    id: "lien",
    nom: "Parenthèse Lien",
    sous: "Bain enveloppé",
    accroche: "Un moment doux pour prolonger le lien et accompagner bébé dans ses premières semaines.",
    description: "Contenu à venir — contactez-moi pour en savoir plus.",
    bienfaits: [],
    pourQui: "",
    duree: "À préciser",
    tarif: "À préciser",
    comingSoon: true,
  },
  {
    id: "massage-bebe",
    nom: "Massage bébé",
    sous: "Toucher et présence",
    accroche: "Un apprentissage du massage pour créer du lien, apaiser et accompagner bébé.",
    description: "Contenu à venir — contactez-moi pour en savoir plus.",
    bienfaits: [],
    pourQui: "",
    duree: "À préciser",
    tarif: "À préciser",
    comingSoon: true,
  },
  {
    id: "reflexologie-bebe",
    nom: "Réflexologie bébé émotionnelle",
    sous: "Douceur & équilibre",
    accroche: "Un soin doux pour apaiser les tensions et soutenir le bien-être émotionnel de bébé.",
    description: "Contenu à venir — contactez-moi pour en savoir plus.",
    bienfaits: [],
    pourQui: "",
    duree: "À préciser",
    tarif: "À préciser",
    comingSoon: true,
  },
];

const soinsParents = [
  {
    id: "parentalite",
    nom: "Soutien à la parentalité",
    sous: "Accompagnement Post-Partum",
    accroche: "Un espace pour souffler, poser vos questions et trouver vos repères en douceur.",
    description: "Contenu à venir — contactez-moi pour en savoir plus.",
    bienfaits: [],
    pourQui: "",
    duree: "À préciser",
    tarif: "À préciser",
    comingSoon: true,
  },
  {
    id: "sommeil",
    nom: "Sommeil de l'enfant",
    sous: "De 0 à 3 ans",
    accroche: "Un accompagnement doux pour aider toute la famille à retrouver un sommeil apaisé.",
    description: "Contenu à venir — contactez-moi pour en savoir plus.",
    bienfaits: [],
    pourQui: "",
    duree: "À préciser",
    tarif: "À préciser",
    comingSoon: true,
  },
];

const soinsEnfants = [
  {
    id: "massage-enfant",
    nom: "Massage enfant",
    sous: "Jusqu'à 13 ans",
    accroche: "Un soin doux pour accompagner l'enfant dans son bien-être et ses émotions.",
    description: "Contenu à venir — contactez-moi pour en savoir plus.",
    bienfaits: [],
    pourQui: "",
    duree: "À préciser",
    tarif: "À préciser",
    comingSoon: true,
  },
  {
    id: "reflexologie-enfant",
    nom: "Réflexologie émotionnelle enfant",
    sous: "Équilibre & douceur",
    accroche: "Un soin pour apaiser les émotions de l'enfant et soutenir son développement.",
    description: "Contenu à venir — contactez-moi pour en savoir plus.",
    bienfaits: [],
    pourQui: "",
    duree: "À préciser",
    tarif: "À préciser",
    comingSoon: true,
  },
];

const formules = [
  {
    nom: "Parenthèse Continuité — Maternité",
    desc: "Accompagner la grossesse avec plusieurs temps de soin, pour soulager le corps, se détendre et créer un lien avec son bébé au fil des mois.",
    contenu: "2 à 3 séances au choix",
  },
  {
    nom: "Parenthèse Continuité — Naissance",
    desc: "Offrir à bébé et à ses parents plusieurs moments de douceur pour accompagner les premiers jours de vie.",
    contenu: "Bain, massage, accompagnement",
  },
  {
    nom: "Parenthèse Continuité — Post-partum",
    desc: "Soutenir la récupération, les émotions et l'adaptation à la vie avec bébé.",
    contenu: "Soins + accompagnement",
  },
  {
    nom: "Parenthèse Continuité — Enfance",
    desc: "Accompagner l'enfant dans son bien-être et ses émotions sur plusieurs séances.",
    contenu: "Tarif sur demande",
  },
];

// ─── Types ────────────────────────────────────────────────────────────────────

type Soin = {
  id: string;
  nom: string;
  sous: string;
  accroche: string;
  description: string;
  bienfaits: string[];
  pourQui: string;
  duree: string;
  tarif: string;
  premium?: boolean;
  comingSoon?: boolean;
};

// ─── Components ──────────────────────────────────────────────────────────────

function SoinCard({ soin, images }: { soin: Soin; images?: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-6 py-10 border-b border-border last:border-0">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Contenu */}
        <div className="flex flex-col gap-5 lg:w-3/5">
          <div>
            {soin.premium && (
              <span className="text-xs font-semibold uppercase tracking-widest text-primary bg-accent px-3 py-1 rounded-full mb-3 inline-block">
                Soin d'exception
              </span>
            )}
            {soin.comingSoon && (
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground bg-secondary px-3 py-1 rounded-full mb-3 inline-block">
                À venir
              </span>
            )}
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-1">
              {soin.sous}
            </p>
            <h3 className="font-bold text-3xl md:text-4xl">{soin.nom}</h3>
          </div>

          <p className="text-muted-foreground italic text-lg leading-relaxed">
            {soin.accroche}
          </p>

          {!soin.comingSoon && (
            <p className="text-muted-foreground leading-relaxed">{soin.description}</p>
          )}

          {soin.bienfaits.length > 0 && (
            <div>
              <p className="font-semibold mb-2">Les bienfaits</p>
              <ul className="flex flex-col gap-1.5">
                {soin.bienfaits.map((b, i) => (
                  <li key={i} className="flex gap-2 text-muted-foreground">
                    <span className="text-primary mt-1 shrink-0">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {soin.pourQui && (
            <div>
              <p className="font-semibold mb-1">Pour qui ?</p>
              <p className="text-muted-foreground">{soin.pourQui}</p>
            </div>
          )}

          {/* Infos pratiques */}
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex flex-col gap-0.5 bg-secondary rounded-xl px-4 py-3">
              <span className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">Durée</span>
              <span className="font-semibold">{soin.duree}</span>
            </div>
            <div className="flex flex-col gap-0.5 bg-secondary rounded-xl px-4 py-3">
              <span className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">Tarif</span>
              <span className="font-semibold text-primary">{soin.tarif}</span>
            </div>
            <div className="flex flex-col gap-0.5 bg-secondary rounded-xl px-4 py-3">
              <span className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">Lieu</span>
              <span className="font-semibold">À domicile</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <ActionButton href="/contact" ariaLabel={`Réserver ${soin.nom}`}>
              Réserver ce moment
            </ActionButton>
            <ActionButton href="/offrir" ariaLabel={`Offrir ${soin.nom}`} variant="outline">
              Offrir ce moment
            </ActionButton>
          </div>
        </div>

        {/* Image */}
        {images && (
          <div className="lg:w-2/5 rounded-2xl overflow-hidden aspect-[4/5]">
            {images}
          </div>
        )}
      </div>
    </div>
  );
}

function CategorySection({
  title,
  subtitle,
  desc,
  soins,
  images,
  ctaLabel,
  ctaHref,
}: {
  title: string;
  subtitle: string;
  desc: string;
  soins: Soin[];
  images: React.ReactNode[];
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-col gap-2 mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            {subtitle}
          </span>
          <h2 className="font-bold text-5xl md:text-6xl lg:text-7xl">{title}</h2>
          <p className="text-muted-foreground text-lg mt-2">{desc}</p>
        </div>

        <div className="flex flex-col">
          {soins.map((soin, i) => (
            <SoinCard key={soin.id} soin={soin} images={images[i]} />
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mt-12">
          <ActionButton href={ctaHref} ariaLabel={ctaLabel}>
            {ctaLabel}
          </ActionButton>
          <ActionButton href="/offrir" ariaLabel="Offrir une parenthèse" variant="outline">
            Offrir une Parenthèse
          </ActionButton>
        </div>
      </Container>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ParenthesesPage() {
  return (
    <main>
      {/* En-tête */}
      <section className="pt-32 pb-16 bg-secondary">
        <Container>
          <div className="flex flex-col gap-4 max-w-3xl">
            <div className="flex gap-3 flex-wrap">
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-accent text-primary">
                À domicile, à Versailles et ses environs
              </span>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-accent text-primary">
                À vivre ou à offrir
              </span>
            </div>
            <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl">
              Les Parenthèses
            </h1>
            <p className="text-xl text-muted-foreground italic">
              Des accompagnements bien-être pour la femme, le bébé et les parents
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-xl">
              Des moments pour ralentir, prendre un temps pour soi, et vivre les débuts
              de la vie avec douceur et présence.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <ActionButton href="/contact" ariaLabel="Réserver un soin">
                Réserver un soin
              </ActionButton>
              <ActionButton href="/offrir" ariaLabel="Offrir une parenthèse" variant="outline">
                Offrir une parenthèse
              </ActionButton>
            </div>
          </div>
        </Container>
      </section>

      {/* Pour la femme */}
      <CategorySection
        title="Pour la femme"
        subtitle="Parenthèse au féminin"
        desc="Des soins pour accompagner les grandes étapes de la vie féminine"
        soins={soinsF}
        images={[
          <Image key="bain4" src={bain4} alt="Massage prénatal" className="w-full h-full object-cover" />,
          <Image key="bain5" src={bain5} alt="Massage postnatal" className="w-full h-full object-cover" />,
          <Image key="bain6" src={bain6} alt="Soin Rebozo" className="w-full h-full object-cover" />,
          null,
          null,
          null,
        ]}
        ctaLabel="Réserver un soin femme"
        ctaHref="/contact"
      />

      {/* Séparateur */}
      <div className="bg-secondary">
        <Container>
          <div className="h-px bg-border" />
        </Container>
      </div>

      {/* Pour le bébé */}
      <CategorySection
        title="Pour le bébé"
        subtitle="Parenthèse pour bébé"
        desc="Accueillir, apaiser et créer du lien dès les premiers instants"
        soins={soinsBebe}
        images={[
          <Image key="bain7" src={bain7} alt="Bain bébé thérapeutique" className="w-full h-full object-cover" />,
          null,
          null,
          null,
        ]}
        ctaLabel="Réserver un soin bébé"
        ctaHref="/contact"
      />

      {/* Séparateur */}
      <div className="bg-secondary">
        <Container>
          <div className="h-px bg-border" />
        </Container>
      </div>

      {/* Pour les parents */}
      <section className="py-24 bg-secondary">
        <Container>
          <div className="flex flex-col gap-2 mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Parenthèse pour les parents
            </span>
            <h2 className="font-bold text-5xl md:text-6xl lg:text-7xl">Pour les parents</h2>
            <p className="text-muted-foreground text-lg mt-2">
              Soutenir, rassurer et accompagner votre nouveau rôle
            </p>
          </div>
          <div className="flex flex-col">
            {soinsParents.map((soin) => (
              <SoinCard key={soin.id} soin={soin} />
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-12">
            <ActionButton href="/contact" ariaLabel="Réserver un accompagnement">
              Réserver un accompagnement
            </ActionButton>
            <ActionButton href="/offrir" ariaLabel="Offrir une parenthèse" variant="outline">
              Offrir une Parenthèse
            </ActionButton>
          </div>
        </Container>
      </section>

      {/* Pour les enfants */}
      <CategorySection
        title="Pour les enfants"
        subtitle="Parenthèse enfance"
        desc="Des soins pour accompagner les enfants dans leur développement émotionnel et leur bien-être"
        soins={soinsEnfants}
        images={[null, null]}
        ctaLabel="Réserver un soin"
        ctaHref="/contact"
      />

      {/* Les Formules */}
      <section className="py-24 bg-accent">
        <Container>
          <div className="flex flex-col gap-2 mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Dans la durée
            </span>
            <h2 className="font-bold text-5xl md:text-6xl">Les formules Parenthèse</h2>
            <p className="text-muted-foreground text-lg mt-2 max-w-xl">
              Un accompagnement dans la durée, pour prendre soin de chaque étape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formules.map((f, i) => (
              <div key={i} className="bg-background rounded-2xl p-8 flex flex-col gap-4 shadow-s">
                <h3 className="font-bold text-xl">{f.nom}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                <span className="text-sm font-semibold text-primary">{f.contenu}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-12">
            <ActionButton href="/contact" ariaLabel="Construire ma parenthèse">
              Construire ma Parenthèse
            </ActionButton>
            <ActionButton href="/offrir" ariaLabel="Offrir une parenthèse" variant="outline">
              Offrir une Parenthèse
            </ActionButton>
          </div>
        </Container>
      </section>
    </main>
  );
}
