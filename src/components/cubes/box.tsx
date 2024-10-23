'use client';
// import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from 'three';


export default function Box(props: { position?: [number, number, number] }) {
  const { position } = props
  const meshRef = useRef<THREE.Mesh>()
  const [selected, setSelected] = useState(false)

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <mesh ref={meshRef as any} onClick={() => setSelected(!selected)} position={position}>
      <boxGeometry args={[2, 2, 2]} />
      <meshPhongMaterial color={selected ? 'red' : 'white'} />
    </mesh>
  )
}
