"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-12 z-10">
        {/* Logo & Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <a href="#" className="text-2xl font-bold text-white">
            Yenadh <span className="text-violet-600">Weerasooriya</span>
          </a>
          <p className="text-gray-300 leading-relaxed">
            I’m a Software Engineer passionate about building clean, efficient,
            and user-focused applications.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-violet-600 mb-5">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <Link href="/" className="hover:text-violet-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-violet-600 transition">
                About Me
              </Link>
            </li>
            <li>
              <Link
                href="/#projects"
                className="hover:text-violet-600 transition"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="hover:text-violet-600 transition"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-violet-600 mb-5">
            Contact Us
          </h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start space-x-3">
              <MapPin className="text-violet-600" size={20} />
              <span>Al Rigga, Dubai, UAE</span>
            </li>
            <li className="flex items-start space-x-3">
              <Phone className="text-violet-600" size={20} />
              <span>+971 56 736 4131</span>
            </li>
            <li className="flex items-start space-x-3">
              <Mail className="text-violet-600" size={20} />
              <span>yenathweerasooriya@gmail.com</span>
            </li>
          </ul>

          {/* Social Media */}
          <div className="flex space-x-4 mt-6">
            <a
              href="https://www.linkedin.com/in/yenath-weerasooriya-0b93a8351/"
              className="hover:text-violet-600 transition"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://github.com/yenadh/"
              className="hover:text-violet-600 transition"
            >
              <Github size={22} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm z-10 relative">
        © {new Date().getFullYear()}{" "}
        <span className="text-violet-600 font-semibold">
          Yenadh Weerasooriya
        </span>
        . All rights reserved. | Designed by{" "}
        <span className="text-violet-600 font-medium">Yenadh Weerasooriya</span>
      </div>
    </footer>
  );
}
