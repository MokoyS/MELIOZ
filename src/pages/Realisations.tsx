import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Construction } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function Realisations() {
  const mRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mScrollY } = useScroll({ target: mRef, offset: ['start end', 'end start'] });
  const mY = useTransform(mScrollY, [0, 1], [60, -60]);

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
        <section className="relative min-h-[60vh] bg-melioz-teal flex items-center overflow-hidden pt-16 md:pt-20">
          <motion.div ref={mRef} style={{ y: mY }} className="absolute right-0 top-[20%] pointer-events-none select-none">
            <img src="/images/Melioz Vector.svg" className="w-[300px] md:w-[500px] opacity-[0.05]" aria-hidden="true" style={{ filter: 'brightness(0) invert(1)' }} />
          </motion.div>
          <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 py-16 md:py-24">
            <p className="font-body font-medium text-[10px] md:text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-4 md:mb-6">Nos réalisations</p>
            <h1
              className="font-display font-extrabold leading-[0.9] tracking-[-0.04em] text-melioz-offwhite max-w-3xl"
              style={{ fontSize: 'clamp(36px, 7vw, 96px)' }}
            >
              Ce qu'on a construit.
            </h1>
          </div>
        </section>

        {/* Placeholder — offwhite */}
        <section className="py-24 md:py-40 bg-melioz-offwhite flex items-center justify-center px-5 sm:px-6">
          <div className="text-center">
            <div className="p-5 bg-melioz-mint border border-melioz-navy/10 rounded-2xl mb-6 inline-flex">
              <Construction className="w-10 h-10 text-melioz-navy/60" />
            </div>
            <h2
              className="font-display font-bold text-melioz-navy mb-3"
              style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}
            >
              En construction
            </h2>
            <p className="font-body text-[15px] md:text-[17px] text-melioz-navy/60 max-w-sm mx-auto">
              Cette page sera bientôt disponible. Revenez nous voir très vite !
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
