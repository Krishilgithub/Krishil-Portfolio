"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import {
  createBrainModel,
  createParticles,
  createNeuralNetwork,
} from "@/lib/models";

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
interface FloatingObjectProps
  extends Omit<ModelProps, "geometry" | "material"> {
  geometry?: React.ReactNode;
  material?: React.ReactNode;
}

// Brain Model Component
export const Brain = (props: ModelProps) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const brainModel = createBrainModel();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <mesh
      ref={meshRef}
      geometry={brainModel.geometry}
      scale={props.scale || 1}
      position={props.position || [0, 0, 0]}
      {...props}
    >
      <meshStandardMaterial
        color={props.color || "#7B61FF"}
        metalness={props.metalness || 0.3}
        roughness={props.roughness || 0.4}
        emissive={props.emissive || "#5B41DF"}
        emissiveIntensity={props.emissiveIntensity || 0.2}
        wireframe={true}
      />
    </mesh>
  );
};

// Particles Component
export const Particles = (props: ParticlesProps) => {
  const pointsRef = useRef<THREE.Points>(null!);
  const count = props.count || 1000;

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.075;
    }
  });

  const particlesPositions = React.useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 5;
    }
    return positions;
  }, [count]);

  return (
    <points
      ref={pointsRef}
      scale={props.scale || 1}
      position={props.position || [0, 0, 0]}
      {...props}
    >
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.01}
        color={props.color || "#7B61FF"}
        transparent
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// Neural Network Component
export const NeuralNetwork = (props: NeuralNetworkProps) => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x =
        Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  // Create a minimal neural network representation
  const width = props.width || 3;
  const height = props.height || 3;
  const depth = props.depth || 3;

  return (
    <group
      ref={groupRef}
      scale={props.scale || 1}
      position={props.position || [0, 0, 0]}
      {...props}
    >
      {Array.from({ length: width }).map((_, x) =>
        Array.from({ length: height }).map((_, y) =>
          Array.from({ length: depth }).map((_, z) => {
            const nodePosition = [
              (x - width / 2 + 0.5) * 0.5,
              (y - height / 2 + 0.5) * 0.5,
              (z - depth / 2 + 0.5) * 0.5,
            ];

            const nodeColor =
              x === 0 ? "#7B61FF" : x === width - 1 ? "#FF61D8" : "#FFFFFF";

            return (
              <mesh key={`node-${x}-${y}-${z}`} position={nodePosition as any}>
                <sphereGeometry args={[0.05, 16, 16]} />
                <meshStandardMaterial
                  color={nodeColor}
                  emissive={nodeColor}
                  emissiveIntensity={0.5}
                />
              </mesh>
            );
          })
        )
      )}
    </group>
  );
};

// Floating Object Component
export const FloatingObject = (props: FloatingObjectProps) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        Math.sin(state.clock.getElapsedTime()) * 0.1 + (props.hover || 0);
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
