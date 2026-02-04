import { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function LogoModel() {
  const { scene } = useGLTF('/models/Logo_rose.glb');
  const meshRef = useRef<THREE.Group>(null);

  // Clone the scene for material modifications
  const clonedScene = useMemo(() => {
    const clone = scene.clone();
    clone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        // Create a premium glossy material
        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color('#c41e3a'), // Deep rose red
          metalness: 0.4,
          roughness: 0.3,
          emissive: new THREE.Color('#3d0a0a'),
          emissiveIntensity: 0.2,
        });
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    return clone;
  }, [scene]);

  // Subtle rotation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.2}
      floatIntensity={0.5}
      floatingRange={[-0.1, 0.1]}
    >
      <group ref={meshRef} scale={2.5} position={[0, 0, 0]}>
        <primitive object={clonedScene} />
      </group>
    </Float>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
        color="#ffffff"
      />
      <spotLight
        position={[-10, 5, -10]}
        angle={0.5}
        penumbra={1}
        intensity={0.5}
        color="#d4af37" // Gold accent light
      />
      <pointLight position={[0, -5, 0]} intensity={0.3} color="#c41e3a" />
    </>
  );
}

function Scene() {
  const { camera } = useThree();
  
  useMemo(() => {
    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return (
    <>
      <Lights />
      <LogoModel />
      <Environment preset="city" />
    </>
  );
}

function LoadingFallback() {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#c41e3a" wireframe />
    </mesh>
  );
}

export default function Hero3DLogo() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={<LoadingFallback />}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Preload the model
useGLTF.preload('/models/Logo_rose.glb');
