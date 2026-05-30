import { Container } from "@/app/_components/container";
import ActionButton from "@/app/_components/action-button";
import SoinsAccordion, { type Soin } from "./_components/soins-accordion";
import CatNav from "./_components/cat-nav";
import { BOOKING_URL, calUrl } from "@/app/lib/booking";

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
    reservationUrl: calUrl("maternite"),
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
    reservationUrl: calUrl("postnatale"),
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
    reservationUrl: calUrl("soin-rebozo"),
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
    reservationUrl: calUrl("equilibre-feminin"),
  },
  {
    id: "reflexologie",
    nom: "Réflexologie émotionnelle",
    sous: "Pieds & centres énergétiques",
    accroche: "Un soin pour apaiser les émotions, relâcher les tensions et retrouver un mieux-être, en douceur.",
    description:
      "La réflexologie émotionnelle s'appuie sur la stimulation de zones réflexes au niveau des pieds, en lien avec les centres énergétiques du corps. Par des pressions douces, accompagnées de pierres, elle permet d'accompagner les émotions et d'apaiser le corps, pour retrouver plus de calme et de légèreté.",
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
    reservationUrl: calUrl("reflexologie"),
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
    reservationUrl: calUrl("rituel-rebozo"),
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
    reservationUrl: calUrl("parenthese-naissance"),
  },
  {
    id: "lien",
    nom: "Parenthèse Lien",
    sous: "Bain enveloppé",
    accroche: "Un moment de douceur et de lien avec votre bébé, pour apprendre à le baigner avec confiance et sérénité.",
    description:
      "Le bain enveloppé est un accompagnement du bain du nouveau-né, pensé pour offrir un moment rassurant et apaisant. Grâce à l'enveloppement dans un lange et à des gestes délicats, il permet de retrouver des sensations connues et sécurisantes. Vous êtes pleinement acteurs du soin : je vous guide pas à pas afin que vous puissiez prendre confiance dans les gestes et vivre pleinement ce temps partagé.",
    bienfaits: [
      "Apaiser et rassurer votre bébé",
      "Favoriser la sérénité du bain",
      "Soutenir le lien parent-bébé",
      "Accompagner les premiers gestes parentaux",
      "Partager un temps de douceur en famille",
    ],
    pourQui:
      "Pour les nouveau-nés et leurs parents, idéalement dans les premières semaines de vie.",
    duree: "Environ 1h à 1h30",
    tarif: "120 €",
    reservationUrl: calUrl("parenthese-lien"),
  },
  {
    id: "massage-bebe",
    nom: "Massage bébé",
    sous: "Toucher et présence",
    accroche: "Une parenthèse de douceur et de partage pour apprendre à masser votre bébé en confiance. Un langage d'amour par le toucher.",
    description:
      "Le massage bébé est un moment privilégié de connexion, où le toucher devient un véritable moyen de communication. À travers des gestes simples, respectueux et adaptés à l'âge de votre enfant, vous apprenez à reconnaître ses besoins, à lire ses signaux et à renforcer votre lien. Pendant la séance, vous massez vous-même votre bébé, à son rythme — je vous guide pas à pas et réalise les gestes en parallèle sur un poupon.",
    bienfaits: [
      "Favoriser la détente et l'apaisement",
      "Soulager certaines tensions digestives",
      "Soutenir le développement sensoriel et émotionnel",
      "Accompagner certains moments du quotidien (pleurs, agitation, endormissement…)",
      "Renforcer le lien parent-enfant",
    ],
    pourQui:
      "Pour les bébés et jeunes enfants de 0 à 3 ans, accompagnés d'un ou de leurs parents.",
    duree: "Environ 1h",
    tarif: "70 €",
    reservationUrl: calUrl("massage-bebe"),
  },
  {
    id: "reflexologie-bebe",
    nom: "Réflexologie Bébé Émotionnelle®",
    sous: "Douceur réflexe — 0 à 13 ans",
    accroche: "Accompagner les émotions de votre enfant par le toucher réflexe, en douceur et en présence.",
    description:
      "La Réflexologie Bébé Émotionnelle est une approche douce inspirée de la réflexologie plantaire, adaptée aux bébés et aux jeunes enfants de 0 à 13 ans. Par de légères stimulations sur certaines zones réflexes des pieds, elle permet d'accompagner les émotions et certaines tensions du quotidien — sommeil, séparation, agitation, poussées dentaires, changement de vie… Je propose deux formes : l'atelier parent-enfant (vous pratiquez les gestes guidés), ou la séance individuelle (je réalise directement le soin).",
    bienfaits: [
      "Favoriser l'apaisement émotionnel",
      "Soutenir le sommeil et la détente",
      "Accompagner certaines étapes de transition (crèche, école, déménagement…)",
      "Soulager certains inconforts du quotidien",
      "Offrir un temps d'écoute et de réassurance",
    ],
    pourQui:
      "Pour les bébés et les enfants jusqu'à 13 ans, accompagnés d'un de leurs parents.",
    duree: "1h",
    tarif: "70 €",
    reservationUrl: calUrl("reflexologie-bebe"),
  },
];

const soinsParents = [
  {
    id: "parentalite",
    nom: "Soutien à la parentalité",
    sous: "Accompagnement Post-Partum",
    accroche: "Un espace bienveillant pour déposer vos questionnements, être écouté sans jugement et trouver des ressources adaptées à votre réalité de parents.",
    description:
      "Chaque famille est unique, chaque bébé est différent. L'arrivée d'un enfant bouleverse le quotidien, les repères et l'équilibre familial. Entre fatigue, émotions, questions et charge mentale, il est parfois précieux de pouvoir être accompagné. Allaitement, organisation du quotidien, pleurs, sommeil, émotions du post-partum, place du couple, confiance parentale… chaque séance s'adapte à vos besoins du moment, que ce soit en anténatal ou en postnatal.",
    bienfaits: [
      "Se sentir écouté et soutenu dans son vécu de parent",
      "Trouver des repères et des ressources adaptées",
      "Prendre confiance dans son rôle parental",
      "Mieux comprendre les besoins de son enfant",
      "Traverser le post-partum avec davantage de sérénité",
    ],
    pourQui:
      "Pour les futurs parents et les jeunes parents, dès la grossesse et durant les premières années de l'enfant.",
    duree: "1h",
    tarif: "75 €",
    reservationUrl: calUrl("soutien-parentalite"),
  },
  {
    id: "sommeil",
    nom: "Sommeil de l'enfant",
    sous: "De 0 à 3 ans",
    accroche: "Un accompagnement pour mieux comprendre le sommeil de votre enfant et retrouver plus de sérénité au quotidien.",
    description:
      "Le sommeil des tout-petits est souvent source de questionnements et de stress pour les parents. Cet accompagnement vous propose un temps dédié pour mieux comprendre ce qui se joue autour du sommeil de votre enfant et trouver des ajustements adaptés à votre famille, dans le respect de son développement. Ensemble, nous échangeons autour de votre quotidien afin de trouver des repères adaptés à votre enfant et à votre parentalité.",
    bienfaits: [
      "Mieux comprendre le sommeil de son enfant",
      "Retrouver des repères adaptés à son rythme",
      "Apaiser les tensions autour du coucher et des nuits",
      "Prendre confiance dans ses choix parentaux",
      "Retrouver davantage de sérénité au quotidien",
    ],
    pourQui:
      "Pour les parents d'enfants de 0 à 3 ans qui souhaitent être accompagnés autour du sommeil.",
    duree: "1h",
    tarif: "80 €",
    reservationUrl: calUrl("sommeil-enfant"),
  },
];

const soinsEnfants = [
  {
    id: "massage-enfant",
    nom: "Massage enfant",
    sous: "De 4 à 13 ans",
    accroche: "Un temps de détente et de reconnexion pour accompagner votre enfant dans son bien-être corporel et émotionnel.",
    description:
      "À cet âge, l'enfant grandit, découvre, apprend, s'adapte… Le massage lui permet de ralentir, de relâcher les tensions physiques et émotionnelles accumulées dans son quotidien, et de retrouver une sensation de sécurité dans son corps. Ce soin peut accompagner différentes périodes : fatigue, agitation, stress, changement (école, séparation, émotions fortes). Le massage est réalisé dans le respect total du consentement et de la disponibilité de l'enfant. Option possible : ajout de 15 min de Réflexologie Bébé Émotionnelle (+15 €).",
    bienfaits: [
      "Favoriser la détente et l'apaisement",
      "Aider à relâcher les tensions corporelles",
      "Soutenir l'équilibre émotionnel",
      "Améliorer la conscience corporelle",
      "Renforcer le sentiment de sécurité intérieure",
    ],
    pourQui: "Pour les enfants de 4 à 13 ans, accompagnés d'un parent.",
    duree: "20 min (4–7 ans) · 30 min (8–12 ans)",
    tarif: "45 € (4–7 ans) · 55 € (8–12 ans)",
    reservationUrl: calUrl("massage-enfant"),
  },
];

const formules = [
  {
    nom: "Parenthèse Maternité",
    desc: "Accompagner la grossesse avec plusieurs temps de soin, pour soulager le corps, se détendre et créer un lien avec son bébé au fil des mois.",
    contenu: "2 à 3 séances au choix",
  },
  {
    nom: "Parenthèse Naissance",
    desc: "Offrir à bébé et à ses parents plusieurs moments de douceur pour accompagner les premiers jours de vie.",
    contenu: "Bain, massage, accompagnement",
  },
  {
    nom: "Parenthèse Post-partum",
    desc: "Soutenir la récupération, les émotions et l'adaptation à la vie avec bébé.",
    contenu: "Soins + accompagnement",
  },
  {
    nom: "Parenthèse Enfance",
    desc: "Accompagner l'enfant dans son bien-être et ses émotions sur plusieurs séances.",
    contenu: "Tarif sur demande",
  },
];

// ─── Components ──────────────────────────────────────────────────────────────

function CategorySection({
  id,
  title,
  subtitle,
  desc,
  soins,
  ctaLabel,
  ctaHref,
  bg,
}: {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  soins: Soin[];
  ctaLabel: string;
  ctaHref: string;
  bg?: string;
}) {
  return (
    <section id={"cat-" + id} className="py-24 scroll-mt-36" style={bg ? { background: bg } : undefined}>
      <Container>
        <div className="section-head">
          <span className="eyebrow">{subtitle}</span>
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>

        <SoinsAccordion soins={soins} />

        <div className="flex flex-wrap gap-4 mt-12">
          <ActionButton href={ctaHref} ariaLabel={ctaLabel} external>
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
      <section className="pt-40 pb-16 bg-secondary text-center">
        <Container>
          <div className="flex flex-col items-center gap-4 max-w-2xl mx-auto">
            <span className="eyebrow">Soins & accompagnements</span>
            <h1>Les Parenthèses</h1>
            <p className="text-xl italic">
              Des accompagnements bien-être pour la femme, le bébé et les parents
            </p>
            <p className="leading-relaxed max-w-lg">
              Des moments pour ralentir, prendre un temps pour soi, et vivre les débuts
              de la vie avec douceur et présence.
            </p>
            <p className="italic text-sm" style={{ color: "var(--sage-deep)" }}>
              À domicile, à Versailles et ses environs · À vivre ou à offrir
            </p>
            <div className="flex flex-wrap gap-3 mt-2 justify-center">
              <ActionButton href={BOOKING_URL} ariaLabel="Réserver un soin" external>
                Réserver un soin
              </ActionButton>
              <ActionButton href="/offrir" ariaLabel="Offrir une parenthèse" variant="outline">
                Offrir une parenthèse
              </ActionButton>
            </div>
          </div>
        </Container>
      </section>

      <CatNav />

      {/* Pour la femme */}
      <CategorySection
        id="femme"
        title="Pour la femme"
        subtitle="Parenthèse au féminin"
        desc="Des soins pour accompagner les grandes étapes de la vie féminine"
        soins={soinsF}
        ctaLabel="Réserver un soin femme"
        ctaHref={BOOKING_URL}
      />

      {/* Pour le bébé */}
      <CategorySection
        id="bebe"
        title="Pour le bébé"
        subtitle="Parenthèse pour bébé"
        desc="Accueillir, apaiser et créer du lien dès les premiers instants"
        soins={soinsBebe}
        ctaLabel="Réserver un soin bébé"
        ctaHref={BOOKING_URL}
        bg="var(--secondary)"
      />

      {/* Pour les parents */}
      <CategorySection
        id="parents"
        title="Pour les parents"
        subtitle="Parenthèse pour les parents"
        desc="Soutenir, rassurer et accompagner votre nouveau rôle"
        soins={soinsParents}
        ctaLabel="Réserver un accompagnement"
        ctaHref={BOOKING_URL}
      />

      {/* Pour les enfants */}
      <CategorySection
        id="enfants"
        title="Pour les enfants"
        subtitle="Parenthèse enfance"
        desc="Des soins pour accompagner les enfants dans leur développement émotionnel et leur bien-être"
        soins={soinsEnfants}
        ctaLabel="Réserver un soin"
        ctaHref={BOOKING_URL}
        bg="var(--secondary)"
      />

      {/* Guide CTA */}
      <section className="py-20" style={{ background: "var(--secondary)" }}>
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto text-center md:text-left">
            <div className="flex flex-col gap-3">
              <span className="eyebrow">Vous hésitez ?</span>
              <h2 className="text-3xl md:text-4xl">Vous ne savez pas quel soin choisir ?</h2>
              <p className="leading-relaxed max-w-lg" style={{ color: "var(--muted-foreground)" }}>
                Notre guide vous oriente en quelques questions vers la Parenthèse
                la plus adaptée à votre besoin.
              </p>
            </div>
            <div className="shrink-0">
              <ActionButton href="/quel-accompagnement" ariaLabel="Consulter le guide d'accompagnement">
                Consulter le guide
              </ActionButton>
            </div>
          </div>
        </Container>
      </section>

      {/* Les Formules */}
      <section className="py-24 bg-accent">
        <Container>
          <div className="section-head">
            <span className="eyebrow">Dans la durée</span>
            <h2>Les formules Parenthèse</h2>
            <p>Un accompagnement dans la durée, pour prendre soin de chaque étape.</p>
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
            <ActionButton href="/formules" ariaLabel="Construire ma parenthèse">
              Construire ma Parenthèse
            </ActionButton>
          </div>
        </Container>
      </section>
    </main>
  );
}
