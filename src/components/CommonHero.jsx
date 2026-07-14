"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CommonHero({ title, description, image, loading }) {
  return (
    <section className="section-shell relative flex items-center overflow-hidden py-24 px-5 sm:px-10 md:px-20 xl:px-40">
      <div className="w-full flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-14">
        <div className="w-full lg:w-1/2">
          {loading ? (
            <div className="w-40 h-4 bg-white/10 animate-pulse rounded mb-4" />
          ) : (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-[var(--neon)] text-sm tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              // Digital Space
            </motion.p>
          )}

          <div className="mt-3 h-px w-20 bg-[var(--neon)]" />

          {loading ? (
            <div className="w-72 h-8 bg-white/10 animate-pulse rounded mt-6" />
          ) : (
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.45 }}
              className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-snug"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}

          {loading ? (
            <div className="space-y-3 mt-4">
              <div className="w-full h-4 bg-white/10 animate-pulse rounded" />
              <div className="w-4/5 h-4 bg-white/10 animate-pulse rounded" />
            </div>
          ) : (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.45 }}
              className="mt-4 text-[var(--muted)] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </div>

        <div className="relative w-full lg:w-1/2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="float-soft relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 neon-border p-1"
          >
            {loading ? (
              <div className="w-full h-full bg-white/10 animate-pulse" />
            ) : (
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={image || "/images/profile-image-yenadh-dark.png"}
                  alt="Hero Image"
                  fill
                  sizes="(max-width: 768px) 224px, 256px"
                  className="object-cover"
                />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
