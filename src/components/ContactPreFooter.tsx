import { ArrowRight, Clock, Zap, MessageCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function ContactPreFooter() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-melioz-lavender/40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Texte */}
          <AnimatedSection>
            <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-6">
              PRÊT À DÉMARRER ?
            </p>
            <h2
              className="font-display font-bold leading-[1.0] tracking-[-0.02em] text-melioz-navy mb-6"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
            >
              Votre projet mérite mieux.
            </h2>
            <p className="font-body text-[17px] leading-[1.7] text-melioz-navy/70 mb-8">
              Parlez-nous de votre idée. MELIOZ vous répond sous 24h.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-melioz-electric text-melioz-offwhite font-body font-medium rounded-xl hover:-translate-y-0.5 transition-transform duration-200"
            >
              Démarrer maintenant
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="font-body text-xs text-melioz-navy/40 mt-3">Pas d&#39;engagement. Premier échange gratuit.</p>
          </AnimatedSection>

          {/* Panneau visuel */}
          <AnimatedSection delay={0.15}>
            <div className="p-8 bg-melioz-offwhite border border-melioz-navy/10 rounded-2xl">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-melioz-electric animate-pulse" />
                <span className="font-body text-[11px] uppercase tracking-widest text-melioz-electric">MELIOZ — disponible</span>
              </div>

              <div className="space-y-3">
                {[
                  { icon: Clock, title: 'Réponse sous 24h', sub: 'Garanti en semaine' },
                  { icon: Zap,   title: 'Premier RDV offert', sub: '30 min pour parler de votre projet' },
                  { icon: MessageCircle, title: 'Collaboration 100% en ligne', sub: 'Visio, outils partagés, suivi en temps réel' },
                ].map(({ icon: Icon, title, sub }) => (
                  <div key={title} className="flex items-center gap-4 p-4 rounded-xl border border-melioz-navy/10 bg-melioz-offwhite">
                    <div className="flex-shrink-0 p-2.5 rounded-lg bg-melioz-electric/10">
                      <Icon className="w-5 h-5 text-melioz-electric" />
                    </div>
                    <div>
                      <div className="font-body font-medium text-sm text-melioz-navy">{title}</div>
                      <div className="font-body text-xs text-melioz-navy/50">{sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-melioz-navy/10 flex items-center justify-between">
                <span className="font-display font-bold text-lg text-melioz-navy tracking-tight">MELIOZ</span>
                <span className="font-body text-xs text-melioz-navy/40">agencemelioz.com</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
