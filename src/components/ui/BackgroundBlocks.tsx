"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Block = {
  id: string;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  opacity: number;
  blur: number;
  hue: number;
};

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function BackgroundBlocks() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [restartKey, setRestartKey] = useState(0);

  const blocks = useMemo<Block[]>(() => {
    const seed = 1337 + restartKey * 101;
    const rnd = mulberry32(seed);
    const count = 28;

    return Array.from({ length: count }).map((_, i) => {
      const size = Math.round(26 + rnd() * 56);
      const x = Math.round(rnd() * 100);
      const y = Math.round(rnd() * 100);
      const duration = 10 + rnd() * 18;
      const delay = -rnd() * duration;
      const opacity = 0.18 + rnd() * 0.22;
      const blur = rnd() * 10;
      const hue = rnd() * 30;
      return {
        id: `${seed}-${i}`,
        size,
        x,
        y,
        duration,
        delay,
        opacity,
        blur,
        hue,
      };
    });
  }, [restartKey]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let raf = 0;
    let lastTick = performance.now();
    let lastActive = lastTick;

    const tick = (t: number) => {
      lastTick = t;
      el.style.setProperty("--kyrvyn-bg-t", String(t));
      raf = window.requestAnimationFrame(tick);
    };

    raf = window.requestAnimationFrame(tick);

    const forceRestart = () => setRestartKey((k) => k + 1);
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") forceRestart();
    };

    const onFocus = () => forceRestart();
    const onResize = () => forceRestart();

    const heartbeat = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      const now = performance.now();
      if (now - lastTick > 1200) {
        forceRestart();
        lastActive = now;
        return;
      }
      if (now - lastActive > 15000) {
        forceRestart();
        lastActive = now;
      }
    }, 1500);

    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("focus", onFocus);
    window.addEventListener("resize", onResize);

    return () => {
      window.cancelAnimationFrame(raf);
      window.clearInterval(heartbeat);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("resize", onResize);
    };
  }, [restartKey]);

  return (
    <div ref={containerRef} aria-hidden className="kyrvyn-blocks" data-restart-key={restartKey}>
      {blocks.map((b) => (
        <div
          key={b.id}
          className="kyrvyn-block"
          style={{
            left: `${b.x}%`,
            top: `${b.y}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            opacity: b.opacity,
            filter: `blur(${b.blur}px)`,
            ["--kyrvyn-block-duration" as never]: `${b.duration}s`,
            ["--kyrvyn-block-delay" as never]: `${b.delay}s`,
            ["--kyrvyn-block-hue" as never]: `${b.hue}deg`,
          }}
        />
      ))}
    </div>
  );
}
