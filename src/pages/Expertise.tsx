import { Code2, Lightbulb, PenTool, Megaphone } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import CTADevis from '../components/CTADevis';

export default function Expertise() {
  const poles = [
    {
      icon: Code2,
      title: 'Ingénierie & Architecture Web',
      description: 'Nous concevons des infrastructures numériques robustes, pensées pour la vitesse et l\'évolutivité. Notre maîtrise des technologies de pointe garantit une sécurité totale et une expérience utilisateur sans compromis.',
      skills: ['React / Next.js', 'TypeScript', 'Node.js', 'Python', 'WordPress', 'Shopify'],
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Lightbulb,
      title: 'Stratégie & Pilotage Produit',
      description: 'Le maillon fort entre votre vision business et la réalité technique. Nous structurons vos idées en plans d\'action concrets, en priorisant l\'impact et le ROI à chaque étape du développement.',
      skills: ['Méthodologie Agile', 'Audit & Cadrage Métier', 'Spécifications Fonctionnelles', 'User Stories & Backlog'],
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: PenTool,
      title: 'Expérience Utilisateur & Identité Visuelle',
      description: 'Le design au service de la performance. Nous créons des interfaces immersives et intuitives qui ne se contentent pas d\'être belles : elles sont conçues pour captiver votre audience et maximiser vos conversions.',
      skills: ['Design System', 'Wireframing', 'Prototypage Haute Fidélité', 'UX & Accessibilité', 'Identité Visuelle Digitale', 'Design de Conversion (CRO)'],
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Megaphone,
      title: 'Acquisition & Intelligence Marketing',
      description: 'Donnez de la puissance à votre visibilité. Nous orchestrons vos leviers d\'acquisition pour attirer un trafic qualifié et pérenniser votre croissance grâce à une analyse fine de la donnée.',
      skills: ['SEO & Stratégie GEO (IA)', ' Campagnes SEA / Social Ads', 'Content Strategy', 'Analyse de Données', 'Automation Marketing'],
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-text">
      <SEO
        title="Notre Expertise Digitale — UX, Dev & Stratégie | MELIOZ"
        description="Rencontrez notre équipe d'experts : Product Owners, Designers UI/UX et Développeurs dédiés à la performance de votre marque."
        canonical="/expertise"
      />
      <Navbar />
      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-semibold text-sm mb-4">
              Notre Expertise
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-text mb-6">
              La convergence des talents, l’exigence du résultat.
            </h1>
            <p className="text-lg text-text/70 max-w-2xl mx-auto">
              Melioz n’est pas qu’une somme de compétences, c’est une synergie d’experts dédiés à la haute performance. Nous fusionnons ingénierie de pointe et design stratégique pour bâtir des écosystèmes numériques qui dominent leur marché.
            </p>
          </div>
        </section>

        {/* Poles d'expertise */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
          <div className="space-y-12">
            {poles.map((pole, index) => (
              <div
                key={pole.title}
                className={`grid gap-8 lg:grid-cols-2 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex p-4 rounded-xl ${pole.bgColor} mb-6`}>
                    <pole.icon className={`w-8 h-8 ${pole.color}`} />
                  </div>
                  <h2 className="text-3xl font-bold text-text mb-4">{pole.title}</h2>
                  <p className="text-lg text-text/70 mb-6">{pole.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {pole.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-background border border-secondary/20 rounded-full text-sm text-text/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className={`aspect-[4/3] ${pole.bgColor} rounded-2xl flex items-center justify-center`}>
                    <pole.icon className={`w-24 h-24 ${pole.color} opacity-30`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CTADevis />
      </main>
      <Footer />
    </div>
  );
}
