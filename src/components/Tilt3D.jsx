"use client";

import { useRef } from "react";
import { motion, useSpring } from "framer-motion";
import { usePointerFine, useReducedMotion } from "@/hooks/useMotionPrefs";

export default function Tilt3D({
  children,
  className = "",
  maxTilt = 14,
  glare = true,
  scale = 1.03,
  perspective = 900,
}) {
  const ref = useRef(null);
  const innerRef = useRef(null);
  const fine = usePointerFine();
  const reduced = useReducedMotion();

  const rotateX = useSpring(0, { stiffness: 260, damping: 28 });
  const rotateY = useSpring(0, { stiffness: 260, damping: 28 });
  const lift = useSpring(1, { stiffness: 260, damping: 28 });

  const interactive = fine && !reduced;

  const onMove = (e) => {
    if (!interactive || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    rotateY.set((x - 0.5) * maxTilt * 2);
    rotateX.set(-(y - 0.5) * maxTilt * 2);
    lift.set(scale);
    if (glare && innerRef.current) {
      innerRef.current.style.setProperty("--gx", `${x * 100}%`);
      innerRef.current.style.setProperty("--gy", `${y * 100}%`);
    }
  };

  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    lift.set(1);
    if (innerRef.current) {
      innerRef.current.style.setProperty("--gx", "50%");
      innerRef.current.style.setProperty("--gy", "50%");
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`tilt-3d ${className}`}
      style={{ perspective, transformStyle: "preserve-3d" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <motion.div
        ref={innerRef}
        className="tilt-3d__inner relative w-full h-full"
        style={{
          rotateX: interactive ? rotateX : 0,
          rotateY: interactive ? rotateY : 0,
          scale: interactive ? lift : 1,
          transformStyle: "preserve-3d",
          "--gx": "50%",
          "--gy": "50%",
        }}
      >
        {children}
        {glare && interactive && <div className="tilt-3d__glare pointer-events-none absolute inset-0" />}
      </motion.div>
    </motion.div>
  );
}
