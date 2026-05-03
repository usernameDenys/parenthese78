export interface NavItems {
  label: string;
  href: string;
  ariaLabel: string;
}

export const navItems: NavItems[] = [
  {
    label: "Accueil",
    href: "/",
    ariaLabel: "Retour à l'accueil",
  },
  {
    label: "Les Parenthèses",
    href: "parentheses",
    ariaLabel: "Découvrir tous les soins et accompagnements",
  },
  {
    label: "Offrir une parenthèse",
    href: "offrir",
    ariaLabel: "Offrir une parenthèse en cadeau",
  },
  {
    label: "À propos",
    href: "about",
    ariaLabel: "À propos de Faustine",
  },
  {
    label: "Contact",
    href: "contact",
    ariaLabel: "Contacter Faustine",
  },
];
