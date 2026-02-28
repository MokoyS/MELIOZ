import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from '../lib/framer-motion';
import { baseTransition, quickTransition } from '../lib/motion';
import Logo from './Logo';

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const containerClasses = scrolled
    ? 'bg-background/70 border-secondary/20 shadow-xl shadow-text/5 backdrop-blur-lg'
    : 'bg-background/30 border-secondary/20 backdrop-blur-lg';

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={baseTransition}
      className="fixed top-2 sm:top-3 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 md:px-6 pointer-events-none"
    >
      <motion.div
        layout
        className={`relative z-50 w-full max-w-6xl rounded-2xl sm:rounded-[28px] border transition-all duration-300 pointer-events-auto ${containerClasses}`}
      >
        <nav className="flex items-center gap-3 sm:gap-4 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3">
          {/* Logo */}
          <div className="flex flex-1 items-center">
            <a href="/" className="flex items-center gap-1.5 sm:gap-2">
              <div className="px-1.5 sm:px-2">
                <Logo className="h-6 w-auto sm:h-7" />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 justify-center text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text/70 hover:text-text transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex flex-1 items-center justify-end gap-3">
            <a
              href="/book-a-call"
              className="px-5 py-2 bg-primary text-white text-sm font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-opacity-90"
            >
              Réserver un appel
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex flex-1 items-center justify-end md:hidden">
            <motion.button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center rounded-lg border border-secondary/20 bg-background p-1.5 text-text transition-all duration-300 hover:bg-primary/10"
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.button>
          </div>
        </nav>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={quickTransition}
              className="pointer-events-auto fixed inset-0 z-40 bg-text/20 backdrop-blur-sm md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={quickTransition}
              className="pointer-events-auto fixed left-3 right-3 sm:left-4 sm:right-4 top-[68px] sm:top-[76px] z-50 md:hidden rounded-xl sm:rounded-2xl border border-secondary/20 bg-background px-4 sm:px-5 py-5 sm:py-6 shadow-2xl shadow-text/10"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-lg px-4 py-3 text-left text-sm font-medium text-text hover:bg-primary/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <a
                href="/book-a-call"
                className="mt-5 w-full rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90 shadow-md block"
                onClick={() => setIsMenuOpen(false)}
              >
                Réserver un appel
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
