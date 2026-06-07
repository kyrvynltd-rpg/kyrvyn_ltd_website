"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Object3D, Color } from "three";
import { useScroll } from "framer-motion";

export function Tunnel({ theme, isMobile }: { theme: string; isMobile?: boolean }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = isMobile ? 180 : 300;

  const dummy = useMemo(() => new Object3D(), []);

  const blockData = useMemo(() => {
    const data = [];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 4 + Math.random() * 8;
      data.push({
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        z: -Math.random() * 200,
        rx: Math.random() * Math.PI,
        ry: Math.random() * Math.PI,
        rz: Math.random() * Math.PI,
      });
    }
    return data;
  }, [count]);

  const targetColor = useMemo(() => new Color(), []);
  const { scrollY } = useScroll();

  useEffect(() => {
    const colorHex = theme === "dark" ? "#3B82F6" : "#1E3A8A";
    targetColor.set(colorHex);

    if (meshRef.current) {
      for (let i = 0; i < count; i++) {
        meshRef.current.setColorAt(i, targetColor);
      }
      if (meshRef.current.instanceColor) {
        meshRef.current.instanceColor.needsUpdate = true;
      }
    }
  }, [theme, targetColor, count]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    const scrollOffset = scrollY.get() * 0.05;
    state.camera.position.z = -scrollOffset;

    blockData.forEach((block, i) => {
      block.rx += delta * 0.1;
      block.ry += delta * 0.05;

      if (block.z > state.camera.position.z + 10) {
        block.z -= 200;
      }

      dummy.position.set(block.x, block.y, block.z);
      dummy.rotation.set(block.rx, block.ry, block.rz);
      dummy.updateMatrix();
      meshRef.current?.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshPhysicalMaterial
        transparent
        opacity={theme === "dark" ? 0.4 : 0.85}
        roughness={0.1}
        metalness={0.5}
        emissive={theme === "dark" ? "#00D4FF" : "#1E3A8A"}
        emissiveIntensity={theme === "dark" ? 0.2 : 0.4}
      />
    </instancedMesh>
  );
}
