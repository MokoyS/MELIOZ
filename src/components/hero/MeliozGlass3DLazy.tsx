import { lazy, Suspense } from 'react'

// Lazy loading — Three.js ne doit pas bloquer le bundle principal
const MeliozGlass3DInner = lazy(() =>
  import('./MeliozGlass3D').then((m) => ({ default: m.MeliozGlass3D }))
)

function Glass3DFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className="w-52 h-36 rounded-2xl animate-pulse"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      />
    </div>
  )
}

export function MeliozGlass3DLazy() {
  return (
    <Suspense fallback={<Glass3DFallback />}>
      <MeliozGlass3DInner />
    </Suspense>
  )
}
