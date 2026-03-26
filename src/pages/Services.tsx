import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code2, PenTool, TrendingUp, Rocket, Wrench, HeadphonesIcon, ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import AnimatedSection from '../components/AnimatedSection';

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const mRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mScrollY } = useScroll({ target: mRef, offset: ['start end', 'end start'] });
  const mY = useTransform(mScrollY, [0, 1], [55, -55]);

  const services = [
    { icon: Code2,          title: 'Développement Web',          description: 'Sites vitrines, applications web et e-commerce développés avec les technologies les plus modernes.', features: ['Sites responsives et performants', 'Applications web sur-mesure', 'E-commerce avec Shopify ou WooCommerce', 'Intégrations API et automatisations'] },
    { icon: PenTool,        title: 'Design UI/UX',               description: 'L\'esthétique au service de l\'usage. Interfaces haute couture qui captent l\'attention et guident vos visiteurs vers l\'action.', features: ['Maquettes et prototypes Figma', 'Design system cohérent', 'Tests utilisateurs', 'Optimisation des parcours'] },
    { icon: TrendingUp,     title: 'Stratégie Digitale',         description: 'Nous définissons votre positionnement et votre univers visuel pour que votre marque soit mémorable et impose son autorité.', features: ['Audit SEO complet', 'Stratégie de contenu', 'Configuration Analytics', 'Optimisation des performances'] },
    { icon: TrendingUp,     title: 'SEO/GEO',                    description: 'Soyez visible là où vos clients cherchent des réponses. Nous optimisons votre présence pour les moteurs de recherche et les IA génératives.', features: ['Audit SEO complet', 'Stratégie de contenu', 'Configuration Analytics', 'Optimisation des performances'] },
    { icon: Rocket,         title: 'Infrastructure & Sécurité',  description: 'Hébergement haute disponibilité, surveillance 24/7 et mises à jour préventives pour que votre actif digital reste performant et inviolable.', features: ['Configuration hosting optimisé', 'Certificats SSL', 'Backup automatiques', 'Monitoring 24/7'] },
    { icon: Wrench,         title: 'Maintenance',                description: 'Gardez votre site performant et sécurisé avec nos forfaits de maintenance.', features: ['Mises à jour régulières', 'Corrections de bugs', 'Sauvegardes automatiques', 'Support technique'] },
    { icon: HeadphonesIcon, title: 'Conseil & Pilotage Continu', description: 'Notre mission est d\'assurer que votre plateforme surperforme continuellement face à la concurrence.', features: ['Analyse de performance & Suivi ROI', 'Veille technologique & IA', 'Accompagnement décisionnel', 'Optimisation continue'] },
  ];

  const faqs = [
    { question: 'Quels sont vos délais de livraison ?',     answer: 'Les délais varient selon la complexité du projet. Un site vitrine peut être livré en 2-4 semaines, tandis qu\'une application web complexe peut prendre 2-3 mois.' },
    { question: 'Comment se déroule un projet type ?',      answer: 'Chaque projet suit notre méthodologie : brief initial, conception UX/UI, développement itératif, tests, et mise en ligne. Vous êtes impliqué à chaque étape.' },
    { question: 'Proposez-vous des forfaits de maintenance ?', answer: 'Oui, nous proposons des forfaits de maintenance mensuels : mises à jour, sauvegardes, monitoring, et support technique inclus.' },
    { question: 'Quelles technologies utilisez-vous ?',    answer: 'React, Next.js, TypeScript, Node.js, ainsi que des CMS comme WordPress ou Shopify selon les besoins.' },
    { question: 'Travaillez-vous avec des clients hors de Paris ?', answer: 'Absolument ! Agence 100% digitale, nous travaillons avec des clients dans toute la France et à l\'international.' },
  ];

  return (
    <div className="min-h-screen bg-melioz-offwhite text-melioz-navy">
      <SEO title="Nos Services Web, Design & Stratégie | MELIOZ Paris" description="Découvrez nos expertises : développement sur-mesure, design d'interface et accompagnement marketing." canonical="/services" />
      <Navbar light />
      <main>
        {/* Hero — offwhite */}
        <section className="pt-16 md:pt-20 pb-16 md:pb-24 bg-melioz-offwhite overflow-hidden">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <AnimatedSection>
              <p className="font-body font-medium text-[10px] md:text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-4 md:mb-6">Nos services</p>
              <h1
                className="font-display font-extrabold leading-[0.9] tracking-[-0.04em] text-melioz-navy mb-5 md:mb-6 max-w-3xl"
                style={{ fontSize: 'clamp(36px, 7vw, 96px)' }}
              >
                Ce qu'on construit pour vous.
              </h1>
              <p className="font-body text-[15px] md:text-[18px] text-melioz-navy/70 max-w-xl leading-relaxed">
                De la conception stratégique à la mise en ligne, nous orchestrons chaque étape de votre projet.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Services grid — navy */}
        <section className="py-16 md:py-24 lg:py-32 bg-melioz-navy">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {services.map((service, i) => (
                <AnimatedSection key={service.title} delay={i * 0.05}>
                  <div className="p-6 md:p-7 rounded-2xl bg-melioz-offwhite/5 border border-melioz-offwhite/10 hover:border-melioz-electric/40 hover:-translate-y-0.5 transition-all duration-200">
                    <div className="w-10 h-10 rounded-lg bg-melioz-electric/20 flex items-center justify-center mb-5">
                      <service.icon className="w-5 h-5 text-melioz-electric" />
                    </div>
                    <h3 className="font-display font-bold text-[20px] md:text-[22px] text-melioz-offwhite mb-3">{service.title}</h3>
                    <p className="font-body text-[15px] text-melioz-offwhite/60 mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-1.5">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 font-body text-sm text-melioz-offwhite/50">
                          <span className="w-1 h-1 rounded-full bg-melioz-electric flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ — mint */}
        <section className="py-16 md:py-24 lg:py-32 bg-melioz-mint">
          <div className="max-w-3xl mx-auto px-5 sm:px-6">
            <AnimatedSection className="mb-10 md:mb-12">
              <p className="font-body font-medium text-[10px] md:text-[11px] uppercase tracking-[0.12em] text-melioz-navy/60 mb-4">FAQ</p>
              <h2
                className="font-display font-bold leading-[1.0] tracking-[-0.02em] text-melioz-navy"
                style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
              >
                Questions fréquentes
              </h2>
            </AnimatedSection>
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-melioz-navy/10 rounded-xl overflow-hidden bg-melioz-offwhite">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-5 md:px-6 py-4 text-left flex items-center justify-between hover:bg-melioz-mint/50 transition-colors"
                  >
                    <span className={`font-body font-medium text-[15px] md:text-[17px] ${openFaq === index ? 'text-melioz-electric' : 'text-melioz-navy'}`}>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-melioz-navy/40 transition-transform flex-shrink-0 ml-3 ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-5 md:px-6 pb-4 border-t border-melioz-navy/10">
                      <p className="font-body text-[15px] text-melioz-navy/70 leading-relaxed pt-4">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA — electric */}
        <section className="relative py-20 md:py-32 lg:py-40 bg-melioz-electric overflow-hidden">
          <motion.div ref={mRef} style={{ y: mY }} className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none">
            <img src="/images/Melioz Vector.svg" className="w-[300px] md:w-[400px] opacity-[0.06]" aria-hidden="true" style={{ filter: 'brightness(0) invert(1)' }} />
          </motion.div>
          <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center">
            <AnimatedSection>
              <h2
                className="font-display font-bold leading-[1.0] tracking-[-0.02em] text-melioz-offwhite mb-5 md:mb-6"
                style={{ fontSize: 'clamp(28px, 5vw, 64px)' }}
              >
                Donnons une nouvelle dimension à votre présence digitale.
              </h2>
              <p className="font-body text-[15px] md:text-[18px] text-melioz-offwhite/70 mb-8 md:mb-10 max-w-xl mx-auto leading-relaxed">Discutons de vos besoins et trouvons ensemble la solution idéale.</p>
              <a href="/book-a-call" className="inline-flex items-center gap-2 px-6 md:px-8 py-3.5 md:py-4 bg-melioz-offwhite text-melioz-electric font-body font-medium rounded-xl hover:bg-melioz-navy hover:text-melioz-offwhite transition-colors duration-200">
                Réserver un créneau <ArrowRight className="w-5 h-5" />
              </a>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
