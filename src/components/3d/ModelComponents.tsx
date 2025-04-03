'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { createBrainModel, createParticles, createNeuralNetwork } from '@/lib/models';

// Define proper prop types
interface ModelProps {
  position?: [number, number, number];
  scale?: number;
  hover?: number;
  color?: string;
  metalness?: number;
  roughness?: number;
  emissive?: string;
  emissiveIntensity?: number;
  [key: string]: any; // For any additional props
}

// Specific component prop types
interface ParticlesProps extends ModelProps {
  count?: number;
}

interface NeuralNetworkProps extends ModelProps {
  width?: number;
  height?: number;
  depth?: number;
}

// Floating Object specific props
interface FloatingObjectProps extends Omit<ModelProps, 'geometry' | 'material'> {
  geometry?: React.ReactNode;
  material?: React.ReactNode;
}

// Brain Model Component
export const Brain = (props: ModelProps) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });
  
  return (
    <primitive
      ref={meshRef}
      object={createBrainModel()}
      scale={props.scale || 1}
      position={props.position || [0, 0, 0]}
      {...props}
    />
  );
};

// Particles Component
export const Particles = (props: ParticlesProps) => {
  const pointsRef = useRef<THREE.Points>(null!);
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.075;
    }
  });
  
  return (
    <primitive
      ref={pointsRef}
      object={createParticles(props.count || 1000)}
      scale={props.scale || 1}
      position={props.position || [0, 0, 0]}
      {...props}
    />
  );
};

// Neural Network Component
export const NeuralNetwork = (props: NeuralNetworkProps) => {
  const groupRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });
  
  return (
    <primitive
      ref={groupRef}
      object={createNeuralNetwork(props.width || 3, props.height || 3, props.depth || 3)}
      scale={props.scale || 1}
      position={props.position || [0, 0, 0]}
      {...props}
    />
  );
};

// Floating Object Component
export const FloatingObject = (props: FloatingObjectProps) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.1 + (props.hover || 0);
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });
  
  // Extract props that we'll apply directly to mesh
  const { geometry, material, hover, ...meshProps } = props;
  
  return (
    <mesh
      ref={meshRef}
      position={props.position || [0, 0, 0]}
      scale={props.scale || 1}
      {...meshProps}
    >
      {geometry || <torusKnotGeometry args={[1, 0.3, 128, 16]} />}
      {material || (
        <meshStandardMaterial
          color={props.color || "#7B61FF"}
          metalness={props.metalness || 0.7}
          roughness={props.roughness || 0.2}
          emissive={props.emissive || "#7B61FF"}
          emissiveIntensity={props.emissiveIntensity || 0.5}
        />
      )}
    </mesh>
  );
}; 