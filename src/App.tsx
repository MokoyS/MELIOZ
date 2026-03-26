import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CTADevis from './components/CTADevis';
import ServicesPreview from './components/ServicesPreview';
import AboutSection from './components/AboutSection';
import WhyUs from './components/WhyUs';
import ContactPreFooter from './components/ContactPreFooter';
import Footer from './components/Footer';
import SEO from './components/SEO';
import SectionLine from './components/SectionLine';

function App() {
  return (
    <div className="min-h-screen bg-melioz-offwhite text-melioz-navy overflow-x-hidden">
      <SEO
        title="MELIOZ — Agence Digitale Paris | Design, Dev & Stratégie"
        description="Agence digitale à Paris spécialisée en design UX/UI, développement web et stratégie produit. MELIOZ transforme vos ambitions en présence digitale remarquable."
        canonical="/"
      />
      <Navbar />
      <main id="main-content">
        <Hero />
        <ServicesPreview />
        <SectionLine className="bg-melioz-navy/10 mx-4 sm:mx-6" />
        <AboutSection />
        <CTADevis />
        <SectionLine className="bg-melioz-navy/10 mx-4 sm:mx-6" />
        <WhyUs />
        <SectionLine className="bg-melioz-navy/10 mx-4 sm:mx-6" />
        <ContactPreFooter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
