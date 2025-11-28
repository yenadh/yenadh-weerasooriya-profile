"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/#about" },
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact Me", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  // Hide navbar on scroll down

  // Disable background scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  return (
    <motion.nav
      className="fixed w-full z-50 bg-transparent/60 backdrop-blur-md shadow-sm"
      initial={{ y: 0 }}
      animate={{ y: isAtTop ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="px-5 sm:px-10 md:px-20 xl:px-40 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-white">
          KSY <span className="text-violet-600">Weerasooriya</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="hover:text-violet-600 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-[#F5EEDD]">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="fixed min-h-screen inset-0 z-50 bg-black/90 backdrop-blur-md flex justify-end"
          >
            <motion.ul
              className="w-64 h-full bg-violet-950 text-[#F5EEDD] px-6 py-10 space-y-6 text-center text-lg font-medium shadow-2xl relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1 }}
            >
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-5 right-5 text-[#F5EEDD] hover:text-violet-500 text-2xl"
              >
                ✕
              </button>

              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block hover:text-violet-400 transition"
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
