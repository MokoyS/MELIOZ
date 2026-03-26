# MELIOZ Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remplacer entièrement l'identité visuelle MELIOZ (palette, typographie, tous les composants) par le nouveau design system premium teal/electric/navy/offwhite, avec le M SVG comme ADN graphique récurrent.

**Architecture:** Visual redesign uniquement — la structure du site, le routing, la logique métier (formulaires, Tally, Cal.com) restent intacts. On remplace les classes CSS et la structure JSX de chaque composant/page. Pas de nouveau composant logique, sauf `AnimatedSection` (scroll reveal wrapper) et `NotFound` (404).

**Tech Stack:** React 18, TypeScript, Tailwind CSS 3, Framer Motion, `@fontsource/space-grotesk`, `@fontsource/dm-sans`

**Spec:** `docs/superpowers/specs/2026-03-25-melioz-redesign-design.md`

---

## Fichiers touchés

| Fichier | Action |
|---|---|
| `tailwind.config.js` | Modifier — nouvelle palette + fontFamily |
| `src/index.css` | Modifier — imports fonts, supprimer old utilities |
| `src/main.tsx` | Modifier — supprimer admin, ajouter 404 |
| `src/App.tsx` | Modifier — supprimer blob shapes wrapper |
| `src/components/Navbar.tsx` | Réécrire |
| `src/components/Footer.tsx` | Réécrire |
| `src/components/Hero.tsx` | Réécrire |
| `src/components/ServicesPreview.tsx` | Réécrire |
| `src/components/AboutSection.tsx` | Réécrire |
| `src/components/CTADevis.tsx` | Réécrire |
| `src/components/WhyUs.tsx` | Réécrire |
| `src/components/ContactPreFooter.tsx` | Réécrire |
| `src/pages/Agence.tsx` | Réécrire |
| `src/pages/Services.tsx` | Réécrire |
| `src/pages/Expertise.tsx` | Réécrire |
| `src/pages/Realisations.tsx` | Réécrire |
| `src/pages/Contact.tsx` | Réécrire visuel (garder logique form) |
| `src/pages/BookACall.tsx` | Réécrire visuel (garder logique Tally/Cal) |
| `src/pages/MentionsLegales.tsx` | Adapter design system |
| `src/pages/Privacy.tsx` | Adapter design system |
| `src/pages/ConditionsGenerales.tsx` | Adapter design system |
| `src/pages/PlanSite.tsx` | Adapter design system |
| `src/components/AnimatedSection.tsx` | Créer |
| `src/pages/NotFound.tsx` | Créer |
| `src/pages/Admin.tsx` | Supprimer |

---

## Référence design system — à mémoriser pour tout le plan

```
Couleurs :
  melioz-teal:     #204F56  (hero, sections immersives)
  melioz-lavender: #9EB8F9  (sections alternées)
  melioz-mint:     #DAE9D9  (sections claires, badges)
  melioz-electric: #3B54CC  (CTA, liens actifs)
  melioz-navy:     #0D1626  (fonds sombres, texte)
  melioz-offwhite: #EDEFEE  (fond général, texte sur sombre)

Typographie :
  font-display = Space Grotesk
  font-body    = DM Sans

  H1 : font-display font-extrabold text-[80px] md:text-[120px] leading-[0.9] tracking-[-0.04em]
  H2 : font-display font-bold text-[48px] md:text-[64px] leading-[1.0] tracking-[-0.02em]
  H3 : font-body font-medium text-[20px] md:text-[24px] leading-[1.4]
  Corps : font-body font-normal text-[16px] md:text-[18px] leading-[1.7]
  Label : font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric

M SVG décoratif — filtres :
  Sur teal/navy  → style={{ filter: 'brightness(0) invert(1)' }}
  Sur offwhite   → pas de filtre
  Sur mint       → style={{ filter: 'brightness(0) saturate(100%) invert(23%) sepia(29%) saturate(634%) hue-rotate(145deg) brightness(93%) contrast(88%)' }}
  Sur lavender   → style={{ filter: 'brightness(0) saturate(100%) invert(26%) sepia(67%) saturate(1200%) hue-rotate(215deg) brightness(90%) contrast(95%)' }}

Boutons : rounded-xl (jamais rounded-full)
Cards services : h-[320px] fixe
Spacing sections : py-32 minimum
Animations : max 0.5s, easeOut, viewport once
Interdits : gradient, shadow-lg au repos, blob shapes
```

---

## Task 1 — Design system foundation

**Files:**
- Modify: `tailwind.config.js`
- Modify: `src/index.css`

- [ ] **Étape 1 : Mettre à jour `tailwind.config.js`**

Remplacer le fichier entier par :

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        melioz: {
          teal:     '#204F56',
          lavender: '#9EB8F9',
          mint:     '#DAE9D9',
          electric: '#3B54CC',
          navy:     '#0D1626',
          offwhite: '#EDEFEE',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
      animation: {
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
      },
      keyframes: {
        'border-beam': {
          '100%': { 'offset-distance': '100%' },
        },
      },
    },
  },
  plugins: [],
};
```

- [ ] **Étape 2 : Mettre à jour `src/index.css`**

Remplacer le fichier entier par :

```css
/* @import DOIT être avant @tailwind — requis par CSS spec */
@import '@fontsource/space-grotesk/700.css';
@import '@fontsource/space-grotesk/800.css';
@import '@fontsource/dm-sans/400.css';
@import '@fontsource/dm-sans/500.css';

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-electric: #3B54CC;
}

*:focus-visible {
  outline: 2px solid var(--color-electric);
  outline-offset: 2px;
}

body {
  @apply bg-melioz-offwhite text-melioz-navy antialiased;
  font-family: 'DM Sans', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Space Grotesk', sans-serif;
  @apply font-bold text-melioz-navy;
}
```

- [ ] **Étape 3 : Migrer `font-sans` → `font-body`**

Recherche globale dans `src/` et remplacer toutes les occurrences :

```bash
grep -r "font-sans" src/ --include="*.tsx" --include="*.ts" -l
```

Fichiers confirmés contenant `font-sans` : `src/components/LoadingSpinner.tsx`, `src/pages/ConditionsGenerales.tsx`, `src/pages/Contact.tsx`, `src/pages/BookACall.tsx`. Remplacer `font-sans` par `font-body` dans chacun. **Ne pas omettre `LoadingSpinner.tsx`** — il est rendu dans le Suspense fallback de production ; une occurrence manquée revient à la font système sans erreur de build.

- [ ] **Étape 4 : Vérifier le build**

```bash
npm run dev
```

Ouvrir http://localhost:5173 — le texte doit être en DM Sans, les titres en Space Grotesk, fond `#EDEFEE`. Aucune erreur console.

- [ ] **Étape 5 : Commit**

```bash
git add tailwind.config.js src/index.css
git commit -m "feat: nouveau design system — palette melioz + fontFamily display/body"
```

---

## Task 2 — Supprimer /admin

**Files:**
- Delete: `src/pages/Admin.tsx`
- Modify: `src/main.tsx`

- [ ] **Étape 1 : Supprimer le fichier Admin**

```bash
rm src/pages/Admin.tsx
```

- [ ] **Étape 2 : Retirer Admin de `main.tsx`**

Dans la branche dev (bloc `if (isDev)`), retirer :
- `{ default: Admin },` du destructuring
- `import('./pages/Admin.tsx'),` du `Promise.all`
- `case '/admin': return <Admin />;` du switch

Dans la branche prod (bloc `else`), retirer :
- `const Admin = lazy(() => import('./pages/Admin.tsx'));`
- `case '/admin': return <Admin />;` du switch

- [ ] **Étape 3 : Vérifier**

```bash
npm run build
```

Doit compiler sans erreur. Naviguer sur `/admin` doit afficher la home pour l'instant (le routing 404 sera ajouté en Task 20).

- [ ] **Étape 4 : Commit**

```bash
git add src/main.tsx
git commit -m "feat: supprimer page /admin du site public"
```

---

## Task 3 — Composant AnimatedSection

**Files:**
- Create: `src/components/AnimatedSection.tsx`

- [ ] **Étape 1 : Créer le composant**

```tsx
// src/components/AnimatedSection.tsx
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function AnimatedSection({ children, delay = 0, className }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Étape 2 : Commit**

```bash
git add src/components/AnimatedSection.tsx
git commit -m "feat: composant AnimatedSection — scroll reveal wrapper"
```

---

## Task 4 — Navbar

**Files:**
- Modify: `src/components/Navbar.tsx`

- [ ] **Étape 1 : Réécrire Navbar.tsx**

Garder la logique existante (scrolled state, isMenuOpen, navLinks, keyboard/resize handlers). Remplacer entièrement le JSX :

```tsx
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
```

- [ ] **Étape 2 : Vérifier visuellement**

```bash
npm run dev
```

- Navbar transparente sur hero, navy/blur au scroll
- Logo M + "melioz" en blanc
- Liens uppercase tiny, underline electric au hover
- Hamburger fonctionnel mobile

- [ ] **Étape 3 : Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "feat: redesign Navbar — transparent/navy scroll, M logo, electric CTA"
```

---

## Task 5 — Footer

**Files:**
- Modify: `src/components/Footer.tsx`

- [ ] **Étape 1 : Réécrire Footer.tsx**

```tsx
import { Linkedin, Instagram, Github, Mail } from 'lucide-react';

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
            <a href="/" className="flex items-center gap-2 mb-4">
              <img src="/images/Melioz Vector.svg" className="h-12 w-auto" alt="Melioz" style={{ filter: 'brightness(0) invert(1)' }} />
              <span className="font-display font-bold text-xl text-melioz-offwhite">melioz</span>
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
                { icon: Instagram, href: '#', label: 'Instagram MELIOZ' },
                { icon: Github, href: '#', label: 'GitHub MELIOZ' },
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
```

- [ ] **Étape 2 : Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: redesign Footer — navy, 4 colonnes, M watermark"
```

---

## Task 6 — Hero

**Files:**
- Modify: `src/components/Hero.tsx`

- [ ] **Étape 1 : Réécrire Hero.tsx**

```tsx
import { ArrowRight } from 'lucide-react';
import { motion } from '../lib/framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-melioz-teal flex items-center overflow-hidden">
      {/* M watermark */}
      <img
        src="/images/Melioz Vector.svg"
        className="absolute right-0 top-0 w-[600px] md:w-[700px] opacity-[0.05] pointer-events-none select-none"
        aria-hidden="true"
        style={{ filter: 'brightness(0) invert(1)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* Label */}
          <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-8">
            Agence Digitale · Paris
          </p>

          {/* H1 */}
          <h1 className="font-display font-extrabold text-[64px] sm:text-[80px] md:text-[100px] lg:text-[120px] leading-[0.9] tracking-[-0.04em] text-melioz-offwhite mb-10 max-w-5xl">
            L'expertise digitale à taille humaine.
          </h1>

          {/* Sous-titre */}
          <p className="font-body text-[18px] md:text-[20px] text-melioz-offwhite/70 max-w-xl mb-12 leading-relaxed">
            Design soigné, code moderne, résultats mesurables. Nous transformons vos ambitions en présence digitale remarquable.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/book-a-call"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-melioz-electric text-melioz-offwhite font-body font-medium rounded-xl hover:-translate-y-0.5 transition-transform duration-200"
            >
              Démarrer un projet
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/realisations"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-melioz-offwhite/80 font-body font-medium hover:text-melioz-offwhite transition-colors duration-200"
            >
              Voir nos réalisations
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Étape 2 : Vérifier**

Fond teal, titre oversized blanc, M watermark subtil coin droit, CTAs fonctionnels.

- [ ] **Étape 3 : Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat: redesign Hero — fond teal, H1 oversized, M watermark"
```

---

## Task 7 — ServicesPreview

**Files:**
- Modify: `src/components/ServicesPreview.tsx`

- [ ] **Étape 1 : Réécrire ServicesPreview.tsx**

```tsx
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    num: '01',
    title: 'Ingénierie & Développement',
    description: 'Sites vitrines et plateformes sur-mesure conçus pour la vitesse, la sécurité et l\'évolutivité. Une infrastructure solide pour soutenir votre croissance.',
    bg: 'bg-melioz-teal',
    text: 'text-melioz-offwhite',
    mFilter: 'brightness(0) invert(1)',
    linkColor: 'text-melioz-electric',
  },
  {
    num: '02',
    title: 'Expérience & Identité Visuelle',
    description: 'Des interfaces haute couture qui captent l\'attention et renforcent votre autorité. Parcours utilisateurs fluides dédiés à l\'engagement.',
    bg: 'bg-melioz-mint',
    text: 'text-melioz-navy',
    mFilter: 'brightness(0) saturate(100%) invert(23%) sepia(29%) saturate(634%) hue-rotate(145deg) brightness(93%) contrast(88%)',
    linkColor: 'text-melioz-electric',
  },
  {
    num: '03',
    title: 'Visibilité & Acquisition',
    description: 'SEO, GEO & SEA. Nous pilotons vos leviers d\'acquisition et assurons un suivi analytique rigoureux pour optimiser continuellement vos performances.',
    bg: 'bg-melioz-navy',
    text: 'text-melioz-offwhite',
    mFilter: 'brightness(0) invert(1)',
    linkColor: 'text-melioz-electric',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-32 bg-melioz-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="mb-16">
          <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-4">
            Ce qu'on fait
          </p>
          <h2 className="font-display font-bold text-[48px] md:text-[64px] leading-[1.0] tracking-[-0.02em] text-melioz-navy">
            Nos solutions pour vos<br />enjeux digitaux.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.num} delay={i * 0.08}>
              <div className={`relative h-[320px] ${service.bg} rounded-2xl p-7 flex flex-col overflow-hidden`}>
                {/* M décoratif sur teal et navy */}
                {(service.bg === 'bg-melioz-teal' || service.bg === 'bg-melioz-navy') && (
                  <img
                    src="/images/Melioz Vector.svg"
                    className="absolute top-3 right-3 w-12 opacity-[0.15] pointer-events-none select-none"
                    aria-hidden="true"
                    style={{ filter: service.mFilter }}
                  />
                )}

                {/* Numéro */}
                <span className={`font-display font-bold text-[48px] leading-none opacity-20 mb-4 ${service.text}`}>
                  {service.num}
                </span>

                {/* Titre */}
                <h3 className={`font-display font-bold text-[24px] leading-tight mb-3 ${service.text}`}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className={`font-body text-[15px] leading-relaxed opacity-70 flex-1 ${service.text}`}>
                  {service.description}
                </p>

                {/* Lien */}
                <a
                  href="/services"
                  className={`inline-flex items-center gap-1 font-body text-sm font-medium mt-4 ${service.linkColor} hover:gap-2 transition-all duration-200`}
                >
                  Découvrir <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Étape 2 : Commit**

```bash
git add src/components/ServicesPreview.tsx
git commit -m "feat: redesign ServicesPreview — 3 cards alternées teal/mint/navy"
```

---

## Task 8 — AboutSection

**Files:**
- Modify: `src/components/AboutSection.tsx`

- [ ] **Étape 1 : Réécrire AboutSection.tsx**

```tsx
import { ArrowRight, Zap, Users, Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const stats = [
  { icon: Zap,   value: '48h',  label: 'Délai de réponse moyen' },
  { icon: Users, value: '100%', label: 'Satisfaction client' },
  { icon: Star,  value: '+20',  label: 'Projets livrés' },
];

export default function AboutSection() {
  return (
    <section className="relative py-32 bg-melioz-navy overflow-hidden">
      {/* M watermark */}
      <img
        src="/images/Melioz Vector.svg"
        className="absolute right-0 bottom-0 w-80 opacity-[0.04] pointer-events-none select-none"
        aria-hidden="true"
        style={{ filter: 'brightness(0) invert(1)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-center">

          {/* Texte */}
          <div>
            <AnimatedSection>
              <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-mint mb-6">
                À propos
              </p>
              <h2 className="font-display font-bold text-[48px] md:text-[56px] leading-[1.0] tracking-[-0.02em] text-melioz-offwhite mb-6">
                Melioz, un collectif au service de votre écosystème digital.
              </h2>
              <p className="font-body text-[17px] leading-[1.7] text-melioz-offwhite/70 mb-4">
                Chez Melioz, nous croyons que chaque entreprise mérite une présence digitale à la hauteur de ses ambitions. Notre équipe combine créativité, expertise technique et vision stratégique pour donner structure et performance à vos ambitions.
              </p>
              <p className="font-body text-[17px] leading-[1.7] text-melioz-offwhite/70 mb-8">
                Affranchis des contraintes géographiques, nous accompagnons les entreprises ambitieuses partout. Notre modèle 100% digital nous permet une hyper-réactivité et une collaboration en immersion totale.
              </p>
              <a
                href="/agence"
                className="inline-flex items-center gap-2 font-body text-sm font-medium text-melioz-electric hover:gap-3 transition-all duration-200"
              >
                Découvrir notre histoire <ArrowRight className="w-4 h-4" />
              </a>
            </AnimatedSection>
          </div>

          {/* Stats + citation */}
          <AnimatedSection delay={0.15} className="flex flex-col gap-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 rounded-xl bg-melioz-offwhite/5 border border-melioz-offwhite/10"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-melioz-electric/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-melioz-electric" />
                </div>
                <div>
                  <div className="font-display font-bold text-2xl text-melioz-electric">{value}</div>
                  <div className="font-body text-sm text-melioz-offwhite/60">{label}</div>
                </div>
              </div>
            ))}

            {/* Citation */}
            <div className="mt-2 p-5 border-l-2 border-melioz-electric">
              <p className="font-body text-sm italic leading-relaxed text-melioz-offwhite/80">
                "L'excellence digitale ne devrait pas être l'apanage des grands groupes."
              </p>
              <p className="font-body text-xs text-melioz-electric font-medium mt-2">— L'équipe Melioz</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Étape 2 : Commit**

```bash
git add src/components/AboutSection.tsx
git commit -m "feat: redesign AboutSection — fond navy, stats electric, M watermark"
```

---

## Task 9 — CTADevis

**Files:**
- Modify: `src/components/CTADevis.tsx`

- [ ] **Étape 1 : Réécrire CTADevis.tsx**

```tsx
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function CTADevis() {
  return (
    <section className="relative py-40 bg-melioz-electric overflow-hidden">
      {/* M watermark */}
      <img
        src="/images/Melioz Vector.svg"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] opacity-[0.06] pointer-events-none select-none"
        aria-hidden="true"
        style={{ filter: 'brightness(0) invert(1)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <AnimatedSection>
          <h2 className="font-display font-bold text-[48px] md:text-[64px] leading-[1.0] tracking-[-0.02em] text-melioz-offwhite mb-6">
            Prêt à lancer votre projet ?
          </h2>
          <p className="font-body text-[18px] text-melioz-offwhite/70 mb-10 max-w-xl mx-auto leading-relaxed">
            Réservez un appel de 30 minutes pour discuter de votre projet. Notre équipe vous accompagne dans la réalisation de vos ambitions digitales.
          </p>
          <a
            href="/book-a-call"
            className="inline-flex items-center gap-2 px-8 py-4 bg-melioz-offwhite text-melioz-electric font-body font-medium rounded-xl hover:bg-melioz-navy hover:text-melioz-offwhite transition-colors duration-200"
          >
            Réserver un appel
            <ArrowRight className="w-5 h-5" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
```

- [ ] **Étape 2 : Commit**

```bash
git add src/components/CTADevis.tsx
git commit -m "feat: redesign CTADevis — fond electric, bouton offwhite→navy hover"
```

---

## Task 10 — WhyUs

**Files:**
- Modify: `src/components/WhyUs.tsx`

- [ ] **Étape 1 : Réécrire WhyUs.tsx**

```tsx
import AnimatedSection from './AnimatedSection';

const reasons = [
  {
    title: 'Expertise',
    description: 'La rencontre entre l\'ingénierie web de pointe et la psychologie du marketing. Notre équipe maîtrise les outils de demain pour résoudre vos problématiques d\'aujourd\'hui.',
  },
  {
    title: 'Proximité',
    description: 'La distance disparaît au profit de la réactivité. Avec un interlocuteur unique et un suivi en temps réel, vous êtes au cœur du projet.',
  },
  {
    title: 'Qualité',
    description: 'Nous visons l\'excellence technique pour des solutions durables. La conception est optimisée pour offrir une expérience sans compromis, aujourd\'hui comme demain.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-32 bg-melioz-mint">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="mb-16">
          <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-navy/60 mb-4">
            Pourquoi nous
          </p>
          <h2 className="font-display font-bold text-[48px] md:text-[64px] leading-[1.0] tracking-[-0.02em] text-melioz-navy">
            L'exigence au service de votre croissance.
          </h2>
        </AnimatedSection>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
          {reasons.map((reason, i) => (
            <AnimatedSection key={reason.title} delay={i * 0.08}>
              <div className="relative group p-7 bg-melioz-offwhite border border-melioz-navy/10 rounded-2xl hover:border-melioz-electric hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
                <img src="/images/Melioz Vector.svg" className="absolute top-3 right-3 w-12 opacity-[0.15] pointer-events-none select-none" aria-hidden="true" />
                <div className="w-8 h-0.5 bg-melioz-electric mb-5" />
                <h3 className="font-display font-bold text-[22px] text-melioz-navy mb-3">
                  {reason.title}
                </h3>
                <p className="font-body text-[15px] leading-relaxed text-melioz-navy/70">
                  {reason.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Étape 2 : Commit**

```bash
git add src/components/WhyUs.tsx
git commit -m "feat: redesign WhyUs — fond mint, cards offwhite, suppr MagicCard"
```

---

## Task 11 — ContactPreFooter

**Files:**
- Modify: `src/components/ContactPreFooter.tsx`

- [ ] **Étape 1 : Réécrire ContactPreFooter.tsx**

```tsx
import { ArrowRight, Clock, Zap, MessageCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function ContactPreFooter() {
  return (
    <section className="py-32 bg-melioz-lavender/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">

          {/* Texte */}
          <AnimatedSection>
            <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-6">
              Contactez-nous
            </p>
            <h2 className="font-display font-bold text-[48px] md:text-[56px] leading-[1.0] tracking-[-0.02em] text-melioz-navy mb-6">
              Contactez-nous dès aujourd'hui
            </h2>
            <p className="font-body text-[17px] leading-[1.7] text-melioz-navy/70 mb-8">
              Un projet ? Une problématique ? Posez-nous vos questions et obtenez un regard expert sur votre stratégie actuelle.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-melioz-electric text-melioz-offwhite font-body font-medium rounded-xl hover:-translate-y-0.5 transition-transform duration-200"
            >
              Nous contacter
              <ArrowRight className="w-4 h-4" />
            </a>
          </AnimatedSection>

          {/* Panneau visuel */}
          <AnimatedSection delay={0.15}>
            <div className="p-8 bg-melioz-offwhite border border-melioz-navy/10 rounded-2xl">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-melioz-electric animate-pulse" />
                <span className="font-body text-[11px] uppercase tracking-widest text-melioz-electric">Melioz — disponible</span>
              </div>

              <div className="space-y-3">
                {[
                  { icon: Clock, title: 'Réponse sous 24h', sub: 'Garanti en semaine' },
                  { icon: Zap,   title: 'Premier RDV offert', sub: '30 min pour parler de votre projet' },
                  { icon: MessageCircle, title: 'Collaboration 100% en ligne', sub: 'Visio, outils partagés, suivi en temps réel' },
                ].map(({ icon: Icon, title, sub }) => (
                  <div key={title} className="flex items-center gap-4 p-4 rounded-xl border border-melioz-navy/10 bg-melioz-offwhite">
                    <div className="flex-shrink-0 p-2.5 rounded-lg bg-melioz-electric/10">
                      <Icon className="w-5 h-5 text-melioz-electric" />
                    </div>
                    <div>
                      <div className="font-body font-medium text-sm text-melioz-navy">{title}</div>
                      <div className="font-body text-xs text-melioz-navy/50">{sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-melioz-navy/10 flex items-center justify-between">
                <span className="font-display font-bold text-lg text-melioz-navy tracking-tight">MELIOZ</span>
                <span className="font-body text-xs text-melioz-navy/40">agencemelioz.com</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Étape 2 : Commit**

```bash
git add src/components/ContactPreFooter.tsx
git commit -m "feat: redesign ContactPreFooter — fond lavender, CTA electric rounded-xl"
```

---

## Task 12 — App.tsx wrapper

**Files:**
- Modify: `src/App.tsx`

- [ ] **Étape 1 : Nettoyer App.tsx**

Supprimer les blob shapes dans le `div` wrapper. Le fichier final :

```tsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CTADevis from './components/CTADevis';
import ServicesPreview from './components/ServicesPreview';
import AboutSection from './components/AboutSection';
import WhyUs from './components/WhyUs';
import ContactPreFooter from './components/ContactPreFooter';
import Footer from './components/Footer';
import SEO from './components/SEO';
import { useLenis } from './hooks/useLenis';

function App() {
  useLenis();
  return (
    <div className="min-h-screen bg-melioz-offwhite text-melioz-navy overflow-x-hidden">
      <SEO
        title="MELIOZ — Agence Digitale Paris | Design, Dev & Stratégie"
        description="Agence digitale à Paris spécialisée en design UX/UI, développement web et stratégie produit. MELIOZ transforme vos ambitions en présence digitale remarquable."
        canonical="/"
      />
      <Navbar />
      <main id="main-content">
        <Hero />
        <ServicesPreview />
        <AboutSection />
        <CTADevis />
        <WhyUs />
        <ContactPreFooter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

- [ ] **Étape 2 : Vérifier visuellement la home complète**

```bash
npm run dev
```

Valider la séquence de fonds : teal → offwhite → navy → electric → mint → lavender → navy (footer). Aucune section ne doit avoir le même fond que la précédente.

- [ ] **Étape 3 : Commit**

```bash
git add src/App.tsx
git commit -m "feat: App.tsx — supprimer blob shapes, nouvelle séquence sections"
```

---

## Task 13 — Page Agence

**Files:**
- Modify: `src/pages/Agence.tsx`

- [ ] **Étape 1 : Réécrire Agence.tsx**

Garder le contenu textuel existant, remplacer tout le style :

```tsx
import { ArrowRight, Heart, Target, Lightbulb } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import AnimatedSection from '../components/AnimatedSection';

const values = [
  { icon: Heart,     title: 'Passion',    description: 'Nous aimons ce que nous faisons. Chaque projet est une opportunité de créer quelque chose d\'unique et impactant.' },
  { icon: Target,    title: 'Excellence', description: 'Nous visons l\'excellence dans chaque détail, de la conception à la livraison, sans compromis sur la qualité.' },
  { icon: Lightbulb, title: 'Innovation', description: 'Nous restons à la pointe des technologies et des tendances pour offrir des solutions modernes et performantes.' },
];

export default function Agence() {
  return (
    <div className="min-h-screen bg-melioz-offwhite text-melioz-navy">
      <SEO
        title="L'Agence MELIOZ — Équipe & Valeurs | Paris"
        description="Agence digitale 100% en ligne basée à Paris, spécialisée dans la création de sites web sur-mesure pour TPE et PME."
        canonical="/agence"
      />
      <Navbar />
      <main>
        {/* Hero — teal */}
        <section className="relative min-h-[60vh] bg-melioz-teal flex items-center overflow-hidden pt-20">
          <img src="/images/Melioz Vector.svg" className="absolute right-0 top-0 w-[500px] opacity-[0.05] pointer-events-none select-none" aria-hidden="true" style={{ filter: 'brightness(0) invert(1)' }} />
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24">
            <AnimatedSection>
              <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-6">Notre histoire</p>
              <h1 className="font-display font-extrabold text-[64px] sm:text-[80px] md:text-[96px] leading-[0.9] tracking-[-0.04em] text-melioz-offwhite mb-8 max-w-3xl">
                Une agence digitale à taille humaine
              </h1>
              <p className="font-body text-[18px] text-melioz-offwhite/70 max-w-xl leading-relaxed mb-10">
                Melioz accompagne les organisations ambitieuses dans le déploiement de stratégies web d'envergure.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-melioz-electric text-melioz-offwhite font-body font-medium rounded-xl hover:-translate-y-0.5 transition-transform duration-200">
                Nous rencontrer <ArrowRight className="w-4 h-4" />
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* Histoire — offwhite */}
        <section className="py-32 bg-melioz-offwhite">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-4">Notre histoire</p>
              <h2 className="font-display font-bold text-[48px] md:text-[56px] leading-[1.0] tracking-[-0.02em] text-melioz-navy mb-10">
                De la passion à l'expertise
              </h2>
              <div className="space-y-6 font-body text-[17px] leading-[1.7] text-melioz-navy/70">
                <p>Melioz est née d'une conviction simple : chaque entreprise mérite un écosystème numérique à la hauteur de ses ambitions.</p>
                <p>Fondée en 2025 par un collectif engagé de développeurs et de designers, notre agence s'est imposée comme un partenaire stratégique pour les organisations souhaitant affirmer leur leadership en ligne.</p>
                <p>Aujourd'hui, nous forgeons le succès de projets d'envergure, de la définition d'identités visuelles au déploiement de plateformes complexes.</p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Valeurs — navy */}
        <section className="py-32 bg-melioz-navy">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <AnimatedSection className="mb-16">
              <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-mint mb-4">Nos valeurs</p>
              <h2 className="font-display font-bold text-[48px] md:text-[56px] leading-[1.0] tracking-[-0.02em] text-melioz-offwhite">
                Ce qui fait vivre Melioz
              </h2>
            </AnimatedSection>
            <div className="grid gap-6 md:grid-cols-3">
              {values.map(({ icon: Icon, title, description }, i) => (
                <AnimatedSection key={title} delay={i * 0.08}>
                  <div className="p-7 rounded-2xl bg-melioz-offwhite/5 border border-melioz-offwhite/10">
                    <div className="w-10 h-10 rounded-lg bg-melioz-electric/20 flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-melioz-electric" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-melioz-offwhite mb-3">{title}</h3>
                    <p className="font-body text-[15px] leading-relaxed text-melioz-offwhite/70">{description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Vision CTA — electric */}
        <section className="relative py-40 bg-melioz-electric overflow-hidden">
          <img src="/images/Melioz Vector.svg" className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] opacity-[0.06] pointer-events-none select-none" aria-hidden="true" style={{ filter: 'brightness(0) invert(1)' }} />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <AnimatedSection>
              <h2 className="font-display font-bold text-[48px] md:text-[64px] leading-[1.0] tracking-[-0.02em] text-melioz-offwhite mb-6">
                Rendre l'excellence digitale accessible.
              </h2>
              <p className="font-body text-[18px] text-melioz-offwhite/70 max-w-2xl mx-auto mb-10 leading-relaxed">
                Notre mission est de briser les barrières techniques pour offrir aux entreprises en pleine croissance les outils des leaders du marché.
              </p>
              <a href="/book-a-call" className="inline-flex items-center gap-2 px-8 py-4 bg-melioz-offwhite text-melioz-electric font-body font-medium rounded-xl hover:bg-melioz-navy hover:text-melioz-offwhite transition-colors duration-200">
                Réserver un appel <ArrowRight className="w-5 h-5" />
              </a>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
```

- [ ] **Étape 2 : Commit**

```bash
git add src/pages/Agence.tsx
git commit -m "feat: redesign page Agence — teal/offwhite/navy/electric"
```

---

## Task 14 — Page Services

**Files:**
- Modify: `src/pages/Services.tsx`

- [ ] **Étape 1 : Réécrire Services.tsx**

Garder `services` array, `faqs` array, `useState<number | null>(null)` pour openFaq. Remplacer tout le JSX :

```tsx
import { useState } from 'react';
import { ArrowRight, Code2, PenTool, TrendingUp, Rocket, Wrench, HeadphonesIcon, ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import AnimatedSection from '../components/AnimatedSection';

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    { icon: Code2,          title: 'Développement Web',          description: 'Sites vitrines, applications web et e-commerce développés avec les technologies les plus modernes.', features: ['Sites responsives et performants', 'Applications web sur-mesure', 'E-commerce avec Shopify ou WooCommerce', 'Intégrations API et automatisations'] },
    { icon: PenTool,        title: 'Design UI/UX',               description: 'L\'esthétique au service de l\'usage. Interfaces haute couture qui captent l\'attention et guident vos visiteurs vers l\'action.', features: ['Maquettes et prototypes Figma', 'Design system cohérent', 'Tests utilisateurs', 'Optimisation des parcours'] },
    { icon: TrendingUp,     title: 'Stratégie Digitale',         description: 'Nous définissons votre positionnement et votre univers visuel pour que votre marque soit mémorable et impose son autorité.', features: ['Audit SEO complet', 'Stratégie de contenu', 'Configuration Analytics', 'Optimisation des performances'] },
    { icon: TrendingUp,     title: 'SEO/GEO',                    description: 'Soyez visible là où vos clients cherchent des réponses. Nous optimisons votre présence pour les moteurs de recherche et les IA génératives.', features: ['Audit SEO complet', 'Stratégie de contenu', 'Configuration Analytics', 'Optimisation des performances'] },
    { icon: Rocket,         title: 'Infrastructure & Sécurité',  description: 'Hébergement haute disponibilité, surveillance 24/7 et mises à jour préventives pour que votre actif digital reste performant et inviolable.', features: ['Configuration hosting optimisé', 'Certificats SSL', 'Backup automatiques', 'Monitoring 24/7'] },
    { icon: Wrench,         title: 'Maintenance',                description: 'Gardez votre site performant et sécurisé avec nos forfaits de maintenance.', features: ['Mises à jour régulières', 'Corrections de bugs', 'Sauvegardes automatiques', 'Support technique'] },
    { icon: HeadphonesIcon, title: 'Conseil & Pilotage Continu', description: 'Notre mission est d\'assurer que votre plateforme surperforme continuellement face à la concurrence.', features: ['Analyse de performance & Suivi ROI', 'Veille technologique & IA', 'Accompagnement décisionnel', 'Optimisation continue'] },
  ];

  const faqs = [
    { question: 'Quels sont vos délais de livraison ?',     answer: 'Les délais varient selon la complexité du projet. Un site vitrine peut être livré en 2-4 semaines, tandis qu\'une application web complexe peut prendre 2-3 mois.' },
    { question: 'Comment se déroule un projet type ?',      answer: 'Chaque projet suit notre méthodologie : brief initial, conception UX/UI, développement itératif, tests, et mise en ligne. Vous êtes impliqué à chaque étape.' },
    { question: 'Proposez-vous des forfaits de maintenance ?', answer: 'Oui, nous proposons des forfaits de maintenance mensuels : mises à jour, sauvegardes, monitoring, et support technique inclus.' },
    { question: 'Quelles technologies utilisez-vous ?',    answer: 'React, Next.js, TypeScript, Node.js, ainsi que des CMS comme WordPress ou Shopify selon les besoins.' },
    { question: 'Travaillez-vous avec des clients hors de Paris ?', answer: 'Absolument ! Agence 100% digitale, nous travaillons avec des clients dans toute la France et à l\'international.' },
  ];

  return (
    <div className="min-h-screen bg-melioz-offwhite text-melioz-navy">
      <SEO title="Nos Services Web, Design & Stratégie | MELIOZ Paris" description="Découvrez nos expertises : développement sur-mesure, design d'interface et accompagnement marketing." canonical="/services" />
      <Navbar />
      <main>
        {/* Hero — offwhite */}
        <section className="pt-32 pb-20 bg-melioz-offwhite">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-4">Nos services</p>
              <h1 className="font-display font-extrabold text-[64px] sm:text-[80px] leading-[0.9] tracking-[-0.04em] text-melioz-navy mb-6 max-w-3xl">
                Ce qu'on construit pour vous.
              </h1>
              <p className="font-body text-[18px] text-melioz-navy/70 max-w-xl leading-relaxed">
                De la conception stratégique à la mise en ligne, nous orchestrons chaque étape de votre projet.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Services grid — navy */}
        <section className="py-20 bg-melioz-navy">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => (
                <AnimatedSection key={service.title} delay={i * 0.05}>
                  <div className="p-7 rounded-2xl bg-melioz-offwhite/5 border border-melioz-offwhite/10 hover:border-melioz-electric/40 hover:-translate-y-0.5 transition-all duration-200">
                    <div className="w-10 h-10 rounded-lg bg-melioz-electric/20 flex items-center justify-center mb-5">
                      <service.icon className="w-5 h-5 text-melioz-electric" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-melioz-offwhite mb-3">{service.title}</h3>
                    <p className="font-body text-[15px] text-melioz-offwhite/60 mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-1.5">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 font-body text-sm text-melioz-offwhite/50">
                          <span className="w-1 h-1 rounded-full bg-melioz-electric flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ — mint */}
        <section className="py-20 bg-melioz-mint">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <AnimatedSection className="mb-12">
              <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-navy/60 mb-4">FAQ</p>
              <h2 className="font-display font-bold text-[48px] leading-[1.0] tracking-[-0.02em] text-melioz-navy">Questions fréquentes</h2>
            </AnimatedSection>
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-melioz-navy/10 rounded-xl overflow-hidden bg-melioz-offwhite">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-melioz-mint/50 transition-colors"
                  >
                    <span className={`font-body font-medium ${openFaq === index ? 'text-melioz-electric' : 'text-melioz-navy'}`}>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-melioz-navy/40 transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4 border-t border-melioz-navy/10">
                      <p className="font-body text-[15px] text-melioz-navy/70 leading-relaxed pt-4">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA — electric */}
        <section className="relative py-40 bg-melioz-electric overflow-hidden">
          <img src="/images/Melioz Vector.svg" className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] opacity-[0.06] pointer-events-none select-none" aria-hidden="true" style={{ filter: 'brightness(0) invert(1)' }} />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <AnimatedSection>
              <h2 className="font-display font-bold text-[48px] md:text-[64px] leading-[1.0] tracking-[-0.02em] text-melioz-offwhite mb-6">
                Donnons une nouvelle dimension à votre présence digitale.
              </h2>
              <p className="font-body text-[18px] text-melioz-offwhite/70 mb-10 max-w-xl mx-auto leading-relaxed">Discutons de vos besoins et trouvons ensemble la solution idéale.</p>
              <a href="/book-a-call" className="inline-flex items-center gap-2 px-8 py-4 bg-melioz-offwhite text-melioz-electric font-body font-medium rounded-xl hover:bg-melioz-navy hover:text-melioz-offwhite transition-colors duration-200">
                Réserver un créneau <ArrowRight className="w-5 h-5" />
              </a>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
```

- [ ] **Étape 2 : Commit**

```bash
git add src/pages/Services.tsx
git commit -m "feat: redesign page Services — offwhite/navy/mint/electric"
```

---

## Task 15 — Page Expertise

**Files:**
- Modify: `src/pages/Expertise.tsx`

- [ ] **Étape 1 : Réécrire Expertise.tsx**

```tsx
import { Code2, Lightbulb, PenTool, Megaphone } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import CTADevis from '../components/CTADevis';
import AnimatedSection from '../components/AnimatedSection';

const poles = [
  {
    icon: Code2,
    title: 'Ingénierie & Architecture Web',
    description: "Nous concevons des infrastructures numériques robustes, pensées pour la vitesse et l'évolutivité. Notre maîtrise des technologies de pointe garantit une sécurité totale et une expérience utilisateur sans compromis.",
    skills: ['React / Next.js', 'TypeScript', 'Node.js', 'Python', 'WordPress', 'Shopify'],
    bg: 'bg-melioz-offwhite',
    iconBg: 'bg-melioz-teal/10',
    iconColor: 'text-melioz-teal',
  },
  {
    icon: Lightbulb,
    title: 'Stratégie & Pilotage Produit',
    description: "Le maillon fort entre votre vision business et la réalité technique. Nous structurons vos idées en plans d'action concrets, en priorisant l'impact et le ROI à chaque étape du développement.",
    skills: ['Méthodologie Agile', 'Audit & Cadrage Métier', 'Spécifications Fonctionnelles', 'User Stories & Backlog'],
    bg: 'bg-melioz-mint',
    iconBg: 'bg-melioz-teal/15',
    iconColor: 'text-melioz-teal',
  },
  {
    icon: PenTool,
    title: 'Expérience Utilisateur & Identité Visuelle',
    description: "Le design au service de la performance. Nous créons des interfaces immersives et intuitives qui ne se contentent pas d'être belles : elles sont conçues pour captiver votre audience et maximiser vos conversions.",
    skills: ['Design System', 'Wireframing', 'Prototypage Haute Fidélité', 'UX & Accessibilité', 'Identité Visuelle Digitale', 'Design de Conversion (CRO)'],
    bg: 'bg-melioz-offwhite',
    iconBg: 'bg-melioz-electric/10',
    iconColor: 'text-melioz-electric',
  },
  {
    icon: Megaphone,
    title: 'Acquisition & Intelligence Marketing',
    description: "Donnez de la puissance à votre visibilité. Nous orchestrons vos leviers d'acquisition pour attirer un trafic qualifié et pérenniser votre croissance grâce à une analyse fine de la donnée.",
    skills: ['SEO & Stratégie GEO (IA)', 'Campagnes SEA / Social Ads', 'Content Strategy', 'Analyse de Données', 'Automation Marketing'],
    bg: 'bg-melioz-mint',
    iconBg: 'bg-melioz-teal/15',
    iconColor: 'text-melioz-teal',
  },
];

export default function Expertise() {
  return (
    <div className="bg-melioz-offwhite text-melioz-navy">
      <SEO
        title="Notre Expertise Digitale — UX, Dev & Stratégie | MELIOZ"
        description="Rencontrez notre équipe d'experts : Product Owners, Designers UI/UX et Développeurs dédiés à la performance de votre marque."
        canonical="/expertise"
      />
      <Navbar />
      <main>
        {/* Hero — teal */}
        <section className="relative bg-melioz-teal pt-20 overflow-hidden">
          <img
            src="/images/Melioz Vector.svg"
            className="absolute right-0 top-0 w-[500px] opacity-[0.05] pointer-events-none select-none"
            aria-hidden="true"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24">
            <AnimatedSection>
              <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-6">Notre Expertise</p>
              <h1 className="font-display font-extrabold text-[64px] sm:text-[80px] md:text-[96px] leading-[0.9] tracking-[-0.04em] text-melioz-offwhite max-w-3xl">
                La convergence des talents, l'exigence du résultat.
              </h1>
              <p className="font-body text-[18px] text-melioz-offwhite/70 max-w-2xl mt-8 leading-relaxed">
                Melioz n'est pas qu'une somme de compétences, c'est une synergie d'experts dédiés à la haute performance. Nous fusionnons ingénierie de pointe et design stratégique pour bâtir des écosystèmes numériques qui dominent leur marché.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Pôles d'expertise — alternance offwhite/mint */}
        {poles.map((pole, index) => (
          <section key={pole.title} className={`py-32 ${pole.bg}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="grid gap-16 lg:grid-cols-2 items-center">
                {/* Texte */}
                <AnimatedSection delay={0.1} className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex p-4 rounded-xl ${pole.iconBg} mb-6`}>
                    <pole.icon className={`w-7 h-7 ${pole.iconColor}`} />
                  </div>
                  <h2 className="font-display font-bold text-[32px] md:text-[40px] leading-[1.1] tracking-[-0.02em] text-melioz-navy mb-4">
                    {pole.title}
                  </h2>
                  <p className="font-body text-[17px] text-melioz-navy/70 leading-relaxed mb-8">
                    {pole.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pole.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-melioz-navy/5 border border-melioz-navy/10 rounded-lg text-sm font-body text-melioz-navy/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </AnimatedSection>

                {/* Visuel décoratif */}
                <AnimatedSection delay={0.25} className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative aspect-[4/3] bg-melioz-teal/10 border border-melioz-navy/10 rounded-2xl overflow-hidden flex items-center justify-center">
                    <img
                      src="/images/Melioz Vector.svg"
                      className="w-32 opacity-20 pointer-events-none select-none"
                      aria-hidden="true"
                      style={{ filter: 'brightness(0) saturate(100%) invert(23%) sepia(29%) saturate(634%) hue-rotate(145deg) brightness(93%) contrast(88%)' }}
                    />
                    <div className="absolute bottom-6 right-6">
                      <pole.icon className={`w-8 h-8 ${pole.iconColor} opacity-40`} />
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        ))}

        <CTADevis />
      </main>
      <Footer />
    </div>
  );
}
```

- [ ] **Étape 2 : Commit**

```bash
git add src/pages/Expertise.tsx
git commit -m "feat: redesign page Expertise — hero teal, pôles alternés offwhite/mint"
```

---

## Task 16 — Page Réalisations

**Files:**
- Modify: `src/pages/Realisations.tsx`

- [ ] **Étape 1 : Réécrire Realisations.tsx**

La page est actuellement un placeholder "En construction". Redesigner avec le nouveau style :

```tsx
import { Construction } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function Realisations() {
  return (
    <div className="min-h-screen bg-melioz-offwhite text-melioz-navy">
      <SEO
        title="Nos Réalisations | MELIOZ Agence Paris"
        description="Nos réalisations arrivent bientôt."
        canonical="/realisations"
      />
      <Navbar />
      <main>
        {/* Hero — teal */}
        <section className="relative min-h-[60vh] bg-melioz-teal flex items-center overflow-hidden pt-20">
          <img src="/images/Melioz Vector.svg" className="absolute right-0 top-0 w-[500px] opacity-[0.05] pointer-events-none select-none" aria-hidden="true" style={{ filter: 'brightness(0) invert(1)' }} />
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24">
            <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-6">Nos réalisations</p>
            <h1 className="font-display font-extrabold text-[64px] sm:text-[80px] md:text-[96px] leading-[0.9] tracking-[-0.04em] text-melioz-offwhite max-w-3xl">
              Ce qu'on a construit.
            </h1>
          </div>
        </section>

        {/* Placeholder — offwhite */}
        <section className="py-40 bg-melioz-offwhite flex items-center justify-center">
          <div className="text-center">
            <div className="p-5 bg-melioz-mint border border-melioz-navy/10 rounded-2xl mb-6 inline-flex">
              <Construction className="w-10 h-10 text-melioz-navy/60" />
            </div>
            <h2 className="font-display font-bold text-[32px] text-melioz-navy mb-3">En construction</h2>
            <p className="font-body text-[17px] text-melioz-navy/60 max-w-sm mx-auto">
              Cette page sera bientôt disponible. Revenez nous voir très vite !
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
```

- [ ] **Étape 2 : Commit**

```bash
git add src/pages/Realisations.tsx
git commit -m "feat: redesign page Realisations — hero teal, placeholder offwhite"
```

---

## Task 17 — Page Contact

**Files:**
- Modify: `src/pages/Contact.tsx`

- [ ] **Étape 1 : Réécrire Contact.tsx**

Garder toute la logique : `useForm`, `zodResolver`, `onSubmit`, états `isSubmitted`/`isSubmitting`/`error`. Remplacer entièrement le JSX par :

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowRight, Mail, CheckCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import AnimatedSection from '../components/AnimatedSection';

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  subject: z.string().optional(),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const responseData = await response.json().catch(() => ({}));

      if (!response.ok) {
        const errorMessage = responseData.error || "Erreur lors de l'envoi du message";
        throw new Error(errorMessage);
      }

      setIsSubmitted(true);
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col min-h-screen bg-melioz-offwhite text-melioz-navy">
        <Navbar />
        <main className="flex-1 flex items-center justify-center py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <div className="p-4 bg-melioz-mint border border-melioz-navy/10 rounded-2xl w-20 h-20 mx-auto mb-8 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-melioz-teal" />
            </div>
            <h2 className="font-display font-bold text-[40px] text-melioz-navy mb-4">
              Message envoyé !
            </h2>
            <p className="font-body text-[18px] text-melioz-navy/70 mb-10">
              Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-melioz-electric text-melioz-offwhite font-body font-medium rounded-xl hover:bg-melioz-electric/90 transition-colors duration-300"
            >
              Retour à l'accueil
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-melioz-offwhite text-melioz-navy">
      <SEO
        title="Contactez MELIOZ — Agence Digitale Paris | Devis Gratuit"
        description="Parlons de votre projet digital. Contactez l'équipe MELIOZ à Paris pour un devis gratuit ou une consultation. Réponse sous 24h garanti."
        canonical="/contact"
      />
      <Navbar />
      <main>
        {/* Hero — navy */}
        <section className="relative bg-melioz-navy pt-20 overflow-hidden">
          <img
            src="/images/Melioz Vector.svg"
            className="absolute right-0 top-0 w-[400px] opacity-[0.04] pointer-events-none select-none"
            aria-hidden="true"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24">
            <AnimatedSection>
              <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-4">Contact</p>
              <h1 className="font-display font-extrabold text-[64px] sm:text-[80px] leading-[0.9] tracking-[-0.04em] text-melioz-offwhite max-w-2xl">
                Une question ? Contactez-nous
              </h1>
            </AnimatedSection>
          </div>
        </section>

        {/* Formulaire — offwhite */}
        <section className="py-20 bg-melioz-offwhite">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={errors.name ? 'true' : undefined}
                    className="w-full px-4 py-3 bg-white border border-melioz-navy/20 rounded-xl font-body text-melioz-navy focus:outline-none focus:border-melioz-electric transition-colors"
                    placeholder="Votre nom"
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="mt-1 text-sm text-red-500 font-body">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={errors.email ? 'true' : undefined}
                    className="w-full px-4 py-3 bg-white border border-melioz-navy/20 rounded-xl font-body text-melioz-navy focus:outline-none focus:border-melioz-electric transition-colors"
                    placeholder="votre@email.com"
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="mt-1 text-sm text-red-500 font-body">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register('subject')}
                    className="w-full px-4 py-3 bg-white border border-melioz-navy/20 rounded-xl font-body text-melioz-navy focus:outline-none focus:border-melioz-electric transition-colors"
                    placeholder="Objet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message')}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={errors.message ? 'true' : undefined}
                    className="w-full px-4 py-3 bg-white border border-melioz-navy/20 rounded-xl font-body text-melioz-navy focus:outline-none focus:border-melioz-electric transition-colors resize-none"
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-1 text-sm text-red-500 font-body">{errors.message.message}</p>
                  )}
                </div>

                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-sm text-red-600 font-body">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-melioz-electric text-melioz-offwhite font-body font-medium rounded-xl hover:bg-melioz-electric/90 transition-colors duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <span>Envoyer le message</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-12 pt-8 border-t border-melioz-navy/10 flex items-center gap-4">
                <div className="p-3 bg-melioz-mint border border-melioz-navy/10 rounded-xl">
                  <Mail className="w-5 h-5 text-melioz-teal" />
                </div>
                <div>
                  <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-0.5">Email</p>
                  <a href="mailto:contact@agencemelioz.com" className="font-body text-melioz-navy hover:text-melioz-electric transition-colors">
                    contact@agencemelioz.com
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
```

- [ ] **Étape 2 : Commit**

```bash
git add src/pages/Contact.tsx
git commit -m "feat: redesign page Contact — hero navy, form offwhite, labels accessibles"
```

---

## Task 18 — Page BookACall

**Files:**
- Modify: `src/pages/BookACall.tsx`

- [ ] **Étape 1 : Réécrire BookACall.tsx**

Garder toute la logique : `showCalendar` state, `useEffect` pour messages Tally/Cal, `onLoad` handler. Remplacer entièrement le JSX par :

```tsx
import { useState, useEffect } from 'react';
import { CheckCircle2, Calendar } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import AnimatedSection from '../components/AnimatedSection';

export default function BookACall() {
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tallySubmitted =
      params.get('tally_submitted') === 'true' ||
      localStorage.getItem('tally_submitted') === 'true';
    if (tallySubmitted) setShowCalendar(true);
  }, []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (
        (event.data && event.data.type === 'tally-form-submitted') ||
        (event.data && event.data.type === 'tally:form:submitted') ||
        (event.origin.includes('tally.so') && event.data?.event === 'tallyFormSubmitted')
      ) {
        setShowCalendar(true);
        localStorage.setItem('tally_submitted', 'true');
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="bg-melioz-offwhite text-melioz-navy">
      <SEO
        title="Réserver un appel avec MELIOZ — Agence Digitale Paris"
        description="Réservez un appel de 15 minutes avec l'équipe MELIOZ. Discutez de votre projet digital, de vos besoins et obtenez des conseils personnalisés."
        canonical="/book-a-call"
      />
      <Navbar />
      <main>
        {/* Hero — teal */}
        <section className="relative bg-melioz-teal pt-20 overflow-hidden">
          <img
            src="/images/Melioz Vector.svg"
            className="absolute right-0 top-0 w-[400px] opacity-[0.05] pointer-events-none select-none"
            aria-hidden="true"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-24">
            <AnimatedSection>
              <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-4">Réservation</p>
              <h1 className="font-display font-extrabold text-[64px] sm:text-[80px] leading-[0.9] tracking-[-0.04em] text-melioz-offwhite mb-6 max-w-2xl">
                Discutons de votre vision
              </h1>
              <p className="font-body text-[18px] text-melioz-offwhite/70 max-w-xl leading-relaxed">
                Réservez un appel de 15 minutes pour échanger sur votre projet et découvrir comment nous pouvons vous accompagner.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Formulaire Tally / Calendrier — offwhite */}
        <section className="py-20 bg-melioz-offwhite">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            {!showCalendar ? (
              /* Formulaire Tally */
              <AnimatedSection>
                <div className="bg-white border border-melioz-navy/10 rounded-2xl overflow-hidden">
                  <div className="p-8 sm:p-10 pb-6 border-b border-melioz-navy/10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 bg-melioz-electric/10 rounded-xl">
                        <CheckCircle2 className="w-5 h-5 text-melioz-electric" />
                      </div>
                      <h2 className="font-display font-bold text-[24px] text-melioz-navy">
                        Quelques questions rapides
                      </h2>
                    </div>
                    <p className="font-body text-melioz-navy/70">
                      Pour mieux comprendre vos besoins et vous proposer la meilleure solution.
                    </p>
                  </div>

                  <div className="w-full relative px-6 sm:px-8" style={{ height: '700px', overflow: 'hidden' }}>
                    <iframe
                      src="https://tally.so/embed/LZpNJG?hideTitle=1&transparentBackground=1&alignLeft=1"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      marginHeight={0}
                      marginWidth={0}
                      title="Formulaire de qualification"
                      style={{ border: 'none', display: 'block', overflow: 'hidden' }}
                      scrolling="no"
                      onLoad={() => {
                        const urlParams = new URLSearchParams(window.location.search);
                        if (urlParams.get('submitted') === 'true' || urlParams.get('tally_submitted') === 'true') {
                          setShowCalendar(true);
                          localStorage.setItem('tally_submitted', 'true');
                        }
                      }}
                    />
                  </div>

                  <div className="p-8 sm:p-10 pt-6 border-t border-melioz-navy/10">
                    <p className="font-body text-sm text-melioz-navy/50 text-center">
                      Après avoir rempli le formulaire, vous serez redirigé vers notre calendrier de réservation.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ) : (
              /* Calendrier Cal.com */
              <AnimatedSection>
                <div className="bg-white border border-melioz-navy/10 rounded-2xl p-8 sm:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-melioz-electric/10 rounded-xl">
                      <Calendar className="w-5 h-5 text-melioz-electric" />
                    </div>
                    <h2 className="font-display font-bold text-[24px] text-melioz-navy">
                      Choisissez un créneau
                    </h2>
                  </div>
                  <p className="font-body text-melioz-navy/70 mb-8">
                    Sélectionnez le créneau qui vous convient le mieux pour notre appel de 15 minutes.
                  </p>
                  {/* NOTE: Placeholder intentionnel — Cal.com non encore configuré.
                      Conserver tel quel jusqu'à ce que l'username Cal.com soit connu.
                      L'original BookACall.tsx avait ce même placeholder. */}
                  <div className="text-center p-8 border border-melioz-navy/10 rounded-xl">
                    <p className="font-body text-melioz-navy/50">Calendrier en cours de configuration. Contactez-nous directement.</p>
                  </div>
                </div>
              </AnimatedSection>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
```

- [ ] **Étape 2 : Commit**

```bash
git add src/pages/BookACall.tsx
git commit -m "feat: redesign page BookACall — hero teal, embeds sur offwhite"
```

---

## Task 19 — Pages légales

**Files:**
- Modify: `src/pages/MentionsLegales.tsx`
- Modify: `src/pages/Privacy.tsx`
- Modify: `src/pages/ConditionsGenerales.tsx`
- Modify: `src/pages/PlanSite.tsx`

- [ ] **Étape 1 : Mettre à jour chaque page légale**

Pour chacune des 4 pages, appliquer ces remplacements (pas de refonte de contenu) :

**Wrapper div :**
```
bg-background text-text → bg-melioz-offwhite text-melioz-navy
```

**Labels/badges :**
```
bg-primary/10 border-primary/20 rounded-full text-primary → bg-melioz-mint border-melioz-navy/10 rounded-lg text-melioz-navy font-body text-[11px] uppercase tracking-widest
```

**H1 :**
```
text-text font-bold → text-melioz-navy font-display font-extrabold
```

**Corps de texte :**
```
text-text/70 → text-melioz-navy/70 font-body
```

**Liens :**
```
text-primary → text-melioz-electric
```

**Audit `rounded-full` :** Après les remplacements, chercher `rounded-full` dans chacune des 4 pages. Si présent sur un bouton ou un lien (pas un indicateur circulaire), remplacer par `rounded-xl`.

- [ ] **Étape 2 : Commit**

```bash
git add src/pages/MentionsLegales.tsx src/pages/Privacy.tsx src/pages/ConditionsGenerales.tsx src/pages/PlanSite.tsx
git commit -m "feat: pages légales — design system melioz"
```

---

## Task 20 — Page 404 + mise à jour routing

**Files:**
- Create: `src/pages/NotFound.tsx`
- Modify: `src/main.tsx`

- [ ] **Étape 1 : Créer NotFound.tsx**

```tsx
// src/pages/NotFound.tsx
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-melioz-navy text-melioz-offwhite">
      <Navbar />
      {/* flex-1 remplace min-h-screen sur main pour éviter le double overflow */}
      <main className="relative flex flex-col flex-1 items-center justify-center overflow-hidden px-4">
        {/* M watermark */}
        <img
          src="/images/Melioz Vector.svg"
          className="absolute inset-0 m-auto w-[500px] opacity-[0.06] pointer-events-none select-none"
          aria-hidden="true"
          style={{ filter: 'brightness(0) invert(1)' }}
        />

        <div className="relative z-10 text-center">
          <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-6">Erreur</p>
          <h1 className="font-display font-extrabold text-[120px] md:text-[180px] leading-[0.9] tracking-[-0.04em] text-melioz-offwhite mb-6">
            404
          </h1>
          <p className="font-body text-[18px] text-melioz-offwhite/60 max-w-sm mb-10">
            Cette page n'existe pas ou a été déplacée.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 font-body text-sm font-medium text-melioz-electric hover:gap-3 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
```

- [ ] **Étape 2 : Mettre à jour main.tsx — branche dev**

Dans le bloc `if (isDev)`, dans le `Promise.all` :
```ts
// Ajouter à la liste des imports :
{ default: NotFound },
// et dans le tableau :
import('./pages/NotFound.tsx'),
```

Dans le switch du bloc dev, remplacer :
```ts
default:
  return <App />;
```
par :
```ts
case '/':
  return <App />;
default:
  return <NotFound />;
```

- [ ] **Étape 3 : Mettre à jour main.tsx — branche prod**

Dans le bloc `else`, ajouter :
```ts
const NotFound = lazy(() => import('./pages/NotFound.tsx'));
```

Dans le switch de la branche prod, appliquer le même remplacement :
```ts
// Avant :
default:
  return <App />;

// Après :
case '/':
  return <App />;
default:
  return <NotFound />;
```

- [ ] **Étape 4 : Vérifier**

```bash
npm run dev
```

Naviguer sur une URL inexistante, ex. http://localhost:5173/inexistant → doit afficher la page 404. `/` doit toujours afficher la home.

- [ ] **Étape 5 : Build final**

```bash
npm run build
```

Doit compiler sans erreur.

- [ ] **Étape 6 : Commit final**

```bash
git add src/pages/NotFound.tsx src/main.tsx
git commit -m "feat: page 404 + routing fallback dans main.tsx"
```

---

## Task 21 — Checklist finale

- [ ] Vérifier la séquence de fonds home : teal → offwhite → navy → electric → mint → lavender → navy ✓ aucune répétition
- [ ] M présent dans ≥ 4 sections (Hero, AboutSection, CTADevis, WhyUs cards, Footer, NotFound)
- [ ] Aucun gradient, blob shape, rounded-full sur bouton, shadow lourde
- [ ] Navbar : hamburger fonctionne mobile, aria-label présent, aria-current sur lien actif
- [ ] Formulaire Contact : labels associés via htmlFor/id
- [ ] Animations : toutes ≤ 0.5s, easeOut
- [ ] M SVG décoratif : aria-hidden systématique
- [ ] `font-sans` : aucune occurrence restante dans src/

```bash
grep -r "font-sans\|bg-primary\|bg-secondary\|bg-accent\|text-text\|bg-background\|bg-white\b\|rounded-full" src/ --include="*.tsx" -l
```

Si des fichiers apparaissent, corriger les occurrences résiduelles.

- [ ] Commit final de vérification :

```bash
git add -A
git commit -m "fix: corrections finales design system — supprimer tokens obsolètes"
```
