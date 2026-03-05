# CHANGELOG

Toutes les modifications importantes du projet MELIOZ sont documentées ici.

Format : `### [catégorie] — [description] (Task N)`

Catégories : `feat` (nouvelle fonctionnalité), `fix` (correction), `perf` (performance), `docs` (documentation), `style` (design), `refactor`.

---

## [En cours] — Refonte MELIOZ

### fix — Optimisation des images — width/height obligatoires, lazy loading, WebP (Task 9) — 2026-03-05

- refactor: `OptimizedImage.tsx` — interface remaniée : `width` et `height` deviennent des props obligatoires typées `number` (plus `extends ImgHTMLAttributes` — trop permissif). `decoding="async"` conservé. Props `style` et `className` explicites. Le spread `...props` est retiré pour forcer la discipline des attributs image.
- fix: `SocialProof.tsx` — ajout de `width={48}` et `height={48}` sur le seul usage de `<OptimizedImage>` (logo tech 48×48 px correspondant aux classes Tailwind `h-12 w-12`)
- fix: `SocialProof.tsx` — remplacement de `/images/logos-tech/tailwind-logo.png` (fichier local inexistant) par `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg`
- fix: `SocialProof.tsx` — remplacement de `/images/logos-tech/fm-logo.svg` (fichier local inexistant) par `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg`
- audit: `Portfolio.tsx` — aucune balise `<img>` ni `<OptimizedImage>` présente (section "En coulisses" sans image de projet) — aucune modification nécessaire
- audit: `Hero.tsx` — balise `<img>` native (favicon.svg) déjà corrigée en Task 2 (loading="lazy", width=20, height=20, alt descriptif) — non touchée
- note: les logos CDN jsdelivr/devicons sont des SVG (format vectoriel, pas de conversion WebP possible pour des SVG) — les 4 autres logos étaient déjà sur ce même CDN
- note: aucune image importée localement via `import` détectée dans les composants analysés
- typecheck: zéro nouvelle erreur TypeScript introduite sur les fichiers modifiés (erreurs préexistantes BentoAbout.tsx inchangées)

---

### feat — Animations scroll BlurFade sur sections principales (Task 8) — 2026-03-05

- audit: `BentoAbout.tsx` — déjà animé via `motion.div` avec `whileInView="visible"` et `viewport={{ once: true }}` — aucune modification
- feat: `AboutSection.tsx` — ajout BlurFade sur 5 éléments successifs (badge, titre, §1, §2, lien CTA) avec delays 0.1→0.5s ; colonne visuelle `FloatingBlocks` enveloppée dans un BlurFade delay=0.2s
- feat: `ContactPreFooter.tsx` — ajout BlurFade sur 3 éléments colonne gauche (titre, paragraphe, CTA) delays 0.1/0.25/0.4s ; carte Paris (visuel complet) enveloppée dans BlurFade delay=0.2s
- feat: `CTADevis.tsx` — ajout BlurFade sur 3 éléments (h2, paragraphe, lien "Réserver un appel") delays 0.1/0.25/0.4s
- style: toutes les BlurFade utilisent `inView={true}` pour déclenchement au scroll, `yOffset=6` par défaut (subtil), `duration=0.4s` par défaut
- Aucune régression TypeScript : toutes les erreurs TS constatées existaient avant cette Task (BentoAbout, BentoExperience, FloatingBlocks, OptimizedImage, Process, BookACall, PlanSite, Portfolio)

---

### feat — Remplacement icônes génériques par MagicCard + BorderBeam (Task 6) — 2026-03-05

- refactor: `ServicesPreview.tsx` — suppression des icônes Lucide décoratives (Code2, PenTool, TrendingUp, Rocket) et de leurs champs `icon`, `color`, `bgColor` dans le tableau `services`
- feat: `ServicesPreview.tsx` — chaque carte de service enveloppée dans `MagicCard` (effet radial lumière au survol, `gradientColor="#B2C2A2"`, `gradientOpacity=0.15`) et dans un `div.relative.group`
- feat: `ServicesPreview.tsx` — indicateur barre colorée `w-8 h-1 rounded-full` remplace visuellement les icônes (couleurs `bg-primary`, `bg-secondary`, `bg-accent` selon le service)
- feat: `ServicesPreview.tsx` — `BorderBeam` (size=180, duration=12, palette MELIOZ) positionné sur la première carte (`featured: true`) pour l'effet premium
- style: `ServicesPreview.tsx` — texte description passe de `text-text/70` à `text-secondary` pour harmonisation palette
- refactor: `WhyUs.tsx` — suppression des icônes Lucide décoratives (Zap, Users, Shield) et de leurs champs `icon`, `color`, `bgColor` dans le tableau `reasons`
- feat: `WhyUs.tsx` — chaque carte avantage enveloppée dans `MagicCard` (`gradientColor="#B2C2A2"`, `gradientOpacity=0.12`, `cursor-default`)
- feat: `WhyUs.tsx` — indicateur barre colorée `w-8 h-1 rounded-full` remplace les icônes (couleurs `bg-primary`, `bg-secondary`, `bg-accent`)
- feat: `WhyUs.tsx` — `BorderBeam` (size=150, duration=20, palette MELIOZ) sur toutes les cartes pour cohérence premium de la section
- style: `WhyUs.tsx` — texte description passe de `text-text/70` à `text-secondary` pour harmonisation palette
- fix: apostrophes typographiques dans les descriptions corrigées (guillemets doubles utilisés pour délimiter les strings contenant `'`)
- Aucune régression TypeScript : 21 erreurs préexistantes inchangées, zéro nouvelle erreur sur les fichiers modifiés

---

### feat — Hero amélioré avec AnimatedGradientText + BlurFade (Task 5) — 2026-03-05

- feat: `AnimatedGradientText` appliqué sur "une présence en ligne" (ligne centrale du H1) — remplace la couleur fixe `text-primary` par le dégradé animé sauge → lichen → terre cuite
- feat: `BlurFade` (delay=0.9s, duration=0.6s) sur le sous-titre "Transformez votre présence digitale..."
- feat: `BlurFade` (delay=1.1s, duration=0.6s) sur le paragraphe value proposition
- style: animations Framer Motion existantes sur le H1 et les CTA conservées intégralement (motion.span avec initial/animate, motion.span soulignement)
- fix: orthographe "presence" corrigée en "présence" dans le H1
- Aucune régression TypeScript : 21 erreurs préexistantes inchangées, zéro nouvelle erreur sur Hero.tsx

---

### feat — Installation Magic UI (Task 4) — 2026-03-05

- feat: créé `src/components/magicui/` avec 5 composants Magic UI
- feat: `magic-card.tsx` — carte avec effet radial de lumière au survol (suivi souris)
- feat: `animated-gradient-text.tsx` — texte avec dégradé animé palette MELIOZ (sauge → lichen → terre cuite)
- feat: `border-beam.tsx` — bordure lumineuse animée en conic-gradient (palette MELIOZ)
- feat: `number-ticker.tsx` — compteur animé avec spring Framer Motion, format fr-FR
- feat: `blur-fade.tsx` — apparition avec blur au scroll via useInView Framer Motion
- style: `tailwind.config.js` — ajout keyframes `gradient` et `border-beam` + animations correspondantes
- style: `src/index.css` — ajout `@keyframes gradient` CSS natif pour `animate-gradient`
- fix: paramètres `gradientFrom`/`gradientTo` retirés de la déstructuration de MagicCard (déclarés dans l'interface mais inutilisés dans le rendu, élimine 2 erreurs TS6133)
- Zéro nouvelle erreur TypeScript introduite (21 erreurs préexistantes inchangées)
- Build production : 1.45s, aucune erreur

---

### feat — Installation shadcn/ui (Task 3) — 2026-03-05

- feat: alias `@` configuré dans vite.config.ts et tsconfig.app.json
- feat: créé src/lib/utils.ts avec fonction cn (clsx + tailwind-merge)
- feat: components.json shadcn/ui initialisé
- feat: composants shadcn/ui installés : card, badge, button dans src/components/ui/
- install: clsx, tailwind-merge, class-variance-authority ajoutés aux dépendances

---

### fix — Corrections critiques (Task 2) — 2026-03-05

#### 1. `public/site.webmanifest` — Icônes corrigées
- **Problème** : Référençait `favicon-192x192.png` et `favicon-512x512.png` (fichiers inexistants).
- **Correction** : Noms remplacés par les fichiers réels `web-app-manifest-192x192.png` et `web-app-manifest-512x512.png`.

#### 2. `public/kart.glb` — Fichier orphelin supprimé
- **Problème** : Fichier 3D (26 Mo) sans aucune référence dans le code.
- **Correction** : Supprimé pour alléger le déploiement.

#### 3. `src/App.css` — Boilerplate Vite supprimé
- **Problème** : Fichier non importé contenant des styles boilerplate Vite (`.logo`, `#root { max-width: 1280px }`) pouvant interférer avec le layout.
- **Vérification** : Grep confirmé — aucun import de `App.css` dans `src/`.
- **Correction** : Fichier supprimé.

#### 4. `src/components/Hero.tsx` — Attributs img manquants
- **Problème** : Balise `<img src="/favicon.svg">` sans `loading`, `width`, ni `height`.
- **Correction** : Ajout de `loading="lazy"`, `width={20}`, `height={20}` (dimensions réelles en px selon la classe Tailwind `w-5 h-5`).

#### 5. SEO titles — 4 pages améliorées
- **Problème** : Titles génériques du type `"MELIOZ - [Page]"` sans valeur SEO.
- **Corrections** :
  - `Services.tsx` : `"Nos Services Web, Design & Stratégie | MELIOZ Paris"`
  - `Agence.tsx` : `"L'Agence MELIOZ — Équipe & Valeurs | Paris"`
  - `Expertise.tsx` : `"Notre Expertise Digitale — UX, Dev & Stratégie | MELIOZ"`
  - `Realisations.tsx` : `"Nos Réalisations & Projets Web | MELIOZ Agence Paris"`

#### 6. `src/pages/Contact.tsx` — Double H1 corrigé
- **Problème** : Deux `<h1>` dans des branches de render conditionnelles (`isSubmitted` et formulaire normal).
- **Correction** : Le `<h1>` de la branche `isSubmitted` ("Message envoyé !") remplacé par `<h2>`.

#### 7. `src/pages/BookACall.tsx` — Placeholder Cal.com
- **Problème** : Iframe avec URL placeholder `https://cal.com/VOTRE_USERNAME/15min` non configurée.
- **Correction** : Iframe remplacée par un message d'alerte utilisateur avec commentaire TODO explicite. L'URL réelle doit être configurée par l'équipe.

#### Notes sur les erreurs TypeScript préexistantes
Les erreurs TypeScript suivantes existaient avant cette Task et sont hors scope :
- `BentoAbout.tsx`, `BentoExperience.tsx` : types `Variants` framer-motion mal typés (ease string vs Easing)
- `FloatingBlocks.tsx`, `Portfolio.tsx`, `PlanSite.tsx` : imports non utilisés
- `OptimizedImage.tsx` : import type sans `import type`
- `Process.tsx` : attribut JSX dupliqué
- `BookACall.tsx` : `tallyFormSubmitted` déclaré mais jamais lu dans le JSX (état préexistant)

---

### docs — Setup dossier /claude (Task 0)
- Création de `claude/PLAN.md` : plan condensé avec checklist
- Création de `claude/AUDIT.md` : résultats de l'audit initial
- Création de `claude/CHANGELOG.md` : ce fichier
- Création de `claude/STRUCTURE.md` : arborescence et architecture
- Création de `docs/plans/2026-03-05-melioz-refonte.md` : plan complet détaillé

---

## [Planifié]

Les tâches suivantes seront documentées ici au fil de leur exécution :

- Task 1 : Audit complet documenté
- Task 2 : Corrections critiques (webmanifest, SEO pages)
- Task 3 : Installation shadcn/ui
- Task 4 : Installation Magic UI
- Task 5 : Hero — fond animé + AnimatedGradientText
- Task 6 : Remplacement icônes (MagicCard, BorderBeam)
- Task 7 : Stats animées (NumberTicker)
- Task 8 : Animations scroll (BlurFade)
- Task 9 : Images WebP et optimisation
- Task 10 : SEO par page
- Task 11 : Responsive corrections
- Task 12 : Accessibilité
- Task 13 : Performance finale
- Task 14 : Checklist finale

---

## Notes sur les décisions

### Sections supprimées / commentées

- **ClientsLogos** : Commenté dans `App.tsx` — laissé commenté en attendant de vrais logos clients. Ne pas réactiver sans vrais assets.

### Décisions d'architecture

- **Routing** : Conserver le routing manuel via `window.location.pathname` dans `main.tsx`. Pas d'ajout de React Router.
- **Framework** : Vite + React — ne pas migrer vers Next.js.
- **Design system** : shadcn/ui pour les composants UI + Magic UI pour les effets premium.
