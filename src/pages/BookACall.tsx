import { useState, useEffect } from 'react';
import { ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function BookACall() {
  const [showCalendar, setShowCalendar] = useState(false);

  // Vérifier si le formulaire Tally a été soumis (via localStorage ou paramètre URL)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tallySubmitted = params.get('tally_submitted') === 'true' ||
      localStorage.getItem('tally_submitted') === 'true';

    if (tallySubmitted) {
      setShowCalendar(true);
    }
  }, []);

  // Écouter les messages depuis l'iframe Tally
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Tally envoie un message quand le formulaire est soumis
      // Vérifier plusieurs formats de messages possibles de Tally
      if (
        (event.data && event.data.type === 'tally-form-submitted') ||
        (event.data && event.data.type === 'tally:form:submitted') ||
        (event.origin.includes('tally.so') && event.data?.event === 'tallyFormSubmitted')
      ) {
        setShowCalendar(true);
        localStorage.setItem('tally_submitted', 'true');
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="min-h-screen bg-background text-text">
      <SEO
        title="Réserver un appel avec MELIOZ — Agence Digitale Paris"
        description="Réservez un appel de 30 minutes avec l'équipe MELIOZ. Discutez de votre projet digital, de vos besoins et obtenez des conseils personnalisés."
        canonical="/book-a-call"
      />
      <Navbar />
      <main className="pt-32 pb-16">
        <section className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold text-sm mb-4 font-sans">
              Réservation
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-text mb-6 font-display">
              Discutons de votre vision
            </h1>
            <p className="text-lg text-text/70 max-w-2xl mx-auto font-sans">
              Réservez un appel de 15 minutes pour échanger sur votre projet et découvrir comment nous pouvons vous accompagner.
            </p>
          </div>

          {!showCalendar ? (
            /* Formulaire Tally - Filtrage */
            <div className="bg-white/50 border border-secondary/10 rounded-[24px] overflow-hidden mb-8">
              <div className="p-8 sm:p-10 pb-6 border-b border-secondary/10">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-primary/10 rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-semibold text-text font-display">
                      Quelques questions rapides
                    </h2>
                  </div>
                  <p className="text-text/70 font-sans">
                    Pour mieux comprendre vos besoins et vous proposer la meilleure solution, merci de remplir ce court formulaire.
                  </p>
                </div>
              </div>

              {/* Intégration Tally - Conteneur sans scroll avec hauteur adaptative */}
              <div className="w-full relative bg-white/30 px-6 sm:px-8" style={{ height: '700px', overflow: 'hidden' }}>
                <iframe
                  src="https://tally.so/embed/LZpNJG?hideTitle=1&transparentBackground=1&alignLeft=1"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Formulaire de qualification"
                  style={{
                    border: 'none',
                    display: 'block',
                    overflow: 'hidden'
                  }}
                  scrolling="no"
                  onLoad={() => {
                    // Vérifier si le formulaire a déjà été soumis (via paramètre URL)
                    const urlParams = new URLSearchParams(window.location.search);
                    if (urlParams.get('submitted') === 'true' || urlParams.get('tally_submitted') === 'true') {
                      setShowCalendar(true);
                      localStorage.setItem('tally_submitted', 'true');
                    }
                  }}
                />
              </div>

              <div className="p-8 sm:p-10 pt-6 border-t border-secondary/10">
                <p className="text-sm text-text/60 text-center font-sans">
                  Après avoir rempli le formulaire, vous serez redirigé vers notre calendrier de réservation.
                </p>
              </div>
            </div>
          ) : (
            /* Calendrier Cal.com */
            <div className="bg-white/50 border border-secondary/10 rounded-[24px] p-8 sm:p-10">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-primary/10 rounded-xl">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-text font-display">
                    Choisissez un créneau
                  </h2>
                </div>
                <p className="text-text/70 font-sans">
                  Sélectionnez le créneau qui vous convient le mieux pour notre appel de 15 minutes.
                </p>
              </div>

              {/* TODO: Remplacer VOTRE_USERNAME par le vrai username Cal.com */}
              <div className="text-center p-8 border border-secondary/20 rounded-2xl">
                <p className="text-secondary">Calendrier en cours de configuration. Contactez-nous directement.</p>
              </div>
            </div>
          )}

          {/* Informations complémentaires */}
          <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-[24px]">
            <h3 className="font-semibold text-text mb-3 font-display">À quoi s'attendre ?</h3>
            <ul className="space-y-2 text-text/70 text-sm font-sans">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Échange de 15 minutes pour comprendre vos besoins</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Présentation de notre approche et de nos solutions</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Réponses à toutes vos questions</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Proposition d'un devis personnalisé si le projet correspond</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
