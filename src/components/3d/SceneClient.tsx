"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

export default function SceneClient() {
  const isEnabledByEnv = process.env.NEXT_PUBLIC_ENABLE_3D === "1";
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!isEnabledByEnv) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    const saveData =
      (navigator as unknown as { connection?: { saveData?: boolean } }).connection?.saveData ===
      true;

    if (reducedMotion || mobile || saveData) return;

    const w = window as unknown as {
      requestIdleCallback?: (cb: () => void, opts?: { timeout?: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    const enable = () => setEnabled(true);
    const fallback = window.setTimeout(enable, 1500);

    if (!w.requestIdleCallback) {
      return () => window.clearTimeout(fallback);
    }

    const idleId = w.requestIdleCallback(
      () => {
        window.clearTimeout(fallback);
        enable();
      },
      { timeout: 2000 },
    );

    return () => {
      window.clearTimeout(fallback);
      w.cancelIdleCallback?.(idleId);
    };
  }, [isEnabledByEnv]);

  if (!isEnabledByEnv) return null;
  if (!enabled) return null;
  return <Scene />;
}
