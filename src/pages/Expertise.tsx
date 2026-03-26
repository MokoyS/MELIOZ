import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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

// Panel 0 — Code / Engineering
const CodePanel = () => {
  const codeLines = [
    { indent: 0, color: '#3B54CC', width: '60%' },
    { indent: 1, color: '#9EB8F9', width: '80%' },
    { indent: 2, color: 'rgba(218,233,217,0.6)', width: '45%' },
    { indent: 2, color: '#9EB8F9', width: '70%' },
    { indent: 1, color: '#3B54CC', width: '40%' },
    { indent: 0, color: 'rgba(218,233,217,0.3)', width: '55%' },
  ];

  return (
    <div className="relative z-10 w-full space-y-2">
      {codeLines.map((line, i) => (
        <motion.div
          key={i}
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          style={{ paddingLeft: `${line.indent * 16}px` }}
        >
          <div
            className="h-2 rounded-full"
            style={{ width: line.width, backgroundColor: line.color }}
          />
        </motion.div>
      ))}
      <motion.div
        className="h-4 w-0.5 mt-1"
        style={{ marginLeft: '32px', backgroundColor: '#3B54CC' }}
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </div>
  );
};

// Panel 1 — Strategy / Kanban
const StrategyPanel = () => {
  const phases = ['Cadrage', 'Sprint 1', 'Sprint 2', 'Livraison'];

  return (
    <div className="relative z-10 w-full">
      {phases.map((phase, i) => (
        <motion.div
          key={phase}
          className="flex items-center gap-3 mb-3"
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
        >
          <div
            className={`w-2 h-2 rounded-full flex-shrink-0 ${
              i < 2 ? 'bg-melioz-electric' : 'bg-melioz-offwhite/20'
            }`}
          />
          <div
            className={`h-1.5 rounded-full flex-1 ${
              i < 2 ? 'bg-melioz-electric/40' : 'bg-melioz-offwhite/10'
            }`}
          />
          <span
            className={`font-body text-xs ${
              i < 2 ? 'text-melioz-offwhite/70' : 'text-melioz-offwhite/25'
            }`}
          >
            {phase}
          </span>
        </motion.div>
      ))}
      <div className="mt-4 pt-4 border-t border-melioz-offwhite/10">
        <div className="flex items-center justify-between">
          <span className="font-body text-xs text-melioz-offwhite/40">Progression</span>
          <span className="font-body text-xs text-melioz-electric">48%</span>
        </div>
        <div className="mt-2 h-1 bg-melioz-offwhite/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-melioz-electric rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '48%' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
          />
        </div>
      </div>
    </div>
  );
};

// Panel 2 — Design / Wireframe
const DesignPanel = () => {
  const swatchColors = ['#204F56', '#3B54CC', '#9EB8F9', '#DAE9D9', '#EDEFEE'];

  return (
    <div className="relative z-10 w-full">
      <motion.div
        className="border border-melioz-offwhite/20 rounded-xl p-4 mb-3"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Header bar */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-16 h-2 bg-melioz-offwhite/30 rounded-full" />
          <div className="flex-1 h-2 bg-melioz-offwhite/10 rounded-full" />
        </div>
        {/* Content blocks */}
        <div className="space-y-2">
          <div className="h-2 bg-melioz-offwhite/20 rounded-full w-full" />
          <div className="h-2 bg-melioz-offwhite/15 rounded-full w-4/5" />
          <div className="h-2 bg-melioz-offwhite/10 rounded-full w-3/5" />
        </div>
        {/* CTA button mock */}
        <div className="mt-3 w-20 h-6 bg-melioz-electric/60 rounded-lg" />
      </motion.div>
      {/* Color swatches */}
      <div className="flex gap-2">
        {swatchColors.map((color, i) => (
          <motion.div
            key={color}
            className="w-6 h-6 rounded-full border border-melioz-offwhite/20"
            style={{ backgroundColor: color }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
          />
        ))}
      </div>
    </div>
  );
};

// Panel 3 — Marketing / Analytics
const MarketingPanel = () => {
  const bars = [30, 45, 35, 60, 50, 75, 65, 90, 80, 100, 85, 95];

  return (
    <div className="relative z-10 w-full">
      {/* Chart header */}
      <div className="flex items-end justify-between mb-4">
        <div>
          <div className="font-body text-xs text-melioz-offwhite/40 mb-1">Trafic organique</div>
          <motion.div
            className="font-display font-bold text-2xl text-melioz-offwhite"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            +147%
          </motion.div>
        </div>
        <div className="text-melioz-electric text-xs font-body">↑ vs. mois dernier</div>
      </div>
      {/* Bar chart */}
      <div className="flex items-end gap-1.5 h-16">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-melioz-electric/30 rounded-t-sm"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04, ease: 'easeOut' }}
            style={{ height: `${h}%`, transformOrigin: 'bottom', originY: 1 }}
          />
        ))}
      </div>
      <div className="mt-2 h-px bg-melioz-offwhite/10" />
    </div>
  );
};

const panelComponents = [CodePanel, StrategyPanel, DesignPanel, MarketingPanel];

export default function Expertise() {
  const mRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mScrollY } = useScroll({ target: mRef, offset: ['start end', 'end start'] });
  const mY = useTransform(mScrollY, [0, 1], [60, -60]);

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
          <motion.div ref={mRef} style={{ y: mY }} className="absolute right-0 top-[20%] pointer-events-none select-none">
            <img
              src="/images/Melioz Vector.svg"
              className="w-[500px] opacity-[0.05]"
              aria-hidden="true"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </motion.div>
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
        {poles.map((pole, index) => {
          const PanelComponent = panelComponents[index];
          return (
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
                    <div className="relative aspect-[4/3] bg-melioz-navy border border-melioz-offwhite/10 rounded-2xl overflow-hidden flex items-center justify-center p-8">
                      {/* Subtle M watermark background */}
                      <img
                        src="/images/Melioz Vector.svg"
                        className="absolute inset-0 m-auto w-40 opacity-[0.04]"
                        aria-hidden="true"
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                      <PanelComponent />
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </section>
          );
        })}

        <CTADevis />
      </main>
      <Footer />
    </div>
  );
}
