import { ArrowRight, Heart, Target, Lightbulb } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function Agence() {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'Nous aimons ce que nous faisons. Chaque projet est une opportunité de créer quelque chose d\'unique et impactant.',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque détail, de la conception à la livraison, sans compromis sur la qualité.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Nous restons à la pointe des technologies et des tendances pour offrir des solutions modernes et performantes.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-text">
      <SEO
        title="L'Agence MELIOZ — Équipe & Valeurs | Paris"
        description="Agence digitale 100% en ligne basée à Paris, spécialisée dans la création de sites web sur-mesure pour TPE et PME. Design, développement et stratégie digitale."
        canonical="/agence"
      />
      <Navbar />
      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary font-semibold text-sm mb-4">
                À propos de Melioz
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-text mb-6">
                Une agence digitale à taille humaine
              </h1>
              <p className="text-lg text-text/70 mb-8 leading-relaxed">
                Melioz accompagne les organisations ambitieuses dans le déploiement de stratégies web d'envergure. Nous avons fait du modèle « Digital-First » notre plus grand levier de réactivité : nous fusionnons haute ingénierie technique et design de pointe pour bâtir des actifs numériques qui soutiennent réellement votre croissance. Notre approche repose sur une immersion totale et une proximité digitale absolue, transformant chaque défi technique en un résultat mesurable pour votre activité.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-colors"
              >
                Nous rencontrer
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10 rounded-3xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-7xl font-bold text-primary mb-4">M</div>
                  <div className="text-2xl font-semibold text-text">MELIOZ</div>
                  <div className="text-sm text-text/60 mt-2">100% Digital • Paris</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </div>
        </section>

        {/* Notre Histoire */}
        <section className="py-16 bg-primary/5 border-y border-secondary/20 mb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold text-sm mb-4">
                Notre Histoire
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-text mb-6">
                De la passion à l'expertise
              </h2>
            </div>
            <div className="prose prose-lg mx-auto text-text/70">
              <p className="mb-6">
                Melioz est née d'une conviction simple : chaque entreprise mérite un écosystème numérique à la hauteur de ses ambitions. Nous croyons que la performance ne doit pas être un luxe, mais un standard pour ceux qui visent l'excellence.
              </p>
              <p className="mb-6">
                Fondée en 2025 par un collectif engagé de développeurs et de designers, notre agence s'est imposée comme un partenaire stratégique pour les organisations souhaitant affirmer leur leadership en ligne.
              </p>
              <p>
                Aujourd'hui, nous forgeons le succès de projets d'envergure, de la définition d'identités visuelles au déploiement de plateformes complexes. Notre rayonnement se mesure désormais à travers la réussite et la pérennité des écosystèmes que nous bâtissons chaque jour.
              </p>
            </div>
          </div>
        </section>

        {/* Nos Valeurs */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-semibold text-sm mb-4">
              Nos Valeurs
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
              Ce qui fait vivre <span className="text-primary">Melioz</span>
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-8 bg-background rounded-2xl border border-secondary/20 shadow-soft"
              >
                <div className={`inline-flex p-4 rounded-xl ${value.bgColor} mb-6`}>
                  <value.icon className={`w-8 h-8 ${value.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-text mb-3">{value.title}</h3>
                <p className="text-text/70">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Notre Vision */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-20">
          <div className="p-8 sm:p-12 bg-text rounded-3xl text-center">
            <span className="inline-block px-4 py-2 bg-white/10 border border-white/10 rounded-full text-primary font-semibold text-sm mb-6">
              Notre engagement
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Rendre l’excellence digitale accessible.
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Nous sommes convaincus que l'ingénierie web et le design de haut niveau ne devraient pas être l'apanage des grands groupes. Notre mission est de briser les barrières techniques pour offrir aux entreprises en pleine croissance les outils des leaders du marché. Chez Melioz, l'excellence devient un standard, décliné en solutions agiles et sur-mesure pour servir votre rentabilité.
            </p>
            <a
              href="/book-a-call"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-colors"
            >
              Réserver un appel
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
