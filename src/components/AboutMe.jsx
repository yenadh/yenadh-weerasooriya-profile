"use client";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center gap-10 xl:min-h-screen z-10 bg-black py-16 px-5 sm:px-10 md:px-20 xl:px-40 overflow-hidden">
      {/* Left Column */}
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
      <div className="relative z-10 w-full lg:w-1/2 text-white mb-10 lg:mb-0">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
        >
          Who is <span className="text-violet-600">Yenadh Weerasooriya?</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-4 text-white leading-relaxed sm:leading-loose text-sm sm:text-base md:text-lg"
        >
          I am a 21-year-old software engineer currently pursuing an MBA in Data
          Analytics and AI in the UAE. I specialize in full-stack development,
          building web and mobile applications, and working with technologies
          like <span className="text-violet-600">React, Node.js,</span> and{" "}
          <span className="text-violet-600">Django.</span> Passionate about
          creating efficient and scalable software solutions, I enjoy turning
          ideas into real-world applications that make an impact.
        </motion.p>
      </div>

      {/* Right Column - Stats */}
      <div className="w-full lg:w-1/2 text-white relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {[
            { value: "3+", label: "Experience" },
            { value: "20+", label: "Projects" },
            { value: "8+", label: "Technologies" },
            { value: "6+", label: "Clients" },
          ].map((item) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              key={item.label}
              className="flex flex-col border border-white rounded-lg p-6 bg-white/5 hover:bg-violet-600/20 transition-all duration-300"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-violet-500">
                {item.value}
              </h2>
              <span className="mt-2 text-sm sm:text-base">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
