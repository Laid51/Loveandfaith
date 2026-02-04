import { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function LogoModel() {
  const pivot = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/models/Logo_rose.glb');

  // Center the model once
  const centeredScene = useMemo(() => {
    const s = scene.clone(true);

    // IMPORTANT: update matrices before bounding box
    s.updateWorldMatrix(true, true);

    const box = new THREE.Box3().setFromObject(s);
    const center = box.getCenter(new THREE.Vector3());

    // Move the model so its bbox center is at origin
    s.position.x -= center.x;
    s.position.y -= center.y;
    s.position.z -= center.z;

    return s;
  }, [scene]);

  useFrame((_, delta) => {
    if (pivot.current) {
      pivot.current.rotation.y += delta * 0.85;
    }
  });

  return (
    <group ref={pivot}>
      <primitive object={centeredScene} scale={0.15} />
    </group>
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
