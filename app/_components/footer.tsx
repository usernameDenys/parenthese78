import Link from "next/link";
import { FiInstagram, FiFacebook, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Accueil", href: "/" },
    { name: "Qui suis-je ?", href: "/about" },
    { name: "Prestations & Tarifs", href: "/services" },
    { name: "Offrir une parenthèse", href: "/offrir" },
    { name: "Prendre RDV", href: "/rdv" },
    { name: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Mentions légales", href: "/mentions-legales" },
    { name: "Politique de confidentialité", href: "/politique-confidentialite" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: <FiFacebook />,
      ariaLabel: "Visitez ma page Facebook",
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: <FiInstagram />,
      ariaLabel: "Visitez mon compte Instagram",
    },
  ];

  return (
    <footer>
      {/* Main footer */}
      <div className="bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

            {/* Brand + Contact */}
            <div className="space-y-4">
              <p className="text-xl font-bold text-primary [font-family:var(--font-dancing-script)]">PARENTHÈSE</p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Soins bien-être périnataux à domicile à Versailles et ses
                environs, pour les bébés et leurs parents.
              </p>
              <ul className="space-y-2 pt-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FiPhone className="shrink-0 text-primary" />
                  <a href="tel:+33622009039" className="hover:text-primary transition-colors duration-200">
                    06.22.00.90.39
                  </a>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FiMail className="shrink-0 text-primary" />
                  <a href="mailto:parenthese78.faustine@gmail.com" className="hover:text-primary transition-colors duration-200">
                    parenthese78.faustine@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <FiMapPin className="shrink-0 text-primary mt-0.5" />
                  <span>Versailles et ses environs (78)</span>
                </li>
              </ul>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Navigation</h3>
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

            {/* Social + Legal */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Suivez-moi
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.ariaLabel}
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-secondary transition-all duration-200 shadow-s">
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Légal</h3>
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
            </div>

          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-base text-center sm:text-left">
                © {currentYear} PARENTHÈSE. Tous droits réservés.
              </p>
              <Link
                href="https://www.denys-holenko.com/"
                className="text-muted-foreground text-sm text-center sm:text-right">
                Conçu avec passion par{" "}
                <span className="text-primary font-medium">./dh</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
