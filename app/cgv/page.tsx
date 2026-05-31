import { Container } from "../_components/container";

export const metadata = {
  title: "Conditions Générales de Vente — PARENTHÈSE",
  description: "Conditions Générales de Vente des soins et accompagnements proposés par Parenthèse.",
};

export default function CGVPage() {
  return (
    <main className="bg-background">
      <section className="pt-36 pb-24">
        <Container>
          <div className="max-w-3xl mx-auto flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-5xl md:text-6xl">
                Conditions Générales de Vente
              </h1>
              <p className="text-muted-foreground text-sm">
                Dernière mise à jour : mai 2026
              </p>
            </div>

            <Section title="Préambule">
              <p>Les présentes Conditions Générales de Vente définissent les modalités de réservation, de paiement et de réalisation des accompagnements et soins proposés par Parenthèse.</p>
              <p>Toute réservation implique l'acceptation pleine et entière des présentes CGV.</p>
            </Section>

            <Section title="Prestataire">
              <p>Les prestations sont proposées par :</p>
              <ul>
                <li><strong>Faustine PICHON – Parenthèse</strong></li>
                <li>Micro-entreprise immatriculée sous le SIRET : 93471335500022</li>
              </ul>
            </Section>

            <Section title="Prestations proposées">
              <p>Parenthèse propose des accompagnements et soins de bien-être à domicile autour de la femme, du bébé, de l'enfant et de la parentalité.</p>
              <p>Les prestations proposées sur le site sont présentées à titre informatif. Les photographies et descriptions ne sont pas contractuelles.</p>
              <p>Les accompagnements proposés s'inscrivent dans une démarche de bien-être et ne remplacent en aucun cas un suivi médical, paramédical ou psychologique.</p>
            </Section>

            <Section title="Réservation">
              <p>Les réservations peuvent être effectuées :</p>
              <ul>
                <li>Via le formulaire de contact du site</li>
                <li>Par téléphone</li>
                <li>Par e-mail</li>
                <li>Ou via toute plateforme de réservation mise en place par Parenthèse</li>
              </ul>
              <p>La réservation est considérée comme validée après confirmation par Parenthèse.</p>
            </Section>

            <Section title="Tarifs">
              <p>Les tarifs des prestations sont indiqués en euros (€).</p>
              <p>Parenthèse se réserve le droit de modifier ses tarifs à tout moment. Le tarif appliqué est celui en vigueur au moment de la réservation.</p>
              <p>Les frais éventuels de déplacement hors zone d'intervention pourront faire l'objet d'une facturation complémentaire, précisée avant validation du rendez-vous.</p>
            </Section>

            <Section title="Modalités de paiement">
              <p>Le règlement peut être effectué :</p>
              <ul>
                <li>En espèces</li>
                <li>Par virement bancaire</li>
                <li>Via Wero</li>
              </ul>
              <p>Le paiement est dû le jour de la prestation, sauf accord particulier.</p>
            </Section>

            <Section title="Annulation et report">
              <SubSection title="Confirmation">
                <p>Afin de valider la réservation, un acompte de 30 € pourra être demandé au plus tard 48 heures avant le rendez-vous. La réservation est considérée comme confirmée à réception de cet acompte.</p>
              </SubSection>
              <SubSection title="Annulation ou report par le client">
                <p>Toute annulation ou demande de report doit être effectuée au minimum 48 heures avant le rendez-vous.</p>
                <p>En cas d'annulation tardive ou d'absence au rendez-vous sans motif justifié, l'acompte versé restera acquis à Parenthèse.</p>
              </SubSection>
              <SubSection title="Situations exceptionnelles">
                <p>En cas de situation exceptionnelle (maladie, urgence, accouchement, hospitalisation ou imprévu majeur), une solution de report pourra être proposée.</p>
              </SubSection>
              <SubSection title="Report par le prestataire">
                <p>Parenthèse se réserve également le droit de reporter une prestation en cas de force majeure ou d'empêchement exceptionnel.</p>
              </SubSection>
              <SubSection title="Retard">
                <p>En cas de retard important du client, la durée de la prestation pourra être adaptée afin de respecter les rendez-vous suivants.</p>
              </SubSection>
            </Section>

            <Section title="Déroulement des prestations">
              <p>Les prestations sont réalisées à domicile, dans un environnement permettant le bon déroulement du soin ou de l'accompagnement.</p>
              <p>Le client s'engage à fournir des informations sincères concernant sa situation ou celle de son enfant afin d'assurer un accompagnement adapté.</p>
              <p>Pour les soins concernant les enfants mineurs, la présence d'un parent ou représentant légal est obligatoire durant toute la séance.</p>
            </Section>

            <Section title="Cartes cadeaux">
              <p>Les cartes cadeaux sont nominatives et ne peuvent être cédées à une autre personne sans accord préalable de Parenthèse.</p>
              <p>Elles sont valables <strong>6 mois</strong> à compter de leur date d'achat.</p>
              <p>Les cartes cadeaux ne sont ni échangeables, ni remboursables.</p>
              <p>Toute réservation effectuée avec une carte cadeau reste soumise aux conditions d'annulation prévues dans les présentes CGV.</p>
            </Section>

            <Section title="Responsabilité">
              <p>Parenthèse met en œuvre tous les moyens nécessaires pour proposer un accompagnement bienveillant et adapté.</p>
              <p>Les prestations proposées ne constituent pas des actes médicaux ou thérapeutiques au sens médical du terme.</p>
              <p>En cas de doute concernant votre santé ou celle de votre enfant, il est recommandé de consulter un professionnel de santé.</p>
            </Section>

            <Section title="Données personnelles">
              <p>Les données personnelles collectées dans le cadre des réservations et échanges sont traitées conformément à la Politique de confidentialité disponible sur le site.</p>
            </Section>

            <Section title="Propriété intellectuelle">
              <p>Tous les contenus présents sur le site Parenthèse (textes, images, logo, identité visuelle) sont protégés par le droit de la propriété intellectuelle.</p>
              <p>Toute reproduction ou utilisation sans autorisation préalable est interdite.</p>
            </Section>

            <Section title="Droit applicable">
              <p>Les présentes Conditions Générales de Vente sont soumises au droit français.</p>
              <p>En cas de litige, une solution amiable sera privilégiée avant toute action judiciaire. À défaut d'accord amiable, les tribunaux compétents seront ceux du ressort du siège social de Parenthèse.</p>
            </Section>

          </div>
        </Container>
      </section>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-xl" style={{ color: "var(--primary)" }}>{title}</h2>
      <div className="flex flex-col gap-3 text-muted-foreground text-sm leading-relaxed [&_strong]:text-foreground [&_strong]:font-medium [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1 [&_ul]:pl-5 [&_ul]:list-disc">
        {children}
      </div>
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-semibold text-base" style={{ color: "var(--foreground)" }}>{title}</h3>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}
