import { Container } from "../_components/container";

export const metadata = {
  title: "Mentions légales — PARENTHÈSE",
  description: "Mentions légales du site Parenthèse.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="bg-background">
      <section className="pt-36 pb-24">
        <Container>
          <div className="max-w-3xl mx-auto flex flex-col gap-12">

            <h1 className="font-bold text-5xl md:text-6xl">Mentions légales</h1>

            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-xl text-primary">Éditeur du site</h2>
              <div className="text-muted-foreground text-sm leading-relaxed flex flex-col gap-1">
                <p><span className="font-medium text-foreground">Nom :</span> Faustine [NOM À COMPLÉTER]</p>
                <p><span className="font-medium text-foreground">Activité :</span> Accompagnante périnatale — soins bien-être à domicile</p>
                <p><span className="font-medium text-foreground">Statut :</span> Micro-entreprise</p>
                <p><span className="font-medium text-foreground">SIRET :</span> [SIRET À COMPLÉTER]</p>
                <p><span className="font-medium text-foreground">Téléphone :</span> 06.22.00.90.39</p>
                <p><span className="font-medium text-foreground">Email :</span> parenthese78.faustine@gmail.com</p>
                <p><span className="font-medium text-foreground">Zone d'intervention :</span> Versailles et ses environs (78)</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-xl text-primary">Hébergement</h2>
              <div className="text-muted-foreground text-sm leading-relaxed flex flex-col gap-1">
                <p><span className="font-medium text-foreground">Hébergeur :</span> Vercel Inc.</p>
                <p><span className="font-medium text-foreground">Adresse :</span> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
                <p><span className="font-medium text-foreground">Site :</span> vercel.com</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-xl text-primary">Propriété intellectuelle</h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                L'ensemble du contenu de ce site (textes, images, logo, structure) est la propriété
                exclusive de Parenthèse, sauf mention contraire. Toute reproduction, distribution
                ou utilisation sans autorisation préalable est strictement interdite.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-xl text-primary">Responsabilité</h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Les informations présentées sur ce site sont données à titre indicatif et ne
                constituent pas un avis médical. Parenthèse ne saurait être tenu responsable
                des dommages directs ou indirects résultant de l'utilisation de ce site.
                Les soins proposés ne remplacent pas un suivi médical.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-xl text-primary">Création du site</h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Site conçu et développé par{" "}
                <a
                  href="https://www.denys-holenko.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline underline-offset-4">
                  Denys Holenko
                </a>.
              </p>
            </div>

          </div>
        </Container>
      </section>
    </main>
  );
}
