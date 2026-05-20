import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const reasons = [
  {
    title: 'Livraison rapide.',
    description: "On livre en 2 à 4 semaines — pas 4 mois. La vitesse d'exécution est notre premier engagement envers vous.",
  },
  {
    title: 'Stack moderne.',
    description: 'Vite, React, Next.js, Supabase, IA intégrée. Des technologies qui durent et qui performent.',
  },
  {
    title: 'Suivi transparent.',
    description: "Un portail dédié, un interlocuteur unique, un avancement visible à tout moment. Aucune décision unilatérale.",
  },
  {
    title: 'Rapport qualité/prix.',
    description: "L'exigence d'une grande agence, l'agilité d'une petite structure. Pas de surcoût lié à l'overhead.",
  },
];

export default function WhyUs() {
  const mRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mScrollY } = useScroll({ target: mRef, offset: ['start end', 'end start'] });
  const mY = useTransform(mScrollY, [0, 1], [45, -45]);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-melioz-mint overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8">
        <AnimatedSection className="mb-16">
          <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-navy/60 mb-4">
            NOS ENGAGEMENTS
          </p>
          <h2
            className="font-display font-bold leading-[1.0] tracking-[-0.02em] text-melioz-navy"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
          >
            Quatre raisons de choisir MELIOZ.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {reasons.map((reason, i) => (
            <AnimatedSection key={reason.title} delay={i * 0.08} className="h-full">
              <div className="relative group h-full p-6 md:p-8 bg-melioz-offwhite border border-melioz-navy/10 rounded-2xl hover:border-melioz-electric hover:-translate-y-0.5 transition-all duration-200 overflow-hidden flex flex-col">
                <motion.div ref={mRef} style={{ y: mY }} className="absolute top-3 right-3 pointer-events-none select-none">
                  <img src="/images/Melioz Vector.svg" className="w-12 opacity-[0.15]" aria-hidden="true" />
                </motion.div>
                <div className="w-8 h-0.5 bg-melioz-electric mb-5" />
                <h3 className="font-display font-bold text-[22px] text-melioz-navy mb-3">
                  {reason.title}
                </h3>
                <p className="font-body text-[15px] leading-relaxed text-melioz-navy/70">
                  {reason.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
