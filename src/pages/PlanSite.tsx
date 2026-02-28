import { ArrowRight, Home, Briefcase, Users, Award, FolderOpen, MessageSquare, FileText, Shield, Map } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function PlanSite() {
  const sections = [
    {
      title: 'Pages principales',
      icon: Home,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      links: [
        { label: 'Accueil', href: '/', description: 'Page d\'accueil de l\'agence MELIOZ' },
        { label: 'Services', href: '/services', description: 'Découvrez nos prestations digitales' },
        { label: 'Expertise', href: '/expertise', description: 'Notre équipe et nos compétences' },
        { label: 'Réalisations', href: '/realisations', description: 'Portfolio de nos projets' },
      ],
    },
    {
      title: 'À propos',
      icon: Users,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      links: [
        { label: 'L\'agence', href: '/agence', description: 'Notre histoire et nos valeurs' },
      ],
    },
    {
      title: 'Contact & Réservation',
      icon: MessageSquare,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      links: [
        { label: 'Contact', href: '/contact', description: 'Nous contacter directement' },
        { label: 'Réserver un appel', href: '/book-a-call', description: 'Réservez un appel de 15 minutes pour discuter de votre projet' },
      ],
    },
    {
      title: 'Informations légales',
      icon: Shield,
      color: 'text-text/70',
      bgColor: 'bg-text/10',
      links: [
        { label: 'Mentions légales', href: '/mentions-legales', description: 'Informations sur l\'éditeur du site' },
        { label: 'Politique de confidentialité', href: '/privacy', description: 'Protection de vos données (RGPD)' },
        { label: 'Conditions générales', href: '/conditions-generales', description: 'CGU et CGV de l\'agence' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-text">
      <SEO 
        title="MELIOZ - Plan du site"
        description="Plan du site de l'agence MELIOZ. Retrouvez toutes les pages de notre site : services, expertise, réalisations, contact et informations légales."
        canonical="/plan-du-site"
      />
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-primary/10 rounded-xl">
                <Map className="w-5 h-5 text-primary" />
              </div>
              <span className="text-primary font-semibold text-sm">Navigation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-text mb-4 font-display">
              Plan du site
            </h1>
            <p className="text-lg text-text/70">
              Retrouvez l'ensemble des pages du site MELIOZ pour naviguer facilement.
            </p>
          </div>

          {/* Sections */}
          <div className="grid gap-8 md:grid-cols-2">
            {sections.map((section) => (
              <div
                key={section.title}
                className="p-6 bg-background border border-secondary/20 rounded-2xl shadow-soft"
              >
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 ${section.bgColor} rounded-xl`}>
                    <section.icon className={`w-5 h-5 ${section.color}`} />
                  </div>
                  <h2 className="text-xl font-semibold text-text font-display">
                    {section.title}
                  </h2>
                </div>

                {/* Links */}
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="group flex items-start gap-3 p-3 -mx-3 rounded-xl hover:bg-primary/5 transition-colors"
                      >
                        <ArrowRight className="w-4 h-4 text-primary mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="flex-1">
                          <span className="block font-medium text-text group-hover:text-primary transition-colors">
                            {link.label}
                          </span>
                          <span className="text-sm text-text/60">
                            {link.description}
                          </span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Sitemap XML Link - Accessible mais discret */}
          <div className="mt-12 pt-6 border-t border-secondary/20">
            <div className="flex items-center justify-center gap-2 text-xs text-text/40">
              <FileText className="w-3 h-3" />
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text/60 transition-colors"
              >
                sitemap.xml
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
