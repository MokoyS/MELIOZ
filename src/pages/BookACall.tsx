import { useState, useEffect } from 'react';
import { CheckCircle2, Calendar } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import AnimatedSection from '../components/AnimatedSection';

export default function BookACall() {
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tallySubmitted =
      params.get('tally_submitted') === 'true' ||
      localStorage.getItem('tally_submitted') === 'true';
    if (tallySubmitted) setShowCalendar(true);
  }, []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
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
    <div className="bg-melioz-offwhite text-melioz-navy">
      <SEO
        title="Réserver un appel avec MELIOZ — Agence Digitale Paris"
        description="Réservez un appel de 15 minutes avec l'équipe MELIOZ. Discutez de votre projet digital, de vos besoins et obtenez des conseils personnalisés."
        canonical="/book-a-call"
      />
      <Navbar />
      <main>
        {/* Hero — teal */}
        <section className="relative bg-melioz-teal pt-20 overflow-hidden">
          <img
            src="/images/Melioz Vector.svg"
            className="absolute right-0 top-0 w-[400px] opacity-[0.05] pointer-events-none select-none"
            aria-hidden="true"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-24">
            <AnimatedSection>
              <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-4">Réservation</p>
              <h1 className="font-display font-extrabold text-[64px] sm:text-[80px] leading-[0.9] tracking-[-0.04em] text-melioz-offwhite mb-6 max-w-2xl">
                Discutons de votre vision
              </h1>
              <p className="font-body text-[18px] text-melioz-offwhite/70 max-w-xl leading-relaxed">
                Réservez un appel de 15 minutes pour échanger sur votre projet et découvrir comment nous pouvons vous accompagner.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Formulaire Tally / Calendrier — offwhite */}
        <section className="py-20 bg-melioz-offwhite">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            {!showCalendar ? (
              /* Formulaire Tally */
              <AnimatedSection>
                <div className="bg-white border border-melioz-navy/10 rounded-2xl overflow-hidden">
                  <div className="p-8 sm:p-10 pb-6 border-b border-melioz-navy/10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 bg-melioz-electric/10 rounded-xl">
                        <CheckCircle2 className="w-5 h-5 text-melioz-electric" />
                      </div>
                      <h2 className="font-display font-bold text-[24px] text-melioz-navy">
                        Quelques questions rapides
                      </h2>
                    </div>
                    <p className="font-body text-melioz-navy/70">
                      Pour mieux comprendre vos besoins et vous proposer la meilleure solution.
                    </p>
                  </div>

                  <div className="w-full relative px-6 sm:px-8" style={{ height: '700px', overflow: 'hidden' }}>
                    <iframe
                      src="https://tally.so/embed/LZpNJG?hideTitle=1&transparentBackground=1&alignLeft=1"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      marginHeight={0}
                      marginWidth={0}
                      title="Formulaire de qualification"
                      style={{ border: 'none', display: 'block', overflow: 'hidden' }}
                      scrolling="no"
                      onLoad={() => {
                        const urlParams = new URLSearchParams(window.location.search);
                        if (urlParams.get('submitted') === 'true' || urlParams.get('tally_submitted') === 'true') {
                          setShowCalendar(true);
                          localStorage.setItem('tally_submitted', 'true');
                        }
                      }}
                    />
                  </div>

                  <div className="p-8 sm:p-10 pt-6 border-t border-melioz-navy/10">
                    <p className="font-body text-sm text-melioz-navy/50 text-center">
                      Après avoir rempli le formulaire, vous serez redirigé vers notre calendrier de réservation.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ) : (
              /* Calendrier Cal.com */
              <AnimatedSection>
                <div className="bg-white border border-melioz-navy/10 rounded-2xl p-8 sm:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-melioz-electric/10 rounded-xl">
                      <Calendar className="w-5 h-5 text-melioz-electric" />
                    </div>
                    <h2 className="font-display font-bold text-[24px] text-melioz-navy">
                      Choisissez un créneau
                    </h2>
                  </div>
                  <p className="font-body text-melioz-navy/70 mb-8">
                    Sélectionnez le créneau qui vous convient le mieux pour notre appel de 15 minutes.
                  </p>
                  {/* NOTE: Placeholder intentionnel — Cal.com non encore configuré.
                      Conserver tel quel jusqu'à ce que l'username Cal.com soit connu.
                      L'original BookACall.tsx avait ce même placeholder. */}
                  <div className="text-center p-8 border border-melioz-navy/10 rounded-xl">
                    <p className="font-body text-melioz-navy/50">Calendrier en cours de configuration. Contactez-nous directement.</p>
                  </div>
                </div>
              </AnimatedSection>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
