# SKILL — Context7 : Documentation à jour

## Quand l'utiliser
Avant d'écrire du code qui utilise une API de bibliothèque — surtout si tu as un doute sur la syntaxe, les props, ou une nouveauté récente. Context7 donne la doc officielle et à jour, pas une version mémorisée qui pourrait être obsolète.

## Comment l'utiliser

### Étape 1 — Résoudre le nom de la bibliothèque
```
use mcp tool: context7 → resolve-library-id
library_name: "tailwindcss"
```
→ Retourne un `library_id` comme `/tailwindlabs/tailwindcss`

### Étape 2 — Récupérer la doc
```
use mcp tool: context7 → get-library-docs
context7CompatibleLibraryID: "/tailwindlabs/tailwindcss"
topic: "responsive design breakpoints"   ← sujet précis
tokens: 5000                              ← ajuster selon besoin
```

---

## Bibliothèques clés du projet MELIOZ

| Bibliothèque | library_id à essayer |
|---|---|
| Tailwind CSS v3 | `/tailwindlabs/tailwindcss` |
| Framer Motion | `/framer/motion` |
| React Three Fiber | `/pmndrs/react-three-fiber` |
| @react-three/drei | `/pmndrs/drei` |
| Three.js | `/mrdoob/three.js` |
| React Hook Form | `/react-hook-form/react-hook-form` |
| Zod | `/colinhacks/zod` |
| Lenis | `/darkroomengineering/lenis` |
| Vite | `/vitejs/vite` |
| Lucide React | `/lucide-icons/lucide` |

---

## Exemples de requêtes utiles

```
# Nouvelles classes Tailwind v3
topic: "arbitrary values custom properties"

# Framer Motion variants
topic: "variants stagger children animation"

# R3F useFrame useThree hooks
topic: "useFrame useThree canvas"

# Drei MeshTransmissionMaterial props
topic: "MeshTransmissionMaterial glass material"

# Zod schema validation
topic: "object refine superRefine"
```

---

## Règle d'or
Si tu n'es pas sûr à 100% de la syntaxe d'une prop ou d'un hook → utilise Context7 avant de coder. 30 secondes de vérification évite 30 minutes de debug.
