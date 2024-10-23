"use client";

import { Canvas } from '@react-three/fiber'
import BoxGroup from './box-group';

export default function CubesScene() {
  return (
    <Canvas camera={{ position: [0, 0, 20] }}>
      <BoxGroup />
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 5]} />
    </Canvas>
  )
}
