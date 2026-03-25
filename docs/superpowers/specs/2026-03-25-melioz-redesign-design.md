# MELIOZ — Redesign Complet — Design Spec
**Date :** 2026-03-25
**Auteur :** Maxime Lebas
**Scope :** Refonte totale du design system + tous les composants + toutes les pages

---

## 1. Objectif

Remplacer entièrement l'identité visuelle actuelle (palette sauge organique, blobs, gradients) par une nouvelle identité premium, sombre et affirmée, centrée sur le monogramme M cursif de MELIOZ. Aucun élément de l'ancien design n'est conservé.

**Composants existants remplacés :** Les sections actuelles de `App.tsx` (AboutSection, WhyUs, CTADevis, ContactPreFooter) sont entièrement supprimées et remplacées par la nouvelle séquence de sections définie en section 5. Ces fichiers peuvent être supprimés après remplacement.

---

## 2. Design System

### 2.1 Palette de couleurs — exhaustive et fixe

| Token | Hex | Usage |
|---|---|---|
| `melioz-teal` | `#204F56` | Hero background, sections immersives, navbar scrolled |
| `melioz-lavender` | `#9EB8F9` | Backgrounds secondaires, overlays doux |
| `melioz-mint` | `#DAE9D9` | Badges, tags, hover states légers, sections claires |
| `melioz-electric` | `#3B54CC` | CTA principaux, liens actifs, underlines, accents graphiques |
| `melioz-navy` | `#0D1626` | Texte sur fond clair, fonds de sections premium |
| `melioz-offwhite` | `#EDEFEE` | Fond général, texte sur fonds sombres, cartes |

**Règles absolues :**
- Jamais deux sections consécutives avec le même fond
- Jamais de gradient (ni background, ni text-gradient)
- Jamais de fond gris neutre (#f5f5f5 ou équivalent)

### 2.2 Typographie

**Font display (titres héros, H1, H2) :** Space Grotesk — déjà installé dans le projet. `@fontsource/cabinet-grotesk` n'existe pas sur npm (Cabinet Grotesk est distribué par Fontshare, non via fontsource). Space Grotesk est la font display principale.

**Font corps :** DM Sans — déjà installé via `@fontsource/dm-sans`.

Importer via CSS (pas link HTML) :
```css
@import '@fontsource/space-grotesk/700.css';
@import '@fontsource/space-grotesk/800.css';
@import '@fontsource/dm-sans/400.css';
@import '@fontsource/dm-sans/500.css';
```

**Note migration `font-sans` :** La clé `font-sans` Tailwind est supprimée et remplacée par `font-body`. Avant de toucher aux composants, effectuer une recherche globale dans `src/` pour `font-sans` et remplacer toutes les occurrences par `font-body`. La régression est silencieuse (pas d'erreur de build) — le texte revient à la font système sans avertissement si une instance est manquée.

**Hiérarchie typographique stricte :**

| Niveau | Usage | Classes Tailwind |
|---|---|---|
| H1 / Manifeste | Hero, phrases choc | `font-display font-black text-[80px] md:text-[120px] leading-[0.9] tracking-[-0.04em]` |
| H2 | Titres de section | `font-display font-bold text-[48px] md:text-[64px] leading-[1.0] tracking-[-0.02em]` |
| H3 | Sous-titres, accroches | `font-body font-medium text-[20px] md:text-[24px] leading-[1.4]` |
| Corps | Paragraphes | `font-body font-normal text-[16px] md:text-[18px] leading-[1.7] text-melioz-navy/70` |
| Label | Tags, metadata | `font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric` |

Règle : ratio 1:2 minimum entre niveaux adjacents. Jamais deux niveaux identiques côte à côte.

### 2.3 Spacing

- `py-32` minimum entre sections (parfois `py-40`)
- Le vide est un élément de design — ne pas compresser
- Cards : `h-[320px]` fixe (jamais auto)

### 2.4 Animations — contraintes strictes

- Durée maximale : `0.5s`
- Easing : `easeOut` partout
- `viewport={{ once: true, margin: '-60px' }}` sur tous les scroll reveals
- Pas d'animations en boucle
- Pas de parallax lourd
- Hover bouton : `translateY(-2px)` + ombre légère, `0.2s ease`
- Hover card : `scale(1.02)` sur l'image uniquement, `0.4s ease`
- Hover lien nav : underline qui grandit gauche→droite via pseudo-element CSS

### 2.5 Anti-patterns interdits

- Gradient background ou text-gradient
- `border-radius > 16px` sur grandes cards
- `shadow-lg` / `shadow-xl` au repos
- Bouton pill (`rounded-full`) — `rounded-xl` max
- Typo centrée sur plus de 3 lignes (sauf sections manifeste)
- Animations > 0.5s
- Image placeholder générique — utiliser le M SVG comme fallback

### 2.6 Accessibilité

- Hamburger button : `aria-label="Ouvrir le menu"` / `"Fermer le menu"` selon état
- Lien actif navbar : `aria-current="page"`
- Focus ring : `outline: 2px solid #3B54CC; outline-offset: 2px;` — ne pas utiliser shadow pour le focus (conflit avec la règle no-shadow-heavy)
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

// Sur fond offwhite → M natif (pas de filtre — le SVG est déjà en teinte foncée)

// Sur fond mint → M en melioz-teal (#204F56)
style={{ filter: 'brightness(0) saturate(100%) invert(23%) sepia(29%) saturate(634%) hue-rotate(145deg) brightness(93%) contrast(88%)' }}

// Sur fond lavender → M en melioz-electric (#3B54CC)
style={{ filter: 'brightness(0) saturate(100%) invert(26%) sepia(67%) saturate(1200%) hue-rotate(215deg) brightness(90%) contrast(95%)' }}
```

### 3.2 Utilisations par usage

| Usage | Implémentation | Présent dans |
|---|---|---|
| Watermark arrière-plan | `absolute`, grande taille (400-600px), `opacity-[0.05-0.06]` | Hero, CTA final, Manifeste |
| Séparateur de section | Centré, `w-16`, `opacity-20` | Entre sections majeures |
| Logo navbar | `h-8 w-auto`, à côté de "melioz" en font-display | Navbar |
| Décoratif card | `absolute top-3 right-3 w-12 opacity-15` | Cards Services, Cards Offres |
| Watermark footer | `absolute bottom-0 left-0 w-96 opacity-[0.03]` | Footer |

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
- Mobile : menu hamburger avec `aria-label`, fond `melioz-navy`, même typographie
- Transition : `duration-300 ease-in-out`
- Suppression du style "pill flottant" actuel
- Focus ring : `outline-2 outline-melioz-electric outline-offset-2`

### 4.3 Footer

- Fond : `melioz-navy`
- 4 colonnes desktop, 2 colonnes tablette, 1 mobile
- Col 1 : M SVG (h-12) + "melioz" + tagline `offwhite/50 text-sm`
- Col 2 : Navigation — `offwhite/60`, hover `offwhite`
- Col 3 : Contact (email, Cal.eu)
- Col 4 : Réseaux (Instagram, LinkedIn, GitHub)
- Copyright : `border-t border-offwhite/10`, `text-xs offwhite/30`
- M watermark : `absolute bottom-0 left-0 w-96 opacity-[0.03]`, filtre `brightness(0) invert(1)`

---

## 5. Sections de la Home Page

**Séquence de fonds (aucune répétition adjacente) :**
```
Hero        → melioz-teal
Services    → melioz-offwhite
Manifeste   → melioz-navy
Offres      → melioz-lavender (bg-melioz-lavender/40 pour contraste visible vs offwhite)
Stack       → melioz-mint
CTA Final   → melioz-electric
Footer      → melioz-navy
```

**Note Offres→Stack :** `melioz-lavender/20` est visuellement trop proche de `melioz-offwhite`. Utiliser `/40` minimum sur la section Offres, et `melioz-mint` (non offwhite) pour la section Stack, afin de créer une distinction visible.

**Remplacement composants existants :** AboutSection, WhyUs, CTADevis, ContactPreFooter sont supprimés. `App.tsx` est mis à jour pour la nouvelle séquence.

### 5.1 Hero

- Fond : `bg-melioz-teal`
- Label : `font-body uppercase text-[11px] tracking-widest text-melioz-electric` → "AGENCE DIGITALE · PARIS"
- H1 : "L'expertise digitale à taille humaine." — `font-display font-black text-[80px] md:text-[120px] leading-[0.9] tracking-[-0.04em] text-melioz-offwhite`
- CTA primaire : "Démarrer un projet →" — `bg-melioz-electric text-white rounded-xl`
- CTA secondaire : "Voir nos réalisations" — lien texte `text-melioz-offwhite`
- M watermark : `absolute right-0 top-0 w-[600px] opacity-[0.05]`, filtre `brightness(0) invert(1)`, `pointer-events-none aria-hidden`
- `min-h-screen`, `py-32`

### 5.2 Services — "Ce qu'on fait"

- Fond : `bg-melioz-offwhite`
- Label section : Level 5 typography
- H2 : "Ce qu'on fait."
- 3 cards en grille 3 colonnes desktop, 1 mobile
- Card 1 : fond `melioz-teal`, texte offwhite, M décoratif coin droit opacity 10%, filtre `brightness(0) invert(1)`
- Card 2 : fond `melioz-mint`, texte navy, border `border-melioz-navy/10`
- Card 3 : fond `melioz-navy`, texte offwhite, M décoratif opacity 8%, filtre `brightness(0) invert(1)`
- Services : Ingénierie & Développement / Expérience & Identité Visuelle / Visibilité & Acquisition (réutiliser les 3 premiers services existants)
- Contenu de chaque card :
  - Numéro "01/02/03" : `font-display font-bold text-[48px] opacity-20`
  - Titre service : `font-display text-[28px]`
  - Description : `font-body text-[16px] opacity-70`
  - Lien "Découvrir →" : `text-melioz-electric`
- Hauteur fixe : `h-[320px]`

### 5.3 Manifeste — "Notre approche"

- Fond : `bg-melioz-navy`
- M séparateur : centré, `w-16 opacity-20`, filtre `brightness(0) invert(1)`
- Citation : `font-display font-bold text-[48px] md:text-[64px] text-melioz-offwhite max-w-4xl mx-auto text-center`
- Mots clés intercalés : `text-melioz-electric` et `text-melioz-mint`
- Texte : "Nous créons des <span class='text-melioz-electric'>expériences digitales</span> qui performent. Design soigné, code moderne, <span class='text-melioz-mint'>résultats mesurables</span>."
- `py-40`

### 5.4 Offres — Pricing

- Fond : `bg-melioz-lavender/40`
- Label section : "NOS OFFRES" Level 5 typography
- Layout : style "liste de prix journal" (PAS de cards classiques)
- 3 offres séparées par `border-b border-melioz-navy/20`
- Structure chaque offre :
  - Nom + prix alignés (flexbox justify-between)
  - Détails + durée
  - CTA "Démarrer →" en `text-melioz-electric`
- Hover : fond `bg-melioz-teal`, texte `text-melioz-offwhite`, transition `duration-300` — **inclut** le tag POPULAIRE qui garde son style `bg-melioz-electric text-white` (le bleu reste lisible sur teal)
- Tag "POPULAIRE" sur l'offre Studio : `bg-melioz-electric text-white text-[11px] uppercase tracking-widest rounded-sm px-2 py-0.5`
- Offres : STARTER 950€ (Design + Dev, 2-3 semaines) / STUDIO 2 400€ (complet, populaire) / CUSTOM (sur devis)

### 5.5 Stack — Technologies

- Fond : `bg-melioz-mint`
- Label section : "NOTRE STACK" Level 5 typography (`text-melioz-navy/60`)
- H2 : "La stack qui performe."
- Technologies à afficher : React, TypeScript, Next.js, Tailwind CSS, Framer Motion, Vercel, Figma, Node.js
- Noms de technologies : `text-melioz-navy/40`, hover `text-melioz-teal`, transition 0.2s
- Layout : grille horizontale flex-wrap
- Séparateurs : `border-melioz-navy/10`

### 5.6 CTA Final

- Fond : `bg-melioz-electric`
- M watermark géant : `absolute left-0 top-1/2 -translate-y-1/2 w-[500px] opacity-[0.05]`, filtre `brightness(0) invert(1)`
- H2 : "Votre projet mérite mieux." — `font-display font-bold text-melioz-offwhite`
- Sous-titre : `font-body text-[18px] text-white/70`
- Bouton : `bg-melioz-offwhite text-melioz-electric rounded-xl`, hover `bg-melioz-navy text-melioz-offwhite`
- `py-40`

---

## 6. Pages secondaires — Scope redesign complet

Toutes les pages reprennent le nouveau design system. Pour chaque page :

### 6.1 `/agence` — Page Agence

- Hero sombre (`melioz-teal`) avec M watermark, H1 oversized, label "NOTRE HISTOIRE"
- Section équipe/valeurs sur fond `melioz-offwhite`
- Manifeste sur fond `melioz-navy`
- CTA final `melioz-electric`

### 6.2 `/services` — Page Services

- Hero `melioz-offwhite` avec label `melioz-electric`, H1 "Ce qu'on construit pour vous."
- Détail des **3 services** (cards alternées teal/mint/navy) sur fond `melioz-offwhite` — réutiliser les 3 services définis en 5.2 (Ingénierie & Développement, Expérience & Identité Visuelle, Visibilité & Acquisition)
- Process/méthodologie sur fond `melioz-navy`
- CTA final `melioz-electric`

### 6.3 `/expertise` — Page Expertise

- Hero `melioz-navy`, H1 oversized offwhite
- Compétences / stack détaillée sur fond `melioz-offwhite`
- CTA final `melioz-electric`

### 6.4 `/realisations` — Page Réalisations

- Hero `melioz-teal` avec H1 oversized
- Grille projets sur fond `melioz-offwhite` : cards avec hover scale(1.02), M décoratif dans chaque card
- CTA final `melioz-electric`

### 6.5 `/contact` — Page Contact

- Hero `melioz-navy` avec H1
- Formulaire sur fond `melioz-offwhite` : labels Level 5, `<label>` associé via `htmlFor`/`id`, champs `border-melioz-navy/20`, focus `outline-melioz-electric`
- Infos contact avec M décoratif
- Bouton submit : `bg-melioz-electric text-white rounded-xl` (pas rounded-full)

### 6.6 `/book-a-call` — BookACall

- Hero `melioz-teal`, H1 "Réservez votre créneau."
- Embed Cal.com centré sur fond `melioz-offwhite`

### 6.7 Pages légales `/mentions-legales`, `/privacy`, `/conditions-generales`, `/plan-du-site`

- Adapter au design system uniquement (fond `melioz-offwhite`, typographie, navbar/footer nouveaux)
- Pas de refonte de contenu

### 6.8 `/admin` — Page Admin

- **Exclue du redesign** — page interne, non publique, à ne pas modifier

### 6.9 Page 404

- Créer `src/pages/NotFound.tsx` : fond `melioz-navy`, H1 "404", M watermark, lien retour home en `melioz-electric`
- Mettre à jour `main.tsx` dans les **deux branches** (dev et production) :
  - Le `default` actuel retourne `<App />` pour toutes les routes inconnues — le remplacer par : `case '/': return <App />;` + `default: return <NotFound />;`
  - Importer `NotFound` dans le bloc `Promise.all` du dev **et** comme `lazy()` dans la branche production
  - Les deux branches (`if (isDev)` et `else`) doivent être modifiées identiquement

---

## 7. Configuration technique

### 7.1 `tailwind.config.js` — mise à jour requise

**Remplacer** les blocs `colors` et `fontFamily`. **Conserver** les entrées `animation` et `keyframes` pour `border-beam` (requis par le composant MagicUI BorderBeam). Conserver aussi `boxShadow.soft` si réutilisé.

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

Supprimer de l'ancienne config : `primary`, `secondary`, `accent`, `text`, `background`, `electric-blue`, `mint-green`, `terracotta`, `mustard-yellow`, `deep-teal`, `cream-white`, `white`. Supprimer aussi `fontFamily.sans`, `fontFamily.serif`, `fontFamily.mono`. Supprimer également `animation.gradient` et `keyframes.gradient` (le gradient est interdit dans ce design system ; la contrepartie CSS dans `index.css` est aussi supprimée).

### 7.2 `src/index.css` — mise à jour requise

- Importer Space Grotesk (700, 800) + DM Sans (400, 500) via `@import`
- Supprimer ancienne palette CSS custom properties (`--color-bg`, `--color-primary`, etc.)
- Supprimer `.blob-shape`, `.blob-shape-2`, `.btn-gradient`, `.btn-secondary`, `.card-white`, `.text-secondary`
- Supprimer le `@keyframes gradient` (gradient interdit)
- Body : `bg-melioz-offwhite text-melioz-navy font-body antialiased`
- H1-H6 : `font-display font-bold text-melioz-navy`
- Focus ring global : `outline: 2px solid #3B54CC; outline-offset: 2px;`

### 7.3 Installation — fonts déjà présentes

Space Grotesk et DM Sans sont déjà dans le projet. Vérifier que les poids 700/800 pour Space Grotesk sont bien importés.

```bash
# Si les poids manquent :
npm install @fontsource/space-grotesk @fontsource/dm-sans
```

---

## 8. Ordre d'exécution

1. Update `tailwind.config.js` (couleurs + fontFamily, conserver border-beam)
2. Update `src/index.css` (imports fonts, supprimer ancienne palette)
3. Créer `AnimatedSection` composant
4. Navbar
5. Hero
6. Section Services (remplace ServicesPreview)
7. Section Manifeste (nouveau)
8. Section Offres / Pricing (nouveau)
9. Section Stack (nouveau)
10. CTA Final (remplace CTADevis)
11. Footer
12. Mettre à jour `App.tsx` : supprimer AboutSection, WhyUs, CTADevis, ContactPreFooter ; intégrer nouvelle séquence
13. Page `/agence`
14. Page `/services`
15. Page `/expertise`
16. Page `/realisations`
17. Page `/contact`
18. Page `/book-a-call`
19. Pages légales + `/plan-du-site` — design system uniquement
20. Page 404 (nouvelle)

**Validation à chaque étape :** vérifier fond ≠ section précédente, typographie H1/H2 en font-display, CTA en melioz-electric, M présent, pas d'animations > 0.5s.

---

## 9. Checklist finale

- [ ] M présent dans ≥ 4 sections, façon différente à chaque fois
- [ ] Aucune section consécutive avec le même fond
- [ ] H1/H2 toujours en font-display (jamais font-body)
- [ ] CTA principal en melioz-electric partout
- [ ] Labels/tags : uppercase tracking-widest text-[11px]
- [ ] Aucun gradient, aucune shadow lourde, aucun fond gris neutre
- [ ] Animations ≤ 0.5s avec easeOut
- [ ] M watermark hero : opacity ≤ 0.06
- [ ] Navbar responsive (hamburger mobile avec aria-label)
- [ ] Fonts chargées via CSS @import (pas link HTML)
- [ ] Ancienne palette entièrement supprimée
- [ ] border-beam animation conservée dans tailwind.config.js
- [ ] focus ring : outline melioz-electric sur tous les éléments interactifs
- [ ] Formulaire contact : labels associés via htmlFor/id
- [ ] M SVG décoratif : aria-hidden="true" systématiquement
- [ ] font-sans → font-body migré dans tous les composants
- [ ] /admin exclu du redesign
- [ ] Page 404 créée
