import { Check, Star } from 'lucide-react';
import { motion } from '../lib/framer-motion';
import { scrollToSection } from '../lib/scroll';
import { baseViewport, baseTransition, scaleIn, fadeInUp } from '../lib/motion';

export default function Pricing() {
  const plans = [
    {
      name: 'La Vitrine Essentielle',
      price: '1 490',
      description: 'Existez et rassurez vos prospects en moins de 10 jours.',
      features: [
        'Site One-Page (Tout sur une page fluide)',
        'Design 100% Sur-mesure',
        'Optimisation Mobile & Tablette',
        'Formulaire de contact sécurisé',
        'Intégration Google Maps & Avis',
        'Rédaction des textes incluse',
      ],
      popular: false,
    },
    {
      name: 'La Vitrine Pro',
      price: '2 990',
      description: 'Une présence complète pour dominer votre marché local.',
      features: [
        'Site Multi-pages (Accueil, Services, etc.)',
        'Structure SEO Avancée',
        'Blog ou Actualités administrable',
        'Intégration d\'outils (Calendly, etc.)',
        'Formation vidéo pour modifier vos textes',
        'Audit concurrentiel offert',
      ],
      popular: true,
    },
    {
      name: 'E-Shop Starter',
      price: 'Sur devis',
      description: 'Vos produits en ligne, simplement et sans usine à gaz.',
      features: [
        'Toutes les options du Pack Pro',
        'Catalogue produits & Panier',
        'Paiement sécurisé (Stripe / PayPal)',
        'Gestion des stocks simplifiée',
        'Emails transactionnels personnalisés',
      ],
      popular: false,
    },
  ];

  const viewport = baseViewport;

  return (
    <motion.section
      id="tarifs"
      className="relative py-16 sm:py-24 bg-background scroll-mt-24 overflow-hidden"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Background animé */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-text mb-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={baseTransition}
          >
            Des devis transparents, 
            <span className="block mt-2 text-primary">
              sans perte de temps.
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-text/70 max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ ...baseTransition, delay: 0.1 }}
          >
            Chaque entreprise est unique, votre offre doit l'être aussi. Melioz vous propose différentes formules modulables afin que vous trouviez l'option idéale pour votre entreprise.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-2xl transition-all duration-300 p-6 sm:p-8 overflow-hidden group ${
                plan.popular
                  ? 'bg-background/60 backdrop-blur-sm border-2 border-accent shadow-xl shadow-accent/10 md:scale-105 lg:scale-110'
                  : 'bg-background/60 backdrop-blur-sm border border-secondary/20 shadow-soft hover:shadow-lg hover:border-secondary'
              }`}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ ...baseTransition, delay: 0.16 + index * 0.08 }}
              whileHover={{ y: -8, scale: plan.popular ? 1.08 : 1.03 }}
            >
              {/* Effet de brillance */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                initial={{ x: '-100%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.6 }}
              />
              
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    className="flex items-center gap-2 px-4 py-2 bg-accent rounded-full shadow-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 15, -15, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Star className="w-4 h-4 text-white fill-white" />
                    </motion.div>
                    <span className="text-white font-bold text-sm">PLUS POPULAIRE</span>
                  </motion.div>
                </motion.div>
              )}

              <div className="mb-6 relative z-10">
                <h3 className="text-2xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
                  {plan.name}
                </h3>
                <p className="text-text/70 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8 relative z-10">
                <motion.div
                  className="flex items-baseline gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {plan.price === 'Sur devis' ? (
                    <span className="text-4xl font-bold text-text">{plan.price}</span>
                  ) : (
                    <>
                      <motion.span
                        className="text-5xl font-bold text-text"
                        animate={{
                          scale: [1, 1.02, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3,
                        }}
                      >
                        {plan.price}€
                      </motion.span>
                      <span className="text-text/70">HT</span>
                    </>
                  )}
                </motion.div>
              </div>

              <ul className="space-y-4 mb-8 relative z-10">
                {plan.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-3 group/feature"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewport}
                    transition={{ delay: 0.2 + idx * 0.05 }}
                    whileHover={{ x: 4 }}
                  >
                    <motion.div
                      whileHover={{ rotate: [0, 10, -10, 0], scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-accent' : 'text-primary'}`} />
                    </motion.div>
                    <span className="text-text/70 group-hover/feature:text-text transition-colors">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => scrollToSection('cta')}
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-accent text-white hover:shadow-lg hover:shadow-accent/20 hover:bg-opacity-90'
                    : 'bg-primary/10 text-text border border-secondary/20 hover:bg-primary/20'
                }`}
              >
                {plan.price === 'Sur devis' ? 'Nous contacter' : 'Démarrer'}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ ...baseTransition, delay: 0.32 }}
        >
          <p className="text-text/70 mb-4">
            Tous les prix incluent : hébergement, certificat SSL, nom de domaine (.fr ou .com)
          </p>
          <p className="text-sm text-text/50">
            Paiement en 2 ou 3 fois sans frais possible
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
