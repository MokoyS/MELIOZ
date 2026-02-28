import type { Variants, Transition } from './framer-motion';

export const baseTransition: Transition = {
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1],
};

export const quickTransition: Transition = {
  duration: 0.3,
  ease: [0.22, 1, 0.36, 1],
};

export const slowTransition: Transition = {
  duration: 0.6,
  ease: [0.33, 1, 0.68, 1],
};

export const baseViewport = { once: true, amount: 0.1 } as const;

// Variants simplifiées - toujours visibles par défaut
export const fadeInUp: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 1, scale: 1 },
  visible: { opacity: 1, scale: 1 },
};

// Animation de float pour les éléments décoratifs
export const floatAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Animation de rotation lente
export const slowRotate = {
  rotate: [0, 360],
  transition: {
    duration: 20,
    repeat: Infinity,
    ease: "linear",
  },
};

// Animation de pulse subtil
export const subtlePulse = {
  scale: [1, 1.05, 1],
  opacity: [0.8, 1, 0.8],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};
