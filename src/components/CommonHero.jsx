"use client";

import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";
import React, { useRef } from "react";

export default function CommonHero({ title, description, image, loading }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center overflow-hidden bg-black py-20 px-5 sm:px-10 md:px-20 xl:px-40"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="/background/2792967-uhd_2160_1440_25fps.mp4"
          type="video/mp4"
        />
      </video>

      <motion.div
        style={{ y, opacity, scale }}
        className="flex gap-10 flex-col lg:flex-row-reverse items-center justify-center"
      >
        {/* Right Image */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/20 z-10" />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 z-20"
          >
            {loading ? (
              // ⭐ Skeleton Loader
              <div className="w-full h-full bg-gray-700/30 animate-pulse rounded-xl" />
            ) : (
              <Image
                src={image || "/placeholder.jpg"}
                alt="Hero Image"
                fill
                className="shadow-lg object-cover"
              />
            )}
          </motion.div>
        </div>

        {/* Left Text */}
        <div className="relative z-20 w-full lg:w-1/2">
          <div className="max-w-5xl">
            {/* Top small text */}
            {loading ? (
              <div className="w-40 h-4 bg-gray-700/30 animate-pulse rounded mb-4" />
            ) : (
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-6 text-white text-base sm:text-lg md:text-xl leading-relaxed"
              >
                Welcome to My Digital Space
              </motion.p>
            )}

            {/* Divider */}
            <motion.div className="border-b border-violet-600" />

            {/* Title */}
            {loading ? (
              <div className="w-72 h-8 bg-gray-700/30 animate-pulse rounded mt-6" />
            ) : (
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white leading-snug"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}

            {/* Description */}
            {loading ? (
              <div className="space-y-3 mt-4">
                <div className="w-full h-4 bg-gray-700/30 animate-pulse rounded" />
                <div className="w-4/5 h-4 bg-gray-700/30 animate-pulse rounded" />
              </div>
            ) : (
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-4 text-white leading-relaxed"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
