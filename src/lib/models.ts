import * as THREE from 'three';

// Function to create a brain model
export const createBrainModel = () => {
  // This is a simplified representation
  // In a real application, you'd load a 3D model using GLTFLoader
  const geometry = new THREE.SphereGeometry(1, 32, 32);
  const material = new THREE.MeshStandardMaterial({
    color: '#7B61FF',
    metalness: 0.3,
    roughness: 0.4,
    emissive: '#5B41DF',
    emissiveIntensity: 0.2,
    wireframe: true,
  });
  
  return new THREE.Mesh(geometry, material);
};

// Function to create AI-themed particles
export const createParticles = (count = 1000) => {
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.01,
    color: '#7B61FF',
    transparent: true,
    blending: THREE.AdditiveBlending,
  });

  const particlesPositions = new Float32Array(count * 3);
  
  for (let i = 0; i < count * 3; i++) {
    particlesPositions[i] = (Math.random() - 0.5) * 5;
  }
  
  particlesGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(particlesPositions, 3)
  );
  
  return new THREE.Points(particlesGeometry, particlesMaterial);
};

// Function to create a neural network visualization
export const createNeuralNetwork = (width = 3, height = 3, depth = 3) => {
  const group = new THREE.Group();
  
  // Create nodes
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      for (let z = 0; z < depth; z++) {
        const nodeGeometry = new THREE.SphereGeometry(0.05, 16, 16);
        const nodeMaterial = new THREE.MeshStandardMaterial({
          color: x === 0 ? '#7B61FF' : x === width - 1 ? '#FF61D8' : '#FFFFFF',
          emissive: x === 0 ? '#7B61FF' : x === width - 1 ? '#FF61D8' : '#FFFFFF',
          emissiveIntensity: 0.5,
        });
        
        const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
        
        node.position.x = (x - width / 2 + 0.5) * 0.5;
        node.position.y = (y - height / 2 + 0.5) * 0.5;
        node.position.z = (z - depth / 2 + 0.5) * 0.5;
        
        group.add(node);
        
        // Create connections to next layer
        if (x < width - 1) {
          for (let nx = 0; nx < 1; nx++) {
            for (let ny = 0; ny < height; ny++) {
              for (let nz = 0; nz < depth; nz++) {
                const start = new THREE.Vector3(
                  (x - width / 2 + 0.5) * 0.5,
                  (y - height / 2 + 0.5) * 0.5,
                  (z - depth / 2 + 0.5) * 0.5
                );
                
                const end = new THREE.Vector3(
                  ((x + 1) - width / 2 + 0.5) * 0.5,
                  (ny - height / 2 + 0.5) * 0.5,
                  (nz - depth / 2 + 0.5) * 0.5
                );
                
                const lineGeometry = new THREE.BufferGeometry().setFromPoints([start, end]);
                const lineMaterial = new THREE.LineBasicMaterial({
                  color: 0x5B41DF,
                  transparent: true,
                  opacity: 0.3,
                });
                
                const line = new THREE.Line(lineGeometry, lineMaterial);
                group.add(line);
              }
            }
          }
        }
      }
    }
  }
  
  return group;
}; 