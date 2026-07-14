"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import Tilt3D from "@/components/Tilt3D";

export default function ExperienceAndEducation() {
  const { t } = useApp();
  const journey = t.journey;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-shell relative flex items-center overflow-hidden py-20 px-5 sm:px-10 md:px-20 xl:px-40">
      <div className="w-full">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-12 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.25 }}
            className="w-full lg:w-1/2"
          >
            <Tilt3D maxTilt={10} className="w-full">
              <div className="relative neon-border overflow-hidden aspect-[4/3] bg-[var(--bg)]">
                <Image
                  src="/images/skills-journey-neon.png"
                  alt={journey.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 480px"
                  className="object-cover"
                  priority={false}
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--bg)]/50 via-transparent to-transparent" />
                <span className="pointer-events-none absolute top-3 start-3 text-[10px] tracking-[0.2em] uppercase text-[var(--neon)] opacity-80"
                  style={{ fontFamily: "var(--font-display), sans-serif" }}
                >
                  // SYS.CORE
                </span>
              </div>
            </Tilt3D>
          </motion.div>

          <div className="w-full lg:w-1/2">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-[var(--neon)] text-sm tracking-[0.2em] uppercase mb-3 text-center lg:text-start"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              {journey.eyebrow}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold heading-fg mb-8 text-center lg:text-start"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              {journey.titleBefore}{" "}
              <span className="neon-text">{journey.titleAccent}</span>
            </motion.h2>

            <div className="space-y-2">
              {journey.faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className={`neon-panel px-4 py-3 transition-colors duration-300 ${
                    openIndex === index ? "border-[var(--neon)]" : ""
                  }`}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex justify-between items-center text-start gap-4"
                  >
                    <h3
                      className={`text-base md:text-lg font-medium transition-colors ${
                        openIndex === index
                          ? "text-[var(--neon)]"
                          : "heading-fg"
                      }`}
                    >
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 ${
                          openIndex === index
                            ? "text-[var(--neon)]"
                            : "text-[var(--muted)]"
                        }`}
                      />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28 }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-3 mb-1 list-disc list-inside space-y-2 text-[var(--muted)] text-sm md:text-base">
                          {faq.answer.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
