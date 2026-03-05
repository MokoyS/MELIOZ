# CHANGELOG

Toutes les modifications importantes du projet MELIOZ sont documentées ici.

Format : `### [catégorie] — [description] (Task N)`

Catégories : `feat` (nouvelle fonctionnalité), `fix` (correction), `perf` (performance), `docs` (documentation), `style` (design), `refactor`.

---

## [En cours] — Refonte MELIOZ

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
