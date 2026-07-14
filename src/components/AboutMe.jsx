"use client";
import { motion } from "framer-motion";
import { useApp } from "@/context/AppContext";
import Tilt3D from "@/components/Tilt3D";

export default function AboutMe() {
  const { t } = useApp();
  const about = t.about;

  return (
    <section className="section-shell relative flex flex-col lg:flex-row items-center gap-12 xl:min-h-[80vh] py-20 px-5 sm:px-10 md:px-20 xl:px-40">
      <div className="w-full lg:w-1/2">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-[var(--neon)] text-sm tracking-[0.2em] uppercase mb-3"
          style={{ fontFamily: "var(--font-display), sans-serif" }}
        >
          {about.eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold heading-fg"
          style={{ fontFamily: "var(--font-display), sans-serif" }}
        >
          {about.titleBefore}{" "}
          <span className="neon-text">{about.titleAccent}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-5 text-[var(--muted)] leading-relaxed text-sm sm:text-base md:text-lg"
        >
          {about.p1}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-4 text-[var(--muted)] leading-relaxed text-sm sm:text-base md:text-lg"
        >
          {about.p2}
        </motion.p>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {about.stats.map((item, i) => (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              viewport={{ once: true, amount: 0.3 }}
              key={item.label}
            >
              <Tilt3D maxTilt={10} scale={1.04}>
                <div className="neon-panel flex flex-col p-5 sm:p-6 hover:border-[var(--neon)] transition-colors duration-300 h-full">
                  <h3
                    className="text-3xl sm:text-4xl md:text-5xl font-semibold neon-text"
                    style={{ fontFamily: "var(--font-display), sans-serif" }}
                  >
                    {item.value}
                  </h3>
                  <span className="mt-2 text-sm sm:text-base text-[var(--muted)]">
                    {item.label}
                  </span>
                </div>
              </Tilt3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
