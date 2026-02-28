import { Rocket, PenTool, ShieldCheck } from 'lucide-react';
import { motion } from '../lib/framer-motion';
import { baseTransition, baseViewport, fadeInUp } from '../lib/motion';
import ServiceCard from './ServiceCard';

export default function Services() {
  const viewport = baseViewport;

  return (
    <motion.section
      id="services"
      className="relative py-16 sm:py-24 bg-background scroll-mt-24 overflow-hidden"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Background animé */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
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
        
        {/* Lignes décoratives */}
        <motion.div
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ delay: 0.5, duration: 1 }}
        />
        <motion.div
          className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-secondary/10 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ delay: 0.7, duration: 1 }}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-text mb-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={baseTransition}
          >
            Melioz vous accompagne,
            <span className="block mt-2 text-primary">
              dans vos projets
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
            Pour Melioz, un site web ...
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-[minmax(240px,1fr)]">
          <ServiceCard
            title="Sécurité"
            description="Dormez sur vos deux oreilles. Nous gérons les mises à jour techniques et les sauvegardes quotidiennes pour protéger votre activité."
            icon={ShieldCheck}
            subText="Mises à jour, Sauvegardes, Protection."
            iconColorClass="text-primary"
            iconBgClass="bg-primary/10"
            subTextColorClass="text-primary"
            className="md:col-span-1"
            delay={0.18}
          />

          <ServiceCard
            title="Performance"
            description="Un taux de rebond élevé. L'utilisateur se sent perdu, frustré et ferme la page. Vous perdez l'occasion de présenter votre offre."
            icon={Rocket}
            subText="Hébergement Premium, Monitoring 24/7."
            iconColorClass="text-secondary"
            iconBgClass="bg-secondary/10"
            subTextColorClass="text-secondary"
            className="md:col-span-1"
            delay={0.22}
          />

          <ServiceCard
            title="Support Réactif"
            description="L'invisibilité totale. Vous avez un beau site, mais personne ne le trouve. C'est comme avoir une boutique magnifique dans une impasse sans issue."
            icon={PenTool}
            subText="Réponse sous 24h, Modifications illimitées."
            iconColorClass="text-accent"
            iconBgClass="bg-accent/10"
            subTextColorClass="text-accent"
            className="md:col-span-1"
            delay={0.26}
          />
        </div>
      </div>
    </motion.section>
  );
}

