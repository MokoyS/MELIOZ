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
  return (
    <section className="py-32 bg-melioz-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="mb-16">
          <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-4">
            Ce qu'on fait
          </p>
          <h2 className="font-display font-bold text-[48px] md:text-[64px] leading-[1.0] tracking-[-0.02em] text-melioz-navy">
            Nos solutions pour vos<br />enjeux digitaux.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.num} delay={i * 0.08}>
              <div className={`relative h-[320px] ${service.bg} rounded-2xl p-7 flex flex-col overflow-hidden`}>
                {/* M décoratif sur teal et navy */}
                {(service.bg === 'bg-melioz-teal' || service.bg === 'bg-melioz-navy') && (
                  <img
                    src="/images/Melioz Vector.svg"
                    className="absolute top-3 right-3 w-12 opacity-[0.15] pointer-events-none select-none"
                    aria-hidden="true"
                    style={{ filter: service.mFilter }}
                  />
                )}

                {/* Numéro */}
                <span className={`font-display font-bold text-[48px] leading-none opacity-20 mb-4 ${service.text}`}>
                  {service.num}
                </span>

                {/* Titre */}
                <h3 className={`font-display font-bold text-[24px] leading-tight mb-3 ${service.text}`}>
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
