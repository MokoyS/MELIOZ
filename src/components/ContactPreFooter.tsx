import { ArrowRight, Clock, Zap, MessageCircle } from 'lucide-react';
import { BlurFade } from '@/components/magicui/blur-fade';

export default function ContactPreFooter() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white border-t border-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1">
            <BlurFade delay={0.1} inView>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-4 sm:mb-6">
                Contactez-nous dès aujourd'hui
              </h2>
            </BlurFade>
            <BlurFade delay={0.25} inView>
              <p className="text-base sm:text-lg text-text/70 mb-6 sm:mb-8 leading-relaxed">
                Un projet ? Une problématique ? Posez-nous vos questions et obtenez un regard expert sur votre stratégie actuelle.
              </p>
            </BlurFade>
            <BlurFade delay={0.4} inView>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-accent text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-accent/90 transition-all duration-300 text-sm sm:text-base"
              >
                <span>Nous contacter</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </BlurFade>
          </div>

          {/* Panneau visuel */}
          <BlurFade delay={0.2} inView className="relative order-1 lg:order-2">
            <div className="relative p-6 sm:p-8 bg-background border border-secondary/20 rounded-2xl overflow-hidden">

              {/* Blobs ambient */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/15 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-accent/10 rounded-full blur-2xl pointer-events-none" />

              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Melioz — disponible</span>
              </div>

              {/* Indicateurs */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-2xl border border-primary/15">
                  <div className="p-2.5 bg-primary/15 rounded-xl flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-bold text-text">Réponse sous 24h</div>
                    <div className="text-text/50 text-xs">Garanti en semaine</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-accent/5 rounded-2xl border border-accent/15">
                  <div className="p-2.5 bg-accent/15 rounded-xl flex-shrink-0">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-bold text-text">Premier RDV offert</div>
                    <div className="text-text/50 text-xs">30 min pour parler de votre projet</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-secondary/5 rounded-2xl border border-secondary/15">
                  <div className="p-2.5 bg-secondary/15 rounded-xl flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-bold text-text">Collaboration 100% en ligne</div>
                    <div className="text-text/50 text-xs">Visio, outils partagés, suivi en temps réel</div>
                  </div>
                </div>
              </div>

              {/* Signature */}
              <div className="pt-5 border-t border-secondary/20 flex items-center justify-between">
                <div className="text-lg font-bold tracking-tight text-text">MELIOZ</div>
                <div className="text-xs text-text/40">agencemelioz.com</div>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
