import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from '../lib/framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <a href="/" className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-melioz-electric rounded">
          <img src="/images/Melioz Vector.svg" className="h-8 w-auto" alt="" aria-hidden="true" style={{ filter: 'brightness(0) invert(1)' }} />
          <span className="font-display font-bold text-xl tracking-tight text-melioz-offwhite">melioz</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={currentPath === link.href ? 'page' : undefined}
              className={`font-body text-[11px] uppercase tracking-widest transition-colors duration-200 relative group ${
                currentPath === link.href ? 'text-melioz-offwhite' : 'text-melioz-offwhite/60 hover:text-melioz-offwhite'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-0.5 left-0 h-px bg-melioz-electric transition-all duration-200 ${
                currentPath === link.href ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="/book-a-call"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-melioz-electric text-melioz-offwhite font-body text-sm font-medium rounded-xl hover:-translate-y-0.5 transition-transform duration-200"
        >
          Démarrer un projet
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((p) => !p)}
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="md:hidden p-2 text-melioz-offwhite"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-melioz-navy/60 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              key="menu"
              id="mobile-menu"
              initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed left-0 right-0 top-16 z-50 md:hidden bg-melioz-navy border-t border-melioz-offwhite/10 px-4 py-6"
            >
              <div className="flex flex-col gap-1 mb-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-current={currentPath === link.href ? 'page' : undefined}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-3 py-3 font-body text-[11px] uppercase tracking-widest text-melioz-offwhite/70 hover:text-melioz-offwhite rounded-lg hover:bg-melioz-offwhite/5 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <a
                href="/book-a-call"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center px-4 py-3 bg-melioz-electric text-melioz-offwhite font-body text-sm font-medium rounded-xl"
              >
                Démarrer un projet
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
