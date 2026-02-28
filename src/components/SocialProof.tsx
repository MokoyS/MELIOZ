import { motion } from '../lib/framer-motion';
import { baseTransition, baseViewport, fadeInUp } from '../lib/motion';
import OptimizedImage from './OptimizedImage';

export default function SocialProof() {

  
  const technologies = [
    {
      name: 'Figma',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      description: 'Maquettes précises et design collaboratif instantané.',
    },
    {
      name: 'Next.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      description: 'Framework React ultra-rapide avec SEO intégré et rendu hybride.',
    },
    {
      name: 'Vercel',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
      description: 'Déploiement instantané et CDN mondial optimisé pour Next.js.',
    },
    {
      name: 'Tailwind CSS',
      logo: '/images/logos-tech/tailwind-logo.png',
      description: 'Classes utilitaires pour un design sur mesure et responsive.',
    },
    {
      name: 'React',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      description: 'Librairie moderne pour des interfaces dynamiques et maintenables.',
    },
    {
      name: 'Framer Motion',
      logo: '/images/logos-tech/fm-logo.svg',
      description: 'Animations fluides et interactions immersives pour vos pages.',
    },
  ];

  const viewport = baseViewport;

  return (

    

    
    <motion.section
      className="relative overflow-hidden py-16 sm:py-24 bg-background border-b border-secondary/20"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Background animé avec loops */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[10%] left-[-10%] w-[30vw] h-[30vw] bg-primary/10 blob-shape blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 30, 0],
            y: [0, 20, 0],
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
          className="text-center max-w-3xl mx-auto mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ ...baseTransition, delay: 0.18 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Des technologies de pointe pour votre
            <span className="block sm:inline sm:ml-2 text-primary">
              croissance digitale
            </span>
          </h2>
          <p className="text-base sm:text-lg text-text/70">
            Des technologies de pointe pour un site ultra-rapide que Google adore.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 sm:gap-6 lg:gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              className="flex flex-col items-center justify-center p-6 bg-background/60 backdrop-blur-sm border border-secondary/20 rounded-xl shadow-soft hover:shadow-lg transition-all duration-300 group text-center overflow-hidden relative"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ ...baseTransition, delay: 0.24 + index * 0.05 }}
              whileHover={{ y: -8, scale: 1.05, rotate: [0, 1, -1, 0] }}
            >
              {/* Effet de brillance au hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                initial={{ x: '-100%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.6 }}
              />
              
              <motion.div
                className="relative z-10"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <OptimizedImage
                  src={tech.logo}
                  alt={`Logo ${tech.name}`}
                  className="h-12 w-12 object-contain mb-3"
                />
              </motion.div>
              
              <span className="relative z-10 text-text font-semibold text-base">{tech.name}</span>
              <p className="mt-2 text-sm text-text/70 leading-snug relative z-10">{tech.description}</p>
              
              {/* Animation de pulse subtile */}
              <motion.div
                className="absolute inset-0 border-2 border-primary/20 rounded-xl"
                animate={{
                  opacity: [0, 0.5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
