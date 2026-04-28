export interface Service {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  note?: string;
  format?: "individuel" | "collectif" | "both";
}

export interface ServiceCategory {
  id: string;
  anchor: string;
  title: string;
  subtitle: string;
  services: Service[];
}

export const categories: ServiceCategory[] = [
  {
    id: "bebe",
    anchor: "soins-bebe",
    title: "Soins bébé",
    subtitle: "0–12 mois",
    services: [
      {
        id: "bain-therapeutique",
        title: "Thérapeutique Bain Bébé®",
        description:
          "Un soin émotionnel profond inspiré de la méthode Sonia Krief. Dans l'eau chaude et contenante, bébé retrouve des sensations proches de celles vécues in utero — détente, relâchement des tensions, apaisement.",
        duration: "1h30",
        price: "130 €",
        format: "individuel",
      },
      {
        id: "bain-enveloppe",
        title: "Bain enveloppé & guidance parentale",
        description:
          "Un moment guidé où les parents sont acteurs du soin. Je vous accompagne pas à pas pour offrir à votre bébé un bain sécurisant et enveloppant, favorisant le lien et la confiance parentale.",
        duration: "1h30",
        price: "120 €",
        format: "individuel",
      },
      {
        id: "reflexologie-bebe",
        title: "Réflexologie Bébé Émotionnelle®",
        description:
          "Une approche douce pour accompagner les émotions et les petits déséquilibres du quotidien : troubles du sommeil, agitation, coliques, transitions. Adaptée dès la naissance.",
        duration: "1h",
        price: "70 €",
        format: "both",
        note: "Atelier collectif : 35 € / enfant",
      },
      {
        id: "massage-bebe",
        title: "Massage bébé",
        description:
          "Je vous transmets des gestes précis et sécuritaires pour favoriser la détente, le sommeil et le lien d'attachement. Vous devenez pleinement acteur du soin.",
        duration: "1h",
        price: "70 €",
        format: "both",
        note: "Atelier collectif : 40 € / enfant",
      },
    ],
  },
  {
    id: "femme",
    anchor: "soins-femme",
    title: "Soins bien-être femme",
    subtitle: "Grossesse & post-partum",
    services: [
      {
        id: "massage-prenatal",
        title: "Massage prénatal",
        description:
          "Un massage doux et adapté pour soulager les tensions, favoriser la détente et vous reconnecter à vos sensations durant la grossesse. Accessible à partir du 2e trimestre.",
        duration: "1h / 1h30",
        price: "110 € / 150 €",
        format: "individuel",
      },
      {
        id: "massage-postnatal",
        title: "Massage postnatal",
        description:
          "Un temps pour relâcher les tensions, se reconnecter à son corps et favoriser la récupération après l'accouchement. Adapté à votre vécu : physiologique, médicalisé ou césarienne.",
        duration: "1h / 1h30",
        price: "110 € / 150 €",
        format: "individuel",
      },
      {
        id: "rebozo",
        title: "Soin Rebozo",
        description:
          "Inspiré d'une tradition mexicaine ancestrale, ce soin associe un massage enveloppant d'1h à un resserrage du bassin avec le tissu Rebozo. Recentrage, clôture, retour à soi.",
        duration: "1h30",
        price: "170 €",
        format: "individuel",
      },
      {
        id: "rituel-rebozo",
        title: "Rituel Rebozo",
        description:
          "Une expérience complète à quatre mains avec une collègue formée à l'EDBN. Massage 4 mains, sudation, repos, resserrement du corps en 7 points. Profondément transformateur.",
        duration: "3h",
        price: "500 €",
        format: "individuel",
        note: "Réalisé en collaboration avec une praticienne EDBN",
      },
      {
        id: "reequilibrage",
        title: "Rééquilibrage émotionnel",
        description:
          "Réflexologie plantaire ciblée sur les chakras pour harmoniser le corps et les émotions. Apaisement, légèreté, recentrage — idéal en complément du massage postnatal ou du Rebozo.",
        duration: "1h10",
        price: "90 €",
        format: "individuel",
      },
    ],
  },
  {
    id: "enfant",
    anchor: "soins-enfant",
    title: "Soins enfant",
    subtitle: "4–13 ans",
    services: [
      {
        id: "massage-enfant",
        title: "Massage enfant",
        description:
          "Un espace pour relâcher les tensions physiques et émotionnelles de l'enfant. Dans le respect absolu de son consentement, de son rythme et de ses besoins du moment.",
        duration: "20 min (4–7 ans) / 30 min (8–12 ans)",
        price: "45 € / 55 €",
        format: "individuel",
        note: "Option Réflexologie Bébé Émotionnelle : +15 € (15 min)",
      },
      {
        id: "reflexologie-enfant",
        title: "Réflexologie Bébé Émotionnelle",
        description:
          "Pour soulager certaines tensions physiques ou émotionnelles et favoriser l'équilibre de l'enfant. Aide à apaiser le stress, améliorer le sommeil et soutenir la sérénité au quotidien.",
        duration: "1h",
        price: "70 €",
        format: "individuel",
      },
    ],
  },
  {
    id: "parental",
    anchor: "accompagnement-parental",
    title: "Accompagnement parental",
    subtitle: "Soutien & conseils",
    services: [
      {
        id: "accompagnement-personnalise",
        title: "Accompagnement personnalisé",
        description:
          "Un temps sur mesure pour répondre à toutes vos questions de puériculture, en anténatal ou postnatal. Conseils fiables, gestes sécuritaires, soutien concret à votre rythme.",
        duration: "1h",
        price: "75 €",
        format: "individuel",
      },
      {
        id: "sommeil",
        title: "Accompagnement sommeil",
        description:
          "Comprendre le sommeil de votre enfant, mettre en place des repères rassurants et adopter des pratiques adaptées pour favoriser des nuits sereines. Pour les 0–3 ans.",
        duration: "1h",
        price: "80 €",
        format: "individuel",
      },
      {
        id: "prevention",
        title: "Prévention & gestes de premiers secours",
        description:
          "Identifier les risques à domicile, sécuriser la maison et apprendre les gestes d'urgence adaptés aux nourrissons et jeunes enfants. Atelier pratique et interactif.",
        duration: "2h",
        price: "40 € / pers. — 75 € / couple",
        format: "both",
        note: "Disponible en individuel, collectif ou en entreprise",
      },
    ],
  },
  {
    id: "ateliers",
    anchor: "ateliers",
    title: "Ateliers collectifs",
    subtitle: "Particuliers & entreprises",
    services: [
      {
        id: "atelier-massage-bebe",
        title: "Massage bébé en groupe",
        description:
          "Découverte des gestes pour détendre et apaiser bébé. Apprentissage progressif avec démonstration et pratique guidée.",
        duration: "1h",
        price: "40 € / enfant",
        format: "collectif",
      },
      {
        id: "atelier-rbe",
        title: "Réflexologie Bébé Émotionnelle",
        description:
          "Atelier thématique : les parents apprennent et pratiquent eux-mêmes les points de stimulation sous guidance. Un outil précieux pour accompagner votre enfant en autonomie.",
        duration: "1h",
        price: "35 € / enfant",
        format: "collectif",
      },
      {
        id: "atelier-prevention",
        title: "Prévention & premiers secours",
        description:
          "Atelier pratique et interactif pour prévenir les accidents domestiques et apprendre les gestes qui sauvent. Matériel fourni, exercices pratiques inclus.",
        duration: "2h",
        price: "40 € / pers. — 75 € / couple",
        format: "collectif",
      },
    ],
  },
];

export interface Formula {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  includes: string[];
  price: number;
  originalPrice: number;
  variant?: string;
}

export const formulas: Formula[] = [
  {
    id: "premiers-jours",
    emoji: "🌸",
    title: "Premiers jours",
    subtitle: "Accueillir bébé avec douceur",
    includes: ["Thérapeutique Bain Bébé® — 1h30", "Massage bébé individuel — 1h"],
    price: 185,
    originalPrice: 200,
  },
  {
    id: "serenite",
    emoji: "🌿",
    title: "Sérénité jeune parent",
    subtitle: "Un accompagnement global",
    includes: [
      "Thérapeutique Bain Bébé® — 1h30",
      "Massage bébé individuel — 1h",
      "Accompagnement sommeil — 1h",
    ],
    price: 255,
    originalPrice: 280,
  },
  {
    id: "maman-grossesse",
    emoji: "🌼",
    title: "Maman soutenue",
    subtitle: "Version grossesse",
    includes: ["Massage prénatal — 1h", "Soin Rebozo — 1h30"],
    price: 260,
    originalPrice: 280,
    variant: "grossesse",
  },
  {
    id: "maman-postpartum",
    emoji: "🌼",
    title: "Maman soutenue",
    subtitle: "Version post-partum",
    includes: ["Massage postnatal — 1h30", "Rééquilibrage émotionnel — 1h10"],
    price: 220,
    originalPrice: 240,
    variant: "post-partum",
  },
];
