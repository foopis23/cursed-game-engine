import { useFrame } from "@react-three/fiber";
import Box from "./box";
import * as THREE from 'three';
import { useEffect, useRef } from "react";

export default function BoxGroup() {
  const groupRef = useRef<THREE.Object3D>()

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.PI / 4
    }
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01
    }
  })

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <object3D ref={groupRef}>
      {[...Array(3)].map((_, x) => (
        [...Array(3)].map((_, z) => (
          <Box key={x + z} position={[x * 3 - 3, 0, z * 3 - 3]} />
        ))
      )).flat()}
    </object3D>
  )
}