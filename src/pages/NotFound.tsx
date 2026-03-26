// src/pages/NotFound.tsx
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-melioz-navy text-melioz-offwhite">
      <Navbar />
      {/* flex-1 remplace min-h-screen sur main pour éviter le double overflow */}
      <main className="relative flex flex-col flex-1 items-center justify-center overflow-hidden px-4">
        {/* M watermark */}
        <img
          src="/images/Melioz Vector.svg"
          className="absolute inset-0 m-auto w-[500px] opacity-[0.06] pointer-events-none select-none"
          aria-hidden="true"
          style={{ filter: 'brightness(0) invert(1)' }}
        />

        <div className="relative z-10 text-center">
          <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-6">Erreur</p>
          <h1 className="font-display font-extrabold text-[120px] md:text-[180px] leading-[0.9] tracking-[-0.04em] text-melioz-offwhite mb-6">
            404
          </h1>
          <p className="font-body text-[18px] text-melioz-offwhite/60 max-w-sm mb-10">
            Cette page n'existe pas ou a été déplacée.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 font-body text-sm font-medium text-melioz-electric hover:gap-3 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
