import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const values = [
  { label: 'Projets livrés', value: '50+' },
  { label: 'Satisfaction client', value: '98%' },
  { label: 'Années d\'expérience', value: '5+' },
];

export default function AboutSection() {
  const mRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mScrollY } = useScroll({ target: mRef, offset: ['start end', 'end start'] });
  const mY = useTransform(mScrollY, [0, 1], [55, -55]);

  return (
    <section className="relative py-32 bg-melioz-navy overflow-hidden">
      {/* M watermark */}
      <motion.div ref={mRef} style={{ y: mY }} className="absolute right-0 bottom-0 pointer-events-none select-none">
        <img
          src="/images/Melioz Vector.svg"
          className="w-[500px] opacity-[0.04]"
          aria-hidden="true"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Texte */}
          <AnimatedSection>
            <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-6">
              Notre approche
            </p>
            <h2 className="font-display font-bold text-[40px] md:text-[56px] leading-[1.0] tracking-[-0.02em] text-melioz-offwhite mb-6">
              Créer, mesurer,<br />itérer.
            </h2>
            <p className="font-body text-[17px] text-melioz-offwhite/70 leading-relaxed mb-8 max-w-lg">
              Nous sommes une agence à taille humaine qui croit en la rigueur, l'impact et la transparence. Chaque projet est une collaboration étroite avec nos clients, de la stratégie à la mise en ligne.
            </p>
            <a
              href="/agence"
              className="inline-flex items-center gap-2 font-body text-sm font-medium text-melioz-electric hover:text-melioz-offwhite transition-colors duration-200"
            >
              Découvrir l'agence →
            </a>
          </AnimatedSection>

          {/* Métriques */}
          <AnimatedSection delay={0.15}>
            <div className="grid grid-cols-3 gap-6">
              {values.map((v) => (
                <div key={v.label} className="text-center p-6 border border-melioz-offwhite/10 rounded-2xl">
                  <div className="font-display font-extrabold text-[40px] leading-none text-melioz-offwhite mb-2">
                    {v.value}
                  </div>
                  <div className="font-body text-[12px] uppercase tracking-widest text-melioz-offwhite/40">
                    {v.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
