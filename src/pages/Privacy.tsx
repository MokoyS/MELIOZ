import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-text">
      <SEO 
        title="MELIOZ - Politique de Confidentialité"
        description="Politique de confidentialité de l'agence MELIOZ. Découvrez comment nous collectons, utilisons et protégeons vos données personnelles conformément au RGPD."
        canonical="/privacy"
      />
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary font-semibold text-sm mb-4">
              RGPD
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-text mb-6 font-display">
              Politique de Confidentialité
            </h1>
          </div>

          <div className="space-y-10 text-text/80 leading-relaxed">
            {/* Introduction */}
            <section>
              <p className="text-lg">
                L'Agence MELIOZ accorde une grande importance à la protection de vos données personnelles. Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos informations conformément au Règlement Général sur la Protection des Données (RGPD).
              </p>
            </section>

            {/* Responsable du traitement */}
            <section>
              <h2 className="text-2xl font-semibold text-text mb-4 font-display">
                Responsable du traitement
              </h2>
              <div className="space-y-2">
                <p><strong className="text-text">Responsable :</strong> Agence MELIOZ</p>
                <p><strong className="text-text">Adresse :</strong> Paris, France</p>
                <p><strong className="text-text">Email :</strong> <a href="mailto:contact@agencemelioz.com" className="text-primary hover:underline">contact@agencemelioz.com</a></p>
              </div>
            </section>

            {/* Données collectées */}
            <section>
              <h2 className="text-2xl font-semibold text-text mb-4 font-display">
                Données collectées
              </h2>
              <p className="mb-4">
                Nous collectons uniquement les données que vous nous transmettez volontairement via nos formulaires :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-text">Formulaire de contact :</strong> Nom, prénom, adresse email, sujet et message</li>
                <li><strong className="text-text">Formulaire de devis :</strong> Nom, prénom, adresse email, nom de l'entreprise, type de projet, budget estimé et description du projet</li>
              </ul>
            </section>

            {/* Finalité du traitement */}
            <section>
              <h2 className="text-2xl font-semibold text-text mb-4 font-display">
                Finalité du traitement
              </h2>
              <p className="mb-4">
                Vos données personnelles sont collectées et traitées pour les finalités suivantes :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Répondre à vos demandes de contact et d'information</li>
                <li>Établir des devis personnalisés pour vos projets</li>
                <li>Assurer le suivi de notre relation commerciale</li>
                <li>Vous envoyer des communications relatives à nos services (avec votre consentement)</li>
              </ul>
            </section>

            {/* Base légale */}
            <section>
              <h2 className="text-2xl font-semibold text-text mb-4 font-display">
                Base légale du traitement
              </h2>
              <p>
                Le traitement de vos données repose sur votre <strong className="text-text">consentement</strong> (Article 6.1.a du RGPD), exprimé lors de la soumission de nos formulaires, ainsi que sur notre <strong className="text-text">intérêt légitime</strong> (Article 6.1.f du RGPD) à répondre à vos demandes commerciales.
              </p>
            </section>

            {/* Durée de conservation */}
            <section>
              <h2 className="text-2xl font-semibold text-text mb-4 font-display">
                Durée de conservation
              </h2>
              <p>
                Vos données personnelles sont conservées pendant une durée maximale de <strong className="text-text">3 ans</strong> à compter de votre dernier contact avec nous. Au-delà de cette période, vos données seront supprimées ou anonymisées.
              </p>
            </section>

            {/* Destinataires des données */}
            <section>
              <h2 className="text-2xl font-semibold text-text mb-4 font-display">
                Destinataires des données
              </h2>
              <p className="mb-4">
                Vos données personnelles sont destinées exclusivement à l'équipe de l'Agence MELIOZ. Elles ne sont en aucun cas vendues, louées ou communiquées à des tiers à des fins commerciales.
              </p>
              <p>
                Nos sous-traitants techniques (hébergement, outils d'analyse) peuvent avoir accès à certaines données dans le cadre strict de leurs missions, conformément au RGPD.
              </p>
            </section>

            {/* Vos droits */}
            <section>
              <h2 className="text-2xl font-semibold text-text mb-4 font-display">
                Vos droits
              </h2>
              <p className="mb-4">
                Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-text">Droit d'accès :</strong> Obtenir la confirmation que vos données sont traitées et en recevoir une copie</li>
                <li><strong className="text-text">Droit de rectification :</strong> Faire corriger vos données inexactes ou incomplètes</li>
                <li><strong className="text-text">Droit à l'effacement :</strong> Demander la suppression de vos données</li>
                <li><strong className="text-text">Droit à la limitation :</strong> Demander la limitation du traitement de vos données</li>
                <li><strong className="text-text">Droit à la portabilité :</strong> Recevoir vos données dans un format structuré et lisible</li>
                <li><strong className="text-text">Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@agencemelioz.com" className="text-primary hover:underline font-semibold">contact@agencemelioz.com</a>
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-text mb-4 font-display">
                Cookies
              </h2>
              <p className="mb-4">
                Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez à tout moment modifier vos préférences via le bandeau de cookies ou les paramètres de votre navigateur.
              </p>
              <p>
                Les cookies utilisés sont principalement des cookies techniques nécessaires au fonctionnement du site et des cookies d'analyse pour comprendre l'utilisation de notre site.
              </p>
            </section>

            {/* Sécurité */}
            <section>
              <h2 className="text-2xl font-semibold text-text mb-4 font-display">
                Sécurité des données
              </h2>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre la destruction, la perte, l'altération, la divulgation ou l'accès non autorisé.
              </p>
            </section>

            {/* Réclamation */}
            <section>
              <h2 className="text-2xl font-semibold text-text mb-4 font-display">
                Réclamation
              </h2>
              <p>
                Si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD, vous avez le droit d'introduire une réclamation auprès de la <strong className="text-text">CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a>
              </p>
            </section>

            {/* Date de mise à jour */}
            <section className="pt-6 border-t border-secondary/20">
              <p className="text-sm text-text/60">
                Dernière mise à jour : Janvier 2026
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
