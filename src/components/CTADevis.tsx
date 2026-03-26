import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function CTADevis() {
  const mRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mScrollY } = useScroll({ target: mRef, offset: ['start end', 'end start'] });
  const mY = useTransform(mScrollY, [0, 1], [50, -50]);

  return (
    <section className="relative py-32 bg-melioz-electric overflow-hidden">
      {/* M watermark */}
      <motion.div ref={mRef} style={{ y: mY }} className="absolute right-0 top-0 pointer-events-none select-none">
        <img
          src="/images/Melioz Vector.svg"
          className="w-[500px] opacity-[0.06]"
          aria-hidden="true"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <AnimatedSection>
          <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-offwhite/60 mb-6">
            Prêt à démarrer ?
          </p>
          <h2 className="font-display font-bold text-[40px] md:text-[56px] leading-[1.0] tracking-[-0.02em] text-melioz-offwhite mb-6">
            Transformons votre projet en réalité.
          </h2>
          <p className="font-body text-[18px] text-melioz-offwhite/70 max-w-xl mx-auto mb-10 leading-relaxed">
            Un échange de 15 minutes suffit pour comprendre vos besoins et vous proposer une approche adaptée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book-a-call"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-melioz-offwhite text-melioz-electric font-body font-medium rounded-xl hover:-translate-y-0.5 transition-transform duration-200"
            >
              Réserver un appel gratuit
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-melioz-offwhite/30 text-melioz-offwhite font-body font-medium rounded-xl hover:border-melioz-offwhite/60 transition-colors duration-200"
            >
              Nous écrire
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
