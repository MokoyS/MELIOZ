import AnimatedSection from './AnimatedSection';

const reasons = [
  {
    title: 'Expertise',
    description: 'La rencontre entre l\'ingénierie web de pointe et la psychologie du marketing. Notre équipe maîtrise les outils de demain pour résoudre vos problématiques d\'aujourd\'hui.',
  },
  {
    title: 'Proximité',
    description: 'La distance disparaît au profit de la réactivité. Avec un interlocuteur unique et un suivi en temps réel, vous êtes au cœur du projet.',
  },
  {
    title: 'Qualité',
    description: 'Nous visons l\'excellence technique pour des solutions durables. La conception est optimisée pour offrir une expérience sans compromis, aujourd\'hui comme demain.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-32 bg-melioz-mint">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="mb-16">
          <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-navy/60 mb-4">
            Pourquoi nous
          </p>
          <h2 className="font-display font-bold text-[48px] md:text-[64px] leading-[1.0] tracking-[-0.02em] text-melioz-navy">
            L'exigence au service de votre croissance.
          </h2>
        </AnimatedSection>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
          {reasons.map((reason, i) => (
            <AnimatedSection key={reason.title} delay={i * 0.08}>
              <div className="relative group p-7 bg-melioz-offwhite border border-melioz-navy/10 rounded-2xl hover:border-melioz-electric hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
                <img src="/images/Melioz Vector.svg" className="absolute top-3 right-3 w-12 opacity-[0.15] pointer-events-none select-none" aria-hidden="true" />
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
