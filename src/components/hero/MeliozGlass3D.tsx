import { useRef, useEffect, useMemo, Suspense, useState } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import {
  Center,
  MeshTransmissionMaterial,
  Environment,
} from '@react-three/drei'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js'
import { ExtrudeGeometry } from 'three'
import type * as THREE from 'three'

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

  useEffect(() => {
    return () => { geometries.forEach(({ geo }) => geo.dispose()) }
  }, [geometries])

  return (
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
      <directionalLight position={[-5, 8, 6]} intensity={2.8} color="#ffffff" />
      <directionalLight position={[6, 2, -3]} intensity={1.4} color="#DAE9D9" />
      <ambientLight intensity={0.5} color="#c8dfd6" />
      <pointLight position={[-4, 6, 4]} intensity={4} color="#ffffff" distance={25} />
      <pointLight position={[5, -4, -6]} intensity={1.2} color="#3B54CC" distance={30} />
    </>
  )
}

// ─── Animation oscillante (évite de passer sur la tranche) ───────────────────

function AnimatedM() {
  const ref = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    // Oscillation Y : ±35° — jamais vu de tranche
    ref.current.rotation.y = Math.sin(t * 0.55) * 0.6
    // Léger tangage X pour donner du volume
    ref.current.rotation.x = Math.sin(t * 0.35) * 0.1
    // Flottement vertical
    ref.current.position.y = Math.sin(t * 0.7) * 0.8
  })

  return (
    <group ref={ref}>
      <Center>
        <Suspense fallback={null}>
          <MGlass />
        </Suspense>
      </Center>
    </group>
  )
}

function Scene() {
  return <AnimatedM />
}

// ─── Composant principal exporté ─────────────────────────────────────────────

export function MeliozGlass3D() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      className="w-full h-full"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 1.2s ease-out' }}
    >
      <Canvas
        camera={{ position: [0, 0, 95], fov: 48, near: 0.1, far: 1000 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, preserveDrawingBuffer: false }}
      >
        <Lighting />
        <Scene />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
