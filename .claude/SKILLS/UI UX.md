# SKILL — UI/UX MELIOZ

## Identité visuelle — Source de vérité absolue

### Palette
```
melioz-teal:     #204F56  → sections sombres, hero, navbar scrollée
melioz-lavender: #9EB8F9  → backgrounds secondaires, overlays doux
melioz-mint:     #DAE9D9  → badges, tags, sections intermédiaires
melioz-electric: #3B54CC  → CTA, liens actifs, accents, labels
melioz-navy:     #0D1626  → texte principal, fonds premium
melioz-offwhite: #EDEFEE  → fond général, texte sur sombres
```

### Règles couleurs STRICTES
- Jamais deux sections consécutives avec le même fond
- Séquence typique : teal/navy → offwhite → mint → navy → electric
- Aucun gris neutre (#888, #ccc) — utiliser opacity sur navy ou offwhite
- Aucun gradient entre deux couleurs de la palette
- Aucun box-shadow lourd — préférer border + bg légèrement différent
- `melioz-electric` uniquement pour les accents, jamais comme fond de section (sauf CTA final)

### Typographie — Hiérarchie 5 niveaux

```
N1 — Hero       : font-display font-black   clamp(56px,9vw,120px)  leading-[0.9]  tracking-[-0.04em]
N2 — Sections   : font-display font-bold    clamp(40px,5vw,64px)   leading-[1.0]  tracking-[-0.02em]
N3 — Accroches  : font-body   font-medium   clamp(18px,2vw,24px)   leading-[1.4]
N4 — Corps      : font-body   font-normal   17px                   leading-[1.7]  text-navy/70
N5 — Labels     : font-body   font-medium   11px  uppercase  tracking-[0.12em]   text-electric
```

**Règles typo :**
- `font-display` (Space Grotesk Variable) : H1, H2, H3, numéros décoratifs, prix
- `font-body` (DM Sans) : paragraphes, labels, boutons, navigation, légendes
- Jamais `font-display` pour des corps de texte > 2 lignes
- Jamais deux niveaux identiques côte à côte
- Labels N5 toujours en `text-melioz-electric` (jamais autre couleur)

### Espacement — Rythme vertical
```
Sections   : py-32 (128px) — standard
Sections L : py-40 (160px) — hero, CTA final, manifeste
Sections S : py-20 (80px)  — formulaire, mentions légales
Entre titre + sous-titre : mb-4 à mb-6
Entre sous-titre + corps  : mb-8 à mb-12
Entre corps + CTA         : mb-10 à mb-16
```

### Motif M — Règles d'utilisation
- Présent dans CHAQUE section principale (décoration, pas navigation)
- Toujours `aria-hidden="true"`, `pointer-events-none`, `select-none`
- Opacité : 0.03 à 0.08 maximum (jamais plus visible)
- Positions : top-right (hero), bottom-left (footer), centré (manifeste), top-right (sections alternées)
- Sur fond sombre : `filter: brightness(0) invert(1)` (blanc)
- Sur fond clair : sans filtre ou `brightness(0)` (noir), opacity encore plus faible (0.03-0.05)
- Taille : w-[400px] à w-[600px] pour les grands placements, w-20 pour les accents

### Boutons — 3 variantes UNIQUEMENT
```
Primary   : bg-melioz-electric text-white px-8 py-4 rounded-xl font-body font-medium
            hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200
Secondary : border border-melioz-navy/20 text-melioz-navy px-8 py-4 rounded-xl
            hover:bg-melioz-navy hover:text-white transition-all duration-200
Ghost     : text-melioz-offwhite/70 underline-offset-4 hover:underline hover:text-white
```
- Focus : `focus-visible:ring-2 focus-visible:ring-melioz-electric focus-visible:outline-none`
- Disabled : `opacity-60 cursor-not-allowed` — jamais `opacity-30`

### Cards — Anatomie standard
```tsx
<div className="rounded-2xl p-7 border border-[fond]/10 hover:border-melioz-electric/40
  hover:-translate-y-0.5 transition-all duration-200">
  {/* Numéro décoratif optionnel : font-display font-black text-[80px] opacity-5 absolute */}
  {/* Icône ou tag N5 : mb-4 */}
  {/* Titre N3 ou N2 : mb-3 */}
  {/* Corps N4 : mb-4 */}
  {/* CTA texte ou fleche */}
</div>
```

### Sections hero de sous-pages — Pattern standard
```tsx
<section className="relative bg-melioz-teal pt-20 overflow-hidden">
  {/* M watermark top-[20%] right-0 */}
  <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24">
    <p className="N5">Label page</p>
    <h1 className="N1 text-melioz-offwhite max-w-3xl">Titre accrocheur</h1>
    <p className="N4 text-melioz-offwhite/70 max-w-xl mt-8">Sous-titre optionnel</p>
  </div>
</section>
```
Variantes de fond hero : melioz-teal (défaut), melioz-navy (contact/404)

### Grilles responsive
```
Mobile  : 1 colonne, px-4
Tablet  : 2 colonnes sm:grid-cols-2, px-6
Desktop : 3-4 colonnes lg:grid-cols-3 ou lg:grid-cols-4, max-w-6xl ou max-w-7xl mx-auto
```

### Anti-patterns — À éviter absolument
- ❌ Fond blanc pur (#fff) — utiliser melioz-offwhite
- ❌ Texte noir pur (#000) — utiliser melioz-navy
- ❌ Ombres `shadow-2xl` ou `drop-shadow` lourdes
- ❌ border-radius > rounded-2xl (sauf pill buttons : rounded-full)
- ❌ Images décoratives sans aria-hidden
- ❌ `text-gray-*` ou couleurs hors palette
- ❌ Icônes > 24px dans les corps de texte
- ❌ Sections sans le motif M
