import { Lightbulb, Pencil, Rocket } from 'lucide-react';
import { motion } from '../lib/framer-motion';
import { baseViewport, baseTransition, quickTransition, fadeInUp, fadeIn, scaleIn } from '../lib/motion';
import { NumberTicker } from '@/components/magicui/number-ticker';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: "L'Échange (J-1)",
      description:
        "On discute de votre activité, de vos clients et de vos objectifs autour d'un café (ou en visio). Melioz définit votre stratégie et prépare l'architecture technique.",
      icon: Lightbulb,
    },
    {
      number: '02',
      title: 'La réalisation (J-2 à J-14)',
      description:
        "Nous créons votre design et développons votre site. Vous suivez l'avancée et validez avec nous les étapes clés.Pas de mauvaise surprise à l'arrivée.",
      icon: Pencil,
    },
    {
      number: '03',
      title: 'Le Lancement (J-15)',
      description:
        'Mise en ligne, sécurisation et indexation sur Google. Nous vous formons à la prise en main. Vous êtes prêt à recevoir vos premiers contacts.',
      icon: Rocket,
    },
  ];

  const viewport = baseViewport;

  return (
    <motion.section
      id="process"
      className="relative py-16 sm:py-24 bg-background border-t border-secondary/20 scroll-mt-24 overflow-hidden"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Background animé */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
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
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <motion.div
            className="relative inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6 overflow-hidden group"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ ...quickTransition, delay: 0.08 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
            />
            <span className="relative z-10 text-primary font-semibold text-sm">PROCESSUS SIMPLIFIÉ</span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-text mb-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ ...baseTransition, delay: 0.12 }}
          >
            Votre nouveau site en
            <span className="block mt-2 text-primary">
              3 étapes simples
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-text/70 max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ ...baseTransition, delay: 0.18 }}
          >
            Des sprints agiles, une communication directe et une vision claire, c’est comme ca que Melioz va vous permettre d’atteindre vos objectifs en peu de temps. Nous coupons dans le superflu pour dédier toute notre énergie à ce qui compte vraiment : la réalisation de vos projets.
          </motion.p>
        </div>

        <motion.div
          className="hidden md:block relative mb-16"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ ...baseTransition, delay: 0.18 }}
        >
          <div className="relative h-24 flex items-center justify-between px-16">
            <motion.div
              className="absolute inset-x-16 top-1/2 -translate-y-1/2 h-0.5 rounded-full bg-gradient-to-r from-transparent via-primary/40 to-transparent z-0"
              initial={{ opacity: 0, scaleX: 0.6 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={viewport}
              transition={{ ...baseTransition, delay: 0.2 }}
              style={{ transformOrigin: 'left' }}
            />

            {steps.map((step, index) => (
              <motion.div
                key={`marker-${step.number}`}
                className="relative flex items-center justify-center z-10"
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ ...quickTransition, delay: 0.22 + index * 0.05 }}
              >
                <motion.div
                  className="relative flex items-center justify-center w-16 h-16 rounded-full border border-secondary/20 bg-background text-lg font-semibold text-text shadow-soft"
                  whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.span
                    className="absolute inset-[-8px] rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-transparent opacity-70 blur-lg"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.span
                    className="relative z-10"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  >
                    {step.number}
                  </motion.span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="relative grid gap-8 md:grid-cols-3">
          <motion.div
            className="md:hidden absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-primary/50 via-secondary/40 to-transparent"
            initial={{ opacity: 0, scaleY: 0.6 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={viewport}
            transition={{ ...quickTransition, delay: 0.16 }}
            style={{ originY: 0 }}
          />
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative group pl-12 md:pl-0"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ ...baseTransition, delay: 0.2 + index * 0.06 }}
            >
              <div className="absolute md:hidden left-0 top-6 flex items-center justify-center w-10 h-10 rounded-full border border-secondary/20 bg-background text-xs font-semibold text-text shadow-sm">
                {step.number}
              </div>

              <motion.div
                className="relative z-10 h-full p-6 sm:p-8 pt-10 bg-background/60 backdrop-blur-sm border border-secondary/20 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-200 overflow-hidden group"
                whileHover={{ y: -6, scale: 1.02 }}
              >
                {/* Effet de brillance */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.6 }}
                />
                
                <motion.div
                  className="inline-flex p-4 bg-primary rounded-xl mb-6 relative z-10 shadow-md"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  animate={{
                    boxShadow: [
                      '0 4px 6px rgba(0,0,0,0.1)',
                      '0 8px 12px rgba(178, 194, 162, 0.3)',
                      '0 4px 6px rgba(0,0,0,0.1)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  >
                    <step.icon className="w-7 h-7 text-white" />
                  </motion.div>
                </motion.div>

                <h3 className="text-2xl font-bold text-text mb-4 relative z-10 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-text/70 leading-relaxed text-sm sm:text-base relative z-10">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ ...baseTransition, delay: 0.26 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-text font-semibold">
              Garantie de livraison sous{' '}
              <span className="tabular-nums">
                <NumberTicker value={15} className="font-semibold text-text" />
              </span>
              {' '}jours
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
