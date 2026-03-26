import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from '../lib/framer-motion';

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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setIsMenuOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsMenuOpen(false); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-melioz-navy/95 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Navigation principale"
        className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20"
      >
        {/* Logo */}
        <a href="/" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-melioz-electric rounded">
          <img
            src={light && !scrolled ? '/images/logo_black_text.png' : '/images/logo_white_text.png'}
            className="h-8 w-auto"
            alt="Melioz"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
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
                className={`font-body text-[11px] uppercase tracking-widest transition-colors duration-200 relative ${
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
                  transition={{ duration: isHovered ? 0.25 : 0.2, ease: 'easeInOut' }}
                />
              </a>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <a
          href="/book-a-call"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-melioz-electric text-melioz-offwhite font-body text-sm font-medium rounded-xl hover:-translate-y-0.5 transition-transform duration-200"
        >
          Démarrer un projet
        </a>

        {/* Mobile hamburger — animated spans */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(p => !p)}
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="md:hidden z-[60] flex flex-col gap-1.5 p-2 relative"
        >
          <span className={`block w-6 h-px transition-all duration-300 origin-center ${
            isMenuOpen
              ? 'rotate-45 translate-y-[7px] bg-melioz-offwhite'
              : (light && !scrolled ? 'bg-melioz-navy' : 'bg-melioz-offwhite')
          }`} />
          <span className={`block w-6 h-px transition-all duration-300 ${
            isMenuOpen
              ? 'opacity-0 scale-x-0 bg-melioz-offwhite'
              : (light && !scrolled ? 'bg-melioz-navy' : 'bg-melioz-offwhite')
          }`} />
          <span className={`block w-6 h-px transition-all duration-300 origin-center ${
            isMenuOpen
              ? '-rotate-45 -translate-y-[7px] bg-melioz-offwhite'
              : (light && !scrolled ? 'bg-melioz-navy' : 'bg-melioz-offwhite')
          }`} />
        </button>
      </nav>

      {/* Mobile overlay — fullscreen, CSS transition, z-50 */}
      <div
        id="mobile-menu"
        className={`
          fixed inset-0 z-50 bg-melioz-navy
          flex flex-col items-center justify-center
          md:hidden
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        <nav className="flex flex-col items-center gap-6">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={currentPath === link.href ? 'page' : undefined}
              onClick={() => setIsMenuOpen(false)}
              className="font-display font-bold text-melioz-offwhite hover:text-melioz-electric transition-all duration-200"
              style={{
                fontSize: 'clamp(32px, 6vw, 48px)',
                transitionDelay: isMenuOpen ? `${i * 50}ms` : '0ms',
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(16px)',
                opacity: isMenuOpen ? 1 : 0,
                transition: `all 0.3s ease ${i * 50}ms`,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/book-a-call"
            onClick={() => setIsMenuOpen(false)}
            className="mt-6 bg-melioz-electric text-melioz-offwhite font-body font-semibold
              px-8 py-4 rounded-xl text-lg hover:bg-melioz-electric/90 transition-colors"
            style={{
              transitionDelay: isMenuOpen ? `${navLinks.length * 50}ms` : '0ms',
              transform: isMenuOpen ? 'translateY(0)' : 'translateY(16px)',
              opacity: isMenuOpen ? 1 : 0,
              transition: `all 0.3s ease ${navLinks.length * 50}ms`,
            }}
          >
            Démarrer un projet →
          </a>
        </nav>
      </div>
    </header>
  );
}
