import { ArrowRight } from 'lucide-react';
import FloatingBlocks from './FloatingBlocks';
import { BlurFade } from '@/components/magicui/blur-fade';

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background border-t border-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 items-center">
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
                Affranchis des contraintes géographiques, nous accompagnons les entreprises ambitieuses partout où la performance digitale est un enjeu. Notre modèle 100% digital n'est pas une barrière. Il nous permet une hyper-réactivité et une collaboration en immersion totale avec vos équipes. Vous bénéficiez d'un suivi personnalisé et d'une transparence que la distance ne fait que renforcer.
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

          <BlurFade delay={0.2} inView className="relative aspect-square flex items-center justify-center order-1 lg:order-2 min-h-[250px] sm:min-h-[300px] lg:min-h-0">
            <FloatingBlocks />
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
