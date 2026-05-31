import { Container } from "../_components/container";

export const metadata = {
  title: "Politique de confidentialité — PARENTHÈSE",
  description: "Politique de confidentialité et protection des données personnelles — Parenthèse.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="bg-background">
      <section className="pt-36 pb-24">
        <Container>
          <div className="max-w-3xl mx-auto flex flex-col gap-12">

            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-5xl md:text-6xl">
                Politique de confidentialité
              </h1>
              <p className="text-muted-foreground text-sm">
                Dernière mise à jour : mai 2026
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-xl text-primary">Responsable du traitement</h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Faustine [NOM À COMPLÉTER], micro-entreprise Parenthèse —
                parenthese78.faustine@gmail.com
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-xl text-primary">Données collectées</h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Dans le cadre de l'utilisation du formulaire de contact, les données suivantes
                peuvent être collectées :
              </p>
              <ul className="text-muted-foreground text-sm leading-relaxed flex flex-col gap-1 pl-4">
                <li>— Nom et prénom</li>
                <li>— Adresse email</li>
                <li>— Numéro de téléphone (facultatif)</li>
                <li>— Contenu du message</li>
              </ul>
              <p className="text-muted-foreground text-base leading-relaxed">
                Aucune donnée sensible (santé, bancaire, etc.) n'est collectée via ce formulaire.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-xl text-primary">Finalité du traitement</h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Les données collectées sont utilisées exclusivement pour répondre à vos demandes
                de contact ou de réservation. Elles ne sont jamais cédées, vendues ou transmises
                à des tiers à des fins commerciales.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-xl text-primary">Durée de conservation</h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Les données sont conservées pour la durée nécessaire au traitement de votre
                demande, et au maximum 3 ans après le dernier contact.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-xl text-primary">Vos droits (RGPD)</h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à
                la loi Informatique et Libertés, vous disposez des droits suivants :
              </p>
              <ul className="text-muted-foreground text-sm leading-relaxed flex flex-col gap-1 pl-4">
                <li>— Droit d'accès à vos données</li>
                <li>— Droit de rectification</li>
                <li>— Droit à l'effacement (« droit à l'oubli »)</li>
                <li>— Droit à la limitation du traitement</li>
                <li>— Droit d'opposition</li>
              </ul>
              <p className="text-muted-foreground text-base leading-relaxed">
                Pour exercer ces droits, contactez-nous à :{" "}
                <a
                  href="mailto:parenthese78.faustine@gmail.com"
                  className="text-primary hover:underline underline-offset-4">
                  parenthese78.faustine@gmail.com
                </a>
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-xl text-primary">Cookies</h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Ce site n'utilise pas de cookies de traçage ou publicitaires. Des cookies
                techniques strictement nécessaires au fonctionnement du site peuvent être
                utilisés, sans collecte de données personnelles.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-xl text-primary">Réclamation</h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser
                une réclamation à la Commission Nationale de l'Informatique et des Libertés
                (CNIL) :{" "}
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline underline-offset-4">
                  www.cnil.fr
                </a>
              </p>
            </div>

          </div>
        </Container>
      </section>
    </main>
  );
}
