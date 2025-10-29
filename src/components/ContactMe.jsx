"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const contactItems = [
    {
      icon: <Mail className="w-6 h-6 text-violet-500" />,
      title: "Email",
      text: "yenathweerasooriya@gmail.com",
      link: "mailto:yenathweerasooriya@gmail.com",
    },
    {
      icon: <MapPin className="w-6 h-6 text-violet-500" />,
      title: "Location",
      text: "Al Rigga, Dubai, UAE",
    },
    {
      icon: <Linkedin className="w-6 h-6 text-violet-500" />,
      title: "LinkedIn",
      text: "Yenadh Weerasooriya",
      link: "https://www.linkedin.com/in/yenath-weerasooriya-0b93a8351/",
    },
    {
      icon: <Github className="w-6 h-6 text-violet-500" />,
      title: "Github",
      text: "github.com/yenadh/",
      link: "https://github.com/yenadh/",
    },
  ];

  return (
    <section className="relative xl:min-h-screen bg-black py-20 px-6 sm:px-10 md:px-20 xl:px-40 overflow-hidden">
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

      {/* Header */}
      <div className="relative z-10 text-white text-right">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold"
        >
          Contact <span className="text-violet-600">Me</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose text-gray-300"
        >
          I’m always open to new opportunities, collaborations, or simply a
          friendly conversation about technology and innovation. If you’d like
          to discuss a project, ask a question, or explore how we can work
          together, feel free to reach out.
        </motion.p>
      </div>

      {/* Contact Cards */}
      <div className="relative z-10 mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {contactItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="group p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.2 }}
                className="p-3 rounded-full bg-violet-600/10"
              >
                {item.icon}
              </motion.div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              {item.link ? (
                <p className="text-sm text-gray-300 hover:text-violet-400 transition-colors duration-300">
                  {item.text}
                </p>
              ) : (
                <p className="text-sm text-gray-300">{item.text}</p>
              )}
            </div>
          </motion.a>
        ))}
      </div>

      {/* Optional footer call-to-action */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="relative z-10 text-center mt-16"
      >
        <a
          href="mailto:yenathweerasooriya@gmail.com"
          className="inline-block bg-violet-600 text-white px-8 py-3 rounded-full font-medium hover:bg-violet-700 transition duration-300"
        >
          Send a Message
        </a>
      </motion.div>
    </section>
  );
}
