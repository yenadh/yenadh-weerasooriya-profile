"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function ExperienceAndEducation() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Professional Experience",
      answer: [
        "Software Engineer – Innovative-e Private Limited, Sri Lanka – March 2024 to May 2025",
      ],
    },
    {
      question: "Expertise Technologies",
      answer: [
        "React",
        "React Native",
        "Next.js",
        "Node.js",
        "Laravel",
        "Django",
        "MySQL",
        "MongoDB",
        "Arduino",
      ],
    },
    {
      question: "Education Qualifications",
      answer: [
        "MBA in Data Analytics and AI – Britts Imperial University College, Sharjah (Studying)",
        "BEng (Hons) Software Engineering Top-up – London Metropolitan University (2023)",
        "Higher National Diploma in Computing – Esoft Metro Campus (2021-2022)",
      ],
    },
    {
      question: "Languages",
      answer: ["JavaScript", "TypeScript", "PHP", "Python", "C#", "C++"],
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20 px-5 sm:px-10 md:px-20 xl:px-40">
      {/* Background video */}
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

      <div className="relative z-10 w-full">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-10 xl:gap-20">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full lg:w-1/2"
          >
            <Image
              src="/images/cute-astronaut-working-with-laptop-moon-with-star-cartoon-vector-icon-illustration-science-tech.png"
              alt="Experience Illustration"
              width={600}
              height={400}
              className="w-full rounded-xl object-cover shadow-xl"
            />
          </motion.div>

          {/* Right Accordion */}
          <div className="w-full lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-semibold text-white mb-8 text-center lg:text-left"
            >
              Skills & <span className="text-violet-600">Journey</span>
            </motion.h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className={`border-b border-gray-200 pb-4 transition duration-300 ${
                    openIndex === index ? "border-violet-600" : ""
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <h5
                      className={`text-lg md:text-xl font-medium transition-colors duration-300 ${
                        openIndex === index
                          ? "text-violet-600"
                          : "text-white hover:text-violet-600"
                      }`}
                    >
                      {faq.question}
                    </h5>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown
                        className={`w-6 h-6 transition-colors ${
                          openIndex === index ? "text-violet-600" : "text-white"
                        }`}
                      />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden mt-3"
                      >
                        <ul className="list-disc list-inside space-y-2 text-white text-sm md:text-base">
                          {faq.answer.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
