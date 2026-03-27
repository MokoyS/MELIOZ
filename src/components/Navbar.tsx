import { useState, useEffect } from 'react';
import { motion } from '../lib/framer-motion';

interface NavbarProps {
  light?: boolean;
}

export default function Navbar({ light = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navLinks = [
    { label: 'Agence', href: '/agence' },
    { label: 'Services', href: '/services' },
    { label: 'Expertise', href: '/expertise' },
    { label: 'Réalisations', href: '/realisations' },
    { label: 'Contact', href: '/contact' },
  ];

  const currentPath = window.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setIsMenuOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsMenuOpen(false); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isMenuOpen]);

  // Fond du header : navy solide quand menu ouvert, backdrop quand scrollé, transparent sinon
  const headerBg = isMenuOpen
    ? 'bg-melioz-navy'
    : scrolled
    ? 'bg-melioz-navy/95 backdrop-blur-md'
    : 'bg-transparent';

  const logoSrc = (light && !scrolled && !isMenuOpen)
    ? '/images/logo_black_text.png'
    : '/images/logo_white_text.png';

  return (
    <>
      {/* Header — z-[70] pour toujours rester au-dessus du menu overlay */}
      <header className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-300 ${headerBg}`}>
        <nav
          aria-label="Navigation principale"
          className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20"
        >
          {/* Logo */}
          <a
            href="/"
            className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-melioz-electric rounded"
          >
            <img src={logoSrc} className="h-7 md:h-8 w-auto" alt="Melioz" />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href;
              const isHovered = hoveredLink === link.label;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  onMouseEnter={() => setHoveredLink(link.label)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`font-body text-[11px] uppercase tracking-widest transition-colors duration-200 relative whitespace-nowrap ${
                    light && !scrolled
                      ? isActive ? 'text-melioz-navy' : 'text-melioz-navy/50 hover:text-melioz-navy'
                      : isActive ? 'text-melioz-offwhite' : 'text-melioz-offwhite/60 hover:text-melioz-offwhite'
                  }`}
                >
                  {link.label}
                  <motion.span
                    className="absolute -bottom-0.5 left-0 h-px w-full bg-melioz-electric"
                    style={{ originX: 0 }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isActive || isHovered ? 1 : 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                  />
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <a
            href="/book-a-call"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-melioz-electric text-melioz-offwhite font-body text-sm font-medium rounded-xl hover:-translate-y-0.5 transition-transform duration-200 whitespace-nowrap"
          >
            Démarrer un projet
          </a>

          {/* Mobile hamburger — toujours visible, z naturel dans le header z-[70] */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(p => !p)}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 -mr-1 flex-shrink-0"
          >
            <span className={`block w-5 h-[1.5px] transition-all duration-300 origin-center ${
              isMenuOpen
                ? 'rotate-45 translate-y-[6.5px] bg-melioz-offwhite'
                : (light && !scrolled ? 'bg-melioz-navy' : 'bg-melioz-offwhite')
            }`} />
            <span className={`block w-5 h-[1.5px] transition-all duration-300 ${
              isMenuOpen
                ? 'opacity-0 scale-x-0 bg-melioz-offwhite'
                : (light && !scrolled ? 'bg-melioz-navy' : 'bg-melioz-offwhite')
            }`} />
            <span className={`block w-5 h-[1.5px] transition-all duration-300 origin-center ${
              isMenuOpen
                ? '-rotate-45 -translate-y-[6.5px] bg-melioz-offwhite'
                : (light && !scrolled ? 'bg-melioz-navy' : 'bg-melioz-offwhite')
            }`} />
          </button>
        </nav>
      </header>

      {/* Menu mobile — SIBLING du header, z-[60] (header z-[70] reste au-dessus) */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        className={`
          fixed inset-0 z-[60] bg-melioz-navy
          flex flex-col items-center justify-center
          md:hidden
          transition-opacity duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        <nav className="flex flex-col items-center gap-4 w-full px-6">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={currentPath === link.href ? 'page' : undefined}
              onClick={() => setIsMenuOpen(false)}
              className="font-display font-bold text-melioz-offwhite hover:text-melioz-electric transition-colors duration-200"
              style={{
                fontSize: 'clamp(28px, 7vw, 42px)',
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(12px)',
                opacity: isMenuOpen ? 1 : 0,
                transition: `transform 0.3s ease ${i * 40}ms, opacity 0.3s ease ${i * 40}ms`,
              }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="/book-a-call"
            onClick={() => setIsMenuOpen(false)}
            className="mt-6 w-full max-w-[280px] bg-melioz-electric text-melioz-offwhite font-body font-semibold
              px-8 py-4 rounded-xl text-center text-[15px] hover:bg-melioz-electric/90 transition-colors whitespace-nowrap"
            style={{
              transform: isMenuOpen ? 'translateY(0)' : 'translateY(12px)',
              opacity: isMenuOpen ? 1 : 0,
              transition: `transform 0.3s ease ${navLinks.length * 40}ms, opacity 0.3s ease ${navLinks.length * 40}ms`,
            }}
          >
            Démarrer un projet →
          </a>
        </nav>
      </div>
    </>
  );
}
