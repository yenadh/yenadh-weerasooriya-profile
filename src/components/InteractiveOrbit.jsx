"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { usePointerFine, useReducedMotion } from "@/hooks/useMotionPrefs";

export default function InteractiveOrbit({ labels, coreLabel, coreValue }) {
  const sceneRef = useRef(null);
  const fine = usePointerFine();
  const reduced = useReducedMotion();
  const [active, setActive] = useState(null);
  const [tilt, setTilt] = useState({ x: 12, y: -8 });
  const [radii, setRadii] = useState({ outer: 110, inner: 72 });

  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;

    const update = () => {
      const size = Math.min(el.clientWidth, el.clientHeight);
      setRadii({
        outer: Math.max(80, size * 0.36),
        inner: Math.max(52, size * 0.24),
      });
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const onMove = (e) => {
    if (!fine || reduced || !sceneRef.current) return;
    const rect = sceneRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: 12 - y * 22, y: -8 + x * 28 });
  };

  const onLeave = () => setTilt({ x: 12, y: -8 });

  return (
    <div
      ref={sceneRef}
      className="interactive-orbit-scene"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="interactive-orbit"
        animate={{
          rotateX: fine && !reduced ? tilt.x : 0,
          rotateY: fine && !reduced ? tilt.y : 0,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
      >
        <div
          className="orbit-ring orbit-ring--spin interactive-orbit__ring"
          style={{ width: "92%", height: "92%" }}
        >
          {labels.slice(0, 4).map((label, i) => {
            const angle = (i / 4) * 360;
            const isActive = active === label;
            return (
              <button
                key={label}
                type="button"
                className={`orbit-chip interactive-orbit__chip ${isActive ? "is-active" : ""}`}
                style={{
                  transform: `rotate(${angle}deg) translate(${radii.outer}px) rotate(${-angle}deg) translate(-50%, -50%)`,
                }}
                onMouseEnter={() => setActive(label)}
                onFocus={() => setActive(label)}
                onBlur={() => setActive(null)}
                onMouseLeave={() => setActive(null)}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div
          className="orbit-ring orbit-ring--spin-rev interactive-orbit__ring"
          style={{ width: "62%", height: "62%" }}
        >
          {labels.slice(4).map((label, i) => {
            const angle = (i / 4) * 360 + 20;
            const isActive = active === label;
            return (
              <button
                key={label}
                type="button"
                className={`orbit-chip interactive-orbit__chip ${isActive ? "is-active" : ""}`}
                style={{
                  transform: `rotate(${angle}deg) translate(${radii.inner}px) rotate(${-angle}deg) translate(-50%, -50%)`,
                  fontSize: "0.65rem",
                }}
                onMouseEnter={() => setActive(label)}
                onFocus={() => setActive(label)}
                onBlur={() => setActive(null)}
                onMouseLeave={() => setActive(null)}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div className="interactive-orbit__core neon-panel flex flex-col items-center justify-center rounded-full border-[var(--neon)]">
          <span
            className="text-[10px] tracking-[0.2em] uppercase text-[var(--muted)]"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            {coreLabel}
          </span>
          <span className="neon-text text-sm sm:text-base font-semibold mt-1">
            {active || coreValue}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
