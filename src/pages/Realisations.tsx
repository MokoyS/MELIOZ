import { Construction } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function Realisations() {
  return (
    <div className="min-h-screen bg-melioz-offwhite text-melioz-navy">
      <SEO
        title="Nos Réalisations | MELIOZ Agence Paris"
        description="Nos réalisations arrivent bientôt."
        canonical="/realisations"
      />
      <Navbar />
      <main>
        {/* Hero — teal */}
        <section className="relative min-h-[60vh] bg-melioz-teal flex items-center overflow-hidden pt-20">
          <img src="/images/Melioz Vector.svg" className="absolute right-0 top-0 w-[500px] opacity-[0.05] pointer-events-none select-none" aria-hidden="true" style={{ filter: 'brightness(0) invert(1)' }} />
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24">
            <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-6">Nos réalisations</p>
            <h1 className="font-display font-extrabold text-[64px] sm:text-[80px] md:text-[96px] leading-[0.9] tracking-[-0.04em] text-melioz-offwhite max-w-3xl">
              Ce qu'on a construit.
            </h1>
          </div>
        </section>

        {/* Placeholder — offwhite */}
        <section className="py-40 bg-melioz-offwhite flex items-center justify-center">
          <div className="text-center">
            <div className="p-5 bg-melioz-mint border border-melioz-navy/10 rounded-2xl mb-6 inline-flex">
              <Construction className="w-10 h-10 text-melioz-navy/60" />
            </div>
            <h2 className="font-display font-bold text-[32px] text-melioz-navy mb-3">En construction</h2>
            <p className="font-body text-[17px] text-melioz-navy/60 max-w-sm mx-auto">
              Cette page sera bientôt disponible. Revenez nous voir très vite !
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
