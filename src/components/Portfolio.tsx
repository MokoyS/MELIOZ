import { motion } from '../lib/framer-motion';
import { scrollToSection } from '../lib/scroll';
import { baseViewport, baseTransition, fadeInUp, scaleIn } from '../lib/motion';

export default function Portfolio() {
  const viewport = baseViewport;

  return (
    <motion.section
      id="realisations"
      className="relative py-16 sm:py-24 bg-background border-t border-secondary/20 scroll-mt-24 overflow-hidden"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Background animé */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
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
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={{
            hidden: { opacity: 0, y: 18 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          <motion.div
            className="relative inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6 overflow-hidden group"
            variants={fadeInUp}
            transition={baseTransition}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
              initial={{ x: '-100%' }}
              whileHover={{ x: '200%' }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10 text-primary font-semibold text-sm">PORTFOLIO</span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-text mb-6"
            variants={fadeInUp}
            transition={{ ...baseTransition, delay: 0.08 }}
          >
            Nos dernières
            <span className="block mt-2 text-primary">
              réalisations
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-text/70 max-w-2xl mx-auto"
            variants={fadeInUp}
            transition={{ ...baseTransition, delay: 0.12 }}
          >
            Notre portfolio public est en cours de mise à jour pour refléter nos références les plus stratégiques.
          </motion.p>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-3xl border border-secondary/20 bg-background/60 backdrop-blur-sm px-8 py-14 sm:px-12 sm:py-16 text-center shadow-soft group"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ ...baseTransition, delay: 0.2 }}
          whileHover={{ scale: 1.01, y: -4 }}
        >
          {/* Effet de brillance au hover uniquement */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
            initial={{ x: '-100%' }}
            whileHover={{ x: '200%' }}
            transition={{ duration: 0.6 }}
          />
          
          <div className="absolute inset-0 pointer-events-none">
          </div>

          <div className="relative mx-auto max-w-2xl">
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary"
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ ...baseTransition, delay: 0.22 }}
            >
              En coulisses
            </motion.span>

            <motion.h3
              className="mt-6 text-2xl sm:text-3xl font-semibold text-text"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ ...baseTransition, delay: 0.26 }}
            >
              Nous préparons une sélection de projets qui illustrent nos collaborations les plus exigeantes.
            </motion.h3>

            <motion.p
              className="mt-4 text-base text-text/70"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ ...baseTransition, delay: 0.3 }}
            >
              Chaque mission livrée associe stratégie de marque, performance technique et accompagnement continu. Revenez très bientôt pour découvrir comment nous transformons les vitrines digitales de nos clients en leviers de croissance.
            </motion.p>
          </div>

          <motion.div
            className="relative mt-10 flex items-center justify-center gap-3 text-sm text-text/70 z-10"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ ...baseTransition, delay: 0.36 }}
          >
            <motion.span
              className="inline-flex h-2 w-2 rounded-full bg-primary"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span>Premières références publiques disponibles début 2026</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ ...baseTransition, delay: 0.4 }}
        >
          <motion.button
            onClick={() => scrollToSection('cta')}
            type="button"
            className="group px-6 py-3 text-sm font-semibold text-text/80 hover:text-text transition-colors flex items-center gap-2 mx-auto"
            whileHover={{ x: 4 }}
          >
            <span>Discutons de votre projet confidentiel</span>
            <motion.span
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
