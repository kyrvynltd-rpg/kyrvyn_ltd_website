"use client";

import { Canvas } from "@react-three/fiber";
import { useTheme } from "next-themes";
import { Tunnel } from "./Tunnel";
import { VascularConnections } from "./VascularConnections";
import { HashRain } from "./HashRain";
import { MempoolParticles } from "./MempoolParticles";
import { Environment } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function Scene() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mql = window.matchMedia("(max-width: 768px)");
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  if (!mounted) return null;
  const theme = resolvedTheme || "dark";

  return (
    <div className="fixed inset-0 z-[-2] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 0], fov: 75 }}>
        <fog attach="fog" args={[theme === "dark" ? "#020617" : "#F8FAFC", theme === "dark" ? 10 : 15, theme === "dark" ? 60 : 120]} />
        <ambientLight intensity={theme === "dark" ? 0.3 : 1.2} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        
        <Tunnel theme={theme} isMobile={isMobile} />
        <VascularConnections theme={theme} />
        <HashRain theme={theme} isMobile={isMobile} />
        <MempoolParticles theme={theme} />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
