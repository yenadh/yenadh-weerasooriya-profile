"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function StoryCategories({ items, loading }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const SkeletonCard = () => (
    <div className="animate-pulse bg-gray-800/70 rounded-2xl overflow-hidden h-[400px] flex flex-col">
      <div className="h-52 bg-gray-700 rounded-t-2xl" />
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="h-6 bg-gray-600 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-600 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-600 rounded w-5/6"></div>
        </div>
        <div className="h-4 bg-gray-600 rounded w-1/4 mt-4"></div>
      </div>
    </div>
  );

  return (
    <div
      className="px-5 py-20 lg:px-20 xl:px-40 bg-linear-to-b from-black via-gray-900 to-black text-white"
      ref={ref}
    >
      {/* Section Heading */}
      <div className="text-center mb-14">
        <motion.h1
          className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-white tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          Explore My <span className="text-violet-600">Blog</span>
        </motion.h1>
        <motion.p
          className="text-white text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Dive into my latest articles and tutorials about web development,
          frameworks, and best practices in modern tech.
        </motion.p>
      </div>

      {/* Course Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <motion.div key={index} variants={cardVariants}>
                <SkeletonCard />
              </motion.div>
            ))
          : items.map((item, index) => (
              <motion.div key={index} variants={cardVariants}>
                {item.status ? (
                  <Link
                    href={`/blog/${item._id}`}
                    className="group block overflow-hidden rounded-2xl bg-gray-900/70 backdrop-blur border border-gray-800 hover:border-violet-600 transition-all duration-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] h-full relative"
                  >
                    <div className="relative w-full h-52 overflow-hidden rounded-t-2xl">
                      <Image
                        src={item.image[0]}
                        alt={`Tech Blog - ${item.category}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-semibold mb-2 group-hover:text-violet-600 transition-colors">
                        {item.category}
                      </h2>
                      <p className="text-sm leading-relaxed text-gray-300">
                        {item.description}
                      </p>
                    </div>
                    <div className="px-6 pb-6">
                      <span className="inline-block mt-3 text-sm font-medium text-violet-600 group-hover:text-white transition-colors">
                        Read More →
                      </span>
                    </div>
                  </Link>
                ) : (
                  <div className="group block cursor-not-allowed overflow-hidden rounded-2xl bg-gray-900/70 backdrop-blur border border-gray-800 h-full relative">
                    <div className="relative w-full h-52 overflow-hidden rounded-t-2xl">
                      <Image
                        src={item.image[0]}
                        alt={`Tech Blog - ${item.category}`}
                        fill
                        className="object-cover grayscale transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-lg font-bold">
                        Coming Soon
                      </div>
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-semibold mb-2 text-gray-400">
                        {item.category}
                      </h2>
                      <p className="text-sm leading-relaxed text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
      </motion.div>
    </div>
  );
}
