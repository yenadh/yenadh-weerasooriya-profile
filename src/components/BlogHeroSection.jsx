"use client";

import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";
import React, { useRef } from "react";
import { ArrowBigRight, Download } from "lucide-react";
import Link from "next/link";

export default function BlogHeroSection() {
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20 px-5 sm:px-10 md:px-20 xl:px-40"
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
        Your browser does not support the video tag.
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
            exit={{ opacity: 0, x: 40 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 z-20"
          >
            <Image
              src="/images/profile-image-yenadh-dark.png"
              alt="Profile photo"
              fill
              className="shadow-lg object-cover"
            />
          </motion.div>
        </div>

        {/* Left Text */}
        <div className="relative z-20 w-full lg:w-1/2">
          <div className="max-w-5xl">
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="mt-6 text-white text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose"
            >
              Welcome to My Digital Space
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="border-b border-violet-600"
            />

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white leading-snug md:leading-tight"
            >
              Hello I'm
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-snug md:leading-tight"
            >
              Keshawa Sri{" "}
              <span className="text-violet-600">Yenadh Weerasooriya</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="mt-4 text-white leading-relaxed sm:leading-loose"
            >
              This is{" "}
              <span className="text-violet-600">my space to dive deep</span>{" "}
              into the world of modern development — exploring code
              architecture, performance optimization, API design, and UI/UX best
              practices. Whether you’re a beginner or a seasoned engineer,
              you’ll find tutorials, tips, and thought pieces to sharpen your
              craft and stay ahead in tech.
            </motion.p>
          </div>

          {/* ✅ Centered Button with Download Function */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mt-8 flex justify-center sm:justify-start w-full"
          >
            <Link
              href="/"
              className="w-full px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Learn About Me</span>
              <ArrowBigRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
