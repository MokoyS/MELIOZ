import { ArrowRight, Rocket, PenTool, TrendingUp, Code2 } from 'lucide-react';

export default function ServicesPreview() {
  const services = [
    {
      icon: Code2,
      title: 'Ingénierie & Developpement',
      description: 'Sites vitrines et plateformes sur-mesure conçus pour la vitesse, la sécurité et l’évolutivité. Une infrastructure solide pour soutenir votre croissance.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: PenTool,
      title: 'Expérience & Identité Visuelle',
      description: "Des interfaces haute couture, qui captent l’attention et renforcent votre autorité. Nous concevons des parcours utilisateurs fluides dédiés à l'engagement.",
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: TrendingUp,
      title: 'Visibilité & Acquisition',
      description: "SEO,GEO & SEA. Nous pilotons vos leviers d'acquisition et assurons un suivi analytique rigoureux pour optimiser continuellement vos performances.",
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Rocket,
      title: 'Partenariat & Évolution',
      description: "Le web ne s'arrête pas après le lancement. Nous vous formons et vous conseillons en continu pour que votre site reste un actif performant dans le temps.",
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 bg-background">
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
            <div
              key={service.title}
              className="p-5 sm:p-6 bg-background rounded-xl sm:rounded-2xl border border-secondary/20 shadow-soft hover:shadow-md hover:border-secondary/40 transition-all duration-300"
            >
              <div className={`inline-flex p-2.5 sm:p-3 rounded-lg sm:rounded-xl ${service.bgColor} mb-3 sm:mb-4`}>
                <service.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${service.color}`} />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-text mb-2">{service.title}</h3>
              <p className="text-xs sm:text-sm text-text/70 leading-relaxed">{service.description}</p>
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
