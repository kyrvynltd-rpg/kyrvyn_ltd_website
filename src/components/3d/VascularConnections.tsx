"use client";
import { useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function VascularConnections({ theme }: { theme: string }) {
  const curves = useMemo(() => {
    return Array.from({ length: 6 }).map(() => {
      const points = [];
      for (let i = 0; i < 12; i++) {
        points.push(
          new THREE.Vector3((Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15, -i * 20),
        );
      }
      return new THREE.CatmullRomCurve3(points);
    });
  }, []);

  const color = useMemo(() => new THREE.Color(), []);
  const uniformsList = useMemo(
    () =>
      curves.map(() => ({
        uTime: { value: 0 },
        uColor: { value: new THREE.Color() },
      })),
    [curves],
  );

  useFrame((state) => {
    const colorHex = theme === "dark" ? "#00D4FF" : "#0F172A";
    color.set(colorHex);

    uniformsList.forEach((uniforms) => {
      uniforms.uTime.value = state.clock.elapsedTime;
      uniforms.uColor.value.copy(color);
    });
  });

  return (
    <group>
      {curves.map((curve, i) => (
        <mesh key={i}>
          <tubeGeometry args={[curve, 100, 0.08, 8, false]} />
          <shaderMaterial
            transparent
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            uniforms={uniformsList[i]}
            vertexShader={`
              varying vec2 vUv;
              void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `}
            fragmentShader={`
              uniform float uTime;
              uniform vec3 uColor;
              varying vec2 vUv;
              void main() {
                // Heartbeat pulse throttled down 50%
                float pulse = sin(vUv.x * 30.0 - uTime * 4.0) * 0.5 + 0.5;
                float intensity = pow(pulse, 4.0);
                gl_FragColor = vec4(uColor * (1.0 + intensity * 1.5), intensity * 0.35 + 0.25);
              }
            `}
          />
        </mesh>
      ))}
    </group>
  );
}
