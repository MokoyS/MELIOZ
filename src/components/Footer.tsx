import { Linkedin, Mail } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn de MELIOZ' },
  ];

  const navigationLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Agence', href: '/agence' },
    { label: 'Expertise', href: '/expertise' },
    { label: 'Réalisations', href: '/realisations' },
    { label: 'Contact', href: '/contact' },
    { label: 'Réserver un appel', href: '/book-a-call' },
  ];

  const legalLinks = [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'Politique de confidentialité', href: '/privacy' },
    { label: 'Conditions générales', href: '/conditions-generales' },
    { label: 'Plan du site', href: '/plan-du-site' },
  ];

  return (
    <footer className="bg-text border-t border-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
        <div className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8 sm:mb-10 md:mb-12">
          {/* Logo et description */}
          <div className="sm:col-span-2">
            <div className="mb-3 sm:mb-4">
              <Logo className="h-7 sm:h-8 w-auto" inverted />
            </div>
            <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6 max-w-md">
              MELIOZ crée des sites web rapides, modernes et sur-mesure. Une expertise digitale sérieuse, un suivi humain du début à la fin.
            </p>
            <div className="flex gap-2 sm:gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-white/10 border border-white/10 rounded-lg hover:bg-white/20 hover:border-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-text"
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white/70 hover:text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Navigation</h3>
            <ul className="space-y-2 sm:space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-white/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center gap-2 text-white/70">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <a href="mailto:contact@agencemelioz.com" className="text-sm sm:text-base hover:text-primary transition-colors break-all">
                  contact@agencemelioz.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bas de page */}
        <div className="pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-white/50 text-xs sm:text-sm text-center sm:text-left">
              © 2026 Melioz. Tous droits réservés.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-end text-xs sm:text-sm">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/50 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
