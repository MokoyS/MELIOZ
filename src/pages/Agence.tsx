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
        <section className="relative min-h-[60vh] bg-melioz-teal flex items-center overflow-hidden pt-20">
          <img src="/images/Melioz Vector.svg" className="absolute right-0 top-0 w-[500px] opacity-[0.05] pointer-events-none select-none" aria-hidden="true" style={{ filter: 'brightness(0) invert(1)' }} />
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24">
            <AnimatedSection>
              <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-6">Notre histoire</p>
              <h1 className="font-display font-extrabold text-[64px] sm:text-[80px] md:text-[96px] leading-[0.9] tracking-[-0.04em] text-melioz-offwhite mb-8 max-w-3xl">
                Une agence digitale à taille humaine
              </h1>
              <p className="font-body text-[18px] text-melioz-offwhite/70 max-w-xl leading-relaxed mb-10">
                Melioz accompagne les organisations ambitieuses dans le déploiement de stratégies web d'envergure.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-melioz-electric text-melioz-offwhite font-body font-medium rounded-xl hover:-translate-y-0.5 transition-transform duration-200">
                Nous rencontrer <ArrowRight className="w-4 h-4" />
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* Histoire — offwhite */}
        <section className="py-32 bg-melioz-offwhite">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-4">Notre histoire</p>
              <h2 className="font-display font-bold text-[48px] md:text-[56px] leading-[1.0] tracking-[-0.02em] text-melioz-navy mb-10">
                De la passion à l'expertise
              </h2>
              <div className="space-y-6 font-body text-[17px] leading-[1.7] text-melioz-navy/70">
                <p>Melioz est née d'une conviction simple : chaque entreprise mérite un écosystème numérique à la hauteur de ses ambitions.</p>
                <p>Fondée en 2025 par un collectif engagé de développeurs et de designers, notre agence s'est imposée comme un partenaire stratégique pour les organisations souhaitant affirmer leur leadership en ligne.</p>
                <p>Aujourd'hui, nous forgeons le succès de projets d'envergure, de la définition d'identités visuelles au déploiement de plateformes complexes.</p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Valeurs — navy */}
        <section className="py-32 bg-melioz-navy">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <AnimatedSection className="mb-16">
              <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-mint mb-4">Nos valeurs</p>
              <h2 className="font-display font-bold text-[48px] md:text-[56px] leading-[1.0] tracking-[-0.02em] text-melioz-offwhite">
                Ce qui fait vivre Melioz
              </h2>
            </AnimatedSection>
            <div className="grid gap-6 md:grid-cols-3">
              {values.map(({ icon: Icon, title, description }, i) => (
                <AnimatedSection key={title} delay={i * 0.08}>
                  <div className="p-7 rounded-2xl bg-melioz-offwhite/5 border border-melioz-offwhite/10">
                    <div className="w-10 h-10 rounded-lg bg-melioz-electric/20 flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-melioz-electric" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-melioz-offwhite mb-3">{title}</h3>
                    <p className="font-body text-[15px] leading-relaxed text-melioz-offwhite/70">{description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Vision CTA — electric */}
        <section className="relative py-40 bg-melioz-electric overflow-hidden">
          <img src="/images/Melioz Vector.svg" className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] opacity-[0.06] pointer-events-none select-none" aria-hidden="true" style={{ filter: 'brightness(0) invert(1)' }} />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <AnimatedSection>
              <h2 className="font-display font-bold text-[48px] md:text-[64px] leading-[1.0] tracking-[-0.02em] text-melioz-offwhite mb-6">
                Rendre l'excellence digitale accessible.
              </h2>
              <p className="font-body text-[18px] text-melioz-offwhite/70 max-w-2xl mx-auto mb-10 leading-relaxed">
                Notre mission est de briser les barrières techniques pour offrir aux entreprises en pleine croissance les outils des leaders du marché.
              </p>
              <a href="/book-a-call" className="inline-flex items-center gap-2 px-8 py-4 bg-melioz-offwhite text-melioz-electric font-body font-medium rounded-xl hover:bg-melioz-navy hover:text-melioz-offwhite transition-colors duration-200">
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
