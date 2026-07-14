"use client";

import { useEffect, useRef } from "react";
import { usePointerFine, useReducedMotion } from "@/hooks/useMotionPrefs";

export default function WireCube3D({ className = "" }) {
  const cubeRef = useRef(null);
  const fine = usePointerFine();
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!fine || reduced || !cubeRef.current) return;

    let raf = 0;
    let targetX = 18;
    let targetY = -24;
    let currentX = targetX;
    let currentY = targetY;

    const onMove = (e) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 40;
      const ny = (e.clientY / window.innerHeight - 0.5) * -40;
      targetX = 18 + ny * 0.35;
      targetY = -24 + nx * 0.35;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      if (cubeRef.current) {
        cubeRef.current.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [fine, reduced]);

  return (
    <div className={`wire-cube-scene ${className}`} aria-hidden="true">
      <div
        ref={cubeRef}
        className={`wire-cube ${fine && !reduced ? "wire-cube--interactive" : ""}`}
      >
        {["front", "back", "right", "left", "top", "bottom"].map((face) => (
          <div key={face} className={`wire-cube__face wire-cube__face--${face}`} />
        ))}
      </div>
    </div>
  );
}
