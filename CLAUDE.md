# MELIOZ Agency Site — Référence Claude

> Fichier chargé automatiquement. Contient tout ce que Claude doit savoir sur ce projet.

---

## Stack technique

| Couche | Outil | Version |
|---|---|---|
| Build | Vite | 7 |
| UI | React + TypeScript | 18.3 |
| Style | Tailwind CSS | 3 |
| Animation | Framer Motion | 12 |
| Smooth scroll | Lenis | 1.3 |
| 3D | React Three Fiber + Drei + Three.js | 8.17 / 9.122 / 0.183 |
| Formulaires | react-hook-form + zod | 7 / 3 |
| SEO | react-helmet-async | 2 |
| Email | Resend API (serverless) | — |
| Déploiement | Vercel | — |

**Routing** : manuel via `window.location.pathname` dans `src/main.tsx` — pas de React Router.

**Alias** : `@` → `./src` (configuré dans vite.config.ts et tsconfig.app.json).

---

## Design System

### Palette Tailwind

```
melioz-teal     #204F56   Fond hero, sections foncées
melioz-navy     #0D1626   Texte principal, fond footer
melioz-offwhite #EDEFEE   Fond clair, texte sur foncé
melioz-electric #3B54CC   Accent, CTA, liens actifs
melioz-mint     #DAE9D9   Section douce (WhyUs)
melioz-lavender #9EB8F9   Section douce (ContactPreFooter)
```

### Typographie

```
font-display  Space Grotesk Variable   Titres H1-H4, logos
font-body     DM Sans                  Corps, labels, boutons
```

**Hiérarchie tailles :**
- H1 hero : `clamp(40px, 9vw, 96px)`, `font-extrabold`, `tracking-[-0.04em]`, `leading-[0.9]`
- H2 section : `clamp(32px, 5vw, 56px)`, `font-bold`, `tracking-[-0.02em]`
- Label : `text-[11px] uppercase tracking-[0.12em]` en `text-melioz-electric`
- Body : `text-[15px]` mobile, `text-[17px]` desktop, `leading-relaxed`

### Breakpoints

```
sm   375px   Petit mobile
md   768px   Tablette
lg   1024px  Desktop
xl   1280px  Large desktop
2xl  1440px  Extra large
```

### Espacements sections

```
py-16 md:py-24 lg:py-32   Section standard
py-20 md:py-32 lg:py-40   Section CTA/hero interne
```

---

## Architecture fichiers

```
agency-site/
├── CLAUDE.md                  ← CE FICHIER
├── .claude/
│   └── SKILLS/                ← Skills projet
├── src/
│   ├── App.tsx                ← Page d'accueil (compose les sections)
│   ├── main.tsx               ← Entry point + routing manuel
│   ├── index.css              ← Tailwind + fonts + resets globaux
│   ├── components/
│   │   ├── hero/
│   │   │   ├── MeliozGlass3D.tsx      3D M en verre (Three.js)
│   │   │   └── MeliozGlass3DLazy.tsx  Lazy wrapper + Suspense fallback
│   │   ├── AnimatedSection.tsx        motion.div scroll-triggered (whileInView)
│   │   ├── Navbar.tsx                 Header fixe + menu mobile
│   │   ├── Hero.tsx                   Section hero homepage
│   │   ├── ServicesPreview.tsx        3 cards services (teal/mint/navy)
│   │   ├── AboutSection.tsx           Section à propos + stats
│   │   ├── CTADevis.tsx               Bande CTA electric + M watermark
│   │   ├── WhyUs.tsx                  3 cards "Pourquoi nous" (mint)
│   │   ├── ContactPreFooter.tsx       CTA contact avant footer (lavender/40)
│   │   ├── Footer.tsx                 Footer 4 colonnes
│   │   ├── SEO.tsx                    Helmet wrapper SEO
│   │   ├── SplashScreen.tsx           Écran de chargement initial
│   │   ├── MLoader.tsx                Loader M animé
│   │   ├── CookieBanner.tsx           Bandeau RGPD
│   │   ├── SectionLine.tsx            Ligne séparatrice animée
│   │   ├── LoadingSpinner.tsx         Spinner générique
│   │   └── Container.tsx              Wrapper max-width
│   ├── pages/
│   │   ├── Agence.tsx          /agence
│   │   ├── Services.tsx        /services
│   │   ├── Expertise.tsx       /expertise
│   │   ├── Realisations.tsx    /realisations
│   │   ├── Contact.tsx         /contact
│   │   ├── BookACall.tsx       /book-a-call
│   │   ├── MentionsLegales.tsx /mentions-legales
│   │   ├── Privacy.tsx         /privacy
│   │   ├── ConditionsGenerales.tsx /conditions-generales
│   │   ├── PlanSite.tsx        /plan-du-site
│   │   └── NotFound.tsx        /* (404)
│   ├── hooks/
│   │   ├── useCanRender3D.ts   Détecte mobile bas de gamme → désactive WebGL
│   │   └── useLenis.ts         Init Lenis smooth scroll
│   └── lib/
│       ├── framer-motion.tsx   Re-export motion avec LazyMotion
│       ├── motion.ts           Variantes partagées
│       ├── scroll.ts           Helpers scroll
│       └── utils.ts            cn() (clsx + tailwind-merge)
├── public/
│   └── images/
│       ├── logo_white_text.png
│       ├── logo_black_text.png
│       └── Melioz Vector.svg   M cursif — utilisé comme watermark partout
├── api/
│   └── contact.ts             Serverless endpoint Resend (POST /api/contact)
└── vite.config.ts             Alias @, code splitting, apiPlugin dev
```

---

## Routes & Pages

| URL | Composant | Navbar mode |
|---|---|---|
| `/` | App.tsx | default (dark) |
| `/agence` | Agence.tsx | `light` |
| `/services` | Services.tsx | `light` |
| `/expertise` | Expertise.tsx | `light` |
| `/realisations` | Realisations.tsx | `light` |
| `/contact` | Contact.tsx | default |
| `/book-a-call` | BookACall.tsx | default |
| `/mentions-legales` | MentionsLegales.tsx | `light` |
| `/privacy` | Privacy.tsx | `light` |
| `/conditions-generales` | ConditionsGenerales.tsx | `light` |
| `/plan-du-site` | PlanSite.tsx | `light` |
| `/*` | NotFound.tsx | default |

**`<Navbar light />`** : logo noir + liens navy (pour pages fond clair).

---

## Composition Page d'accueil

```
Navbar (fixed, z-70)
Hero (teal, min-h-screen)
ServicesPreview (offwhite)
AboutSection (navy)
CTADevis (electric)
WhyUs (mint)
ContactPreFooter (lavender/40)
Footer (navy)
```

---

## Patterns & Conventions

### Ajouter une page
1. Créer `src/pages/NomPage.tsx`
2. Ajouter la route dans `src/main.tsx` (dev eager + prod lazy)
3. Utiliser `<SEO title="..." description="..." canonical="/url" />`
4. Commencer par `<Navbar light />` (ou sans `light` si fond foncé)
5. Padding hero : `pt-28 md:pt-36` pour dégager la navbar fixe

### Cards en grille
Cards dans une grille Tailwind → toujours `h-full flex flex-col` sur la card + `className="h-full"` sur l'`AnimatedSection` wrapper pour égaliser les hauteurs.

### Boutons
```tsx
// Primaire
className="inline-flex items-center justify-center gap-2 px-6 py-3.5
  bg-melioz-electric text-melioz-offwhite font-body font-medium text-sm md:text-[15px]
  rounded-xl hover:-translate-y-0.5 transition-transform duration-200 whitespace-nowrap"

// Secondaire (bordure)
className="inline-flex items-center justify-center gap-2 px-6 py-3.5
  border border-melioz-offwhite/25 text-melioz-offwhite/80 font-body font-medium
  text-sm md:text-[15px] rounded-xl hover:border-melioz-offwhite/50
  hover:text-melioz-offwhite transition-all duration-200 whitespace-nowrap"
```

### AnimatedSection
```tsx
// Toujours once:true, margin -60px, max delay 0.4s
<AnimatedSection delay={i * 0.08}>
  <div>...</div>
</AnimatedSection>
```

### M Watermark (décoratif)
```tsx
<img src="/images/Melioz Vector.svg"
  className="w-[400px] opacity-[0.04]"
  aria-hidden="true"
  style={{ filter: 'brightness(0) invert(1)' }} // blanc
/>
// Filtres disponibles :
// blanc   : brightness(0) invert(1)
// teal    : brightness(0) saturate(100%) invert(23%) sepia(29%)...
// opacité : 0.03 à 0.08 selon le fond
```

### Canvas 3D (MeliozGlass3D)
Le Canvas a besoin d'un container avec hauteur pixel explicite + `position: relative`. Utiliser `absolute inset-0` pour le wrapper immédiat du Canvas :
```tsx
<div className="relative md:h-[320px] lg:h-[560px]">
  <div className="absolute inset-0">
    <MeliozGlass3DLazy />
  </div>
</div>
```

---

## Variables d'environnement

```
VITE_WEB3FORMS_KEY   Clé formulaire (côté client, ok)
RESEND_API_KEY       Clé Resend (côté serveur uniquement, jamais VITE_)
```

⚠️ Ne jamais préfixer de secrets avec `VITE_` — ils seraient exposés dans le bundle.

---

## Commandes

```bash
npm run dev          Serveur de développement (port 5173)
npm run dev:all      Dev + serveur API local (Resend simulé)
npm run build        Build production
npm run typecheck    Vérification TypeScript sans build
```

---

## Points d'attention

- **Framer Motion** : toujours importer depuis `../lib/framer-motion` (pas directement depuis `framer-motion`) pour bénéficier du LazyMotion
- **Images** : toujours `loading="lazy"` + `width` + `height` sur les `<img>` hors viewport initial
- **Fonts** : importées via `@fontsource` dans `index.css` — pas de Google Fonts CDN
- **R3F** : version 8.17 (pas v9 — incompatible React 18.3)
- **three-stdlib** : pinné à 2.35.0 (2.36+ a un bug ACESFilmicToneMappingShader)
