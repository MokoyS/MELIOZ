/**
 * Wrapper optimisé pour Framer Motion utilisant LazyMotion et domMax
 * Réduit la taille du bundle en chargeant uniquement les fonctionnalités nécessaires
 */
import React from 'react';
import { LazyMotion, domMax } from 'framer-motion';

export const MotionProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LazyMotion features={domMax} strict>
      {children}
    </LazyMotion>
  );
};

// Ré-exporter les composants et hooks nécessaires pour faciliter la migration
export {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
  type Transition,
} from 'framer-motion';
