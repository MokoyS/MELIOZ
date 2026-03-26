import { ArrowRight, Home, Users, MessageSquare, FileText, Shield, Map } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function PlanSite() {
  const sections = [
    {
      title: 'Pages principales',
      icon: Home,
      color: 'text-melioz-electric',
      bgColor: 'bg-melioz-electric/10',
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
      color: 'text-melioz-teal',
      bgColor: 'bg-melioz-teal/10',
      links: [
        { label: 'L\'agence', href: '/agence', description: 'Notre histoire et nos valeurs' },
      ],
    },
    {
      title: 'Contact & Réservation',
      icon: MessageSquare,
      color: 'text-melioz-lavender',
      bgColor: 'bg-melioz-lavender/20',
      links: [
        { label: 'Contact', href: '/contact', description: 'Nous contacter directement' },
        { label: 'Réserver un appel', href: '/book-a-call', description: 'Réservez un appel de 15 minutes pour discuter de votre projet' },
      ],
    },
    {
      title: 'Informations légales',
      icon: Shield,
      color: 'text-melioz-navy/70',
      bgColor: 'bg-melioz-navy/10',
      links: [
        { label: 'Mentions légales', href: '/mentions-legales', description: 'Informations sur l\'éditeur du site' },
        { label: 'Politique de confidentialité', href: '/privacy', description: 'Protection de vos données (RGPD)' },
        { label: 'Conditions générales', href: '/conditions-generales', description: 'CGU et CGV de l\'agence' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-melioz-offwhite text-melioz-navy">
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
              <div className="p-2.5 bg-melioz-electric/10 rounded-xl">
                <Map className="w-5 h-5 text-melioz-electric" />
              </div>
              <span className="text-melioz-electric font-semibold text-sm">Navigation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl text-melioz-navy font-display font-extrabold mb-4">
              Plan du site
            </h1>
            <p className="text-lg text-melioz-navy/70 font-body">
              Retrouvez l'ensemble des pages du site MELIOZ pour naviguer facilement.
            </p>
          </div>

          {/* Sections */}
          <div className="grid gap-8 md:grid-cols-2">
            {sections.map((section) => (
              <div
                key={section.title}
                className="p-6 bg-melioz-offwhite border border-melioz-navy/10 rounded-2xl"
              >
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 ${section.bgColor} rounded-xl`}>
                    <section.icon className={`w-5 h-5 ${section.color}`} />
                  </div>
                  <h2 className="text-xl font-semibold text-melioz-navy font-display">
                    {section.title}
                  </h2>
                </div>

                {/* Links */}
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="group flex items-start gap-3 p-3 -mx-3 rounded-xl hover:bg-melioz-electric/5 transition-colors"
                      >
                        <ArrowRight className="w-4 h-4 text-melioz-electric mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="flex-1">
                          <span className="block font-medium text-melioz-navy group-hover:text-melioz-electric transition-colors">
                            {link.label}
                          </span>
                          <span className="text-sm text-melioz-navy/70 font-body">
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
            <div className="flex items-center justify-center gap-2 text-xs text-melioz-navy/40">
              <FileText className="w-3 h-3" />
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-melioz-navy/60 transition-colors"
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
