import { Object3DNode } from '@react-three/fiber';
import { ReactThreeFiber } from '@react-three/fiber';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      primitive: ReactThreeFiber.Object3DNode<any, any>;
      torusKnotGeometry: ReactThreeFiber.BufferGeometryNode<THREE.TorusKnotGeometry, typeof THREE.TorusKnotGeometry>;
    }
  }
}

declare module '@react-three/fiber' {
  interface ThreeElements {
    torusKnotGeometry: Object3DNode<THREE.TorusKnotGeometry, typeof THREE.TorusKnotGeometry>;
  }
} 