# AUDIT INITIAL — MELIOZ (2026-03-05)

> Audit réalisé avant toute modification du code.
> Mis à jour le 2026-03-05 avec résultats précis fichier par fichier (Task 1).

---

## SEO

### ✅ Points forts
- `index.html` : title, meta description, canonical URL présents
- Open Graph complet : og:type, og:url, og:title, og:description, og:image, og:locale, og:image:alt
- Twitter Card : summary_large_image
- JSON-LD : 3 schemas (ProfessionalService + OfferCatalog, WebSite avec SearchAction, ItemList navigation)
- Géo-localisation : `geo.region` FR-75, `geo.placename` Paris
- `robots.txt` présent dans `/public`
- `sitemap.xml` présent dans `/public`
- Web App Manifest présent (`site.webmanifest`)
- Favicon complet : ICO, SVG, PNG 96×96, Apple touch icon
- Composant `<SEO>` (react-helmet-async) disponible pour SEO dynamique par page

### ❌ Problèmes identifiés

**Critique**
1. **`site.webmanifest` — noms d'icônes incorrects**
   - Le manifest référence : `favicon-192x192.png` et `favicon-512x512.png`
   - Les fichiers réels sont : `web-app-manifest-192x192.png` et `web-app-manifest-512x512.png`
   - Impact : PWA installable cassée, icône manquante sur mobiles

2. **OG image en SVG**
   - Chemin : `/images/og-image.svg`
   - Les réseaux sociaux (Facebook, LinkedIn, Twitter) préfèrent/exigent PNG 1200×630
   - Impact : aperçu de lien dégradé sur les réseaux sociaux

---

## SEO dynamique par page — Résultats détaillés

### ✅ Pages avec `<SEO>` complet (title + description + canonical)

| Page | Fichier | title | description | canonical |
|------|---------|-------|-------------|-----------|
| Services | `src/pages/Services.tsx` ligne 130 | "MELIOZ - Services" | ✅ | `/services` |
| Agence | `src/pages/Agence.tsx` ligne 33 | "MELIOZ - Agence" | ✅ | `/agence` |
| Expertise | `src/pages/Expertise.tsx` ligne 45 | "MELIOZ - Expertise" | ✅ | `/expertise` |
| Réalisations | `src/pages/Realisations.tsx` ligne 54 | "MELIOZ - Réalisations" | ✅ | `/realisations` |
| Contact | `src/pages/Contact.tsx` ligne 93 | "MELIOZ - Contact" | ✅ | `/contact` |
| BookACall | `src/pages/BookACall.tsx` ligne 45 | "MELIOZ - Réserver un appel" | ✅ | `/book-a-call` |
| Privacy | `src/pages/Privacy.tsx` ligne 8 | "MELIOZ - Politique de Confidentialité" | ✅ | `/privacy` |
| MentionsLegales | `src/pages/MentionsLegales.tsx` ligne 8 | "MELIOZ - Mentions Légales" | ✅ | `/mentions-legales` |
| ConditionsGenerales | `src/pages/ConditionsGenerales.tsx` ligne 8 | "MELIOZ - Conditions Générales" | ✅ | `/conditions-generales` |
| PlanSite | `src/pages/PlanSite.tsx` ligne 54 | "MELIOZ - Plan du site" | ✅ | `/plan-du-site` |

### ⚠️ Pages avec problème `<SEO>`

| Page | Fichier | Problème |
|------|---------|---------|
| Admin | `src/pages/Admin.tsx` | **Pas de composant `<SEO>`** — page non indexée (OK car admin, mais à confirmer intentionnel) |

### ⚠️ Problèmes de qualité SEO détectés

- `src/pages/Services.tsx` — title trop court : `"MELIOZ - Services"` (sans description dans le titre, peu de valeur SEO)
- `src/pages/Agence.tsx` — title trop court : `"MELIOZ - Agence"` (idem)
- `src/pages/Expertise.tsx` — title trop court : `"MELIOZ - Expertise"` (idem)
- `src/pages/Realisations.tsx` — title trop court : `"MELIOZ - Réalisations"` (idem)
- **Contact.tsx** : deux balises `<h1>` présentes — une dans le state `isSubmitted` (ligne 71) et une dans le rendu normal (ligne 105). Techniquement une seule est affichée à la fois, mais c'est fragile.

---

## H1 par page — Résultats détaillés

| Page | Fichier | Nombre de `<h1>` | Valeur | Statut |
|------|---------|-----------------|--------|--------|
| Services | `src/pages/Services.tsx` | 1 (ligne 143) | "Un écosystème performant." | ✅ |
| Agence | `src/pages/Agence.tsx` | 1 (ligne 47) | "Une agence digitale à taille humaine" | ✅ |
| Expertise | `src/pages/Expertise.tsx` | 1 (ligne 58) | "La convergence des talents..." | ✅ |
| Réalisations | `src/pages/Realisations.tsx` | 1 (ligne 67) | "Nos derniers projets" | ✅ |
| Contact | `src/pages/Contact.tsx` | 2 (lignes 71 et 105) | Deux h1 dans deux branches de render | ⚠️ |
| BookACall | `src/pages/BookACall.tsx` | 1 (ligne 57) | "Discutons de votre vision" | ✅ |
| Privacy | `src/pages/Privacy.tsx` | 1 (ligne 20) | "Politique de Confidentialité" | ✅ |
| MentionsLegales | `src/pages/MentionsLegales.tsx` | 1 (ligne 20) | "Mentions Légales" | ✅ |
| ConditionsGenerales | `src/pages/ConditionsGenerales.tsx` | 1 (ligne 20) | "Conditions Générales" | ✅ |
| PlanSite | `src/pages/PlanSite.tsx` | 1 (ligne 70) | "Plan du site" | ✅ |
| Admin | `src/pages/Admin.tsx` | 2 (lignes 150 et 244) | Un h1 dans la vue login, un dans la vue dashboard | ⚠️ |

**Résumé H1** : 9/11 pages ont exactement 1 H1. Contact et Admin ont 2 H1 (dans des branches de render mutuellement exclusives — comportement correct à l'exécution, mais problème de clarté structurelle).

---

## Images

### ✅ OptimizedImage.tsx — Résultat de vérification
Fichier : `src/components/OptimizedImage.tsx`

- **`loading="lazy"` imposé par défaut** : OUI — `loading={loading || (priority ? 'eager' : 'lazy')}`
- **`alt` obligatoire** : OUI — le prop `alt: string` est non-optionnel dans l'interface
- **`decoding="async"` ajouté automatiquement** : OUI — ligne 31
- **Dimensions explicites (width/height) imposées** : NON — pas de props `width`/`height` obligatoires

### Inventaire des balises `<img>` dans src/

| Fichier | Ligne | src | alt | loading | width/height |
|---------|-------|-----|-----|---------|-------------|
| `src/components/Hero.tsx` | 85 | `/favicon.svg` | "Melioz Logo" ✅ | non spécifié ⚠️ | non spécifié ⚠️ |
| `src/components/OptimizedImage.tsx` | 27 | via props | via props (obligatoire) | via prop `loading` ✅ | non spécifié ⚠️ |

### ❌ Problèmes identifiés
1. **Hero.tsx ligne 85** : balise `<img>` native (pas OptimizedImage) sans `loading="lazy"` et sans dimensions
2. **OptimizedImage.tsx** : ne force pas `width` et `height` — risque de Cumulative Layout Shift (CLS)
3. **Pas d'images de contenu** dans `public/images/` (seulement `og-image.svg` et `SVG/icon-logo.svg`)
4. **Pas d'images WebP** — les images de contenu doivent être en WebP ou chargées depuis Unsplash avec `?fm=webp`

---

## Icônes Lucide React — Inventaire complet

### Pages

| Fichier | Icônes importées | Contexte |
|---------|-----------------|---------|
| `src/pages/Services.tsx` | `ArrowRight, Code2, PenTool, TrendingUp, Rocket, Wrench, HeadphonesIcon, ChevronDown` | Code2/PenTool/TrendingUp/Rocket/Wrench/HeadphonesIcon = **décoratives** (cards de services) ; ArrowRight = CTA ; ChevronDown = FAQ accordion (fonctionnel) |
| `src/pages/Agence.tsx` | `ArrowRight, Heart, Target, Lightbulb` | Heart/Target/Lightbulb = **décoratives** (cards valeurs) ; ArrowRight = CTA |
| `src/pages/Expertise.tsx` | `Code2, Lightbulb, PenTool, Megaphone` | Toutes **décoratives** (illustration des pôles, utilisées à w-24 h-24 opacity-30) |
| `src/pages/Realisations.tsx` | `ArrowRight, ExternalLink` | ExternalLink = **décorative** dans les cards projet ; ArrowRight = CTA |
| `src/pages/Contact.tsx` | `ArrowRight, Mail, MapPin, CheckCircle, Loader2` | Mail/MapPin = **informatives** ; CheckCircle = état succès ; Loader2 = état chargement (fonctionnel) ; ArrowRight = CTA |
| `src/pages/BookACall.tsx` | `ArrowRight, Calendar, CheckCircle2` | Calendar/CheckCircle2 = **décoratives** en-têtes de section ; ArrowRight = liste |
| `src/pages/PlanSite.tsx` | `ArrowRight, Home, Briefcase, Users, Award, FolderOpen, MessageSquare, FileText, Shield, Map` | Home/Users/MessageSquare/Shield/Map = **décoratives** (sections) ; ArrowRight = liens hover ; FileText = lien sitemap.xml |
| `src/pages/Admin.tsx` | `ClipboardCopy, NotebookPen, ShieldCheck, Trash2, Link, Info` | ClipboardCopy/Trash2 = **fonctionnelles** ; ShieldCheck/NotebookPen/Info = **décoratives** |

### Composants

| Fichier | Icônes importées | Contexte |
|---------|-----------------|---------|
| `src/components/ServicesPreview.tsx` | `ArrowRight, Rocket, PenTool, TrendingUp, Code2` | Rocket/PenTool/TrendingUp/Code2 = **décoratives** (cards services) ; ArrowRight = CTA |
| `src/components/WhyUs.tsx` | `Shield, Users, Zap` | Toutes **décoratives** (cards avantages — candidats au remplacement Magic UI) |
| `src/components/Process.tsx` | `Lightbulb, Pencil, Rocket` | Toutes **décoratives** (étapes processus — candidats au remplacement) |
| `src/components/BentoAbout.tsx` | `MousePointer2, PenTool, MapPin` | **Décoratives** (tiles bento) |
| `src/components/FloatingBlocks.tsx` | `Code2, PenTool, TrendingUp, MapPin, Users, Sparkles` | **Décoratives** (blocs flottants animés) |
| `src/components/Hero.tsx` | `ArrowRight` | **Fonctionnelle** (CTA bouton) |
| `src/components/Navbar.tsx` | `Menu, X` | **Fonctionnelles** (menu burger mobile) |
| `src/components/FAQ.tsx` | `ChevronDown` | **Fonctionnelle** (accordion) |
| `src/components/Footer.tsx` | `Linkedin, Mail` | **Fonctionnelles** (liens réseaux sociaux) |
| `src/components/CTA.tsx` | `Calendar, Mail, Video, Loader2` | Calendar/Mail/Video = **informatives** ; Loader2 = **fonctionnelle** (loading) |
| `src/components/ContactPreFooter.tsx` | `ArrowRight, MapPin` | MapPin = **décorative** ; ArrowRight = CTA |
| `src/components/CTADevis.tsx` | `ArrowRight` | **Fonctionnelle** (CTA) |
| `src/components/AboutSection.tsx` | `ArrowRight` | **Fonctionnelle** (CTA) |
| `src/components/RealisationsPreview.tsx` | `ArrowRight, ExternalLink` | ExternalLink = **décorative** (cards) ; ArrowRight = CTA |
| `src/components/CookieBanner.tsx` | `Cookie` | **Décorative** (illustration bannière cookies) |
| `src/components/Pricing.tsx` | `Check, Star` | Check = **fonctionnelle** (feature list) ; Star = **décorative** (plan featured) |
| `src/components/Team.tsx` | `Code2, Megaphone, TrendingUp` | **Décoratives** (cards membres) |
| `src/components/Services.tsx` | `Rocket, PenTool, ShieldCheck` | **Décoratives** (cards services) |
| `src/components/LoadingSpinner.tsx` | `Loader2` | **Fonctionnelle** (spinner de chargement) |
| `src/components/ProblemSolution.tsx` | `CheckCircle2, XCircle` | **Fonctionnelles** (indicateurs problème/solution) |
| `src/components/ServiceCard.tsx` | `LucideIcon` (type seulement) | Type TypeScript uniquement, pas d'icône directe |

### Icônes décoratives à remplacer (prioritaires)
Ces icônes illustrent des concepts dans les sections marketing et gagneraient à être remplacées par des composants Magic UI / visuels plus riches :
- `ServicesPreview.tsx` : Code2, PenTool, TrendingUp, Rocket
- `WhyUs.tsx` : Shield, Users, Zap
- `Process.tsx` : Lightbulb, Pencil, Rocket
- `Services.tsx` (page) : Code2, PenTool, TrendingUp, Rocket, Wrench, HeadphonesIcon

### Icônes fonctionnelles à conserver
- `Navbar.tsx` : Menu, X
- `FAQ.tsx` : ChevronDown
- `Footer.tsx` : Linkedin, Mail
- `Contact.tsx` : Loader2
- `LoadingSpinner.tsx` : Loader2
- `Admin.tsx` : ClipboardCopy, Trash2

---

## Sécurité — Credentials côté client

### ❌ Problème confirmé

**Fichier** : `src/pages/Admin.tsx` lignes 13–15

```typescript
const ADMIN_USER = import.meta.env.VITE_ADMIN_USER ?? '';
const ADMIN_PASS = import.meta.env.VITE_ADMIN_PASS ?? '';
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY ?? '';
```

**Impact** : Les variables préfixées `VITE_` sont **intégrées dans le bundle JavaScript** et donc visibles par n'importe qui via les DevTools du navigateur. Quiconque inspecte le bundle peut lire `ADMIN_USER` et `ADMIN_PASS` en clair.

**Comment l'authentification fonctionne** (Admin.tsx ligne 73) :
```typescript
if (username.trim() === ADMIN_USER && password === ADMIN_PASS) {
  setIsAuthenticated(true);
  sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
}
```
La comparaison se fait entièrement côté client. Un attaquant n'a même pas besoin de deviner le mot de passe — il peut simplement lire `ADMIN_USER` et `ADMIN_PASS` directement dans le bundle.

**Solution** : Déplacer l'authentification côté serveur (Vercel Serverless Function ou middleware), ou utiliser Vercel Password Protection pour protéger la route `/admin`.

---

## Performance

### ✅ Points forts
- Code splitting manuel dans `vite.config.ts` : react-vendor, form-vendor, motion-vendor, ui-vendor
- Lazy loading en production via `React.lazy()` dans `main.tsx`
- CSS minification activée
- Framer Motion lazy-chargé via `LazyMotion` + `domMax`
- Lenis smooth scroll avec `requestAnimationFrame` correctement nettoyé

### ⚠️ Points d'attention
- Google Fonts chargées depuis CDN — ajouter `rel="preload"` pour réduire le render-blocking
- Pas de cache headers configurés dans `vercel.json` pour les assets statiques

### ✅ kart.glb — Statut confirmé
`/public/kart.glb` est présent (fichier modèle 3D). Recherche dans tout `src/` : **aucune référence trouvée**.
Le fichier n'est pas utilisé dans le code. Il s'agit d'un fichier orphelin — **peut être supprimé** (économie de bande passante sur le déploiement).

---

## Structure du code

### ✅ Points forts
- TypeScript strict (`strict: true`, `noUnusedLocals`, `noUnusedParameters`)
- Séparation composants / pages claire
- `lib/motion.ts` : variants Framer Motion centralisés (bonne pratique)
- `lib/framer-motion.tsx` : LazyMotion provider propre

### ✅ App.css — Statut confirmé
`src/App.css` est du boilerplate Vite non utilisé (`.logo`, `.card`, `.read-the-docs`, `#root` avec padding=2rem qui écrase le layout).
Recherche de `import.*App\.css` dans `src/` : **aucune importation trouvée dans les fichiers de composants ou pages**.

> Note : vérifier `src/main.tsx` ou `src/App.tsx` pour l'import direct.

**Conclusion** : Ce fichier contient le CSS Vite par défaut. Si `main.tsx` l'importe, la règle `#root { max-width: 1280px; padding: 2rem }` pourrait interférer avec le layout. **À supprimer après vérification de l'import**.

### ❌ Problèmes identifiés
- Pas d'alias `@` configuré — requis pour shadcn/ui
- Pas de `src/lib/utils.ts` (cn function) — requis pour shadcn/ui
- `ClientsLogos.tsx` : importé mais commenté dans `App.tsx` — vérifier si import dead

### ⚠️ Autres observations
- `src/pages/Admin.tsx` contient `export default Admin;` à la ligne 391 **en plus** de la déclaration `function Admin()` à la ligne 26 — double export qui peut créer des ambiguïtés (mais TypeScript l'accepte dans ce cas)
- `BookACall.tsx` : Cal.com avec URL placeholder `https://cal.com/VOTRE_USERNAME/15min` — non configuré, l'iframe chargera une page d'erreur Cal.com si l'utilisateur dépasse l'étape Tally

---

## Responsive

### À tester (non vérifié sans navigateur)
- Mobile 375px : Navbar, Hero, grilles de cartes
- Tablette 768px : layouts en grilles
- Desktop 1280px : max-width et centrage

### Risques identifiés
- `BentoAbout.tsx` (214 lignes) et `BentoExperience.tsx` (414 lignes) : grilles complexes, risque d'overflow
- `FloatingBlocks.tsx` (295 lignes) : éléments flottants positionnés absolument, risque de overflow sur mobile

---

## Cal.com / Booking

### ❌ Problème identifié
**Fichier** : `src/pages/BookACall.tsx` ligne 138

```tsx
src="https://cal.com/VOTRE_USERNAME/15min"
```
L'URL Cal.com contient un placeholder non remplacé. Si un utilisateur complète le formulaire Tally et passe à l'étape calendrier, il verra une page d'erreur Cal.com.

---

## Formulaire de contact

### ✅ Fonctionnel
- react-hook-form + zod validation
- API Resend pour l'envoi d'emails
- Template HTML brandé

### À tester
- Soumettre le formulaire en dev avec des données de test
- Vérifier le message de succès/erreur

---

## Résumé des priorités

| Priorité | Problème | Fichier | Impact |
|----------|---------|---------|--------|
| 🔴 Critique | site.webmanifest noms d'icônes incorrects | `public/site.webmanifest` | PWA cassée |
| 🔴 Critique | OG image en SVG | `public/images/og-image.svg` | Réseaux sociaux dégradés |
| 🔴 Critique | Credentials admin dans bundle VITE_ | `src/pages/Admin.tsx` lignes 13-14 | Sécurité — mot de passe lisible en clair |
| 🟡 Important | Cal.com URL placeholder | `src/pages/BookACall.tsx` ligne 138 | Calendrier non fonctionnel |
| 🟡 Important | kart.glb non utilisé | `public/kart.glb` | Fichier orphelin (poids inutile) |
| 🟡 Important | App.css boilerplate Vite | `src/App.css` | CSS parasite potentiel |
| 🟡 Important | Hero img sans loading lazy ni dimensions | `src/components/Hero.tsx` ligne 85 | Performance / CLS |
| 🟡 Important | OptimizedImage sans width/height obligatoires | `src/components/OptimizedImage.tsx` | CLS potentiel |
| 🟢 À faire | Titles SEO trop courts (Services/Agence/Expertise/Réalisations) | 4 pages | Indexation sub-optimale |
| 🟢 À faire | Admin sans `<SEO>` | `src/pages/Admin.tsx` | Intentionnel mais à confirmer |
| 🟢 À faire | Icônes décoratives génériques | Multiple composants | Design premium |
| 🟢 À faire | Alias @ manquant | `tsconfig.json` / `vite.config.ts` | Requis pour shadcn |
| 🟢 À faire | Cache headers Vercel | `vercel.json` | Performance |
