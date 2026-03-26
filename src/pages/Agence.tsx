import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Heart, Target, Lightbulb } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import AnimatedSection from '../components/AnimatedSection';

const values = [
  { icon: Heart,     title: 'Passion',    description: 'Nous aimons ce que nous faisons. Chaque projet est une opportunité de créer quelque chose d\'unique et impactant.' },
  { icon: Target,    title: 'Excellence', description: 'Nous visons l\'excellence dans chaque détail, de la conception à la livraison, sans compromis sur la qualité.' },
  { icon: Lightbulb, title: 'Innovation', description: 'Nous restons à la pointe des technologies et des tendances pour offrir des solutions modernes et performantes.' },
];

export default function Agence() {
  const mRef1 = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mScrollY1 } = useScroll({ target: mRef1, offset: ['start end', 'end start'] });
  const mY1 = useTransform(mScrollY1, [0, 1], [65, -65]);

  const mRef2 = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mScrollY2 } = useScroll({ target: mRef2, offset: ['start end', 'end start'] });
  const mY2 = useTransform(mScrollY2, [0, 1], [65, -65]);

  return (
    <div className="min-h-screen bg-melioz-offwhite text-melioz-navy">
      <SEO
        title="L'Agence MELIOZ — Équipe & Valeurs | Paris"
        description="Agence digitale 100% en ligne basée à Paris, spécialisée dans la création de sites web sur-mesure pour TPE et PME."
        canonical="/agence"
      />
      <Navbar />
      <main>
        {/* Hero — teal */}
        <section className="relative min-h-[60vh] bg-melioz-teal flex items-center overflow-hidden pt-16 md:pt-20">
          <motion.div ref={mRef1} style={{ y: mY1 }} className="absolute right-0 top-[20%] pointer-events-none select-none">
            <img src="/images/Melioz Vector.svg" className="w-[300px] md:w-[500px] opacity-[0.05]" aria-hidden="true" style={{ filter: 'brightness(0) invert(1)' }} />
          </motion.div>
          <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 py-16 md:py-24">
            <AnimatedSection>
              <p className="font-body font-medium text-[10px] md:text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-4 md:mb-6">Notre histoire</p>
              <h1
                className="font-display font-extrabold leading-[0.9] tracking-[-0.04em] text-melioz-offwhite mb-6 md:mb-8 max-w-3xl"
                style={{ fontSize: 'clamp(36px, 7vw, 96px)' }}
              >
                Une agence digitale à taille humaine
              </h1>
              <p className="font-body text-[15px] md:text-[18px] text-melioz-offwhite/70 max-w-xl leading-relaxed mb-8 md:mb-10">
                Melioz accompagne les organisations ambitieuses dans le déploiement de stratégies web d'envergure.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-melioz-electric text-melioz-offwhite font-body font-medium rounded-xl hover:-translate-y-0.5 transition-transform duration-200">
                Nous rencontrer <ArrowRight className="w-4 h-4" />
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* Histoire — offwhite */}
        <section className="py-16 md:py-24 lg:py-32 bg-melioz-offwhite">
          <div className="max-w-4xl mx-auto px-5 sm:px-6">
            <AnimatedSection>
              <p className="font-body font-medium text-[10px] md:text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-4">Notre histoire</p>
              <h2
                className="font-display font-bold leading-[1.0] tracking-[-0.02em] text-melioz-navy mb-8 md:mb-10"
                style={{ fontSize: 'clamp(28px, 4vw, 56px)' }}
              >
                De la passion à l'expertise
              </h2>
              <div className="space-y-5 md:space-y-6 font-body text-[15px] md:text-[17px] leading-[1.7] text-melioz-navy/70">
                <p>Melioz est née d'une conviction simple : chaque entreprise mérite un écosystème numérique à la hauteur de ses ambitions.</p>
                <p>Fondée en 2025 par un collectif engagé de développeurs et de designers, notre agence s'est imposée comme un partenaire stratégique pour les organisations souhaitant affirmer leur leadership en ligne.</p>
                <p>Aujourd'hui, nous forgeons le succès de projets d'envergure, de la définition d'identités visuelles au déploiement de plateformes complexes.</p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Valeurs — navy */}
        <section className="py-16 md:py-24 lg:py-32 bg-melioz-navy">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <AnimatedSection className="mb-12 md:mb-16">
              <p className="font-body font-medium text-[10px] md:text-[11px] uppercase tracking-[0.12em] text-melioz-mint mb-4">Nos valeurs</p>
              <h2
                className="font-display font-bold leading-[1.0] tracking-[-0.02em] text-melioz-offwhite"
                style={{ fontSize: 'clamp(28px, 4vw, 56px)' }}
              >
                Ce qui fait vivre Melioz
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {values.map(({ icon: Icon, title, description }, i) => (
                <AnimatedSection key={title} delay={i * 0.08}>
                  <div className="p-6 md:p-7 rounded-2xl bg-melioz-offwhite/5 border border-melioz-offwhite/10">
                    <div className="w-10 h-10 rounded-lg bg-melioz-electric/20 flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-melioz-electric" />
                    </div>
                    <h3 className="font-display font-bold text-[20px] md:text-[22px] text-melioz-offwhite mb-3">{title}</h3>
                    <p className="font-body text-[15px] leading-relaxed text-melioz-offwhite/70">{description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Vision CTA — electric */}
        <section className="relative py-20 md:py-32 lg:py-40 bg-melioz-electric overflow-hidden">
          <motion.div ref={mRef2} style={{ y: mY2 }} className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none">
            <img src="/images/Melioz Vector.svg" className="w-[300px] md:w-[400px] opacity-[0.06]" aria-hidden="true" style={{ filter: 'brightness(0) invert(1)' }} />
          </motion.div>
          <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center">
            <AnimatedSection>
              <h2
                className="font-display font-bold leading-[1.0] tracking-[-0.02em] text-melioz-offwhite mb-5 md:mb-6"
                style={{ fontSize: 'clamp(28px, 5vw, 64px)' }}
              >
                Rendre l'excellence digitale accessible.
              </h2>
              <p className="font-body text-[15px] md:text-[18px] text-melioz-offwhite/70 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
                Notre mission est de briser les barrières techniques pour offrir aux entreprises en pleine croissance les outils des leaders du marché.
              </p>
              <a href="/book-a-call" className="inline-flex items-center gap-2 px-6 md:px-8 py-3.5 md:py-4 bg-melioz-offwhite text-melioz-electric font-body font-medium rounded-xl hover:bg-melioz-navy hover:text-melioz-offwhite transition-colors duration-200">
                Réserver un appel <ArrowRight className="w-5 h-5" />
              </a>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
