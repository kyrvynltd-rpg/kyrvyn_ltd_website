"use client";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useScroll } from "framer-motion";

export function HashRain({ theme, isMobile }: { theme: string; isMobile?: boolean }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const { scrollY } = useScroll();
  const count = isMobile ? 80 : 150;

  const texture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 128; // Power of 2
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "transparent";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = "bold 22px monospace";
      ctx.fillStyle = "#ffffff";
      ctx.fillText("0x" + Math.random().toString(16).substr(2, 6).toUpperCase() + "...", 5, 22);
    }
    return new THREE.CanvasTexture(canvas);
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      x: (Math.random() - 0.5) * 40,
      y: (Math.random() - 0.5) * 40,
      z: -Math.random() * 200,
      scale: 0.5 + Math.random() * 0.5,
      speed: 0.75 + Math.random() * 1, // Parallax speed multiplier (Halved for Stealth Wealth)
    }));
  }, [count]);

  const targetColor = useMemo(() => new THREE.Color(), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const colorHex = theme === "dark" ? "#3B82F6" : "#0F172A";
    targetColor.set(colorHex);

    const scrollOffset = scrollY.get() * 0.05;

    particles.forEach((p, i) => {
      // Parallax application (hash moves faster than the camera base scroll)
      const currentZ = p.z + scrollOffset * p.speed;

      // Loop bounds
      let mappedZ = currentZ % 200;
      if (mappedZ > state.camera.position.z + 10) mappedZ -= 200;
      if (mappedZ < -200) mappedZ += 200;

      dummy.position.set(p.x, p.y, mappedZ);
      dummy.scale.set(p.scale, p.scale, p.scale);
      dummy.rotation.x = 0;
      dummy.rotation.y = 0;

      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
      meshRef.current!.setColorAt(i, targetColor);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <planeGeometry args={[2, 0.5]} />
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={theme === "dark" ? 0.95 : 0.8}
        depthWrite={false}
        color="#ffffff"
        blending={THREE.AdditiveBlending}
      />
    </instancedMesh>
  );
}
