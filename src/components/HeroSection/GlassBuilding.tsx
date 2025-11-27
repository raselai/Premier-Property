/**
 * GlassBuilding Component
 * Renders a single 3D glass building with realistic materials
 */

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface GlassBuildingProps {
    /** Position [x, y, z] */
    position: [number, number, number];
    /** Building height */
    height: number;
    /** Building width */
    width: number;
    /** Building depth */
    depth: number;
    /** Animation delay in seconds */
    delay: number;
    /** Color tint for the glass */
    color?: string;
}

export const GlassBuilding: React.FC<GlassBuildingProps> = ({
    position,
    height,
    width,
    depth,
    delay,
    color = '#D4AF37',
}) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const initialY = position[1] - height - 5; // Start below the ground
    const targetY = position[1];
    const animationProgress = useRef(0);
    const hasStarted = useRef(false);
    const startTime = useRef(0);

    // Memoize geometry to optimize performance
    const geometry = useMemo(() => {
        return new THREE.BoxGeometry(width, height, depth);
    }, [width, height, depth]);

    useFrame((state, _delta) => {
        if (!meshRef.current) return;

        // Start animation after delay
        if (!hasStarted.current) {
            if (state.clock.elapsedTime >= delay) {
                hasStarted.current = true;
                startTime.current = state.clock.elapsedTime;
            }
            return;
        }

        // Animate the building rising up
        if (animationProgress.current < 1) {
            const elapsed = state.clock.elapsedTime - startTime.current;
            const duration = 1.5; // 1.5 seconds for the rise animation

            // Ease out cubic function for smooth animation
            animationProgress.current = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - animationProgress.current, 3);

            meshRef.current.position.y = THREE.MathUtils.lerp(
                initialY,
                targetY,
                eased
            );

            // Add slight rotation during rise for more dynamic effect
            meshRef.current.rotation.y = (1 - eased) * 0.1;
        }

        // Subtle floating animation after rise is complete
        if (animationProgress.current >= 1) {
            const floatSpeed = 0.5;
            const floatAmount = 0.03;
            meshRef.current.position.y = targetY + Math.sin(state.clock.elapsedTime * floatSpeed) * floatAmount;
        }
    });

    return (
        <mesh
            ref={meshRef}
            position={[position[0], initialY, position[2]]}
            geometry={geometry}
            castShadow
            receiveShadow
        >
            {/* Glass material using MeshPhysicalMaterial for better compatibility */}
            <meshPhysicalMaterial
                color={color}
                metalness={0.1}
                roughness={0.05}
                transmission={0.9}
                thickness={1.2}
                opacity={0.9}
                transparent
                clearcoat={1}
                clearcoatRoughness={0.1}
                envMapIntensity={1.5}
                ior={1.5}
            />

            {/* Edge glow effect */}
            <lineSegments>
                <edgesGeometry args={[geometry]} />
                <lineBasicMaterial color={color} opacity={0.4} transparent linewidth={2} />
            </lineSegments>
        </mesh>
    );
};

export default GlassBuilding;
