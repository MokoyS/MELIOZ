import { Construction } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function Realisations() {
  return (
    <div className="min-h-screen bg-background text-text">
      <SEO
        title="Nos Réalisations | MELIOZ Agence Paris"
        description="Nos réalisations arrivent bientôt."
        canonical="/realisations"
      />
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <div className="p-5 bg-primary/10 border border-primary/20 rounded-2xl mb-6 inline-flex">
          <Construction className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-text mb-3">En construction</h1>
        <p className="text-text/60 text-lg max-w-sm">
          Cette page sera bientôt disponible. Revenez nous voir très vite !
        </p>
      </main>
      <Footer />
    </div>
  );
}
