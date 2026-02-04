import { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

function LogoModel() {
    const groupRef = useRef<THREE.Group>(null);
    const { scene } = useGLTF('/models/Logo_rose.glb');

    // Calculate center offset only once
    const centerOffset = useMemo(() => {
        const box = new THREE.Box3().setFromObject(scene);
        const center = box.getCenter(new THREE.Vector3());
        return center;
    }, [scene]);

    // Subtle continuous rotation
    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.45; // Slow rotation
        }
    });

    return (
        <group ref={groupRef} position={[-centerOffset.x, -centerOffset.y, -centerOffset.z]}>
            <primitive object={scene} scale={0.5} />
        </group>
    );
}

const Logo3D = () => {
    return (
        <div className="logo-3d-container">
            <Canvas
                camera={{ position: [0, 0, 15], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                style={{ width: '100%', height: '100%' }}
            >
                <Suspense fallback={null}>
                    {/* Lighting setup */}
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 5, 5]} intensity={1} />
                    <directionalLight position={[-5, -5, -5]} intensity={0.3} />
                    <pointLight position={[0, 10, 0]} intensity={0.5} color="#ffccdd" />

                    {/* 3D Logo */}
                    <LogoModel />

                    {/* Environment for reflections */}
                    <Environment preset="studio" />
                </Suspense>
            </Canvas>
        </div>
    );
};

// Preload the model
useGLTF.preload('/models/Logo_rose.glb');

export default Logo3D;
