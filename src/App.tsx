import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CTADevis from './components/CTADevis';
import ServicesPreview from './components/ServicesPreview';
import AboutSection from './components/AboutSection';
import WhyUs from './components/WhyUs';
import ContactPreFooter from './components/ContactPreFooter';
import Footer from './components/Footer';
import SEO from './components/SEO';
import { useLenis } from './hooks/useLenis';

function App() {
  useLenis();
  return (
    <div className="min-h-screen bg-background text-text overflow-x-hidden relative">
      <SEO
        title="MELIOZ — Agence Digitale Paris | Design, Dev & Stratégie"
        description="Agence digitale à Paris spécialisée en design UX/UI, développement web et stratégie produit. MELIOZ transforme vos ambitions en présence digitale remarquable."
        canonical="/"
      />
      {/* Effets d'ambiance subtils avec la nouvelle palette */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Forme organique subtile - Primary */}
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blob-shape blur-[120px]" />

        {/* Forme organique subtile - Secondary */}
        <div className="absolute top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-secondary/5 blob-shape-2 blur-[100px]" />
      </div>

      <Navbar />
      <Hero />
      <ServicesPreview />
      <AboutSection />
      <CTADevis />
      <WhyUs />
      {/* <ClientsLogos /> */}
      <ContactPreFooter />
      <Footer />
    </div>
  );
}

export default App;
