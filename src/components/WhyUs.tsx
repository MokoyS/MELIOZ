import { MagicCard } from '@/components/magicui/magic-card';
import { BorderBeam } from '@/components/magicui/border-beam';

export default function WhyUs() {
  const reasons = [
    {
      title: 'Expertise',
      description: 'La rencontre entre l\'ingénierie web de pointe et la psychologie du marketing. Notre équipe maîtrise les outils de demain pour résoudre vos problématiques d\'aujourd\'hui.',
      barColor: 'bg-primary',
    },
    {
      title: 'Proximité',
      description: 'La distance disparaît au profit de la réactivité. Avec un interlocuteur unique et un suivi en temps réel via nos outils collaboratifs, vous êtes au cœur du projet.',
      barColor: 'bg-secondary',
    },
    {
      title: 'Qualité',
      description: 'Nous visons l\'excellence technique pour des solutions durables. La conception est optimisée pour offrir une expérience sans compromis, aujourd\'hui comme demain.',
      barColor: 'bg-accent',
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
            <div key={reason.title} className="relative">
              <MagicCard
                className="p-6 sm:p-8 bg-background border border-secondary/20 cursor-default"
                gradientColor="#B2C2A2"
                gradientOpacity={0.12}
              >
                <div className="flex flex-col">
                  <div className={`w-8 h-1 ${reason.barColor} rounded-full mb-4`} />
                  <h3 className="font-display font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-text">
                    {reason.title}
                  </h3>
                  <p className="text-sm sm:text-base text-secondary leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </MagicCard>
              <BorderBeam size={150} duration={20} colorFrom="#B2C2A2" colorTo="#E5A186" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
