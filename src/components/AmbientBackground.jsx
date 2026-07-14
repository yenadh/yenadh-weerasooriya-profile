"use client";

import { useEffect, useRef } from "react";
import { usePointerFine, useReducedMotion } from "@/hooks/useMotionPrefs";

export default function AmbientBackground() {
  const rootRef = useRef(null);
  const fine = usePointerFine();
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!fine || reduced || !rootRef.current) return;

    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      rootRef.current.style.setProperty("--parallax-x", `${x * 18}px`);
      rootRef.current.style.setProperty("--parallax-y", `${y * 12}px`);
      rootRef.current.style.setProperty("--grid-tilt", `${x * 4}deg`);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [fine, reduced]);

  return (
    <div ref={rootRef} className="site-ambient" aria-hidden="true">
      <div className="site-ambient__glow site-ambient__glow--a" />
      <div className="site-ambient__glow site-ambient__glow--b" />
      <div className="site-ambient__grid" />
      <div className="site-ambient__scan" />
      <div className="site-ambient__depth">
        <span className="site-ambient__plane site-ambient__plane--1" />
        <span className="site-ambient__plane site-ambient__plane--2" />
        <span className="site-ambient__plane site-ambient__plane--3" />
      </div>
    </div>
  );
}
