"use client";

import { useTheme } from "next-themes";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useEffect, useState } from "react";
import * as THREE from "three";

function Particles({ count = 500, color }: { count?: number; color: string }) {
  const mesh = useRef<THREE.InstancedMesh>(null);

  // Create object once
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Generate random data for particles safely
  const particles = useMemo(() => {
    const temp = [];
    const random = () => Math.random();
    for (let i = 0; i < count; i++) {
      temp.push({
        x: (random() - 0.5) * 10,
        y: (random() - 0.5) * 10,
        z: (random() - 0.5) * 10,
        t: random() * 100,
        factor: 20 + random() * 100,
        speed: 0.01 + random() / 200
      });
    }
    return temp;
  }, [count]);

  // Update positions every frame
  useFrame(() => {
    if (!mesh.current) return;

    particles.forEach((particle, i) => {
      const { x, y, z, factor, speed } = particle;
      let { t } = particle;

      // Update time
      t = particle.t += speed / 2;

      // Calculate new position based on math formulas
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);

      // Set position and scale
      dummy.position.set(
        x + a * factor / 20,
        y + b * factor / 20,
        z + s * factor / 20
      );
      dummy.scale.setScalar(0.01 + Math.sin(t) * 0.005);

      // Apply transforms
      dummy.updateMatrix();

      // Update instance matrix
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });

    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.3}
        depthWrite={false}
      />
    </instancedMesh>
  );
}

export function BackgroundParticles() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only update state after component mounts
    let isMounted = true;
    if (isMounted) {
      setMounted(true);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 -z-10 h-full w-full pointer-events-none bg-background"></div>;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  const particleColor = currentTheme === "dark" ? "#ffffff" : "#000000";

  return (
    <div className="absolute inset-0 -z-10 h-full w-full pointer-events-none overflow-hidden bg-background/50">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Particles count={300} color={particleColor} />
      </Canvas>
    </div>
  );
}
