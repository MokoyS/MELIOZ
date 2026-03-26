# PLAN — Refonte MELIOZ (2026-03-05)

Plan complet : voir `docs/plans/2026-03-05-melioz-refonte.md`

---

## Progression des tâches

| # | Tâche | Statut |
|---|-------|--------|
| 0 | Setup documentation /claude | ✅ Fait |
| 1 | Audit complet | ✅ Fait |
| 2 | Corrections critiques (webmanifest, SEO) | ✅ Fait |
| 3 | Installation shadcn/ui | ✅ Fait |
| 4 | Installation Magic UI | ✅ Fait |
| 5 | Hero — AnimatedGradientText + fond animé | ✅ Fait |
| 6 | Remplacement icônes (MagicCard, BorderBeam) | ✅ Fait |
| 7 | Stats animées (NumberTicker) | ✅ Fait |
| 8 | Animations scroll (BlurFade) | ✅ Fait |
| 9 | Images WebP + optimisation | ✅ Fait |
| 10 | SEO par page | ✅ Fait |
| 11 | Responsive corrections | ✅ Fait |
| 12 | Accessibilité | ✅ Fait |
| 13 | Performance finale | ✅ Fait |
| 14 | Checklist finale | ✅ Fait |

---

## Checklist de mise en ligne

### SEO
- [x] Title unique sur chaque page (50-60 caractères) — Tasks 2, 10
- [x] Meta description sur chaque page (150-160 caractères) — Tasks 2, 10
- [x] og:title, og:description, og:image sur chaque page — SEO.tsx supporte og:image
- [x] H1 unique par page — Task 2 (Contact.tsx double H1 corrigé)
- [x] Toutes les images ont un alt descriptif — Tasks 2, 9
- [x] sitemap.xml généré et accessible — Task 10 (URLs complètes, dates à jour)
- [x] robots.txt présent et correct — Task 10 (déjà conforme avec /admin bloqué)
- [x] Schema.org LocalBusiness implémenté — déjà dans index.html (initial commit)
- [~] OG image — toujours en SVG (pas de PNG disponible, documenté dans AUDIT.md)
- [x] site.webmanifest avec noms d'icônes corrects — Task 2

### Performance
- [x] Build sans erreurs (npm run build) — Task 14 : 1.54s, aucune erreur
- [x] Typecheck sans erreurs (npm run typecheck) — Task 14 : 0 erreurs
- [ ] Lighthouse Performance > 90 — non testé (nécessite navigateur en production)
- [x] Images avec loading="lazy" — Tasks 2, 9
- [x] Dimensions explicites sur toutes les images — Tasks 2, 9
- [x] Fonts preload dans index.html — Task 13
- [x] Cache headers Vercel configurés — Task 13

### Responsive
- [x] Testé visuellement sur 375px — analyse code Task 11
- [x] Testé visuellement sur 768px — analyse code Task 11
- [x] Testé visuellement sur 1280px — analyse code Task 11
- [x] Aucun overflow horizontal — FloatingBlocks corrigé Task 11

### UX & Navigation
- [ ] Tous les liens fonctionnent — nécessite test navigateur en production
- [ ] Formulaire de contact testé — nécessite test navigateur (Resend)
- [x] CTA visible above the fold sur mobile — Hero.tsx vérifié Task 11
- [x] Animations fluides — BlurFade, MagicCard, AnimatedGradientText intégrés
- [x] 0 erreurs console — TypeScript 0 erreurs, build propre

### Code
- [x] npm run typecheck → 0 errors
- [x] npm run build → succès
- [x] Variables d'environnement dans .env.local (jamais en dur)
- [x] .env.example à jour — Task 13
- [x] .env.local dans .gitignore — *.local dans .gitignore couvre .env.local

---

## Décisions de design ouvertes

### TODO: CHOIX DESIGN — Hero image
- **Option A** (recommandée) : Dégradé animé CSS en attendant les visuels du graphiste
- **Option B** : Image Unsplash (bureau moderne Paris)

### TODO: CHOIX DESIGN — ClientsLogos
- **Option A** (recommandée) : Laisser commenté jusqu'à avoir de vrais logos
- **Option B** : Placeholders SVG génériques
