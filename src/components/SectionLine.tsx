import { motion } from '../lib/framer-motion';

interface SectionLineProps {
  className?: string;
}

export default function SectionLine({ className = '' }: SectionLineProps) {
  return (
    <div className="overflow-hidden">
      <motion.div
        className={`h-px ${className}`}
        style={{ originX: '0%' }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
    </div>
  );
}
