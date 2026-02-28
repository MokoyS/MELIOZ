import type { LucideIcon } from 'lucide-react';
import { motion } from '../lib/framer-motion';
import { baseTransition, scaleIn, baseViewport } from '../lib/motion';

export interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    subText: string;
    iconColorClass: string;
    iconBgClass: string;
    subTextColorClass: string;
    className?: string;
    isPrimary?: boolean;
    delay?: number;
}

export default function ServiceCard({
    title,
    description,
    icon: Icon,
    subText,
    iconColorClass,
    iconBgClass,
    subTextColorClass,
    className = '',
    isPrimary = false,
    delay = 0,
}: ServiceCardProps) {
    const containerClasses = isPrimary
        ? 'bg-background border-2 border-primary/20 shadow-lg'
        : 'bg-background border border-secondary/20 shadow-soft hover:shadow-lg';

    return (
        <motion.div
            className={`p-8 rounded-2xl transition-all duration-300 group flex flex-col overflow-hidden relative ${containerClasses} ${className}`}
            variants={isPrimary ? scaleIn : undefined}
            initial="hidden"
            whileInView="visible"
            viewport={baseViewport}
            transition={{ ...baseTransition, delay }}
            whileHover={{ y: -8, scale: 1.02 }}
        >
            {/* Effet de brillance animé */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                initial={{ x: '-100%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.6 }}
            />
            
            <motion.div
                className={`p-4 rounded-2xl w-fit mb-6 relative z-10 blob-shape ${iconBgClass}`}
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <motion.div
                    whileHover={{
                        rotate: [0, -5, 5, 0],
                        scale: 1.1,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                    }}
                >
                    <Icon className={`w-7 h-7 ${iconColorClass}`} />
                </motion.div>
            </motion.div>
            
            <h3 className={`font-bold text-text mb-3 relative z-10 ${isPrimary ? 'text-3xl' : 'text-2xl'}`}>
                {title}
            </h3>
            <p className={`text-text/70 mb-4 relative z-10 ${isPrimary ? 'text-lg mb-6' : 'text-sm sm:text-base'}`}>
                {description}
            </p>

            {isPrimary ? (
                <div className="mt-auto space-y-2 text-sm text-text/70 relative z-10" dangerouslySetInnerHTML={{ __html: subText }} />
            ) : (
                <motion.div
                    className={`mt-auto text-sm font-medium relative z-10 ${subTextColorClass}`}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    {subText}
                </motion.div>
            )}
        </motion.div>
    );
}
