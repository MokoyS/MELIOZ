import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function ConditionsGenerales() {
  return (
    <div className="min-h-screen bg-melioz-offwhite text-melioz-navy">
      <SEO
        title="MELIOZ - Conditions Générales"
        description="Conditions générales d'utilisation et de vente de l'agence MELIOZ. Modalités de paiement, transfert de propriété et règles d'utilisation du site agencemelioz.com."
        canonical="/conditions-generales"
      />
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <span className="inline-block px-4 py-2 bg-melioz-mint border border-melioz-navy/10 rounded-lg text-melioz-navy font-body text-[11px] uppercase tracking-widest mb-4">
              Informations légales
            </span>
            <h1 className="text-4xl sm:text-5xl text-melioz-navy font-display font-extrabold mb-6">
              Conditions Générales
            </h1>
            <p className="text-lg text-melioz-navy/70 font-body font-sans">
              Conditions Générales d'Utilisation (CGU) et Conditions Générales de Vente (CGV)
            </p>
          </div>

          <div className="space-y-12 text-melioz-navy/70 font-body leading-relaxed font-sans">
            {/* PARTIE 1 : CGU */}
            <section className="bg-white/50 border border-secondary/10 rounded-[24px] p-8 sm:p-10">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-melioz-navy mb-4 font-display">
                  PARTIE 1 : Conditions Générales d'Utilisation (CGU)
                </h2>
                <p className="text-melioz-navy/70">
                  Les présentes Conditions Générales d'Utilisation régissent l'accès et l'utilisation du site <strong className="text-melioz-navy">agencemelioz.com</strong>.
                </p>
              </div>

              {/* Article 1 : Objet */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-melioz-navy mb-4 font-display">
                  Article 1 - Objet
                </h3>
                <p className="mb-4">
                  Les présentes Conditions Générales d'Utilisation (ci-après "CGU") ont pour objet de définir les conditions d'accès et d'utilisation du site internet <strong className="text-melioz-navy">agencemelioz.com</strong> (ci-après le "Site") édité par l'Agence MELIOZ.
                </p>
                <p>
                  L'accès et l'utilisation du Site impliquent l'acceptation pleine et entière des présentes CGU. Si vous n'acceptez pas ces conditions, nous vous invitons à ne pas utiliser le Site.
                </p>
              </div>

              {/* Article 2 : Propriété Intellectuelle */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-melioz-navy mb-4 font-display">
                  Article 2 - Propriété Intellectuelle
                </h3>
                <p className="mb-4">
                  L'ensemble du contenu du Site, incluant mais sans s'y limiter : les textes, images, vidéos, logos, icônes, graphismes, designs, codes sources, bases de données, marques, et tout autre élément (ci-après le "Contenu"), est la <strong className="text-melioz-navy">propriété exclusive de l'Agence MELIOZ</strong> ou de ses partenaires.
                </p>
                <p className="mb-4">
                  Le Contenu est protégé par les lois françaises et internationales relatives à la propriété intellectuelle, notamment le Code de la Propriété Intellectuelle.
                </p>
                <p>
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du Site, quel que soit le moyen ou le procédé utilisé, est <strong className="text-melioz-navy">strictement interdite</strong> sans l'autorisation écrite préalable de l'Agence MELIOZ.
                </p>
              </div>

              {/* Article 3 : Responsabilité */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-melioz-navy mb-4 font-display">
                  Article 3 - Responsabilité et Disponibilité du Service
                </h3>
                <p className="mb-4">
                  L'Agence MELIOZ s'efforce d'assurer une disponibilité continue du Site. Toutefois, <strong className="text-melioz-navy">l'Agence MELIOZ ne peut être tenue responsable</strong> des interruptions de service, de la perte de données, ou de tout dysfonctionnement résultant :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>D'une interruption ou d'une indisponibilité du service liée à l'hébergeur (Vercel Inc.)</li>
                  <li>D'une panne ou d'une défaillance du réseau internet</li>
                  <li>D'actes de tiers malveillants (piratage, virus, etc.)</li>
                  <li>De cas de force majeure</li>
                </ul>
                <p>
                  L'Agence MELIOZ se réserve le droit d'interrompre temporairement l'accès au Site pour des raisons de maintenance, de mise à jour ou pour toute autre raison technique, sans préavis ni indemnité.
                </p>
              </div>

              {/* Article 4 : Utilisation du Site */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-melioz-navy mb-4 font-display">
                  Article 4 - Utilisation du Site
                </h3>
                <p className="mb-4">
                  L'utilisateur s'engage à utiliser le Site conformément à sa destination et de manière licite. Il est notamment interdit :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>D'utiliser le Site à des fins illégales ou frauduleuses</li>
                  <li>De porter atteinte aux droits de propriété intellectuelle de l'Agence MELIOZ</li>
                  <li>De perturber le fonctionnement du Site ou des serveurs</li>
                  <li>De tenter d'accéder de manière non autorisée à tout élément du Site</li>
                </ul>
              </div>

              {/* Article 5 : Droit applicable */}
              <div>
                <h3 className="text-xl font-semibold text-melioz-navy mb-4 font-display">
                  Article 5 - Droit applicable et Juridiction
                </h3>
                <p>
                  Les présentes CGU sont régies par le droit français. En cas de litige, et à défaut d'accord amiable, le litige sera porté devant les tribunaux compétents de Paris, conformément aux règles de compétence en vigueur.
                </p>
              </div>
            </section>

            {/* PARTIE 2 : CGV */}
            <section className="bg-white/50 border border-secondary/10 rounded-[24px] p-8 sm:p-10">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-melioz-navy mb-4 font-display">
                  PARTIE 2 : Conditions Générales de Vente (CGV)
                </h2>
                <p className="text-melioz-navy/70">
                  Les présentes Conditions Générales de Vente régissent les prestations de services proposées par l'Agence MELIOZ.
                </p>
              </div>

              {/* Article 1 : Objet */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-melioz-navy mb-4 font-display">
                  Article 1 - Objet et Champ d'Application
                </h3>
                <p className="mb-4">
                  Les présentes Conditions Générales de Vente (ci-après "CGV") s'appliquent à toutes les prestations de services proposées par l'Agence MELIOZ, notamment :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Développement web et applications</li>
                  <li>Design UI/UX</li>
                  <li>Stratégie digitale et conseil</li>
                  <li>Toute autre prestation convenue entre les parties</li>
                </ul>
              </div>

              {/* Article 2 : Tarifs */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-melioz-navy mb-4 font-display">
                  Article 2 - Tarifs et Devis
                </h3>
                <p className="mb-4">
                  Les tarifs des prestations sont exprimés en <strong className="text-melioz-navy">Euros Hors Taxes (HT)</strong>. La TVA est ajoutée conformément à la législation en vigueur.
                </p>
                <p className="mb-4">
                  Tout devis établi par l'Agence MELIOZ est valable pour une durée de <strong className="text-melioz-navy">30 jours calendaires</strong> à compter de sa date d'émission. Passé ce délai, le devis devient caduc et doit être renouvelé.
                </p>
                <p>
                  Les tarifs peuvent être modifiés à tout moment sans préavis, mais restent fermes pour toute commande acceptée par l'Agence MELIOZ.
                </p>
              </div>

              {/* Article 3 : Paiements */}
              <div className="mb-8 bg-accent/5 border border-accent/20 rounded-[24px] p-6">
                <h3 className="text-xl font-semibold text-melioz-navy mb-4 font-display">
                  Article 3 - Modalités de Paiement
                </h3>
                <p className="mb-4">
                  Les paiements s'effectuent via la plateforme <strong className="text-melioz-navy">Shine</strong> selon les modalités suivantes :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li><strong className="text-melioz-navy">Acompte de 30%</strong> à la commande, payable à la signature du devis ou du bon de commande</li>
                  <li><strong className="text-melioz-navy">Solde de 70%</strong> à la livraison et réception de la prestation</li>
                </ul>
                <p className="mb-4">
                  <strong className="text-melioz-navy">Pénalités de retard :</strong> Conformément à la législation française (Loi n° 2012-387 du 22 mars 2012), tout retard de paiement entraîne de plein droit, sans mise en demeure préalable :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>L'application d'intérêts de retard au taux légal en vigueur</li>
                  <li>Une indemnité forfaitaire pour frais de recouvrement d'un montant de 40 euros</li>
                  <li>Le cas échéant, des dommages et intérêts complémentaires en cas de frais de recouvrement supérieurs</li>
                </ul>
              </div>

              {/* Article 4 : Transfert de Propriété */}
              <div className="mb-8 bg-primary/10 border border-primary/30 rounded-[24px] p-6">
                <h3 className="text-xl font-semibold text-melioz-navy mb-4 font-display">
                  Article 4 - Transfert de Propriété et Droits d'Exploitation
                </h3>
                <p className="mb-4 text-lg">
                  <strong className="text-melioz-navy text-xl">⚠️ CLAUSE IMPORTANTE :</strong>
                </p>
                <p className="mb-4">
                  Le client ne devient <strong className="text-melioz-navy">propriétaire du site, du code source, des designs, et de tout élément livré</strong> qu'<strong className="text-melioz-navy">après le règlement intégral et effectif de la facture finale</strong>, incluant le solde et tous les éventuels frais supplémentaires.
                </p>
                <p className="mb-4">
                  Jusqu'au paiement complet :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>L'Agence MELIOZ conserve la pleine propriété de tous les éléments livrés</li>
                  <li>Le client dispose d'un droit d'utilisation temporaire et révocable</li>
                  <li>Aucun transfert de droits de propriété intellectuelle n'est effectué</li>
                </ul>
                <p>
                  En cas de non-paiement du solde, l'Agence MELIOZ se réserve le droit de suspendre l'accès au site, de récupérer les éléments livrés, et de poursuivre le client en paiement, sans préjudice de tous dommages et intérêts.
                </p>
              </div>

              {/* Article 5 : Livraison */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-melioz-navy mb-4 font-display">
                  Article 5 - Livraison et Réception
                </h3>
                <p className="mb-4">
                  La livraison de la prestation est effectuée selon les modalités convenues dans le devis ou le bon de commande. Les délais de livraison sont donnés à titre indicatif et ne sont pas garantis.
                </p>
                <p>
                  Le client dispose d'un délai de <strong className="text-melioz-navy">7 jours calendaires</strong> à compter de la livraison pour formuler des réserves écrites. Passé ce délai, la prestation est réputée acceptée.
                </p>
              </div>

              {/* Article 6 : Résiliation */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-melioz-navy mb-4 font-display">
                  Article 6 - Résiliation et Annulation
                </h3>
                <p className="mb-4">
                  En cas de résiliation du projet par le client avant la fin de la prestation :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Les prestations déjà réalisées et facturées restent dues</li>
                  <li>L'Agence MELIOZ peut facturer les prestations en cours de réalisation au prorata du travail effectué</li>
                  <li>Aucun remboursement de l'acompte n'est dû si la résiliation intervient après le démarrage effectif des travaux</li>
                </ul>
                <p>
                  En cas de résiliation par l'Agence MELIOZ pour non-paiement ou manquement grave du client, les mêmes règles s'appliquent, et l'Agence MELIOZ se réserve le droit de réclamer des dommages et intérêts.
                </p>
              </div>

              {/* Article 7 : Garantie */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-melioz-navy mb-4 font-display">
                  Article 7 - Garantie et Support
                </h3>
                <p className="mb-4">
                  L'Agence MELIOZ garantit la conformité de ses prestations aux spécifications convenues dans le devis. Une garantie de <strong className="text-melioz-navy">3 mois</strong> est accordée pour la correction des bugs et dysfonctionnements majeurs, à compter de la livraison finale.
                </p>
                <p>
                  Cette garantie ne couvre pas les modifications demandées par le client, les évolutions fonctionnelles, ni les problèmes liés à des éléments extérieurs (hébergement, plugins tiers, etc.).
                </p>
              </div>

              {/* Article 8 : Droit applicable */}
              <div>
                <h3 className="text-xl font-semibold text-melioz-navy mb-4 font-display">
                  Article 8 - Droit applicable et Médiation
                </h3>
                <p className="mb-4">
                  Les présentes CGV sont régies par le droit français. Tout litige relatif à leur interprétation ou à leur exécution relève des tribunaux compétents de Paris.
                </p>
                <p>
                  Conformément à la législation en vigueur, le client peut recourir à un médiateur de la consommation en cas de litige. L'Agence MELIOZ s'engage à examiner toute demande de médiation de bonne foi.
                </p>
              </div>
            </section>

            {/* Date de mise à jour */}
            <section className="pt-6 border-t border-secondary/20">
              <p className="text-sm text-melioz-navy/70 font-body font-sans">
                Dernière mise à jour : Janvier 2026
              </p>
              <p className="text-sm text-melioz-navy/70 font-body font-sans mt-2">
                Pour toute question concernant ces conditions générales, contactez-nous à : <a href="mailto:contact@agencemelioz.com" className="text-melioz-electric hover:underline">contact@agencemelioz.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
