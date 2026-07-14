"use client";

import { useEffect, useRef } from "react";
import { usePointerFine, useReducedMotion } from "@/hooks/useMotionPrefs";

export default function CursorGlow() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const fine = usePointerFine();
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!fine || reduced) return;

    let x = 0;
    let y = 0;
    let ringX = 0;
    let ringY = 0;
    let raf = 0;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
    };

    const tick = () => {
      ringX += (x - ringX) * 0.14;
      ringY += (y - ringY) * 0.14;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
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

  if (!fine || reduced) return null;

  return (
    <div className="cursor-glow" aria-hidden="true">
      <div ref={ringRef} className="cursor-glow__ring" />
      <div ref={dotRef} className="cursor-glow__dot" />
    </div>
  );
}
