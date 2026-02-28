import { motion } from '../lib/framer-motion';
import { baseTransition, baseViewport, fadeInUp } from '../lib/motion';
import { Code2, Megaphone, TrendingUp } from 'lucide-react';

export default function Team() {
  const viewport = baseViewport;

  return (
    <motion.section
      id="team"
      className="relative py-16 sm:py-24 bg-background border-t border-secondary/20 scroll-mt-24 overflow-hidden"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Background animé */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
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
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ ...baseTransition, delay: 0.18 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-6 leading-tight">
            Un expert Tech + Un expert Marketing + 
            <span className="block sm:inline sm:ml-2 text-primary">
            Un expert Traffic digital 
            </span>
          </h2>
          <p className="text-xl text-text/70 mb-8">
            Pourquoi choisir Melioz plutôt qu'un freelance isolé ou une grosse agence ?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <motion.div
            className="bg-background/60 backdrop-blur-sm p-8 rounded-3xl border border-secondary/20 shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden relative"
            variants={fadeInUp}
            whileHover={{ y: -8, scale: 1.02, rotate: [0, 1, -1, 0] }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Effet de brillance */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
              initial={{ x: '-100%' }}
              whileHover={{ x: '200%' }}
              transition={{ duration: 0.6 }}
            />
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <motion.div
                className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: [0, -15, 15, 0], scale: 1.15 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Code2 className="w-8 h-8 text-primary" />
                </motion.div>
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors">Maxime</h3>
                <span className="text-sm font-medium text-primary">Expert Tech</span>
              </div>
            </div>
            <p className="text-text/70 leading-relaxed relative z-10">
              Souvent, un développeur sait coder mais ne sait pas vendre. Maxime garantit un site robuste, rapide et sans bug. Il maîtrise les technologies les plus avancées pour que votre site soit une Formule 1.
            </p>
          </motion.div>

          <motion.div
            className="bg-background/60 backdrop-blur-sm p-8 rounded-3xl border border-secondary/20 shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden relative"
            variants={fadeInUp}
            whileHover={{ y: -8, scale: 1.02, rotate: [0, -1, 1, 0] }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
              initial={{ x: '-100%' }}
              whileHover={{ x: '200%' }}
              transition={{ duration: 0.6 }}
            />
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <motion.div
                className="p-3 bg-secondary/10 rounded-2xl group-hover:bg-secondary/20 transition-colors"
                whileHover={{ rotate: [0, 15, -15, 0], scale: 1.15 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  animate={{
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <Megaphone className="w-8 h-8 text-secondary" />
                </motion.div>
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-text group-hover:text-secondary transition-colors">Mathias</h3>
                <span className="text-sm font-medium text-secondary">Expert Marketing</span>
              </div>
            </div>
            <p className="text-text/70 leading-relaxed relative z-10">
              Un marketeur sait vendre mais ne maîtrise pas la technique. Mathias s'assure que votre site parle à vos clients et déclenche des ventes. Il transforme vos visiteurs en prospects qualifiés.
            </p>
          </motion.div>

          <motion.div
            className="bg-background/60 backdrop-blur-sm p-8 rounded-3xl border border-secondary/20 shadow-sm hover:shadow-md transition-all duration-300 group md:col-span-2 lg:col-span-1 overflow-hidden relative"
            variants={fadeInUp}
            whileHover={{ y: -8, scale: 1.02, rotate: [0, 1, -1, 0] }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
              initial={{ x: '-100%' }}
              whileHover={{ x: '200%' }}
              transition={{ duration: 0.6 }}
            />
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <motion.div
                className="p-3 bg-accent/10 rounded-2xl group-hover:bg-accent/20 transition-colors"
                whileHover={{ rotate: [0, -15, 15, 0], scale: 1.15 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <TrendingUp className="w-8 h-8 text-accent" />
                </motion.div>
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-text group-hover:text-accent transition-colors">Mateo</h3>
                <span className="text-sm font-medium text-accent">Expert Traffic Digital</span>
              </div>
            </div>
            <p className="text-text/70 leading-relaxed relative z-10">
              Nous créons votre design et développons votre site. Vous suivez l'avancée et validez avec nous les étapes clés. Pas de mauvaise surprise à l'arrivée.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
