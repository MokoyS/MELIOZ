import { Code2, Lightbulb, PenTool, Megaphone } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import CTADevis from '../components/CTADevis';
import AnimatedSection from '../components/AnimatedSection';

const poles = [
  {
    icon: Code2,
    title: 'Ingénierie & Architecture Web',
    description: "Nous concevons des infrastructures numériques robustes, pensées pour la vitesse et l'évolutivité. Notre maîtrise des technologies de pointe garantit une sécurité totale et une expérience utilisateur sans compromis.",
    skills: ['React / Next.js', 'TypeScript', 'Node.js', 'Python', 'WordPress', 'Shopify'],
    bg: 'bg-melioz-offwhite',
    iconBg: 'bg-melioz-teal/10',
    iconColor: 'text-melioz-teal',
  },
  {
    icon: Lightbulb,
    title: 'Stratégie & Pilotage Produit',
    description: "Le maillon fort entre votre vision business et la réalité technique. Nous structurons vos idées en plans d'action concrets, en priorisant l'impact et le ROI à chaque étape du développement.",
    skills: ['Méthodologie Agile', 'Audit & Cadrage Métier', 'Spécifications Fonctionnelles', 'User Stories & Backlog'],
    bg: 'bg-melioz-mint',
    iconBg: 'bg-melioz-teal/15',
    iconColor: 'text-melioz-teal',
  },
  {
    icon: PenTool,
    title: 'Expérience Utilisateur & Identité Visuelle',
    description: "Le design au service de la performance. Nous créons des interfaces immersives et intuitives qui ne se contentent pas d'être belles : elles sont conçues pour captiver votre audience et maximiser vos conversions.",
    skills: ['Design System', 'Wireframing', 'Prototypage Haute Fidélité', 'UX & Accessibilité', 'Identité Visuelle Digitale', 'Design de Conversion (CRO)'],
    bg: 'bg-melioz-offwhite',
    iconBg: 'bg-melioz-electric/10',
    iconColor: 'text-melioz-electric',
  },
  {
    icon: Megaphone,
    title: 'Acquisition & Intelligence Marketing',
    description: "Donnez de la puissance à votre visibilité. Nous orchestrons vos leviers d'acquisition pour attirer un trafic qualifié et pérenniser votre croissance grâce à une analyse fine de la donnée.",
    skills: ['SEO & Stratégie GEO (IA)', 'Campagnes SEA / Social Ads', 'Content Strategy', 'Analyse de Données', 'Automation Marketing'],
    bg: 'bg-melioz-mint',
    iconBg: 'bg-melioz-teal/15',
    iconColor: 'text-melioz-teal',
  },
];

export default function Expertise() {
  return (
    <div className="bg-melioz-offwhite text-melioz-navy">
      <SEO
        title="Notre Expertise Digitale — UX, Dev & Stratégie | MELIOZ"
        description="Rencontrez notre équipe d'experts : Product Owners, Designers UI/UX et Développeurs dédiés à la performance de votre marque."
        canonical="/expertise"
      />
      <Navbar />
      <main>
        {/* Hero — teal */}
        <section className="relative bg-melioz-teal pt-20 overflow-hidden">
          <img
            src="/images/Melioz Vector.svg"
            className="absolute right-0 top-0 w-[500px] opacity-[0.05] pointer-events-none select-none"
            aria-hidden="true"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24">
            <AnimatedSection>
              <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-6">Notre Expertise</p>
              <h1 className="font-display font-extrabold text-[64px] sm:text-[80px] md:text-[96px] leading-[0.9] tracking-[-0.04em] text-melioz-offwhite max-w-3xl">
                La convergence des talents, l'exigence du résultat.
              </h1>
              <p className="font-body text-[18px] text-melioz-offwhite/70 max-w-2xl mt-8 leading-relaxed">
                Melioz n'est pas qu'une somme de compétences, c'est une synergie d'experts dédiés à la haute performance. Nous fusionnons ingénierie de pointe et design stratégique pour bâtir des écosystèmes numériques qui dominent leur marché.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Pôles d'expertise — alternance offwhite/mint */}
        {poles.map((pole, index) => (
          <section key={pole.title} className={`py-32 ${pole.bg}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="grid gap-16 lg:grid-cols-2 items-center">
                {/* Texte */}
                <AnimatedSection delay={0.1} className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex p-4 rounded-xl ${pole.iconBg} mb-6`}>
                    <pole.icon className={`w-7 h-7 ${pole.iconColor}`} />
                  </div>
                  <h2 className="font-display font-bold text-[32px] md:text-[40px] leading-[1.1] tracking-[-0.02em] text-melioz-navy mb-4">
                    {pole.title}
                  </h2>
                  <p className="font-body text-[17px] text-melioz-navy/70 leading-relaxed mb-8">
                    {pole.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pole.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-melioz-navy/5 border border-melioz-navy/10 rounded-lg text-sm font-body text-melioz-navy/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </AnimatedSection>

                {/* Visuel décoratif */}
                <AnimatedSection delay={0.25} className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative aspect-[4/3] bg-melioz-teal/10 border border-melioz-navy/10 rounded-2xl overflow-hidden flex items-center justify-center">
                    <img
                      src="/images/Melioz Vector.svg"
                      className="w-32 opacity-20 pointer-events-none select-none"
                      aria-hidden="true"
                      style={{ filter: 'brightness(0) saturate(100%) invert(23%) sepia(29%) saturate(634%) hue-rotate(145deg) brightness(93%) contrast(88%)' }}
                    />
                    <div className="absolute bottom-6 right-6">
                      <pole.icon className={`w-8 h-8 ${pole.iconColor} opacity-40`} />
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        ))}

        <CTADevis />
      </main>
      <Footer />
    </div>
  );
}
