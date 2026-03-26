# SKILL — ANIMATIONS MELIOZ

## Stack
- Framer Motion 12 (importé depuis `'../lib/framer-motion'` ou `'./lib/framer-motion'`)
- `LazyMotion + domMax` configuré dans MotionProvider (src/lib/framer-motion.tsx)
- Lenis pour le smooth scroll (src/hooks/useLenis.ts) — actif globalement via Root

---

## Principes directeurs

### Règles d'or
1. **Subtilité** — les animations enrichissent, elles ne distraient pas
2. **Performance** — `transform` et `opacity` uniquement (pas de `height`, `width`, `top`, `left` animés)
3. **Once** — la plupart des animations `whileInView` utilisent `once: true` (pas de replay au re-scroll)
4. **Durées** — maximum 0.6s sauf exceptions documentées (splash 2.9s, M hero 1.2s)
5. **Respect des préférences** — toujours tester avec `prefers-reduced-motion`

### Easing recommandés
```
Entrées    : ease: 'easeOut'       — naturel pour les apparitions
Sorties    : ease: 'easeIn'        — naturel pour les disparitions
Transitions: ease: [0.22, 1, 0.36, 1]  — cubic-bezier fluide premium
Ressort    : type: 'spring', stiffness: 300, damping: 30
```

---

## Composants d'animation — Patterns standards

### AnimatedSection (déjà existant — src/components/AnimatedSection.tsx)
```tsx
// Usage : wrapper pour chaque section/bloc à animer à l'entrée
<AnimatedSection>
  <h2>Titre</h2>
  <p>Corps</p>
</AnimatedSection>

// Avec délai (pour stagger manuel) :
<AnimatedSection delay={0.1}>...</AnimatedSection>
<AnimatedSection delay={0.2}>...</AnimatedSection>

// Interne : opacity 0→1, y 16→0, duration 0.5s, whileInView, once:true
```

### StaggerContainer — Pattern pour listes de cards
```tsx
// À utiliser sur toutes les grilles de cards
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

// Usage :
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-50px' }}
  className="grid grid-cols-3 gap-6"
>
  {items.map(item => (
    <motion.div key={item.id} variants={itemVariants}>
      <Card {...item} />
    </motion.div>
  ))}
</motion.div>
```

### SectionLine (déjà existant — src/components/SectionLine.tsx)
```tsx
// Ligne séparatrice qui se trace de gauche à droite
<SectionLine className="bg-melioz-navy/10 mx-4 sm:mx-6" />
// Interne : scaleX 0→1, originX:'0%', whileInView, once:true, 0.8s easeOut
```

### MLoader (déjà existant — src/components/MLoader.tsx)
```tsx
// M qui se dessine en boucle — pour états de chargement
<MLoader size={32} strokeColor="currentColor" strokeWidth={8} />
<MLoader size={48} strokeColor="#3B54CC" strokeWidth={7} />  // standalone
<MLoader size={24} strokeColor="currentColor" strokeWidth={10} /> // dans bouton
```

### SplashScreen (déjà existant — src/components/SplashScreen.tsx)
```tsx
// Écran de chargement initial — M se dessine puis fade
// Géré dans main.tsx via Root, sessionStorage 'melioz_splash_shown'
// Ne PAS réinstancier manuellement
```

---

## Animations spécifiques par composant

### Navbar — Underline pen-stroke (déjà implémenté)
```tsx
// motion.span, scaleX 0→1, originX:0, déclenchée par hover state
// Entrée : 0.25s easeInOut, Sortie : 0.2s easeInOut
```

### Hero — M watermark (déjà implémenté dans Hero.tsx)
```tsx
// pathLength [0, 1, 1, 0] + opacity [0, 0.07, 0.07, 0]
// duration: 6s, repeat: Infinity, repeatDelay: 1.2s
```

### Parallax M watermarks (déjà implémenté — 12 fichiers)
```tsx
// useScroll({ target: ref, offset: ["start end", "end start"] })
// useTransform(scrollYProgress, [0, 1], [SPEED, -SPEED])
// SPEED varie : Footer 30, composants 45-55, pages 50-65
// Import : useScroll, useTransform DIRECTEMENT depuis 'framer-motion' (pas du lib wrapper)
```

### Footer border-t (déjà implémenté)
```tsx
// scaleX 0→1, 1s easeOut, whileInView once:true
```

---

## Animations de hover — CSS pur préféré (pas Framer)

Pour les micro-interactions simples, préférer CSS Tailwind :
```tsx
// Lift effect sur cards :
className="hover:-translate-y-0.5 transition-transform duration-200"

// Couleur sur liens :
className="hover:text-melioz-electric transition-colors duration-200"

// Scale sur icônes :
className="hover:scale-110 transition-transform duration-200"

// Underline navbar :
className="after:absolute after:bottom-0 after:left-0 after:h-px after:w-0
  after:bg-melioz-electric after:transition-all after:duration-300 hover:after:w-full relative"
```

Framer Motion pour hover seulement si : pathLength, complex variants, ou état partagé.

---

## Scroll-driven animations — Parallax

```tsx
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// NOTE : useScroll et useTransform depuis 'framer-motion' directement, pas le lib wrapper

// Dans le composant :
const ref = useRef<HTMLDivElement>(null);
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start end", "end start"]
});
const y = useTransform(scrollYProgress, [0, 1], [SPEED, -SPEED]);

// Appliquer :
<motion.div ref={ref} style={{ y }}>
  <img ... />
</motion.div>
```

---

## whileInView — Configuration standard
```tsx
viewport={{ once: true }}           // Standard — ne rejoue pas
viewport={{ once: true, margin: '-50px' }}  // Déclenché un peu avant d'entrer
viewport={{ once: true, amount: 0.3 }}     // Déclenché quand 30% visible
```

---

## Animations à éviter absolument
- ❌ `animate={{ height: 'auto' }}` — cause layout thrash, utiliser scaleY
- ❌ `layout` prop sur des éléments avec overflow:hidden parent
- ❌ Animations sur `left`, `top`, `right`, `bottom` — utiliser `x`, `y`
- ❌ `duration > 0.6s` sauf pour : splash (2.9s), M draw (6s), M hero (1.2s)
- ❌ `stagger > 0.15s` — devient lent sur les longues listes
- ❌ Animations qui bloquent l'interaction (pointer-events pendant animation)
- ❌ exit animations sur les éléments sans `AnimatePresence` parent

---

## Performance animation
```
- Toujours will-change: transform sur les éléments très animés
- Framer Motion gère ça automatiquement via style
- LazyMotion + domMax est déjà configuré (tree-shakeable)
- Éviter d'animer > 20 éléments simultanément avec Framer
- Pour des listes longues (> 10 items), préférer CSS animation
```
