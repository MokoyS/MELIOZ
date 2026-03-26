import React from 'react';
import { LazyMotion, domMax } from 'framer-motion';

export const MotionProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LazyMotion features={domMax}>
      {children}
    </LazyMotion>
  );
};

export {
  motion,
  AnimatePresence,
  type Variants,
  type Transition,
} from 'framer-motion';
