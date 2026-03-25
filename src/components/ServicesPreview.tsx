import { ArrowRight } from 'lucide-react';
import { MagicCard } from '@/components/magicui/magic-card';
import { BorderBeam } from '@/components/magicui/border-beam';

export default function ServicesPreview() {
  const services = [
    {
      title: 'Ingénierie & Developpement',
      description: "Sites vitrines et plateformes sur-mesure conçus pour la vitesse, la sécurité et l'évolutivité. Une infrastructure solide pour soutenir votre croissance.",
      barColor: 'bg-primary',
      featured: false,
    },
    {
      title: 'Expérience & Identité Visuelle',
      description: "Des interfaces haute couture, qui captent l'attention et renforcent votre autorité. Nous concevons des parcours utilisateurs fluides dédiés à l'engagement.",
      barColor: 'bg-secondary',
      featured: false,
    },
    {
      title: 'Visibilité & Acquisition',
      description: "SEO,GEO & SEA. Nous pilotons vos leviers d'acquisition et assurons un suivi analytique rigoureux pour optimiser continuellement vos performances.",
      barColor: 'bg-accent',
      featured: false,
    },
    {
      title: 'Partenariat & Évolution',
      description: "Le web ne s'arrête pas après le lancement. Nous vous formons et vous conseillons en continu pour que votre site reste un actif performant dans le temps.",
      barColor: 'bg-primary',
      featured: false,
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
            Nos Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-3 sm:mb-4 px-2">
            Nos solutions au services de vos enjeux digitaux
          </h2>
          <p className="text-base sm:text-lg text-text/70 max-w-2xl mx-auto px-2">
            De la conception stratégique à la mise en ligne, nous orchestrons chaque étape de votre projet pour en garantir le succès.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 mb-8 sm:mb-12">
          {services.map((service) => (
            <div key={service.title} className="relative group">
              <MagicCard
                className="p-5 sm:p-6 h-full bg-background border border-secondary/20 cursor-pointer"
                gradientColor="#B2C2A2"
                gradientOpacity={0.15}
              >
                <div className="flex flex-col h-full">
                  <div className={`w-8 h-1 ${service.barColor} rounded-full mb-4`} />
                  <h3 className="font-display font-bold text-base sm:text-lg mb-2 text-text">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary flex-1 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </MagicCard>
              {service.featured && (
                <BorderBeam
                  size={180}
                  duration={12}
                  colorFrom="#B2C2A2"
                  colorTo="#E5A186"
                />
              )}
            </div>
          ))}
        </div>

        <div className="text-center px-4">
          <a
            href="/services"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-background border-2 border-secondary/30 text-text font-semibold rounded-full hover:bg-primary/5 hover:border-secondary transition-all duration-300 text-sm sm:text-base"
          >
            <span>Découvrir tous nos services</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
