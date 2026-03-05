import { ArrowRight } from 'lucide-react';
import { BlurFade } from '@/components/magicui/blur-fade';

export default function CTADevis() {
  return (
    <section id="appel" className="py-12 sm:py-16 md:py-20 bg-primary/5 border-y border-secondary/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <BlurFade delay={0.1} inView>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-3 sm:mb-4 px-2">
            Prêt à lancer votre projet ?
          </h2>
        </BlurFade>
        <BlurFade delay={0.25} inView>
          <p className="text-base sm:text-lg text-text/70 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Réservez un appel de 30 minutes pour discuter de votre projet. Notre équipe vous accompagne dans la réalisation de vos ambitions digitales.
          </p>
        </BlurFade>
        <BlurFade delay={0.4} inView>
          <a
            href="/book-a-call"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-accent text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-accent/90 transition-all duration-300 text-sm sm:text-base"
          >
            <span>Réserver un appel</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </BlurFade>
      </div>
    </section>
  );
}
