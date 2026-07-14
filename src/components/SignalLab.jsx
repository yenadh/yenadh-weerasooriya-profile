"use client";

import { motion } from "framer-motion";
import { useApp } from "@/context/AppContext";
import InteractiveOrbit from "@/components/InteractiveOrbit";
import Tilt3D from "@/components/Tilt3D";

export default function SignalLab() {
  const { t, isRtl } = useApp();
  const lab = t.lab;

  return (
    <section className="section-shell relative py-20 px-5 sm:px-10 md:px-20 xl:px-40">
      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-[var(--neon)] text-sm tracking-[0.2em] uppercase mb-3"
          style={{ fontFamily: "var(--font-display), sans-serif" }}
        >
          {lab.eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold heading-fg"
          style={{ fontFamily: "var(--font-display), sans-serif" }}
        >
          {lab.titleBefore} <span className="neon-text">{lab.titleAccent}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.45 }}
          viewport={{ once: true }}
          className="mt-4 text-[var(--muted)] text-sm sm:text-base md:text-lg leading-relaxed"
        >
          {lab.intro}
        </motion.p>
      </div>

      <div className="mt-14 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <InteractiveOrbit
            labels={lab.orbitLabels}
            coreLabel={lab.core}
            coreValue="KSY"
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {lab.principles.map((item, index) => (
            <motion.div
              key={item.code}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Tilt3D maxTilt={10}>
                <div className="neon-panel p-5 hover:border-[var(--neon)] transition-colors duration-300 h-full">
                  <span
                    className="text-[var(--neon)] text-xs tracking-widest"
                    style={{ fontFamily: "var(--font-display), sans-serif" }}
                  >
                    {item.code}
                  </span>
                  <h3
                    className="mt-2 text-lg font-semibold heading-fg"
                    style={{ fontFamily: "var(--font-display), sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </Tilt3D>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <h3
          className="text-xl sm:text-2xl font-semibold heading-fg mb-6"
          style={{ fontFamily: "var(--font-display), sans-serif" }}
        >
          {lab.signalsTitle}
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {lab.signals.map((signal, index) => (
            <motion.div
              key={signal.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Tilt3D maxTilt={8} scale={1.02}>
                <div className="neon-border p-4 relative overflow-hidden group h-full">
                  <span
                    className="absolute top-0 h-full w-0.5 bg-[var(--neon)] opacity-70"
                    style={isRtl ? { right: 0 } : { left: 0 }}
                  />
                  <p
                    className="text-sm font-semibold text-[var(--neon)] ps-3"
                    style={{ fontFamily: "var(--font-display), sans-serif" }}
                  >
                    {signal.label}
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-[var(--muted)] leading-relaxed ps-3">
                    {signal.detail}
                  </p>
                </div>
              </Tilt3D>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
