"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useApp } from "@/context/AppContext";

const STACK = [
  { id: "react", label: "React", layer: "Frontend" },
  { id: "next", label: "Next.js", layer: "Frontend" },
  { id: "dotnet", label: ".NET", layer: "Backend" },
  { id: "node", label: "Node.js", layer: "Backend" },
  { id: "rn", label: "React Native", layer: "Mobile" },
  { id: "mongo", label: "MongoDB", layer: "Data" },
];

export default function StackExplorer() {
  const { locale } = useApp();
  const [active, setActive] = useState("react");
  const [depth, setDepth] = useState(90);
  const activeItem = STACK.find((s) => s.id === active) || STACK[0];

  useEffect(() => {
    const update = () => setDepth(window.innerWidth < 640 ? 72 : 110);
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  const layerLabel =
    locale === "ar"
      ? { Frontend: "الواجهة", Backend: "الخلفية", Mobile: "الجوال", Data: "البيانات" }
      : { Frontend: "Frontend", Backend: "Backend", Mobile: "Mobile", Data: "Data" };

  return (
    <section className="section-shell relative py-16 px-5 sm:px-10 md:px-20 xl:px-40">
      <div className="stack-explorer neon-panel p-6 sm:p-8">
        <p
          className="text-[var(--neon)] text-xs tracking-[0.25em] uppercase mb-4"
          style={{ fontFamily: "var(--font-display), sans-serif" }}
        >
          {locale === "ar" ? "// مكدس تفاعلي" : "// Interactive Stack"}
        </p>

        <div className="stack-explorer__scene">
          <motion.div
            className="stack-explorer__prism"
            animate={{
              rotateY: -STACK.findIndex((s) => s.id === active) * 60,
            }}
            transition={{ type: "spring", stiffness: 90, damping: 16 }}
          >
            {STACK.map((item, i) => {
              const angle = (360 / STACK.length) * i;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`stack-explorer__face ${active === item.id ? "is-active" : ""}`}
                  style={{ transform: `rotateY(${angle}deg) translateZ(${depth}px)` }}
                  onClick={() => setActive(item.id)}
                >
                  {item.label}
                </button>
              );
            })}
          </motion.div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2 justify-center">
          {STACK.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item.id)}
              className={`stack-explorer__chip ${active === item.id ? "is-active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-center"
        >
          <p
            className="text-2xl font-semibold neon-text"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            {activeItem.label}
          </p>
          <p className="text-sm text-[var(--muted)] mt-1">
            {layerLabel[activeItem.layer]}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
