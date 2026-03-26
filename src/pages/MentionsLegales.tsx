import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-melioz-offwhite text-melioz-navy">
      <SEO
        title="MELIOZ - Mentions Légales"
        description="Mentions légales de l'agence MELIOZ. Informations sur l'éditeur, l'hébergement et les conditions d'utilisation du site."
        canonical="/mentions-legales"
      />
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <span className="inline-block px-4 py-2 bg-melioz-mint border border-melioz-navy/10 rounded-lg text-melioz-navy font-body text-[11px] uppercase tracking-widest mb-4">
              Informations légales
            </span>
            <h1 className="text-4xl sm:text-5xl text-melioz-navy font-display font-extrabold mb-6">
              Mentions Légales
            </h1>
          </div>

          <div className="space-y-10 text-melioz-navy/70 font-body leading-relaxed">
            {/* Éditeur du site */}
            <section>
              <h2 className="text-2xl font-semibold text-melioz-navy mb-4 font-display">
                Éditeur du site
              </h2>
              <div className="space-y-2">
                <p><strong className="text-melioz-navy">Raison sociale :</strong> Agence MELIOZ</p>
                <p><strong className="text-melioz-navy">Forme juridique :</strong> SAS (Société par Actions Simplifiée)</p>
                <p><strong className="text-melioz-navy">Capital social :</strong> 1 000 €</p>
                <p><strong className="text-melioz-navy">Siège social :</strong> Paris, France</p>
                <p><strong className="text-melioz-navy">SIRET :</strong> En cours d'immatriculation</p>
                <p><strong className="text-melioz-navy">Email :</strong> <a href="mailto:contact@agencemelioz.com" className="text-melioz-electric hover:underline">contact@agencemelioz.com</a></p>
              </div>
            </section>

            {/* Directeur de la publication */}
            <section>
              <h2 className="text-2xl font-semibold text-melioz-navy mb-4 font-display">
                Directeur de la publication
              </h2>
              <p>Le directeur de la publication est le représentant légal de l'Agence MELIOZ.</p>
            </section>

            {/* Hébergement */}
            <section>
              <h2 className="text-2xl font-semibold text-melioz-navy mb-4 font-display">
                Hébergement
              </h2>
              <div className="space-y-2">
                <p><strong className="text-melioz-navy">Hébergeur :</strong> Vercel Inc.</p>
                <p><strong className="text-melioz-navy">Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
                <p><strong className="text-melioz-navy">Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-melioz-electric hover:underline">vercel.com</a></p>
              </div>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="text-2xl font-semibold text-melioz-navy mb-4 font-display">
                Propriété intellectuelle
              </h2>
              <p className="mb-4">
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons, logiciels, etc.) est la propriété exclusive de l'Agence MELIOZ ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de l'Agence MELIOZ.
              </p>
            </section>

            {/* Limitation de responsabilité */}
            <section>
              <h2 className="text-2xl font-semibold text-melioz-navy mb-4 font-display">
                Limitation de responsabilité
              </h2>
              <p className="mb-4">
                L'Agence MELIOZ s'efforce de fournir sur son site des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions, inexactitudes et carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
              </p>
              <p>
                L'Agence MELIOZ décline toute responsabilité en cas d'interruption ou d'inaccessibilité du site, de survenance de bugs ou de tout dommage résultant d'actes frauduleux de tiers.
              </p>
            </section>

            {/* Liens hypertextes */}
            <section>
              <h2 className="text-2xl font-semibold text-melioz-navy mb-4 font-display">
                Liens hypertextes
              </h2>
              <p>
                Le site peut contenir des liens hypertextes vers d'autres sites. L'Agence MELIOZ n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou aux éventuels collectes de données qu'ils pourraient opérer.
              </p>
            </section>

            {/* Droit applicable */}
            <section>
              <h2 className="text-2xl font-semibold text-melioz-navy mb-4 font-display">
                Droit applicable
              </h2>
              <p>
                Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </section>

            {/* Date de mise à jour */}
            <section className="pt-6 border-t border-secondary/20">
              <p className="text-sm text-melioz-navy/70 font-body">
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
