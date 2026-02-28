import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from '../lib/framer-motion';
import { scrollToSection } from '../lib/scroll';
import { baseViewport, baseTransition, fadeInUp } from '../lib/motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Combien de temps faut-il pour créer mon site ?',
      answer: 'En moyenne, un site vitrine complet est livré en 15 jours. Pour une landing page simple, comptez 7 jours. Les projets complexes peuvent prendre 3-4 semaines selon les fonctionnalités demandées.',
    },
    {
      question: 'Puis-je modifier mon site moi-même après la livraison ?',
      answer: 'Absolument ! Nous vous formons à l\'utilisation d\'un système de gestion de contenu intuitif. Vous pourrez modifier textes, images et ajouter du contenu en toute autonomie. Pour les modifications plus complexes, notre support est là.',
    },
    {
      question: 'Le site sera-t-il bien référencé sur Google ?',
      answer: 'Oui, tous nos sites sont optimisés pour le SEO dès la conception : structure technique propre, temps de chargement rapide, balisage sémantique, meta descriptions, sitemap... Le référencement naturel est inclus dans tous nos forfaits.',
    },
    {
      question: 'Que se passe-t-il après les 15 jours de création ?',
      answer: 'Votre site est livré clé en main et reste votre propriété. L\'hébergement est inclus pendant 1 an (ou illimité selon l\'offre). Nous proposons des contrats de maintenance mensuels optionnels pour les mises à jour et le support continu.',
    },
    {
      question: 'Proposez-vous des sites e-commerce ?',
      answer: 'Oui, dans l\'offre Sur Mesure. Nous intégrons des solutions comme Shopify, WooCommerce ou des solutions custom selon vos besoins. Contactez-nous pour un devis personnalisé.',
    },
    {
      question: 'Puis-je voir des exemples de vos réalisations ?',
      answer: 'Bien sûr ! Nous avons un portfolio complet de nos projets récents. Contactez-nous pour recevoir des exemples dans votre secteur d\'activité spécifique.',
    },
  ];

  const viewport = baseViewport;

  return (
    <motion.section
    id='faq'
      className="relative py-16 sm:py-24 bg-background border-t border-secondary/20 overflow-hidden"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Background animé */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-text mb-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={baseTransition}
          >
            Questions
            <span className="block mt-2 text-primary">
              fréquentes
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-text/70"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ ...baseTransition, delay: 0.1 }}
          >
            Tout ce que vous devez savoir avant de vous lancer
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-background/60 backdrop-blur-sm border border-secondary/20 rounded-xl overflow-hidden shadow-soft hover:shadow-md transition-all duration-300 group overflow-hidden relative"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ ...baseTransition, delay: 0.12 + index * 0.05 }}
              whileHover={{ scale: 1.01, y: -2 }}
            >
              {/* Effet de brillance au hover uniquement */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                initial={{ x: '-100%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.6 }}
              />
              
              <motion.button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left relative z-10 group/button"
                whileHover={{ x: 4 }}
              >
                <span className="text-lg font-semibold text-text pr-8 group-hover/button:text-primary transition-colors">
                  {faq.question}
                </span>
                <motion.div
                  animate={{
                    rotate: openIndex === index ? 180 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                </motion.div>
              </motion.button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0, y: -6 }}
                    animate={{ height: 'auto', opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: -6 }}
                    transition={{ ...baseTransition, duration: 0.28 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <p className="text-text/70 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-text/70 mb-4">Vous avez une autre question ?</p>
          <button
            type="button"
            onClick={() => scrollToSection('cta')}
            className="text-primary hover:text-text font-semibold underline underline-offset-4"
          >
            Contactez-nous directement
          </button>
        </div>
      </div>
    </motion.section>
  );
}
