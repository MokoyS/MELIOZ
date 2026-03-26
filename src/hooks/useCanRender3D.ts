import { useState, useEffect } from 'react'

/**
 * Retourne false sur les appareils mobiles bas de gamme
 * pour éviter de charger Three.js inutilement.
 */
export function useCanRender3D(): boolean {
  const [canRender, setCanRender] = useState(true)

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    const isLowEnd = navigator.hardwareConcurrency <= 2

    if (isMobile && isLowEnd) {
      setCanRender(false)
    }
  }, [])

  return canRender
}
