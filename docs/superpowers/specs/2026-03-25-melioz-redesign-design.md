# MELIOZ — Redesign Complet — Design Spec
**Date :** 2026-03-25
**Auteur :** Maxime Lebas
**Scope :** Refonte totale du design system + tous les composants + toutes les pages

---

## 1. Objectif

Remplacer entièrement l'identité visuelle actuelle (palette sauge organique, blobs, gradients) par une nouvelle identité premium, sombre et affirmée, centrée sur le monogramme M cursif de MELIOZ.

**Ce qui change :** couleurs, typographie, style de tous les composants, M SVG comme élément graphique récurrent.

**Ce qui ne change pas :** la structure du site (sections de la home, pages, routing) reste identique. On redesigne chaque section existante, on n'en ajoute pas de nouvelles.

**Suppression :** `/admin` est retiré du site entièrement (fichier + routing dans `main.tsx`).

**Ajout :** page 404.

---

## 2. Design System

### 2.1 Palette de couleurs — exhaustive et fixe

| Token | Hex | Usage |
|---|---|---|
| `melioz-teal` | `#204F56` | Hero background, sections immersives, navbar scrolled |
| `melioz-lavender` | `#9EB8F9` | Backgrounds de sections alternées |
| `melioz-mint` | `#DAE9D9` | Badges, tags, hover states légers, sections claires |
| `melioz-electric` | `#3B54CC` | CTA principaux, liens actifs, underlines, accents graphiques |
| `melioz-navy` | `#0D1626` | Texte sur fond clair, fonds de sections premium |
| `melioz-offwhite` | `#EDEFEE` | Fond général, texte sur fonds sombres, cartes |

**Règles absolues :**
- Jamais deux sections consécutives avec le même fond
- Jamais de gradient (ni background, ni text-gradient)
- Jamais de fond gris neutre (#f5f5f5 ou équivalent)

### 2.2 Typographie

**Font display (titres H1, H2) :** Space Grotesk — déjà installé (`@fontsource/space-grotesk`)
**Font corps :** DM Sans — déjà installé (`@fontsource/dm-sans`)

Imports CSS à conserver dans `src/index.css` :
```css
@import '@fontsource/space-grotesk/700.css';
@import '@fontsource/space-grotesk/800.css';
@import '@fontsource/dm-sans/400.css';
@import '@fontsource/dm-sans/500.css';
```

**Note migration `font-sans` :** La clé `font-sans` Tailwind est supprimée et remplacée par `font-body`. Effectuer une recherche globale dans `src/` pour `font-sans` et remplacer toutes les occurrences par `font-body` avant de toucher aux composants. La régression est silencieuse (pas d'erreur de build).

**Hiérarchie typographique stricte :**

| Niveau | Usage | Classes Tailwind |
|---|---|---|
| H1 / Héros | Titre principal | `font-display font-extrabold text-[80px] md:text-[120px] leading-[0.9] tracking-[-0.04em]` |
| H2 | Titres de section | `font-display font-bold text-[48px] md:text-[64px] leading-[1.0] tracking-[-0.02em]` |
| H3 | Sous-titres, accroches | `font-body font-medium text-[20px] md:text-[24px] leading-[1.4]` |
| Corps | Paragraphes | `font-body font-normal text-[16px] md:text-[18px] leading-[1.7] text-melioz-navy/70` |
| Label | Tags, metadata | `font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric` |

Règle : ratio 1:2 minimum entre niveaux adjacents. Jamais deux niveaux identiques côte à côte.

### 2.3 Spacing

- `py-32` minimum entre sections (parfois `py-40` sur les sections manifeste)
- Le vide est un élément de design — ne pas compresser
- Cards : `h-[320px]` fixe sur les grilles de services

### 2.4 Animations — contraintes strictes

- Durée maximale : `0.5s`
- Easing : `easeOut` partout
- `viewport={{ once: true, margin: '-60px' }}` sur tous les scroll reveals
- Pas d'animations en boucle
- Pas de parallax lourd
- Hover bouton : `translateY(-2px)` + ombre légère, `0.2s ease`
- Hover card : `scale(1.02)` sur l'élément visuel uniquement, `0.4s ease`
- Hover lien nav : underline qui grandit gauche→droite via pseudo-element CSS

### 2.5 Anti-patterns interdits

- Gradient background ou text-gradient
- `border-radius > 16px` sur grandes cards
- `shadow-lg` / `shadow-xl` au repos
- Bouton pill (`rounded-full`) — `rounded-xl` max
- Typo centrée sur plus de 3 lignes (sauf cas manifeste/citation)
- Animations > 0.5s
- Blob shapes, formes organiques ambiantes (ancienne identité)
- Image placeholder générique — utiliser le M SVG comme fallback visuel

### 2.6 Accessibilité

- Hamburger button : `aria-label="Ouvrir le menu"` / `"Fermer le menu"` selon état + `aria-expanded`
- Lien actif navbar : `aria-current="page"`
- Focus ring : `outline: 2px solid #3B54CC; outline-offset: 2px;` — ne pas utiliser shadow pour le focus
- Formulaires : chaque `<input>` doit avoir un `<label>` associé via `htmlFor` / `id`
- M SVG décoratif : `aria-hidden="true"` systématiquement

---

## 3. Élément graphique central — Le M

**Fichier :** `public/images/Melioz Vector.svg`

Le M cursif de MELIOZ est l'ADN visuel du site. Il apparaît dans chaque section, jamais de la même façon.

### 3.1 Déclinaisons de couleur — valeurs CSS exactes

```tsx
// Sur fond teal ou navy → M en blanc/offwhite
style={{ filter: 'brightness(0) invert(1)' }}

// Sur fond offwhite → M natif (pas de filtre)

// Sur fond mint → M en melioz-teal (#204F56)
style={{ filter: 'brightness(0) saturate(100%) invert(23%) sepia(29%) saturate(634%) hue-rotate(145deg) brightness(93%) contrast(88%)' }}

// Sur fond lavender → M en melioz-electric (#3B54CC)
style={{ filter: 'brightness(0) saturate(100%) invert(26%) sepia(67%) saturate(1200%) hue-rotate(215deg) brightness(90%) contrast(95%)' }}
```

### 3.2 Utilisations par usage

| Usage | Implémentation | Présent dans |
|---|---|---|
| Watermark arrière-plan | `absolute`, grande taille (400-600px), `opacity-[0.05-0.06]`, `pointer-events-none aria-hidden` | Hero, WhyUs (fond navy), CTADevis |
| Séparateur décoratif | Centré, `w-16`, `opacity-20` | Entre sections si besoin aérer |
| Logo navbar | `h-8 w-auto`, à côté de "melioz" en font-display | Navbar |
| Décoratif card | `absolute top-3 right-3 w-12 opacity-15` | Cards ServicesPreview, Cards WhyUs |
| Watermark footer | `absolute bottom-0 left-0 w-96 opacity-[0.03]`, `aria-hidden` | Footer |

Règle : le M apparaît dans ≥ 4 sections différentes, de façon différente à chaque fois.

---

## 4. Composants globaux

### 4.1 `AnimatedSection` — nouveau composant à créer

```tsx
// src/components/AnimatedSection.tsx
interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}
// Wraps motion.div avec :
// initial={{ opacity: 0, y: 16 }}
// whileInView={{ opacity: 1, y: 0 }}
// viewport={{ once: true, margin: '-60px' }}
// transition={{ duration: 0.5, ease: 'easeOut', delay }}
```

### 4.2 Navbar

- Transparente sur hero → `bg-melioz-navy/95 backdrop-blur-md` au scroll (threshold 50px)
- Logo : M SVG (h-8) + "melioz" en font-display font-bold, `text-melioz-offwhite`
- Liens : `font-body uppercase text-[11px] tracking-widest`, couleur `text-melioz-offwhite/70`
- Lien actif : underline `melioz-electric` 1px + `aria-current="page"`
- CTA : "Démarrer un projet" — `bg-melioz-electric text-white rounded-xl` (pas rounded-full)
- Mobile : menu hamburger avec `aria-label` + `aria-expanded`, fond `bg-melioz-navy`
- Suppression du style "pill flottant" actuel — navbar plein écran classique fixe
- Transition : `duration-300 ease-in-out`

### 4.3 Footer

- Fond : `bg-melioz-navy`
- 4 colonnes desktop, 2 colonnes tablette, 1 mobile
- Col 1 : M SVG (h-12) + "melioz" en font-display + tagline `text-melioz-offwhite/50 text-sm`
- Col 2 : Navigation — `text-melioz-offwhite/60`, hover `text-melioz-offwhite`
- Col 3 : Contact (email, Cal.eu) — `text-melioz-offwhite/60`
- Col 4 : Réseaux (Instagram, LinkedIn, GitHub)
- Copyright : `border-t border-melioz-offwhite/10`, `text-xs text-melioz-offwhite/30`
- M watermark : `absolute bottom-0 left-0 w-96 opacity-[0.03]`, filtre `brightness(0) invert(1)`, `aria-hidden`

---

## 5. Sections de la Home Page — Structure inchangée, visual redesign

**Séquence de fonds (aucune répétition adjacente) :**
```
Hero              → melioz-teal
ServicesPreview   → melioz-offwhite
AboutSection      → melioz-navy
CTADevis          → melioz-electric
WhyUs             → melioz-mint
ContactPreFooter  → melioz-lavender/40
Footer            → melioz-navy
```

### 5.1 Hero (redesign de `Hero.tsx`)

- Fond : `bg-melioz-teal`
- Supprimer les blob shapes animés, la grille de fond, les lignes décoratives animées
- Label : "AGENCE DIGITALE · PARIS" — Level 5 typography, `text-melioz-electric`
- H1 : "L'expertise digitale à taille humaine." — Level 1 typography, `text-melioz-offwhite`
- Sous-titre : `font-body text-[18px] md:text-[20px] text-melioz-offwhite/70 max-w-xl`
- CTA primaire : "Démarrer un projet →" — `bg-melioz-electric text-white rounded-xl`
- CTA secondaire : "Voir nos réalisations" — lien texte `text-melioz-offwhite/80`
- M watermark : `absolute right-0 top-0 w-[600px] opacity-[0.05]`, filtre `brightness(0) invert(1)`, `pointer-events-none aria-hidden`
- `min-h-screen`, `py-32`

### 5.2 ServicesPreview (redesign de `ServicesPreview.tsx`)

- Fond : `bg-melioz-offwhite`
- Supprimer MagicCard (remplacer par cards custom)
- Label section : "CE QU'ON FAIT" — Level 5 typography
- H2 : "Nos solutions pour vos enjeux digitaux."
- 3 cards (garder 3 des 4 services actuels — supprimer "Partenariat & Évolution" ou le fusionner)
- Cards alternées : Card 1 `bg-melioz-teal` texte offwhite / Card 2 `bg-melioz-mint` texte navy / Card 3 `bg-melioz-navy` texte offwhite
- Chaque card : numéro 01/02/03 en `font-display font-bold text-[48px] opacity-20`, titre `font-display text-[28px]`, description `font-body text-[16px] opacity-70`, lien `text-melioz-electric`
- M décoratif sur cards teal et navy : `absolute top-3 right-3 w-12 opacity-15`, filtre `brightness(0) invert(1)`
- Hauteur fixe : `h-[320px]`

### 5.3 AboutSection (redesign de `AboutSection.tsx`)

- Fond : `bg-melioz-navy`
- Supprimer les blob shapes décoratifs
- Label : "À PROPOS" — Level 5 typography, `text-melioz-mint`
- H2 : texte existant en `text-melioz-offwhite`, Level 2 typography
- Paragraphes : `text-melioz-offwhite/70`
- Stats (48h, 100%, +20) : garder le contenu, redesigner en cartes `bg-melioz-offwhite/5 border border-melioz-offwhite/10`, valeurs en `text-melioz-electric font-display`
- Citation : garder, style `border-l-2 border-melioz-electric pl-4 text-melioz-offwhite/80`
- M watermark discret : `absolute right-0 bottom-0 w-80 opacity-[0.04]`, filtre `brightness(0) invert(1)`

### 5.4 CTADevis (redesign de `CTADevis.tsx`)

- Fond : `bg-melioz-electric`
- M watermark géant : `absolute left-0 top-1/2 -translate-y-1/2 w-[400px] opacity-[0.06]`, filtre `brightness(0) invert(1)`
- H2 : texte existant — Level 2 typography, `text-melioz-offwhite`
- Paragraphe : `text-melioz-offwhite/70`
- Bouton : `bg-melioz-offwhite text-melioz-electric rounded-xl`, hover `bg-melioz-navy text-melioz-offwhite`
- `py-40`

### 5.5 WhyUs (redesign de `WhyUs.tsx`)

- Fond : `bg-melioz-mint`
- Supprimer MagicCard et BorderBeam
- Label : "POURQUOI NOUS" — Level 5 typography, `text-melioz-navy/60`
- H2 : texte existant — Level 2 typography, `text-melioz-navy`
- 3 cards : fond `bg-melioz-offwhite`, `border border-melioz-navy/10`, `rounded-2xl`
- Contenu card : barre de couleur (`bg-melioz-electric h-0.5 w-8 mb-4`), titre `font-display`, description `font-body`
- Hover card : `border-melioz-electric`, `translateY(-2px)`, transition 0.2s

### 5.6 ContactPreFooter (redesign de `ContactPreFooter.tsx`)

- Fond : `bg-melioz-lavender/40`
- Supprimer les blob shapes
- H2 : texte existant — Level 2 typography, `text-melioz-navy`
- Paragraphe : `text-melioz-navy/70`
- Bouton CTA : `bg-melioz-electric text-white rounded-xl` (supprimer rounded-full actuel)
- Panneau visuel droite : fond `bg-melioz-offwhite border border-melioz-navy/10 rounded-2xl`, indicateurs redesignés avec `text-melioz-electric`

---

## 6. Pages secondaires — Redesign visuel complet

Toutes les pages reprennent le nouveau design system.

### 6.1 `/agence` — Page Agence

- Hero `bg-melioz-teal`, H1 oversized offwhite, M watermark
- Sections alternées : offwhite → navy → electric (CTA final)

### 6.2 `/services` — Page Services

- Hero `bg-melioz-offwhite`, label electric
- Détail des 3 services (cards alternées teal/mint/navy)
- Process/méthodologie sur fond `melioz-navy`
- CTA final `melioz-electric`

### 6.3 `/expertise` — Page Expertise

- Hero `bg-melioz-navy`, H1 oversized offwhite
- Contenu sur fond `melioz-offwhite`
- CTA final `melioz-electric`

### 6.4 `/realisations` — Page Réalisations

- Hero `bg-melioz-teal`, H1 oversized
- Grille projets sur fond `melioz-offwhite` : hover `scale(1.02)` sur image
- CTA final `melioz-electric`

### 6.5 `/contact` — Page Contact

- Hero `bg-melioz-navy`, H1 offwhite
- Formulaire sur fond `melioz-offwhite` : labels Level 5, `<label>` associé via `htmlFor`/`id`, champs `border-melioz-navy/20`, focus `outline-melioz-electric`
- Bouton submit : `bg-melioz-electric text-white rounded-xl` (pas rounded-full)

### 6.6 `/book-a-call` — BookACall

- Hero `bg-melioz-teal`, H1 offwhite
- Embed Cal.com sur fond `melioz-offwhite`

### 6.7 Pages légales — `/mentions-legales`, `/privacy`, `/conditions-generales`, `/plan-du-site`

- Adapter au design system uniquement : fond `melioz-offwhite`, typographie, navbar/footer mis à jour
- Pas de refonte de contenu

### 6.8 Page 404 — Nouvelle

- Créer `src/pages/NotFound.tsx`
- Fond `bg-melioz-navy`, H1 "404" Level 1, `text-melioz-offwhite`
- Sous-titre `text-melioz-offwhite/60`
- Lien retour home : `text-melioz-electric`
- M watermark centré, grand, `opacity-[0.06]`, filtre `brightness(0) invert(1)`
- Mise à jour `main.tsx` dans **les deux branches** (dev et production) :
  - Ajouter `import NotFound` dans `Promise.all` (dev) et `lazy()` (production)
  - Le `default` actuel retourne `<App />` pour toutes les routes → le remplacer par `case '/': return <App />;` + `default: return <NotFound />;`

---

## 7. Suppression de `/admin`

- Supprimer `src/pages/Admin.tsx`
- Retirer `Admin` de `main.tsx` dans les **deux branches** :
  - Retirer l'import `import('./pages/Admin.tsx')` du `Promise.all`
  - Retirer le `lazy()` correspondant
  - Retirer le `case '/admin':` du switch
- Vérifier qu'aucun autre composant n'importe Admin

---

## 8. Configuration technique

### 8.1 `tailwind.config.js` — mise à jour requise

**Remplacer** `colors` et `fontFamily`. **Conserver** `border-beam` dans `animation` et `keyframes` (requis par BorderBeam MagicUI). **Supprimer** `animation.gradient` et `keyframes.gradient` (gradient interdit).

```js
colors: {
  melioz: {
    teal:     '#204F56',
    lavender: '#9EB8F9',
    mint:     '#DAE9D9',
    electric: '#3B54CC',
    navy:     '#0D1626',
    offwhite: '#EDEFEE',
  }
},
fontFamily: {
  display: ['Space Grotesk', 'sans-serif'],
  body: ['DM Sans', 'sans-serif'],
},
// CONSERVER :
animation: {
  'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
},
keyframes: {
  'border-beam': { '100%': { 'offset-distance': '100%' } },
},
```

Supprimer de l'ancienne config : `primary`, `secondary`, `accent`, `text`, `background`, `white`, `electric-blue`, `mint-green`, `terracotta`, `mustard-yellow`, `deep-teal`, `cream-white`. Supprimer `fontFamily.sans`, `fontFamily.serif`, `fontFamily.mono`, `animation.gradient`, `keyframes.gradient`.

### 8.2 `src/index.css` — mise à jour requise

- Conserver les `@import` de Space Grotesk et DM Sans, supprimer JetBrains Mono si présent
- Supprimer ancienne palette CSS custom properties (`--color-bg`, `--color-primary`, etc.)
- Supprimer `.blob-shape`, `.blob-shape-2`, `.btn-gradient`, `.btn-secondary`, `.card-white`, `.text-secondary`
- Supprimer `@keyframes gradient`
- Body : `bg-melioz-offwhite text-melioz-navy font-body antialiased`
- H1-H6 : `font-display font-bold text-melioz-navy`
- Focus ring global : `outline: 2px solid #3B54CC; outline-offset: 2px;`

---

## 9. Ordre d'exécution

1. Update `tailwind.config.js` (couleurs + fontFamily, conserver border-beam, supprimer gradient)
3. Update `src/index.css` (font-face, supprimer ancienne palette, body/h rules)
4. Recherche globale `font-sans` → remplacer par `font-body` dans tous les composants
5. Supprimer `src/pages/Admin.tsx` + retirer de `main.tsx`
6. Créer `src/components/AnimatedSection.tsx`
7. Navbar
8. Footer
9. Hero
10. ServicesPreview
11. AboutSection
12. CTADevis
13. WhyUs
14. ContactPreFooter
15. Mettre à jour `App.tsx` (supprimer import FloatingBlocks si présent, blob shapes dans le wrapper)
16. Page `/agence`
17. Page `/services`
18. Page `/expertise`
19. Page `/realisations`
20. Page `/contact`
21. Page `/book-a-call`
22. Pages légales + `/plan-du-site` — design system uniquement
23. Page 404 (`src/pages/NotFound.tsx` + mise à jour `main.tsx`)

**Validation à chaque étape :** fond ≠ section précédente, H1/H2 en font-display, CTA en melioz-electric, M présent, animations ≤ 0.5s.

---

## 10. Checklist finale

- [ ] M présent dans ≥ 4 sections, façon différente à chaque fois
- [ ] Aucune section consécutive avec le même fond
- [ ] H1/H2 toujours en font-display (Space Grotesk), jamais font-body
- [ ] CTA principal en melioz-electric partout
- [ ] Labels/tags : uppercase tracking-widest text-[11px]
- [ ] Aucun gradient, aucune shadow lourde, aucun fond gris neutre, aucun blob shape
- [ ] Animations ≤ 0.5s avec easeOut
- [ ] M watermark : opacity ≤ 0.06, aria-hidden systématique
- [ ] Navbar responsive (hamburger mobile avec aria-label + aria-expanded)
- [ ] Fonts (Space Grotesk + DM Sans) chargées via @import dans CSS
- [ ] Ancienne palette entièrement supprimée
- [ ] border-beam animation conservée dans tailwind.config.js
- [ ] Focus ring : outline melioz-electric sur tous les éléments interactifs
- [ ] Formulaires : labels associés via htmlFor/id
- [ ] font-sans → font-body migré partout
- [ ] /admin supprimé du fichier et du routing
- [ ] Page 404 créée avec fallback dans main.tsx (deux branches)
