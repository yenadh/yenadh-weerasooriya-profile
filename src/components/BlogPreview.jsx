"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function BlogPreview() {
  const { t } = useApp();
  const bp = t.blogPreview;
  const unavailable = t.blogUnavailable;

  return (
    <section className="section-shell relative py-20 px-5 sm:px-10 md:px-20 xl:px-40">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-[var(--neon)] text-sm tracking-[0.2em] uppercase mb-3"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            {bp.eyebrow}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold heading-fg"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            {bp.titleBefore}{" "}
            <span className="neon-text">{bp.titleAccent}</span>
          </motion.h2>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
        className="neon-panel mt-10 p-8 sm:p-10 max-w-3xl"
      >
        <p
          className="text-xl font-semibold heading-fg"
          style={{ fontFamily: "var(--font-display), sans-serif" }}
        >
          {unavailable.title}
        </p>
        <p className="mt-3 text-[var(--muted)] text-sm sm:text-base leading-relaxed">
          {unavailable.description}
        </p>
        <Link href="/blog" className="neon-btn inline-flex mt-6 text-sm">
          {t.nav.blog}
          <ArrowRight className="w-4 h-4 rtl:rotate-180" />
        </Link>
      </motion.div>
    </section>
  );
}
