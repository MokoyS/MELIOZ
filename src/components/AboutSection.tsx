import { ArrowRight, Zap, Users, Star } from 'lucide-react';
import { BlurFade } from '@/components/magicui/blur-fade';

const stats = [
  {
    icon: Zap,
    value: '48h',
    label: 'Délai de réponse moyen',
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/20',
  },
  {
    icon: Users,
    value: '100%',
    label: 'Satisfaction client',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
    border: 'border-secondary/20',
  },
  {
    icon: Star,
    value: '+20',
    label: 'Projets livrés',
    color: 'text-primary',
    bg: 'bg-primary/20',
    border: 'border-primary/30',
  },
];

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background border-t border-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">

          {/* Left — texte */}
          <div className="order-2 lg:order-1">
            <BlurFade delay={0.1} inView>
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
                À propos
              </span>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-4 sm:mb-6">
                Melioz, un collectif au service de votre écosystème digital.
              </h2>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <p className="text-base sm:text-lg text-text/70 mb-4 sm:mb-6 leading-relaxed">
                Chez Melioz, nous croyons que chaque entreprise mérite une présence digitale à la hauteur de ses ambitions.
                Notre équipe d'experts combine créativité, expertise technique et vision stratégique pour donner une structure et une performance concrètes à vos ambitions.
              </p>
            </BlurFade>
            <BlurFade delay={0.4} inView>
              <p className="text-base sm:text-lg text-text/70 mb-6 sm:mb-8 leading-relaxed">
                Affranchis des contraintes géographiques, nous accompagnons les entreprises ambitieuses partout où la performance digitale est un enjeu. Notre modèle 100% digital n'est pas une barrière — il nous permet une hyper-réactivité et une collaboration en immersion totale avec vos équipes.
              </p>
            </BlurFade>
            <BlurFade delay={0.5} inView>
              <a
                href="/agence"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors text-sm sm:text-base"
              >
                <span>Découvrir notre histoire</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </BlurFade>
          </div>

          {/* Right — illustration */}
          <BlurFade delay={0.3} inView className="order-1 lg:order-2">
            <div className="relative flex flex-col gap-4 p-6 sm:p-8">

              {/* Blobs décoratifs */}
              <div className="absolute -top-8 -right-8 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

              {/* Badge flottant */}
              <div className="absolute top-0 right-4 flex items-center gap-2 bg-background border border-secondary/30 rounded-full px-3 py-1.5 shadow-sm text-xs font-semibold text-text/70">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse inline-block" />
                100% Digital
              </div>

              {/* Cartes stats */}
              <div className="flex flex-col gap-4 mt-8">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`flex items-center gap-4 p-4 sm:p-5 bg-background rounded-2xl border ${stat.border} shadow-sm hover:shadow-md transition-shadow duration-300`}
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <div className={`flex-shrink-0 w-11 h-11 rounded-xl ${stat.bg} flex items-center justify-center`}>
                      <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <div>
                      <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                      <div className="text-sm text-text/60">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Citation décorative */}
              <div className="mt-2 p-4 sm:p-5 bg-primary/10 border border-primary/20 rounded-2xl">
                <p className="text-sm text-text/70 italic leading-relaxed">
                  "L'excellence digitale ne devrait pas être l'apanage des grands groupes."
                </p>
                <p className="text-xs text-secondary font-semibold mt-2">— L'équipe Melioz</p>
              </div>

            </div>
          </BlurFade>

        </div>
      </div>
    </section>
  );
}
