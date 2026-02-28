import { Shield, Users, Zap } from 'lucide-react';

export default function WhyUs() {
  const reasons = [
    {
      icon: Zap,
      title: 'Expertise',
      description: 'La rencontre entre l\'ingénierie web de pointe et la psychologie du marketing. Notre équipe maîtrise les outils de demain pour résoudre vos problématiques d\'aujourd\'hui.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Users,
      title: 'Proximité',
      description: 'La distance disparaît au profit de la réactivité. Avec un interlocuteur unique et un suivi en temps réel via nos outils collaboratifs, vous êtes au cœur du projet.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Shield,
      title: 'Qualité',
      description: 'Nous visons l\'excellence technique pour des solutions durables. La conception est optimisée pour offrir une expérience sans compromis, aujourd\'hui comme demain.',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-primary/5 border-y border-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
            Pourquoi Nous ?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-3 sm:mb-4 px-2">
            L'exigence au service de votre croissance.
          </h2>
          <p className="text-base sm:text-lg text-text/70 max-w-2xl mx-auto px-2">
            Nous ne concevons pas seulement des sites, nous bâtissons des outils de performance où chaque détail sert vos objectifs.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="text-center p-6 sm:p-8 bg-background rounded-xl sm:rounded-2xl border border-secondary/20 shadow-soft"
            >
              <div className={`inline-flex p-3 sm:p-4 rounded-lg sm:rounded-xl ${reason.bgColor} mb-4 sm:mb-6`}>
                <reason.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${reason.color}`} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-text mb-2 sm:mb-3">{reason.title}</h3>
              <p className="text-sm sm:text-base text-text/70 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
