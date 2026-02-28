import { ArrowRight, MapPin } from 'lucide-react';

export default function ContactPreFooter() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background border-t border-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-4 sm:mb-6">
              Contactez-nous dès aujourd'hui
            </h2>
            <p className="text-base sm:text-lg text-text/70 mb-6 sm:mb-8 leading-relaxed">
              Un projet ? Une problématique ? Posez-nous vos questions et obtenez un regard expert sur votre stratégie actuelle.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-accent text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-accent/90 transition-all duration-300 text-sm sm:text-base"
            >
              <span>Nous contacter</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>

          {/* Composant Paris - visuel minimaliste */}
          <div className="relative order-1 lg:order-2">
            <div className="p-6 sm:p-8 bg-text rounded-xl sm:rounded-2xl text-white">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2.5 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold">Paris, France</h3>
                  <p className="text-white/60 text-xs sm:text-sm">Notre terrain de jeu</p>
                </div>
              </div>

              {/* Représentation stylisée de Paris */}
              <div className="relative h-24 sm:h-32 flex items-end justify-center gap-1.5 sm:gap-2">
                {/* Tour Eiffel stylisée */}
                <div className="relative">
                  <div className="w-0.5 sm:w-1 h-16 sm:h-20 bg-primary/40 mx-auto" />
                  <div className="absolute bottom-12 sm:bottom-16 left-1/2 -translate-x-1/2 w-6 sm:w-8 h-0.5 sm:h-1 bg-primary/40" />
                  <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 w-10 sm:w-12 h-0.5 sm:h-1 bg-primary/40" />
                  <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-0.5 sm:h-1 bg-primary/40" />
                  <div className="w-16 sm:w-20 h-1.5 sm:h-2 bg-primary/40 rounded-t-full" />
                </div>

                {/* Bâtiments stylisés */}
                <div className="flex items-end gap-0.5 sm:gap-1">
                  <div className="w-4 sm:w-6 h-10 sm:h-12 bg-secondary/30 rounded-t" />
                  <div className="w-3 sm:w-4 h-14 sm:h-16 bg-secondary/40 rounded-t" />
                  <div className="w-4 sm:w-5 h-8 sm:h-10 bg-secondary/30 rounded-t" />
                  <div className="w-4 sm:w-6 h-12 sm:h-14 bg-secondary/40 rounded-t" />
                  <div className="w-3 sm:w-4 h-6 sm:h-8 bg-secondary/30 rounded-t" />
                </div>
              </div>

              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10">
                <p className="text-white/70 text-xs sm:text-sm">
                  Agence 100% digitale. Échangeons en visioconférence pour discuter de votre projet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
