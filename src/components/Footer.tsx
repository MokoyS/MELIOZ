import { Linkedin, Camera, Code2, Mail } from 'lucide-react';

export default function Footer() {
  const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Agence', href: '/agence' },
    { label: 'Expertise', href: '/expertise' },
    { label: 'Réalisations', href: '/realisations' },
    { label: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'Confidentialité', href: '/privacy' },
    { label: 'CGU', href: '/conditions-generales' },
  ];

  return (
    <footer className="relative bg-melioz-navy overflow-hidden">
      {/* M watermark */}
      <img
        src="/images/Melioz Vector.svg"
        className="absolute bottom-0 left-0 w-96 opacity-[0.03] pointer-events-none select-none"
        aria-hidden="true"
        style={{ filter: 'brightness(0) invert(1)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1 — Marque */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" className="inline-block mb-4">
              <img src="/images/logo_white_text.png" className="h-10 w-auto" alt="Melioz" />
            </a>
            <p className="font-body text-sm text-melioz-offwhite/50 leading-relaxed max-w-xs">
              Agence digitale à taille humaine. Design, développement et stratégie pour les entreprises ambitieuses.
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <p className="font-body text-[11px] uppercase tracking-widest text-melioz-electric mb-4">Navigation</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-body text-sm text-melioz-offwhite/60 hover:text-melioz-offwhite transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <p className="font-body text-[11px] uppercase tracking-widest text-melioz-electric mb-4">Contact</p>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contact@agencemelioz.com" className="flex items-center gap-2 font-body text-sm text-melioz-offwhite/60 hover:text-melioz-offwhite transition-colors duration-200">
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                  contact@agencemelioz.com
                </a>
              </li>
              <li>
                <a href="/book-a-call" className="font-body text-sm text-melioz-offwhite/60 hover:text-melioz-offwhite transition-colors duration-200">
                  Réserver un appel
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 — Réseaux */}
          <div>
            <p className="font-body text-[11px] uppercase tracking-widest text-melioz-electric mb-4">Réseaux</p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: '#', label: 'LinkedIn MELIOZ' },
                { icon: Camera, href: '#', label: 'Instagram MELIOZ' },
                { icon: Code2, href: '#', label: 'GitHub MELIOZ' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2 rounded-lg border border-melioz-offwhite/10 text-melioz-offwhite/50 hover:text-melioz-offwhite hover:border-melioz-offwhite/30 transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-melioz-offwhite/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-body text-xs text-melioz-offwhite/30">© 2026 Melioz. Tous droits réservés.</p>
          <div className="flex gap-4">
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href} className="font-body text-xs text-melioz-offwhite/30 hover:text-melioz-offwhite/60 transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
