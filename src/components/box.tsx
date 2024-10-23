'use client';
// import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from 'three';


export default function Box(props: { position?: [number, number, number] }) {
  const { position } = props
  const meshRef = useRef<THREE.Mesh>()
  const [selected, setSelected] = useState(false)

  return (
    <mesh ref={meshRef} onClick={() => setSelected(!selected)} position={position}>
      <boxGeometry args={[2, 2, 2]} />
      <meshPhongMaterial color={selected ? 'red' : 'white'} />
    </mesh>
  )
}
