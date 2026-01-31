export interface NavItems {
  label: string;
  href: string;
  ariaLabel: string;
}

export const navItems: NavItems[] = [
  {
    label: "Prestations & Tarifs",
    href: "services",
    ariaLabel: "Voir tous les services disponibles",
  },
  {
    label: "À propos",
    href: "about",
    ariaLabel: "À propos de mon entreprise",
  },
  {
    label: "Contact",
    href: "contact",
    ariaLabel: "Contacter moi",
  },
];
