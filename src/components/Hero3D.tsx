import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function TurboMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
    }
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main torus - represents a turbine/compressor wheel */}
      <mesh ref={meshRef} castShadow receiveShadow>
        <torusKnotGeometry args={[1.2, 0.35, 128, 32, 2, 3]} />
        <meshPhysicalMaterial
          color="#1a1a2e"
          metalness={0.95}
          roughness={0.15}
          clearcoat={1}
          clearcoatRoughness={0.1}
          envMapIntensity={1.5}
        />
      </mesh>
      {/* Inner ring - detail */}
      <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[0.7, 0.08, 32, 64]} />
        <meshPhysicalMaterial
          color="#C8FF00"
          metalness={0.8}
          roughness={0.2}
          emissive="#C8FF00"
          emissiveIntensity={0.15}
        />
      </mesh>
      {/* Outer ring */}
      <mesh rotation={[0, 0, 0]} castShadow>
        <torusGeometry args={[1.9, 0.05, 32, 64]} />
        <meshPhysicalMaterial
          color="#0EA5E9"
          metalness={0.9}
          roughness={0.1}
          emissive="#0EA5E9"
          emissiveIntensity={0.1}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
}

export function Hero3D() {
  return (
    <div className="w-full h-[350px] md:h-[450px] lg:h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        shadows
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <pointLight position={[-3, 2, 3]} color="#C8FF00" intensity={0.8} />
        <pointLight position={[3, -2, 3]} color="#0EA5E9" intensity={0.6} />

        <TurboMesh />

        <ContactShadows
          position={[0, -2.5, 0]}
          opacity={0.3}
          scale={8}
          blur={2}
          far={4}
        />
        <Environment preset="city" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 2.5}
        />
      </Canvas>
    </div>
  );
}
