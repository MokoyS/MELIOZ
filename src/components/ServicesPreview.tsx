import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    num: '01',
    title: 'Ingénierie & Développement',
    description: 'Sites vitrines et plateformes sur-mesure conçus pour la vitesse, la sécurité et l\'évolutivité. Une infrastructure solide pour soutenir votre croissance.',
    bg: 'bg-melioz-teal',
    text: 'text-melioz-offwhite',
    mFilter: 'brightness(0) invert(1)',
    linkColor: 'text-melioz-electric',
  },
  {
    num: '02',
    title: 'Expérience & Identité Visuelle',
    description: 'Des interfaces haute couture qui captent l\'attention et renforcent votre autorité. Parcours utilisateurs fluides dédiés à l\'engagement.',
    bg: 'bg-melioz-mint',
    text: 'text-melioz-navy',
    mFilter: 'brightness(0) saturate(100%) invert(23%) sepia(29%) saturate(634%) hue-rotate(145deg) brightness(93%) contrast(88%)',
    linkColor: 'text-melioz-electric',
  },
  {
    num: '03',
    title: 'Visibilité & Acquisition',
    description: 'SEO, GEO & SEA. Nous pilotons vos leviers d\'acquisition et assurons un suivi analytique rigoureux pour optimiser continuellement vos performances.',
    bg: 'bg-melioz-navy',
    text: 'text-melioz-offwhite',
    mFilter: 'brightness(0) invert(1)',
    linkColor: 'text-melioz-electric',
  },
];

export default function ServicesPreview() {
  const mRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mScrollY } = useScroll({ target: mRef, offset: ['start end', 'end start'] });
  const mY = useTransform(mScrollY, [0, 1], [50, -50]);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-melioz-offwhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
        <AnimatedSection className="mb-16">
          <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-4">
            Ce qu'on fait
          </p>
          <h2
            className="font-display font-bold leading-[1.0] tracking-[-0.02em] text-melioz-navy"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
          >
            Nos solutions pour vos<br />enjeux digitaux.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.num} delay={i * 0.08}>
              <div className={`relative min-h-[280px] md:h-[320px] ${service.bg} rounded-2xl p-6 md:p-8 flex flex-col overflow-hidden`}>
                {/* M décoratif sur teal et navy */}
                {(service.bg === 'bg-melioz-teal' || service.bg === 'bg-melioz-navy') && (
                  <motion.div ref={mRef} style={{ y: mY }} className="absolute top-3 right-3 pointer-events-none select-none">
                    <img
                      src="/images/Melioz Vector.svg"
                      className="w-12 md:w-14 opacity-10"
                      aria-hidden="true"
                      style={{ filter: service.mFilter }}
                    />
                  </motion.div>
                )}

                {/* Numéro */}
                <span className={`font-display font-bold text-[60px] md:text-[80px] leading-none opacity-20 mb-4 ${service.text}`}>
                  {service.num}
                </span>

                {/* Titre */}
                <h3 className={`font-display font-bold text-[22px] md:text-[26px] lg:text-[28px] leading-tight mb-3 ${service.text}`}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className={`font-body text-[15px] leading-relaxed opacity-70 flex-1 ${service.text}`}>
                  {service.description}
                </p>

                {/* Lien */}
                <a
                  href="/services"
                  className={`inline-flex items-center gap-1 font-body text-sm font-medium mt-4 ${service.linkColor} hover:gap-2 transition-all duration-200`}
                >
                  Découvrir <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
