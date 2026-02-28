import { motion } from '../lib/framer-motion';
import { MousePointer2, PenTool, MapPin } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const tileVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  hover: {
    y: -4,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Animation blob pour la tuile "Mindset"
const blobVariants = {
  animate: {
    scale: [1, 1.1, 0.9, 1],
    rotate: [0, 5, -5, 0],
    borderRadius: [
      '60% 40% 30% 70% / 60% 30% 70% 40%',
      '30% 60% 70% 40% / 50% 60% 30% 60%',
      '50% 50% 50% 50% / 50% 50% 50% 50%',
      '60% 40% 30% 70% / 60% 30% 70% 40%',
    ],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Animation de rotation pour le badge
const rotateVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

// Animation pulse pour le point sur la carte
const pulseVariants = {
  animate: {
    scale: [1, 1.3, 1],
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// SVG simplifié de Paris
const ParisMap = () => (
  <svg
    viewBox="0 0 200 200"
    className="w-full h-full"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Lignes simplifiées représentant la Seine et les arrondissements */}
    <path
      d="M 50 100 Q 100 80 150 100"
      stroke="currentColor"
      strokeWidth="2"
      strokeOpacity="0.3"
      fill="none"
    />
    <path
      d="M 40 120 Q 100 100 160 120"
      stroke="currentColor"
      strokeWidth="2"
      strokeOpacity="0.3"
      fill="none"
    />
    {/* Point central pour Paris */}
    <motion.circle
      cx="100"
      cy="110"
      r="4"
      fill="currentColor"
      variants={pulseVariants}
      animate="animate"
    />
    <motion.circle
      cx="100"
      cy="110"
      r="8"
      fill="currentColor"
      fillOpacity="0.2"
      variants={pulseVariants}
      animate="animate"
    />
  </svg>
);

export default function BentoAbout() {
  return (
    <motion.div
      className="aspect-square grid grid-cols-2 gap-3 sm:gap-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Tuile 1: Expertise - Top Left */}
      <motion.div
        className="relative bg-gradient-to-br from-primary/20 via-background to-secondary/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-secondary/20 backdrop-blur-sm shadow-soft overflow-hidden group cursor-pointer"
        variants={tileVariants}
        whileHover="hover"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="p-1.5 sm:p-2 bg-primary/20 rounded-xl">
              <MousePointer2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </div>
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <PenTool className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
            </motion.div>
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-text">Design & Code</h3>
        </div>
      </motion.div>

      {/* Tuile 2: Local - Bottom Left */}
      <motion.div
        className="relative bg-gradient-to-br from-secondary/15 via-background to-primary/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-secondary/20 backdrop-blur-sm shadow-soft overflow-hidden group cursor-pointer"
        variants={tileVariants}
        whileHover="hover"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div className="h-20 sm:h-24 mb-3 sm:mb-4 text-secondary/40">
            <ParisMap />
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-text">Local & Réactif</h3>
        </div>
      </motion.div>

      {/* Tuile 3: Mindset - Top Right (Tall) */}
      <motion.div
        className="relative bg-gradient-to-br from-accent/15 via-background to-primary/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-secondary/20 backdrop-blur-sm shadow-soft overflow-hidden group cursor-pointer row-span-2"
        variants={tileVariants}
        whileHover="hover"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center">
          <motion.div
            className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-accent/30 via-primary/20 to-secondary/20 rounded-full mb-4 sm:mb-6"
            variants={blobVariants}
            animate="animate"
          />
          <h3 className="text-base sm:text-lg font-semibold text-text italic font-display text-center">
            Thinking out of the box
          </h3>
        </div>
      </motion.div>

      {/* Tuile 4: Commitment - Bottom Right */}
      <motion.div
        className="relative bg-gradient-to-br from-primary/20 via-background to-accent/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-secondary/20 backdrop-blur-sm shadow-soft overflow-hidden group cursor-pointer"
        variants={tileVariants}
        whileHover="hover"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center">
          <motion.div
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-primary/40 flex items-center justify-center mb-3 sm:mb-4"
            variants={rotateVariants}
            animate="animate"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary/30 to-secondary/20 flex items-center justify-center">
              <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-secondary" />
            </div>
          </motion.div>
          <h3 className="text-base sm:text-lg font-semibold text-text text-center">
            100% Sur-mesure
          </h3>
        </div>
      </motion.div>
    </motion.div>
  );
}
