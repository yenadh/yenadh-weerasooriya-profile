"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BlogHeroSection() {
  return (
    <section className="section-shell relative min-h-[85vh] flex items-center overflow-hidden py-28 px-5 sm:px-10 md:px-20 xl:px-40">
      <div className="w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        <div className="w-full lg:w-[55%]">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-[var(--neon)] text-sm tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            // Blog
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 h-px w-24 origin-left bg-[var(--neon)]"
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            Notes from the
            <br />
            <span className="neon-text">build log</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-5 max-w-xl text-[var(--muted)] leading-relaxed"
          >
            Deep dives into architecture, performance, APIs, and UI craft —
            practical notes for engineers who care about shipping well.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8"
          >
            <Link href="/" className="neon-btn inline-flex">
              <span>About Me</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full lg:w-[45%] flex justify-center"
        >
          <div
            className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(57,255,20,0.3) 0%, transparent 70%)",
              filter: "blur(24px)",
            }}
          />
          <div className="float-soft relative w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 neon-border p-1">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/images/profile-image-yenadh-dark.png"
                alt="Yenadh Weerasooriya"
                fill
                priority
                sizes="(max-width: 768px) 240px, 288px"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
