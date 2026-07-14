"use client";
import { motion } from "framer-motion";
import { Code2, Smartphone, Database, Sparkles } from "lucide-react";
import { useApp } from "@/context/AppContext";
import Tilt3D from "@/components/Tilt3D";

const icons = [Code2, Smartphone, Database, Sparkles];

export default function Services() {
  const { t } = useApp();
  const services = t.services;

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
          {services.eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold heading-fg"
          style={{ fontFamily: "var(--font-display), sans-serif" }}
        >
          {services.titleBefore}{" "}
          <span className="neon-text">{services.titleAccent}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.45 }}
          viewport={{ once: true }}
          className="mt-4 text-[var(--muted)] text-sm sm:text-base md:text-lg leading-relaxed"
        >
          {services.intro}
        </motion.p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {services.items.map((service, index) => {
          const Icon = icons[index] || Sparkles;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Tilt3D maxTilt={12}>
                <div className="neon-panel group p-6 sm:p-8 hover:border-[var(--neon)] transition-colors duration-300 h-full">
                  <div className="inline-flex p-3 border border-[var(--line)] text-[var(--neon)] group-hover:bg-[rgba(57,255,20,0.08)] transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3
                    className="mt-5 text-xl font-semibold heading-fg"
                    style={{ fontFamily: "var(--font-display), sans-serif" }}
                  >
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Tilt3D>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
