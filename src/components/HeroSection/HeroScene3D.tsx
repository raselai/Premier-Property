/**
 * HeroScene3D Component
 * Main 3D scene with camera, lighting, and multiple glass buildings
 */

import React, { useMemo } from 'react';
import { OrbitControls, Environment } from '@react-three/drei';
import { GlassBuilding } from './GlassBuilding';

export const HeroScene3D: React.FC = () => {
    // Generate building configurations
    const buildings = useMemo(() => {
        return [
            // Front row - taller buildings
            { position: [-3, 2.5, 2] as [number, number, number], height: 5, width: 1.2, depth: 1.2, delay: 0.2 },
            { position: [0, 3.5, 2] as [number, number, number], height: 7, width: 1.4, depth: 1.4, delay: 0.4 },
            { position: [3, 2.8, 2] as [number, number, number], height: 5.6, width: 1.3, depth: 1.3, delay: 0.6 },

            // Middle row - medium buildings
            { position: [-4.5, 2, 0] as [number, number, number], height: 4, width: 1.1, depth: 1.1, delay: 0.3 },
            { position: [-1.5, 2.7, 0] as [number, number, number], height: 5.4, width: 1.2, depth: 1.2, delay: 0.5 },
            { position: [1.5, 2.3, 0] as [number, number, number], height: 4.6, width: 1.15, depth: 1.15, delay: 0.7 },
            { position: [4.5, 1.8, 0] as [number, number, number], height: 3.6, width: 1, depth: 1, delay: 0.8 },

            // Back row - shorter buildings for depth
            { position: [-3.5, 1.5, -2] as [number, number, number], height: 3, width: 0.9, depth: 0.9, delay: 0.1 },
            { position: [0, 1.8, -2] as [number, number, number], height: 3.6, width: 1, depth: 1, delay: 0.35 },
            { position: [3.5, 1.4, -2] as [number, number, number], height: 2.8, width: 0.85, depth: 0.85, delay: 0.55 },
        ];
    }, []);

    return (
        <>
            {/* Camera controls - subtle auto-rotation */}
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
                autoRotate={true}
                autoRotateSpeed={0.3}
            />

            {/* Lighting setup */}
            {/* Ambient light for overall scene illumination */}
            <ambientLight intensity={0.4} />

            {/* Main directional light from top-right */}
            <directionalLight
                position={[10, 10, 5]}
                intensity={1.2}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            />

            {/* Fill light from left */}
            <directionalLight position={[-10, 5, 5]} intensity={0.5} />

            {/* Rim light from behind for glass edge highlighting */}
            <directionalLight position={[0, 3, -10]} intensity={0.8} color='#D4AF37' />

            {/* Point lights for dramatic effect */}
            <pointLight position={[0, 8, 0]} intensity={0.8} color='#D4AF37' distance={20} />
            <pointLight position={[-5, 2, 5]} intensity={0.4} color='#88B4E6' distance={15} />
            <pointLight position={[5, 2, 5]} intensity={0.4} color='#E6B488' distance={15} />

            {/* Spotlight for ground illumination */}
            <spotLight
                position={[0, 10, 0]}
                angle={0.5}
                penumbra={1}
                intensity={0.5}
                castShadow
            />

            {/* Environment map for realistic reflections */}
            <Environment preset='city' />

            {/* Ground plane */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
                <planeGeometry args={[50, 50]} />
                <meshStandardMaterial
                    color='#1A1A1A'
                    roughness={0.8}
                    metalness={0.2}
                    opacity={0.9}
                    transparent
                />
            </mesh>

            {/* Render all glass buildings */}
            {buildings.map((building, index) => (
                <GlassBuilding
                    key={index}
                    position={building.position}
                    height={building.height}
                    width={building.width}
                    depth={building.depth}
                    delay={building.delay}
                    color={index % 3 === 0 ? '#D4AF37' : index % 3 === 1 ? '#A8C5E6' : '#E6D5A8'}
                />
            ))}

            {/* Particle effects - subtle floating particles */}
            <points>
                <sphereGeometry args={[8, 32, 32]} />
                <pointsMaterial
                    size={0.02}
                    color='#D4AF37'
                    opacity={0.3}
                    transparent
                    sizeAttenuation
                />
            </points>
        </>
    );
};

export default HeroScene3D;
