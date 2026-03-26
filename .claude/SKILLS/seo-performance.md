# SKILL — SEO & PERFORMANCE MELIOZ

## Stack actuel
- Vite 7 + React 18 + TypeScript + react-helmet-async
- Déployé sur Vercel
- Domaine : agencemelioz.com

---

## SEO — Checklist par page

### Balises obligatoires (via react-helmet-async / SEO.tsx)
```tsx
// Composant SEO.tsx — à utiliser sur TOUTES les pages
<SEO
  title="Titre unique de la page | MELIOZ"        // 50-60 caractères max
  description="Description 150-160 caractères."  // Inclure le mot-clé principal
  canonical="/chemin-de-la-page"
/>
```

### Hiérarchie des titres — RÈGLE ABSOLUE
- Un seul `<h1>` par page — toujours le titre principal du hero
- `<h2>` pour les sections
- `<h3>` pour les sous-éléments dans les sections
- Jamais de saut de niveau (h1 → h3 sans h2)

### Images — Attributs obligatoires
```tsx
// Images décoratives : aria-hidden="true" — PAS de alt
<img src="..." aria-hidden="true" className="..." />

// Images de contenu : alt descriptif OBLIGATOIRE
<img src="/images/logo.png" alt="Logo MELIOZ — Agence digitale Paris" />

// Dans ce projet Vite, utiliser <img> natif avec lazy loading :
<img src="..." alt="..." loading="lazy" decoding="async" />
// Exception hero : loading="eager" pour LCP
```

### Metadata par page — Templates
```tsx
// Homepage
title: "MELIOZ — Agence Digitale Paris | Design, Dev & Stratégie"
description: "Agence digitale à Paris spécialisée en design UX/UI, développement web et stratégie produit. MELIOZ transforme vos ambitions en présence digitale remarquable."

// Services
title: "Nos Services Web, Design & Stratégie Digitale | MELIOZ Paris"
description: "Développement web sur-mesure, design UI/UX et stratégie digitale. MELIOZ Paris — résultats mesurables pour TPE et PME ambitieuses."

// Agence
title: "L'Agence MELIOZ — Équipe, Valeurs & Vision | Paris"
description: "Découvrez l'agence digitale MELIOZ : une équipe d'experts passionnés à Paris, dédiée à votre succès digital."

// Expertise
title: "Notre Expertise Digitale — UX, Dev & Stratégie | MELIOZ"
description: "Ingénierie web, UX/UI, stratégie produit et marketing digital. L'expertise complète de l'agence MELIOZ pour vos projets ambitieux."

// Contact
title: "Contactez MELIOZ — Agence Digitale Paris | Devis Gratuit"
description: "Parlons de votre projet. Contactez MELIOZ pour un devis gratuit. Réponse sous 24h garantie."

// Réalisations
title: "Nos Réalisations — Projets Web & Design | MELIOZ Paris"
description: "Portfolio de l'agence MELIOZ : sites web, applications et identités visuelles créées pour nos clients."
```

---

## JSON-LD Schema.org — Homepage

```html
<!-- Dans index.html, déjà configuré — vérifier ces champs : -->
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "MELIOZ",
  "url": "https://agencemelioz.com",
  "description": "Agence digitale parisienne...",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Montesson",
    "postalCode": "78360",
    "addressCountry": "FR"
  },
  "priceRange": "€€",
  "email": "contact@agencemelioz.com"
}
```

---

## Performance — Bonnes pratiques Vite + React

### Images
```tsx
// Toujours spécifier les dimensions pour éviter le CLS
<img
  src="/images/hero.webp"
  alt="..."
  width={1200}
  height={630}
  loading="lazy"    // ou "eager" pour le hero
  decoding="async"
/>

// Formats : préférer .webp ou .avif pour les photos
// Logo SVG : garder en SVG (vectoriel, léger)
```

### Fonts — Chargement optimisé (index.html)
```html
<!-- Preconnect AVANT les imports -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Ou via @fontsource (déjà en place) : -->
<!-- import '@fontsource-variable/space-grotesk' dans index.css -->
<!-- Avantage : bundlé avec le JS, pas de requête externe -->
```

### Bundle — Optimisations Vite
```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-forms': ['react-hook-form', 'zod', '@hookform/resolvers'],
        }
      }
    }
  }
})
```

### Core Web Vitals — Cibles
```
LCP (Largest Contentful Paint)  : < 2.5s
FID (First Input Delay)         : < 100ms
CLS (Cumulative Layout Shift)   : < 0.1

Pour LCP : image hero en loading="eager", fonts preloaded
Pour CLS : toujours spécifier width/height sur les images
```

---

## Vercel — Headers cache (vercel.json)
```json
{
  "headers": [
    {
      "source": "/images/(.*)",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
    },
    {
      "source": "/(.*)\\.js",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
    }
  ]
}
```

---

## Sitemap — Vérification
```
/public/sitemap.xml doit contenir :
- / (homepage)
- /services
- /agence
- /expertise
- /realisations
- /contact
- /book-a-call

NE PAS inclure :
- /mentions-legales
- /privacy
- /conditions-generales
- /plan-du-site
```

## Robots.txt
```
User-agent: *
Allow: /
Disallow: /admin
Disallow: /api/

Sitemap: https://agencemelioz.com/sitemap.xml
```

---

## Erreurs SEO fréquentes — À éviter
- ❌ Plusieurs `<h1>` par page
- ❌ Images décoratives avec alt="" vide (utiliser aria-hidden="true")
- ❌ Titles > 60 caractères ou < 30 caractères
- ❌ Descriptions > 160 caractères
- ❌ Liens sans texte visible (utiliser aria-label)
- ❌ Contenu chargé uniquement en JS sans SSR/prerender (Vite = SPA, attention aux crawlers)
- ❌ Duplicate content entre pages
