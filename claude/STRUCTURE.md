# STRUCTURE DU PROJET MELIOZ

## Stack technique
- **Framework** : Vite 7 + React 18 + TypeScript
- **Styles** : Tailwind CSS 3 (custom palette + fonts)
- **Animations** : Framer Motion 12 + Lenis (smooth scroll)
- **Formulaires** : react-hook-form + zod
- **SEO** : react-helmet-async + JSON-LD dans index.html
- **Email** : Resend API (via /api/contact serverless)
- **Déploiement** : Vercel

## Arborescence

```
agency-site/
├── api/
│   └── contact.ts              # Vercel serverless function (email via Resend)
├── claude/                     # Documentation projet (ce dossier)
│   ├── AUDIT.md
│   ├── CHANGELOG.md
│   ├── PLAN.md
│   └── STRUCTURE.md
├── docs/
│   └── plans/
│       └── 2026-03-05-melioz-refonte.md
├── public/
│   ├── favicon.ico / .svg / -96x96.png / apple-touch-icon.png
│   ├── web-app-manifest-192x192.png
│   ├── web-app-manifest-512x512.png
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── site.webmanifest
│   ├── kart.glb                # Modèle 3D (non utilisé ?)
│   └── images/
│       ├── og-image.svg        # ⚠️ À remplacer par PNG 1200×630
│       └── SVG/icon-logo.svg
├── scripts/
│   ├── copy-favicons.sh
│   ├── create-dist-package.js
│   └── generate-favicons.js
├── src/
│   ├── App.tsx                 # Homepage (route /)
│   ├── main.tsx                # Entry point + routing manuel
│   ├── index.css               # Tailwind + variables CSS + utilitaires
│   ├── App.css                 # À supprimer (minimal boilerplate)
│   ├── components/
│   │   ├── Navbar.tsx          # Header fixe + menu mobile
│   │   ├── Hero.tsx            # Section hero
│   │   ├── ServicesPreview.tsx # Aperçu services (homepage)
│   │   ├── AboutSection.tsx    # À propos (minimal)
│   │   ├── BentoAbout.tsx      # Bento grid about
│   │   ├── BentoExperience.tsx # Bento grid expertise
│   │   ├── WhyUs.tsx           # USPs
│   │   ├── CTA.tsx             # Call-to-action
│   │   ├── CTADevis.tsx        # Devis CTA (23 lignes)
│   │   ├── ContactPreFooter.tsx# Pré-footer contact
│   │   ├── Footer.tsx          # Footer
│   │   ├── Services.tsx        # Services détaillés
│   │   ├── Portfolio.tsx       # Portfolio/case studies
│   │   ├── RealisationsPreview.tsx
│   │   ├── Pricing.tsx         # Tarifs
│   │   ├── FAQ.tsx             # FAQ accordéon
│   │   ├── Team.tsx            # Équipe
│   │   ├── Process.tsx         # Process métier
│   │   ├── ProblemSolution.tsx # Narrative problème/solution
│   │   ├── FloatingBlocks.tsx  # Éléments flottants animés
│   │   ├── SocialProof.tsx     # Témoignages
│   │   ├── ServiceCard.tsx     # Carte de service individuelle
│   │   ├── OptimizedImage.tsx  # Wrapper image optimisé
│   │   ├── Logo.tsx            # Logo MELIOZ
│   │   ├── SEO.tsx             # React Helmet wrapper
│   │   ├── CookieBanner.tsx    # Cookie consent
│   │   ├── LoadingSpinner.tsx  # Loading indicator
│   │   └── ClientsLogos.tsx    # Logos clients (commenté dans App.tsx)
│   ├── pages/
│   │   ├── Admin.tsx           # /admin
│   │   ├── Services.tsx        # /services
│   │   ├── Agence.tsx          # /agence
│   │   ├── Expertise.tsx       # /expertise
│   │   ├── Realisations.tsx    # /realisations
│   │   ├── Contact.tsx         # /contact
│   │   ├── BookACall.tsx       # /book-a-call
│   │   ├── Privacy.tsx         # /privacy
│   │   ├── MentionsLegales.tsx # /mentions-legales
│   │   ├── ConditionsGenerales.tsx # /conditions-generales
│   │   └── PlanSite.tsx        # /plan-du-site
│   ├── hooks/
│   │   └── useLenis.ts         # Hook smooth scroll
│   ├── lib/
│   │   ├── framer-motion.tsx   # LazyMotion provider + exports
│   │   ├── motion.ts           # Variants et transitions réutilisables
│   │   └── scroll.ts           # Utilitaires scroll
│   └── assets/                 # Assets statiques Vite
├── index.html                  # HTML entry (SEO complet, JSON-LD, fonts)
├── vite.config.ts              # Build config + API middleware dev
├── tailwind.config.js          # Palette couleurs + fonts
├── postcss.config.js
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
├── vercel.json                 # SPA rewrite rule
├── package.json
└── .env.local                  # API keys (git-ignoré)
```

## Palette de couleurs

| Nom | Valeur | Usage |
|-----|--------|-------|
| background | #F8F9F5 | Fond principal |
| primary | #B2C2A2 | Vert Sauge Clair |
| secondary | #849673 | Vert Lichen |
| accent | #E5A186 | Terre Cuite Douce |
| text | #2F362C | Anthracite Chaud |

## Fonts

| Variable | Police | Usage |
|----------|--------|-------|
| font-sans | DM Sans | Corps de texte |
| font-display | Space Grotesk | Titres H1-H6 |
| font-mono | JetBrains Mono | Code |

## Routing

Routing manuel dans `main.tsx` via `window.location.pathname`. Pas de React Router.
- Dev : imports eagerly
- Prod : `lazy()` + `<Suspense>`

## Variables d'environnement

Voir `.env.local` (git-ignoré). Créer `.env.example` avec les clés nécessaires (sans valeurs).

```
VITE_ADMIN_USER=
VITE_ADMIN_PASS=
VITE_WEB3FORMS_KEY=
RESEND_API_KEY=
```
