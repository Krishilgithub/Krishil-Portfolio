'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const LoadingSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
    }
    
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.getElapsedTime() * 0.5;
      ringRef.current.rotation.z = state.clock.getElapsedTime() * 0.3;
    }
  });
  
  return (
    <group>
      {/* Central sphere */}
      <mesh ref={sphereRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color="#7B61FF"
          emissive="#7B61FF"
          emissiveIntensity={0.4}
          metalness={0.8}
          roughness={0.2}
          wireframe
        />
      </mesh>
      
      {/* Orbiting ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1.5, 0.1, 16, 100]} />
        <meshStandardMaterial 
          color="#FF61D8"
          emissive="#FF61D8"
          emissiveIntensity={0.4}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.7}
        />
      </mesh>
      
      {/* Particles */}
      {Array.from({ length: 50 }).map((_, i) => {
        const radius = 2 + Math.random() * 2;
        const position = new THREE.Vector3(
          Math.sin(i) * radius,
          Math.cos(i) * radius * 0.5,
          Math.sin(i * 2) * radius
        );
        
        return (
          <mesh key={i} position={position} scale={0.05 + Math.random() * 0.05}>
            <sphereGeometry args={[1, 8, 8]} />
            <meshBasicMaterial 
              color={Math.random() > 0.5 ? "#7B61FF" : "#FF61D8"} 
              transparent
              opacity={0.7}
            />
          </mesh>
        );
      })}
    </group>
  );
};

const LoadingAnimation = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#FF61D8" />
        <LoadingSphere />
      </Canvas>
    </div>
  );
};

export default LoadingAnimation; 