import { useState, useEffect, useMemo, Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import {
  Center,
  MeshTransmissionMaterial,
  Float,
  Environment,
} from '@react-three/drei'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js'
import { ExtrudeGeometry } from 'three'
import { useSpring, animated } from '@react-spring/three'

// ─── M cursif en verre 3D ────────────────────────────────────────────────────

function MGlass() {
  const svgData = useLoader(SVGLoader, '/images/Melioz Vector.svg')

  const geometries = useMemo(() => {
    return svgData.paths.flatMap((path, i) => {
      const shapes = SVGLoader.createShapes(path)
      return shapes.map((shape, j) => {
        const geo = new ExtrudeGeometry(shape, {
          depth: 12,
          bevelEnabled: true,
          bevelThickness: 2,
          bevelSize: 1.2,
          bevelSegments: 10,
        })
        geo.computeBoundingBox()
        const bb = geo.boundingBox!
        geo.translate(
          -(bb.max.x + bb.min.x) / 2,
          -(bb.max.y + bb.min.y) / 2,
          0
        )
        return { geo, key: `${i}-${j}` }
      })
    })
  }, [svgData])

  // Cleanup geometries on unmount
  useEffect(() => {
    return () => {
      geometries.forEach(({ geo }) => geo.dispose())
    }
  }, [geometries])

  return (
    // Y flipped pour corriger l'axe SVG → Three.js, scale pour taille idéale
    <group scale={[0.1, -0.1, 0.1]}>
      {geometries.map(({ geo, key }) => (
        <mesh key={key} geometry={geo} castShadow={false}>
          <MeshTransmissionMaterial
            color="#2a6b78"
            transmission={0.25}
            thickness={10}
            roughness={0.04}
            metalness={0.15}
            ior={1.7}
            chromaticAberration={0.04}
            distortion={0.06}
            distortionScale={0.35}
            clearcoat={1}
            clearcoatRoughness={0}
            backsideThickness={3}
            samples={10}
            resolution={512}
          />
        </mesh>
      ))}
    </group>
  )
}

// ─── Éclairage optimisé pour verre sur fond teal ─────────────────────────────

function Lighting() {
  return (
    <>
      {/* Lumière principale — blanc chaud, haut gauche */}
      <directionalLight position={[-5, 8, 6]} intensity={2.8} color="#ffffff" />
      {/* Lumière de remplissage — mint doux, droite */}
      <directionalLight position={[6, 2, -3]} intensity={1.4} color="#DAE9D9" />
      {/* Ambiance générale */}
      <ambientLight intensity={0.5} color="#c8dfd6" />
      {/* Reflet brillant sur les arêtes biseautées */}
      <pointLight position={[-4, 6, 4]} intensity={4} color="#ffffff" distance={25} />
      {/* Contre-jour electric */}
      <pointLight position={[5, -4, -6]} intensity={1.2} color="#3B54CC" distance={30} />
    </>
  )
}

// ─── Scène avec rotation spring ──────────────────────────────────────────────

function Scene({ mouse }: { mouse: { x: number; y: number } }) {
  const { rotation } = useSpring({
    rotation: [
      mouse.y * 0.22,
      mouse.x * 0.28,
      0,
    ] as [number, number, number],
    config: { mass: 1, tension: 75, friction: 22 },
  })

  return (
    <Float speed={1.4} rotationIntensity={0} floatIntensity={0.45}>
      <animated.group rotation={rotation as never}>
        <Center>
          <Suspense fallback={null}>
            <MGlass />
          </Suspense>
        </Center>
      </animated.group>
    </Float>
  )
}

// ─── Composant principal exporté ─────────────────────────────────────────────

export function MeliozGlass3D() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Légère attente pour ne pas bloquer le paint initial
    const t = setTimeout(() => setVisible(true), 100)

    const onMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2,
      })
    }

    const onDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        setMouse({
          x: (e.gamma / 45) * 0.5,
          y: ((e.beta - 45) / 45) * 0.3,
        })
      }
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('deviceorientation', onDeviceOrientation, { passive: true })

    return () => {
      clearTimeout(t)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('deviceorientation', onDeviceOrientation)
    }
  }, [])

  return (
    <div
      className="w-full h-full"
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 1.2s ease-out',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 95], fov: 48, near: 0.1, far: 1000 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: false,
        }}
      >
        <Lighting />
        <Scene mouse={mouse} />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
