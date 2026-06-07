"use client";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useScroll } from "framer-motion";

export function MempoolParticles({ theme }: { theme: string }) {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 800;
  const { scrollY } = useScroll();

  const particleData = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.025,
        (Math.random() - 0.5) * 0.025,
        (Math.random() - 0.5) * 0.025,
      ),
      baseX: (Math.random() - 0.5) * 40,
      baseY: (Math.random() - 0.5) * 40,
      baseZ: -Math.random() * 100 - 5,
    }));
  }, [count]);

  const positions = useMemo(() => new Float32Array(count * 3), [count]);
  const pointerVec = new THREE.Vector3();

  useFrame((state) => {
    if (!pointsRef.current) return;
    const posAttr = pointsRef.current.geometry.attributes.position;
    scrollY.get();

    // Convert mouse position to 3D world space loosely around Z = -15
    const zDepth = state.camera.position.z - 15;
    pointerVec.set(
      (state.pointer.x * state.viewport.width) / 2,
      (state.pointer.y * state.viewport.height) / 2,
      zDepth,
    );

    for (let i = 0; i < count; i++) {
      const pd = particleData[i];

      // Compute active position incorporating continuous drift
      const px = pd.baseX;
      const py = pd.baseY;
      const pz = pd.baseZ;

      // Apply mouse repulsion
      const dx = px - pointerVec.x;
      const dy = py - pointerVec.y;
      const dz = pz - pointerVec.z;
      const distSq = dx * dx + dy * dy + dz * dz;

      // Repel threshold (15 units)
      if (distSq < 150) {
        const dist = Math.sqrt(distSq);
        const force = (12 - dist) / 12;
        pd.velocity.x += (dx / dist) * force * 0.025;
        pd.velocity.y += (dy / dist) * force * 0.025;
        pd.velocity.z += (dz / dist) * force * 0.025;
      }

      // Apply drag and bounds to velocity
      pd.velocity.multiplyScalar(0.92);

      // Apply velocity to base position
      pd.baseX += pd.velocity.x;
      pd.baseY += pd.velocity.y;
      pd.baseZ += pd.velocity.z;

      // Reset particles if they fly completely off map relative to camera
      const relativeZ = pd.baseZ - state.camera.position.z;
      if (relativeZ > 10) pd.baseZ -= 100;
      if (relativeZ < -110) pd.baseZ += 100;

      posAttr.setXYZ(i, pd.baseX, pd.baseY, pd.baseZ);
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.25}
        color={theme === "dark" ? "#3B82F6" : "#1E3A8A"}
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
