import { CheckCircle2, XCircle } from 'lucide-react';
import { motion } from '../lib/framer-motion';
import { baseViewport, baseTransition, quickTransition, fadeInUp } from '../lib/motion';

export default function ProblemSolution() {
  const pains = [
    {
      title: 'Non "Responsive" (Inadapté au mobile)"',
      description: "La perte de plus de 60% de vos clients potentiels. Aujourd'hui, la majorité des recherches se font sur mobile. Si votre site n'est pas adapté, vous êtes invisible pour eux.",
    },
    {
      title: 'Chargement lent',
      description: '40% de perte de trafic immédiate',
    },
    {
      title: 'UX  complexe',
      description: 'Un taux de rebond élevé. L\'utilisateur se sent perdu, frustré et ferme la page. Vous perdez l\'occasion de présenter votre offre.',
    },
    {
      title: 'Structure invisible pour Google (Mauvais SEO)',
      description: "L'invisibilité totale. Vous avez un beau site, mais personne ne le trouve. C'est comme avoir une boutique magnifique dans une impasse sans issue.",
    },
  ];

  const gains = [
    {
      title: 'Optimisation Technique',
      description: "nous optimisons le code et les images pour satisfaire l'impatience des internautes et les exigences de Google (Core Web Vitals).",
    },
    {
      title: 'Identité Visuelle Cohérente et Moderne',
      description: 'L\'atout Melioz : Votre site est votre commercial 24/7. Nous lui donnons tout les points clés pour crédibiliser votre discours et convertir. ',
    },
    {
      title: 'Navigation Intuitive',
      description: 'L\'atout Melioz : Nous simplifions l\'arborescence. L\'utilisateur ne doit jamais se demander "Où dois-je cliquer ?". Nous guidons sa main.',
    },
  ];

  const viewport = baseViewport;

  return (
    <motion.section
      className="relative py-16 sm:py-24 bg-background overflow-hidden"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Background animé */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
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
            Votre site actuel vous coûte-t-il
            <span className="block mt-2 text-primary">
              des clients ?
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
            À l'ère du tout-numérique, votre site est souvent la première poignée de main avec vos prospects. Quelle impression leur donnez-vous ?
          </motion.p>
        </div>

        <div className="relative grid gap-6 md:gap-8 md:grid-cols-[1fr,1.05fr]">
          <motion.div
            className="p-7 sm:p-9 rounded-3xl border border-accent/30 bg-background/60 backdrop-blur-sm relative overflow-hidden shadow-soft group"
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ ...baseTransition, delay: 0.16 }}
            whileHover={{ scale: 1.02, y: -4 }}
          >
            {/* Effet de brillance animé */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent opacity-0 group-hover:opacity-100"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            />
            
            <motion.div
              className="absolute -top-16 -right-10 w-36 h-36 bg-accent/5 blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              aria-hidden="true"
            />
            
            <div className="flex items-center justify-between mb-7 relative z-10">
              <div>
                <motion.p
                  className="text-xs uppercase tracking-[0.25em] text-accent mb-2 font-bold"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Le Web d'Hier
                </motion.p>
                <h3 className="text-2xl font-bold text-text">Le site "Bricolé"</h3>
              </div>
              <motion.div
                className="p-3 rounded-2xl bg-accent/10 border border-accent/20"
                whileHover={{ rotate: [0, -15, 15, 0], scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <XCircle className="w-6 h-6 text-accent" />
              </motion.div>
            </div>

            <div className="space-y-6">
              {pains.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex gap-4 group/item relative z-10"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{ ...quickTransition, delay: 0.24 + index * 0.05 }}
                  whileHover={{ x: 4 }}
                >
                  <motion.span
                    className="mt-1.5 text-accent"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <XCircle className="w-5 h-5" />
                  </motion.span>
                  <div>
                    <h4 className="text-base font-semibold text-text group-hover/item:text-accent transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-text/70 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="p-7 sm:p-9 rounded-3xl border border-primary/30 bg-background/60 backdrop-blur-sm relative overflow-hidden shadow-soft group"
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ ...baseTransition, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -4 }}
          >
            {/* Effet de brillance animé */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            />
            
            <motion.div
              className="absolute -top-16 -right-10 w-36 h-36 bg-primary/10 blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -90, -180, -270, -360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              aria-hidden="true"
            />
            
            <div className="flex items-center justify-between mb-7 relative z-10">
              <div>
                <motion.p
                  className="text-xs uppercase tracking-[0.25em] text-primary mb-2 font-bold"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  L'Approche Studio 2M
                </motion.p>
                <h3 className="text-2xl font-bold text-text">La Vitrine Performance</h3>
              </div>
              <motion.div
                className="p-3 rounded-2xl bg-primary/10 border border-primary/20"
                whileHover={{ rotate: [0, 15, -15, 0], scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </motion.div>
            </div>

            <div className="space-y-6">
              {gains.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex gap-4 group/item relative z-10"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{ ...quickTransition, delay: 0.26 + index * 0.05 }}
                  whileHover={{ x: -4 }}
                >
                  <motion.span
                    className="mt-1.5 text-primary"
                    whileHover={{ rotate: [0, 10, -10, 0], scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <CheckCircle2 className="w-5 h-5" />
                  </motion.span>
                  <div>
                    <h4 className="text-base font-semibold text-text group-hover/item:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-text/70 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
