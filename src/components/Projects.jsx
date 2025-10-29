"use client";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import Image from "next/image";

const spices = [
  {
    name: "Ahava Middle East",
    description:
      "Delicately sweet and aromatic, sourced from the heart of Sri Lanka. Perfect for desserts, teas, and savory dishes.",
    image: "/images/ahava-middle-east.png",
    link: "https://ahavamiddleast.ae/",
  },
  {
    name: "Ahava Innovations IT",
    description:
      "Vibrant golden color and earthy aroma — known for its rich flavor and natural health benefits.",
    image: "/images/ahava-innovations-it.png",
    link: "https://www.ahavainnovationsits.ae/",
  },
  {
    name: "Sarasi Products",
    description:
      "Freshly ground for bold, zesty heat — the king of spices that enhances every meal.",
    image: "/images/sarasi-products.png",
    link: "https://sarasi-products-marketing-site.vercel.app/",
  },
];

export default function Projects() {
  return (
    <>
      <section className="relative space-y-10 xl:min-h-screen z-10 bg-black py-16 px-5 sm:px-10 md:px-20 xl:px-40 overflow-hidden">
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

        <div className=" relative z-10 text-left text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Personal <span className="text-violet-600">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mt-4 text-white leading-relaxed sm:leading-loose text-sm sm:text-base md:text-lg"
          >
            In this section, you’ll find a selection of projects I’ve completed,
            showcased here with the permission of my clients. Each project
            reflects my skills, creativity, and commitment to delivering
            high-quality solutions.
          </motion.p>
        </div>
        <div className="relative z-10 grid gap-10 md:grid-cols-3">
          {spices.map((spice, index) => (
            <motion.a
              href={spice.link}
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              className="bg-white/5 hover:bg-violet-600/20 transition-all rounded-lg shadow-md overflow-hidden group"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={spice.image}
                  alt={spice.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-violet-600 mb-3">
                  {spice.name}
                </h3>
                <p className="text-white text-sm leading-relaxed">
                  {spice.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </>
  );
}
