# MELIOZ Site — Audit & Refonte complète Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Auditer et optimiser le site MELIOZ (agencemelioz.com) pour une mise en ligne production-ready : SEO, responsive, performance, design system shadcn/Magic UI.

**Architecture:** React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion. Pas de changement de framework. Ajout de shadcn/ui (composants accessibles) et Magic UI (effets premium). Le routing est géré manuellement via `window.location.pathname` dans `main.tsx`.

**Tech Stack:** Vite 7, React 18, TypeScript, Tailwind CSS 3, Framer Motion 12, Lenis, react-helmet-async, react-hook-form + zod, Resend (email), Vercel (déploiement), shadcn/ui (à installer), Magic UI (à installer).

---

## Contexte & Découvertes de l'audit initial

### Ce qui est déjà bien :
- SEO de base solide dans `index.html` (OG tags, Twitter Card, 3 schemas JSON-LD)
- Performance bundle : code splitting manuel dans vite.config.ts
- Smooth scroll via Lenis
- Contact form avec Resend API fonctionnel
- 28 composants, 11 pages déjà structurés

### Problèmes identifiés :
1. **Site.webmanifest** référence `favicon-192x192.png` et `favicon-512x512.png` mais le public contient `web-app-manifest-192x192.png` et `web-app-manifest-512x512.png` — **noms incorrects**
2. **Pas d'images réelles** — placeholders ou assets manquants
3. **OG image** est en SVG — les réseaux sociaux préfèrent PNG 1200×630
4. **Credentials admin en dur** dans `.env.local` — vérifier qu'ils ne sont pas dans le code
5. **ClientsLogos** commenté dans App.tsx — à décider
6. **Icônes Lucide partout** — à remplacer par des composants plus riches
7. **SEO dynamique par page** — vérifier que chaque page appelle le composant `<SEO>`

---

## Task 0: Setup documentation `/claude`

**Files:**
- Create: `claude/PLAN.md`
- Create: `claude/AUDIT.md`
- Create: `claude/CHANGELOG.md`
- Create: `claude/STRUCTURE.md`

### Step 1: Créer les fichiers de documentation

```bash
mkdir -p claude
```

### Step 2: Écrire `claude/STRUCTURE.md`

Arborescence complète du projet (voir exploration initiale).

### Step 3: Écrire `claude/AUDIT.md`

Résultats détaillés de l'audit (voir section Task 1 ci-dessous).

### Step 4: Écrire `claude/PLAN.md`

Copie condensée de ce plan avec checklist de progression.

### Step 5: Initialiser `claude/CHANGELOG.md`

```markdown
# CHANGELOG

## [Unreleased]

### En cours
- Setup documentation
```

### Step 6: Commit

```bash
git add claude/
git commit -m "docs: initialise dossier /claude avec audit, plan, changelog, structure"
```

---

## Task 1: Audit complet et documentation

**Files:**
- Write: `claude/AUDIT.md`

### Step 1: Lire chaque composant et page et documenter les problèmes

Pour chaque fichier dans `src/components/` et `src/pages/`, noter :
- Présence du composant `<SEO>` (pour les pages)
- Images sans `alt` ou sans `loading="lazy"`
- Icônes Lucide utilisées (à remplacer)
- Problèmes responsive évidents (overflow, px fixes, textes trop petits)
- Imports non utilisés

Commande pour voir tous les imports Lucide :
```bash
grep -r "from 'lucide-react'" src/ --include="*.tsx"
```

### Step 2: Vérifier le webmanifest

```bash
cat public/site.webmanifest
ls public/
```

Attendu : trouver le mismatch entre les noms dans le manifest et les fichiers réels.

### Step 3: Vérifier les credentials

```bash
grep -r "VITE_ADMIN_USER\|VITE_ADMIN_PASS\|password\|admin" src/ --include="*.tsx" -l
```

Attendu : trouver si les credentials sont utilisés côté client (mauvaise pratique).

### Step 4: Documenter dans `claude/AUDIT.md`

Format :
```markdown
## SEO
- ✅ index.html : title, meta description, OG tags, JSON-LD (3 schemas)
- ❌ site.webmanifest : noms d'icônes incorrects (web-app-manifest vs favicon)
- ⚠️ Pages sans <SEO> : lister ici
- ❌ OG image en SVG (devrait être PNG 1200x630)

## Images
- ❌ Pas d'images WebP dans public/images/
- ❌ alt attributes manquants sur [lister composants]

## Icônes à remplacer
- Navbar.tsx : [lister icônes]
- Hero.tsx : [lister icônes]
...

## Problèmes critiques
1. site.webmanifest : noms de fichiers incorrects
2. OG image SVG → PNG
3. [autres]
```

### Step 5: Commit

```bash
git add claude/AUDIT.md
git commit -m "docs: audit initial complet du site MELIOZ"
```

---

## Task 2: Corrections critiques pré-design

**Files:**
- Modify: `public/site.webmanifest`
- Modify: `public/sitemap.xml` (si dates incorrectes)

### Step 1: Corriger site.webmanifest

Remplacer les références incorrectes :
```json
{
  "icons": [
    {
      "src": "/web-app-manifest-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "src": "/web-app-manifest-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ]
}
```

### Step 2: Vérifier sitemap.xml

```bash
cat public/sitemap.xml
```

Vérifier que les URLs et les `<lastmod>` sont corrects.

### Step 3: Ajouter `<SEO>` sur les pages qui en manquent

Pour chaque page sans `<SEO>`, ajouter :
```tsx
<SEO
  title="[Titre unique 50-60 chars] | MELIOZ"
  description="[Description 150-160 chars]"
  canonical="/[route]"
/>
```

### Step 4: Documenter dans CHANGELOG

```markdown
### Task 2 — Corrections critiques
- fix: corrigé noms d'icônes dans site.webmanifest
- fix: ajouté <SEO> sur pages [liste]
```

### Step 5: Commit

```bash
git add public/site.webmanifest src/pages/
git commit -m "fix: corrige webmanifest et ajoute SEO sur toutes les pages"
```

---

## Task 3: Installation shadcn/ui

**Files:**
- Modify: `package.json`
- Create: `components.json` (shadcn config)
- Create: `src/lib/utils.ts`
- Modify: `tailwind.config.js`
- Modify: `vite.config.ts` (path alias @)
- Modify: `tsconfig.app.json` (path alias @)

### Step 1: Configurer l'alias `@` dans Vite (requis pour shadcn)

Modifier `vite.config.ts` :
```typescript
import path from 'path'

export default defineConfig({
  plugins: [react(), apiPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // ... rest of config
})
```

### Step 2: Ajouter l'alias dans `tsconfig.app.json`

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Step 3: Initialiser shadcn/ui (Vite + React + Tailwind)

```bash
npx shadcn@latest init
```

Répondre aux prompts :
- Style : Default
- Base color : Stone (ou personnalisé)
- CSS variables : Yes
- Tailwind config : `tailwind.config.js`
- Components path : `@/components/ui`
- Utils path : `@/lib/utils`

### Step 4: Vérifier que `src/lib/utils.ts` est créé

```bash
cat src/lib/utils.ts
```

Attendu :
```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### Step 5: Installer les composants shadcn/ui nécessaires

```bash
npx shadcn@latest add card badge button
```

### Step 6: Vérifier que le build TypeScript passe

```bash
npm run typecheck
```

Attendu : 0 errors

### Step 7: Documenter + Commit

```bash
git add .
git commit -m "feat: installe et configure shadcn/ui (card, badge, button)"
```

---

## Task 4: Installation Magic UI

**Files:**
- Modify: `package.json`
- Create: `src/components/magicui/` (composants installés manuellement)

### Step 1: Vérifier la compatibilité Magic UI avec Vite

Magic UI s'installe composant par composant via CLI ou copie manuelle.

```bash
npx shadcn@latest add "https://magicui.design/r/magic-card"
npx shadcn@latest add "https://magicui.design/r/animated-gradient-text"
npx shadcn@latest add "https://magicui.design/r/border-beam"
npx shadcn@latest add "https://magicui.design/r/number-ticker"
npx shadcn@latest add "https://magicui.design/r/blur-fade"
```

> **Note :** Si l'installation CLI échoue, copier manuellement les composants depuis la documentation Magic UI dans `src/components/magicui/`.

### Step 2: Vérifier que les composants sont dans `src/components/magicui/`

```bash
ls src/components/magicui/
```

Attendu : `magic-card.tsx`, `animated-gradient-text.tsx`, `border-beam.tsx`, `number-ticker.tsx`, `blur-fade.tsx`

### Step 3: Vérifier le typecheck

```bash
npm run typecheck
```

Attendu : 0 errors

### Step 4: Commit

```bash
git add src/components/magicui/ package.json package-lock.json
git commit -m "feat: installe composants Magic UI (MagicCard, AnimatedGradientText, BorderBeam, NumberTicker, BlurFade)"
```

---

## Task 5: Optimisation images — Hero section

**Files:**
- Modify: `src/components/Hero.tsx`

### Step 1: Lire Hero.tsx

```bash
cat src/components/Hero.tsx
```

### Step 2: Identifier si Hero a une image placeholder ou fond CSS

Si fond CSS uniquement (blob shapes) → ajouter un dégradé animé plus impactant plutôt qu'une image.

Si image placeholder → remplacer par une image Unsplash pertinente.

### Step 3: Implémenter le fond dégradé animé (si pas d'image)

Ajouter dans Hero.tsx :
```tsx
{/* Fond animé si pas d'image graphiste */}
<div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/10 animate-gradient" />
```

Dans `index.css` :
```css
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient-shift 8s ease infinite;
}
```

### Step 4: Utiliser `AnimatedGradientText` de Magic UI pour le titre hero

```tsx
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text'

// Dans le JSX du titre hero :
<AnimatedGradientText>
  Votre présence digitale
</AnimatedGradientText>
```

### Step 5: Vérifier visuellement en dev

```bash
npm run dev
```

Ouvrir http://localhost:5173 et vérifier le rendu.

### Step 6: Commit

```bash
git add src/components/Hero.tsx src/index.css
git commit -m "feat: améliore le hero avec AnimatedGradientText et fond dégradé animé"
```

---

## Task 6: Remplacement des icônes — ServicesPreview & WhyUs

**Files:**
- Modify: `src/components/ServicesPreview.tsx`
- Modify: `src/components/WhyUs.tsx`

### Step 1: Lire les deux fichiers

```bash
cat src/components/ServicesPreview.tsx
cat src/components/WhyUs.tsx
```

### Step 2: Remplacer les blocs icône+texte par des MagicCard

Pour ServicesPreview, remplacer chaque carte icône par :
```tsx
import { MagicCard } from '@/components/magicui/magic-card'

<MagicCard
  className="p-6 cursor-pointer"
  gradientColor="#B2C2A220"
>
  <h3 className="font-display font-bold text-xl mb-2">[Service]</h3>
  <p className="text-secondary">[Description]</p>
</MagicCard>
```

### Step 3: Ajouter `BorderBeam` sur la carte mise en avant

```tsx
import { BorderBeam } from '@/components/magicui/border-beam'

<div className="relative">
  <MagicCard ...>
    [contenu]
  </MagicCard>
  <BorderBeam size={250} duration={12} delay={9} />
</div>
```

### Step 4: Vérifier visuellement (mobile ET desktop)

Dans Chrome DevTools : tester 375px, 768px, 1280px.

### Step 5: Commit

```bash
git add src/components/ServicesPreview.tsx src/components/WhyUs.tsx
git commit -m "feat: remplace icônes génériques par MagicCard et BorderBeam dans les sections services"
```

---

## Task 7: Stats & chiffres — NumberTicker

**Files:**
- Identifier les composants avec des chiffres (SocialProof, AboutSection, BentoAbout)
- Modify: composant(s) concerné(s)

### Step 1: Identifier les composants avec des stats/chiffres

```bash
grep -r "[0-9]\+\(+\|%\)" src/components/ --include="*.tsx" -l
```

### Step 2: Remplacer les chiffres statiques par NumberTicker

```tsx
import { NumberTicker } from '@/components/magicui/number-ticker'

// Remplacer : <span>150+</span>
// Par :
<NumberTicker value={150} />
<span>+</span>
```

### Step 3: Vérifier que l'animation se déclenche au scroll

S'assurer que `BlurFade` ou `useInView` de Framer Motion enveloppe les sections avec stats.

### Step 4: Commit

```bash
git add src/components/
git commit -m "feat: anime les chiffres/stats avec NumberTicker au scroll"
```

---

## Task 8: Animations d'entrée — BlurFade

**Files:**
- Modify: `src/components/AboutSection.tsx`
- Modify: `src/components/BentoAbout.tsx`
- Modify: `src/components/ContactPreFooter.tsx`

### Step 1: Lire les fichiers ciblés

### Step 2: Wrapper les sections avec BlurFade

```tsx
import { BlurFade } from '@/components/magicui/blur-fade'

<BlurFade delay={0.25} inView>
  <div className="...">
    [contenu de la section]
  </div>
</BlurFade>
```

Utiliser des délais progressifs : `delay={0.25}`, `delay={0.5}`, `delay={0.75}` pour les éléments successifs.

### Step 3: S'assurer que les animations existantes Framer Motion ne conflictent pas

Vérifier les sections qui utilisent déjà `motion.div` — ne pas doubler les animations.

### Step 4: Commit

```bash
git add src/components/AboutSection.tsx src/components/BentoAbout.tsx src/components/ContactPreFooter.tsx
git commit -m "feat: ajoute BlurFade sur les entrées en scroll des sections principales"
```

---

## Task 9: Images WebP et optimisation

**Files:**
- Modify: `src/components/OptimizedImage.tsx`
- Create: `public/images/` (assets WebP si disponibles)

### Step 1: Lire OptimizedImage.tsx

```bash
cat src/components/OptimizedImage.tsx
```

### Step 2: S'assurer que le composant impose lazy loading et dimensions

```tsx
// src/components/OptimizedImage.tsx
interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export default function OptimizedImage({ src, alt, width, height, className, priority = false }: OptimizedImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
    />
  );
}
```

### Step 3: Vérifier tous les `<img>` dans le projet

```bash
grep -r "<img " src/ --include="*.tsx" -l
```

Pour chaque `<img>` trouvé, s'assurer qu'il a :
- `alt` descriptif et non vide
- `loading="lazy"` (ou priority eager pour LCP)
- `width` et `height` explicites

### Step 4: Pour les images Unsplash (placeholders)

Utiliser le format :
```tsx
<img
  src="https://images.unsplash.com/photo-[ID]?w=800&q=80&fm=webp"
  alt="Bureau moderne, espace de travail collaboratif à Paris"
  width={800}
  height={600}
  loading="lazy"
  decoding="async"
/>
```

> **Note :** Unsplash supporte `?fm=webp` pour la conversion automatique en WebP.

### Step 5: Corriger l'OG image

L'OG image actuelle est un SVG. Pour un meilleur partage social, créer une OG image PNG.

Option rapide : créer une capture d'écran du hero en PNG 1200×630 et la placer dans `public/images/og-image.png`.

Mettre à jour `index.html` :
```html
<meta property="og:image" content="https://agencemelioz.com/images/og-image.png" />
```

### Step 6: Commit

```bash
git add src/components/OptimizedImage.tsx index.html
git commit -m "fix: optimise les images (lazy loading, dimensions, WebP, OG image PNG)"
```

---

## Task 10: SEO par page — vérification complète

**Files:**
- Modify: chaque fichier de page qui manque de `<SEO>`

### Step 1: Lister toutes les pages

```bash
ls src/pages/
```

Pages : Admin, Services, Agence, Expertise, Realisations, Contact, MentionsLegales, Privacy, PlanSite, ConditionsGenerales, BookACall

### Step 2: Pour chaque page, vérifier la présence de `<SEO>`

```bash
grep -r "import SEO\|<SEO" src/pages/ --include="*.tsx"
```

### Step 3: Ajouter `<SEO>` là où c'est manquant

Exemples de balises cibles (50-60 chars title, 150-160 chars description) :

**Services :**
```tsx
<SEO
  title="Nos Services Web & Produit | MELIOZ Agence Paris"
  description="Design UX/UI, développement web sur mesure et stratégie produit. MELIOZ crée des expériences digitales qui transforment vos ambitions en réalité."
  canonical="/services"
/>
```

**Agence :**
```tsx
<SEO
  title="L'Agence MELIOZ — Notre histoire & nos valeurs"
  description="Découvrez MELIOZ, agence digitale parisienne. Une équipe d'experts en design, développement et stratégie produit au service de vos projets ambitieux."
  canonical="/agence"
/>
```

**Contact :**
```tsx
<SEO
  title="Contactez MELIOZ — Agence Digitale Paris"
  description="Parlons de votre projet. Contactez notre équipe pour un devis gratuit, une consultation ou une prise de rendez-vous. Réponse sous 24h."
  canonical="/contact"
/>
```

### Step 4: Vérifier les longueurs de title/description

Outil en ligne : https://metatags.io — ou compter manuellement.

### Step 5: Commit

```bash
git add src/pages/
git commit -m "feat: ajoute balises SEO complètes sur toutes les pages"
```

---

## Task 11: Responsive — audit et corrections

**Files:**
- Modify: composants avec problèmes responsive identifiés dans l'audit

### Step 1: Ouvrir Chrome DevTools et tester chaque page à 375px

Pages à tester dans l'ordre :
1. `/` (Homepage)
2. `/services`
3. `/agence`
4. `/contact`
5. `/expertise`
6. `/realisations`

Documenter dans `claude/AUDIT.md` les problèmes trouvés.

### Step 2: Corrections types — overflow horizontal

Si un élément déborde :
```tsx
// Ajouter sur le container parent :
className="overflow-x-hidden"
// OU sur l'élément enfant fautif :
className="w-full max-w-full"
```

### Step 3: Corrections types — textes trop petits

Minimum 16px sur mobile. Vérifier les classes Tailwind utilisées :
- `text-xs` (12px) → remplacer par `text-sm` (14px) minimum
- `text-sm` sur des paragraphes importants → `text-base`

### Step 4: Corrections types — zones cliquables trop petites

Boutons et liens doivent avoir `min-h-[44px] min-w-[44px]` :
```tsx
className="min-h-[44px] flex items-center ..."
```

### Step 5: Tester à 768px (tablette)

Vérifier notamment la Navbar et les grilles de cartes.

### Step 6: Commit par section corrigée

```bash
git add src/components/[composant-corrigé].tsx
git commit -m "fix: corrige responsive [nom-section] sur mobile 375px"
```

---

## Task 12: Accessibilité de base

**Files:**
- Modify: `src/components/Navbar.tsx`
- Modify: composants avec problèmes d'accessibilité

### Step 1: Vérifier le focus visible dans la Navbar

Le menu mobile et les liens de navigation doivent avoir un focus ring visible :
```tsx
className="... focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
```

### Step 2: Vérifier les contrastes WCAG AA

Le ratio minimum est 4.5:1 pour le texte normal. Vérifier :
- Texte secondaire (`rgba(47, 54, 44, 0.7)`) sur fond clair `#F8F9F5`
- Texte sur boutons `accent: #E5A186`

Outil : https://webaim.org/resources/contrastchecker/

### Step 3: Ajouter `aria-label` sur les boutons iconiques

```tsx
// Bouton menu mobile :
<button aria-label="Ouvrir le menu de navigation" ...>
  <MenuIcon />
</button>
```

### Step 4: Vérifier les `role` et `aria-*` dans les formulaires

```tsx
// Champ avec erreur :
<input aria-describedby="email-error" ... />
<span id="email-error" role="alert">{error}</span>
```

### Step 5: Commit

```bash
git add src/components/
git commit -m "fix: améliore l'accessibilité (focus ring, aria-labels, contrastes)"
```

---

## Task 13: Performance — optimisation finale

**Files:**
- Modify: `vite.config.ts`
- Modify: `index.html`

### Step 1: Précharger les fonts critiques

Dans `index.html`, ajouter avant le `<link>` Google Fonts existant :
```html
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap" />
```

### Step 2: Vérifier le vercel.json pour la compression

```bash
cat vercel.json
```

Vercel active Brotli/gzip automatiquement, mais vérifier si des headers cache sont configurés.

Ajouter si absent :
```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ],
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Step 3: Build et analyser la taille des chunks

```bash
npm run build
```

Vérifier que aucun chunk ne dépasse 500KB.

### Step 4: Commit

```bash
git add vercel.json index.html
git commit -m "perf: ajoute preload fonts et cache headers Vercel"
```

---

## Task 14: Checklist finale et documentation

**Files:**
- Modify: `claude/PLAN.md`
- Modify: `claude/CHANGELOG.md`

### Step 1: Mettre à jour la checklist dans `claude/PLAN.md`

Cocher chaque item validé.

### Step 2: Écrire le CHANGELOG complet

Documenter toutes les modifications effectuées.

### Step 3: Vérification finale — lancer le dev et tester manuellement

```bash
npm run dev
```

Tester :
- Homepage à 375px, 768px, 1280px
- Navigation entre pages
- Formulaire de contact (soumettre avec données de test)
- Animations au scroll
- Console DevTools : 0 erreurs

### Step 4: Build de production final

```bash
npm run build
npm run preview
```

Vérifier que le build est propre.

### Step 5: Typecheck final

```bash
npm run typecheck
```

Attendu : 0 errors

### Step 6: Commit final

```bash
git add .
git commit -m "docs: checklist finale complète — site prêt pour mise en ligne"
```

---

## Checklist de mise en ligne

### SEO
- [ ] Title unique sur chaque page (50-60 caractères)
- [ ] Meta description sur chaque page (150-160 caractères)
- [ ] og:title, og:description, og:image sur chaque page
- [ ] H1 unique par page
- [ ] Toutes les images ont un alt descriptif
- [ ] sitemap.xml généré et accessible à /sitemap.xml
- [ ] robots.txt présent et correct
- [ ] Schema.org LocalBusiness implémenté (✅ déjà dans index.html)
- [ ] OG image en PNG 1200×630 (pas SVG)

### Performance
- [ ] Build sans erreurs
- [ ] Aucun chunk > 500KB
- [ ] Toutes les images ont loading="lazy" (sauf LCP)
- [ ] Dimensions explicites sur les images (width + height)
- [ ] Fonts preload dans index.html

### Responsive
- [ ] Testé et validé 375px (iPhone SE)
- [ ] Testé et validé 768px (iPad)
- [ ] Testé et validé 1280px+ (Desktop)
- [ ] Aucun overflow horizontal

### UX & Navigation
- [ ] Tous les liens fonctionnent
- [ ] Formulaire de contact testé
- [ ] CTA visible above the fold sur mobile
- [ ] Animations fluides (pas de janky)

### Code
- [ ] npm run typecheck → 0 errors
- [ ] npm run build → succès
- [ ] Console DevTools → 0 erreurs
- [ ] site.webmanifest corrigé (noms d'icônes)
- [ ] Variables d'environnement dans .env (jamais en dur dans le code)
- [ ] .env.local dans .gitignore ✅

---

## Décisions de design documentées

### TODO: CHOIX DESIGN — Hero image
**Option A :** Dégradé animé CSS (implémenté en Task 5) — rapide, léger, cohérent avec la charte
**Option B :** Image Unsplash (bureau moderne Paris) — plus concret, plus impactant
**Recommandation :** Option A en attendant les visuels du graphiste, puis remplacer par Option B

### TODO: CHOIX DESIGN — ClientsLogos
Section actuellement commentée dans App.tsx.
**Option A :** Laisser commenté jusqu'à avoir de vrais logos clients
**Option B :** Afficher avec des placeholders SVG génériques
**Recommandation :** Laisser commenté (Option A) pour éviter les faux logos

### TODO: CHOIX DESIGN — Icônes
Lucide React est bien intégré. La stratégie est de garder Lucide pour les icônes fonctionnelles (menu, flèches, chevrons) et utiliser Magic UI pour les éléments décoratifs des cartes de services.
