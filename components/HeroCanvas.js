'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'

function RotatingCube() {
    const cubeRef = useRef()
  
    useFrame(() => {
      if (cubeRef.current) {
        cubeRef.current.rotation.x += 0.01
        cubeRef.current.rotation.y += 0.01
      }
    })
  
    return (
      <mesh ref={cubeRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshNormalMaterial />
      </mesh>
    )
  }
  

export default function HeroCanvas() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [2, 2, 2] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ambientLight intensity={0.5} />
<directionalLight position={[5, 5, 5]} intensity={1} />
<pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} />
        <RotatingCube />
      </Canvas>
    </div>
  )
}
