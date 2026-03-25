import { ArrowRight } from 'lucide-react';
import { motion } from '../lib/framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-melioz-teal flex items-center overflow-hidden">
      {/* M watermark */}
      <img
        src="/images/Melioz Vector.svg"
        className="absolute right-0 top-0 w-[600px] md:w-[700px] opacity-[0.05] pointer-events-none select-none"
        aria-hidden="true"
        style={{ filter: 'brightness(0) invert(1)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* Label */}
          <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-8">
            Agence Digitale · Paris
          </p>

          {/* H1 */}
          <h1 className="font-display font-extrabold text-[64px] sm:text-[80px] md:text-[100px] lg:text-[120px] leading-[0.9] tracking-[-0.04em] text-melioz-offwhite mb-10 max-w-5xl">
            L'expertise digitale à taille humaine.
          </h1>

          {/* Sous-titre */}
          <p className="font-body text-[18px] md:text-[20px] text-melioz-offwhite/70 max-w-xl mb-12 leading-relaxed">
            Design soigné, code moderne, résultats mesurables. Nous transformons vos ambitions en présence digitale remarquable.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/book-a-call"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-melioz-electric text-melioz-offwhite font-body font-medium rounded-xl hover:-translate-y-0.5 transition-transform duration-200"
            >
              Démarrer un projet
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/realisations"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-melioz-offwhite/80 font-body font-medium hover:text-melioz-offwhite transition-colors duration-200"
            >
              Voir nos réalisations
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
