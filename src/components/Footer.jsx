"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

export default function Footer() {
  const { t } = useApp();

  const links = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/#about" },
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.lab, href: "/#lab" },
    { label: t.nav.blog, href: "/blog" },
    { label: t.nav.contact, href: "/#contact" },
  ];

  return (
    <footer
      className="relative z-10 w-full max-w-full overflow-x-hidden border-t border-[var(--line)] pt-16 pb-8"
      style={{ background: "var(--footer-bg)", color: "var(--text)" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-12 min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="min-w-0"
        >
          <Link
            href="/"
            className="text-2xl font-bold heading-fg"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            Yenadh <span className="neon-text">Weerasooriya</span>
          </Link>
          <p className="mt-4 text-[var(--muted)] leading-relaxed text-sm sm:text-base">
            {t.footer.blurb}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          viewport={{ once: true }}
          className="min-w-0"
        >
          <h3
            className="text-lg font-semibold neon-text mb-5"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            {t.footer.quickLinks}
          </h3>
          <ul className="space-y-3 text-[var(--muted)]">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-[var(--neon)] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          viewport={{ once: true }}
          className="min-w-0"
        >
          <h3
            className="text-lg font-semibold neon-text mb-5"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            {t.footer.contact}
          </h3>
          <ul className="space-y-4 text-[var(--muted)] text-sm sm:text-base">
            <li className="flex items-start gap-3">
              <Mail className="text-[var(--neon)] shrink-0 mt-0.5" size={18} />
              <a
                href="mailto:yenathweerasooriya@gmail.com"
                className="break-all hover:text-[var(--neon)] transition-colors"
                dir="ltr"
              >
                yenathweerasooriya@gmail.com
              </a>
            </li>
          </ul>

          <div className="flex gap-4 mt-6">
            <a
              href="https://www.linkedin.com/in/yenath-weerasooriya-0b93a8351/"
              className="text-[var(--muted)] hover:text-[var(--neon)] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://github.com/yenadh/"
              className="text-[var(--muted)] hover:text-[var(--neon)] transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="mt-12 border-t border-[var(--line)] pt-6 text-center text-[var(--muted)] text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-[var(--neon)] font-semibold">
          Yenadh Weerasooriya
        </span>
        . {t.footer.rights}
      </div>
    </footer>
  );
}
