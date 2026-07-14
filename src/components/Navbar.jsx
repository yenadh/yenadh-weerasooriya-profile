"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

const Navbar = () => {
  const { t, theme, locale, toggleTheme, toggleLocale, isRtl } = useApp();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/#about" },
    { name: t.nav.services, href: "/#services" },
    { name: t.nav.lab, href: "/#lab" },
    { name: t.nav.blog, href: "/blog" },
    { name: t.nav.contact, href: "/#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY || 0;
    const { body, documentElement } = document;
    const prev = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      htmlOverflow: documentElement.style.overflow,
    };

    body.style.overflow = "hidden";
    documentElement.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";

    return () => {
      body.style.overflow = prev.overflow;
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.width = prev.width;
      documentElement.style.overflow = prev.htmlOverflow;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  const controls = (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={toggleLocale}
        className="lang-btn"
        aria-label={locale === "en" ? t.lang.switchTo : t.lang.switchToEn}
      >
        {locale === "en" ? "ع" : "EN"}
      </button>
      <button
        type="button"
        onClick={toggleTheme}
        className="icon-btn"
        aria-label={theme === "dark" ? t.theme.toLight : t.theme.toDark}
      >
        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    </div>
  );

  return (
    <>
      <motion.nav
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? "border-b border-[var(--line)]" : ""
        }`}
        style={
          scrolled
            ? { background: "var(--nav-bg)", backdropFilter: "blur(10px)" }
            : { background: "transparent" }
        }
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="px-4 sm:px-10 md:px-20 xl:px-40 py-4 flex items-center justify-between gap-2 sm:gap-4 min-w-0">
          <Link
            href="/"
            className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide heading-fg min-w-0 truncate"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
            onClick={() => setOpen(false)}
          >
            KSY <span className="neon-text">Weerasooriya</span>
          </Link>

          <ul className="hidden lg:flex items-center space-x-6 rtl:space-x-reverse text-sm text-[var(--text)] font-medium tracking-wide opacity-90">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-[var(--neon)] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex">{controls}</div>

          <div className="flex lg:hidden items-center gap-2 shrink-0">
            {controls}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="icon-btn"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <div className="mobile-nav lg:hidden" role="dialog" aria-modal="true">
            <motion.button
              type="button"
              className="mobile-nav__backdrop"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.aside
              className={`mobile-nav__drawer ${isRtl ? "mobile-nav__drawer--rtl" : ""}`}
              initial={{ x: isRtl ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: isRtl ? "-100%" : "100%" }}
              transition={{ type: "tween", duration: 0.28 }}
            >
              <div className="mobile-nav__top">
                <p
                  className="text-sm tracking-[0.2em] uppercase text-[var(--neon)]"
                  style={{ fontFamily: "var(--font-display), sans-serif" }}
                >
                  // Menu
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="icon-btn"
                  aria-label="Close menu"
                >
                  <X size={16} />
                </button>
              </div>

              <ul className="mobile-nav__links">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: isRtl ? -12 : 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + index * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      className="mobile-nav__link"
                      onClick={() => setOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mobile-nav__footer">
                <p className="text-xs text-[var(--muted)]">KSY Weerasooriya</p>
                <p className="text-xs text-[var(--neon)] mt-1">Software Engineer</p>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
