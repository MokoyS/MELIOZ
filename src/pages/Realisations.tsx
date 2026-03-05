import { ArrowRight, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function Realisations() {
  const projects = [
    {
      title: 'Startup Tech',
      category: 'Site vitrine',
      description: 'Refonte complète du site vitrine d\'une startup innovante dans le secteur de la tech.',
      tags: ['React', 'Design System', 'SEO'],
      image: 'bg-gradient-to-br from-primary/30 to-secondary/30',
    },
    {
      title: 'E-commerce Mode',
      category: 'E-commerce',
      description: 'Création d\'une boutique en ligne pour une marque de mode éthique française.',
      tags: ['Shopify', 'UI/UX', 'Branding'],
      image: 'bg-gradient-to-br from-accent/30 to-primary/30',
    },
    {
      title: 'Cabinet Conseil',
      category: 'Site vitrine',
      description: 'Site institutionnel pour un cabinet de conseil en stratégie basé à Paris.',
      tags: ['WordPress', 'SEO', 'Copywriting'],
      image: 'bg-gradient-to-br from-secondary/30 to-accent/30',
    },
    {
      title: 'Application SaaS',
      category: 'Application web',
      description: 'Développement d\'une plateforme SaaS de gestion de projets collaboratifs.',
      tags: ['Next.js', 'TypeScript', 'API'],
      image: 'bg-gradient-to-br from-primary/30 to-accent/30',
    },
    {
      title: 'Restaurant Gastronomique',
      category: 'Site vitrine',
      description: 'Site élégant avec système de réservation pour un restaurant étoilé parisien.',
      tags: ['Design', 'Animations', 'Booking'],
      image: 'bg-gradient-to-br from-accent/30 to-secondary/30',
    },
    {
      title: 'Marketplace B2B',
      category: 'E-commerce',
      description: 'Plateforme de mise en relation entre fournisseurs et distributeurs.',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      image: 'bg-gradient-to-br from-secondary/30 to-primary/30',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-text">
      <SEO
        title="Nos Réalisations & Projets Web | MELIOZ Agence Paris"
        description="Explorez nos projets : sites vitrines, e-commerce, applications web et design UI/UX. Des solutions digitales innovantes conçues par l'agence MELIOZ à Paris."
        canonical="/realisations"
      />
      <Navbar />
      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold text-sm mb-4">
              Nos Réalisations
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-text mb-6">
              Nos derniers projets              </h1>
            <p className="text-lg text-text/70 max-w-2xl mx-auto">
              Découvrez la symbiose entre l'expertise Melioz et l'identité de nos clients, au service de projets qui marquent une transformation digitale.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group bg-background rounded-2xl border border-secondary/20 shadow-soft overflow-hidden hover:shadow-md hover:border-secondary/40 transition-all duration-300"
              >
                <div className={`aspect-video ${project.image} flex items-center justify-center`}>
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <ExternalLink className="w-6 h-6 text-white/60" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-text mt-2 mb-2">{project.title}</h3>
                  <p className="text-text/70 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5 border-y border-secondary/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
              Faites de votre vision notre prochain défi.
            </h2>
            <p className="text-lg text-text/70 mb-8">
              Vous avez les ambitions, nous avons la vision. Échangeons sur vos objectifs pour transformer vos idées en résultat concret.
            </p>
            <a
              href="/book-a-call"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-accent/90 transition-all duration-300"
            >
              <span>Contactez-nous</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
