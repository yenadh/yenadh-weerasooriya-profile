"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function Blog() {
  const { t } = useApp();
  const b = t.blogUnavailable;

  return (
    <section className="section-shell relative min-h-[80vh] flex items-center justify-center py-28 px-5 sm:px-10 md:px-20 xl:px-40">
      <div className="w-full max-w-2xl text-center neon-panel p-8 sm:p-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-flex p-4 border border-[var(--line)] text-[var(--neon)] mb-6"
        >
          <Construction className="w-8 h-8" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.4 }}
          className="text-[var(--neon)] text-sm tracking-[0.2em] uppercase mb-3"
          style={{ fontFamily: "var(--font-display), sans-serif" }}
        >
          {b.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.45 }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold heading-fg"
          style={{ fontFamily: "var(--font-display), sans-serif" }}
        >
          {b.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.45 }}
          className="mt-5 text-[var(--muted)] text-sm sm:text-base leading-relaxed"
        >
          {b.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.45 }}
          className="mt-8 flex justify-center"
        >
          <Link href="/" className="neon-btn inline-flex">
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            {b.backHome}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
