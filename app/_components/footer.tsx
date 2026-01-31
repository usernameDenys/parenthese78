import Link from "next/link";
import { FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Accueil", href: "/" },
    { name: "Qui suis-je?", href: "/about" },
    { name: "Prestations", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Prendre RDV", href: "/rdv" },
    { name: "Mentions légales", href: "/mentions-legales" },
    {
      name: "Politique de confidentialité",
      href: "/politique-confidentialite",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: <FiLinkedin />,
      ariaLabel: "Visitez mon page LinkedIn",
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: <FiFacebook />,
      ariaLabel: "Visitez mon page Facebook",
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: <FiInstagram />,
      ariaLabel: "Visitez mon page Instagram",
    },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Parenthese</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Votre partenaire de confiance pour un accompagnement personnalisé.
            </p>
          </div>

          {/* Navigation section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Informations
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social media section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Suivez-moi sur les réseaux sociaux
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-sm hover:shadow-m">
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center sm:text-left">
              © {currentYear} Parenthese. Tous droits réservés.
            </p>

            <Link
              href={"https://www.denys-holenko.com/"}
              className="text-muted-foreground text-sm text-center sm:text-right cursor-pointer">
              Conçu avec passion par{" "}
              <span className="text-primary font-medium">./dh</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
