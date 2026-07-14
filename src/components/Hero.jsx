"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import Tilt3D from "@/components/Tilt3D";
import WireCube3D from "@/components/WireCube3D";

export default function Hero() {
  const { t } = useApp();

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv/Software-Engineer-Yenadh-Weerasooriya.pdf";
    link.download = "Software-Engineer-Yenadh-Weerasooriya.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="section-shell relative min-h-screen flex items-center overflow-hidden py-28 px-5 sm:px-10 md:px-20 xl:px-40">
      <WireCube3D className="top-[18%] end-[8%] hidden lg:block" />
      <WireCube3D className="bottom-[22%] start-[6%] hidden md:block scale-75 opacity-40" />

      <div className="w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        <div className="w-full lg:w-[55%]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[var(--neon)] text-sm sm:text-base tracking-[0.25em] uppercase"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            {t.hero.role}
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 h-px w-24 origin-start bg-[var(--neon)]"
            style={{ boxShadow: "0 0 12px var(--neon-glow)" }}
          />

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight heading-fg"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            {t.hero.nameFirst}
            <br />
            <span className="neon-text">{t.hero.nameLast}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="mt-5 max-w-xl text-[var(--muted)] text-base sm:text-lg leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button onClick={handleDownloadCV} className="neon-btn w-full sm:w-auto">
              <span>{t.hero.downloadCv}</span>
              <Download className="w-4 h-4" />
            </button>
            <Link
              href="/#stack"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[var(--line)] heading-fg hover:border-[var(--neon)] hover:text-[var(--neon)] transition-colors duration-300"
            >
              {t.hero.viewLab}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative w-full lg:w-[45%] flex items-center justify-center"
        >
          <div
            className="absolute w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full"
            style={{
              background:
                "radial-gradient(circle, var(--neon-glow) 0%, transparent 70%)",
              filter: "blur(28px)",
            }}
          />

          <Tilt3D
            className="float-soft relative w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80"
            maxTilt={16}
          >
            <div className="holo-frame w-full h-full neon-border p-1">
              <span className="holo-frame__ring" aria-hidden="true" />
              <span className="holo-frame__corner holo-frame__corner--tl" />
              <span className="holo-frame__corner holo-frame__corner--tr" />
              <span className="holo-frame__corner holo-frame__corner--bl" />
              <span className="holo-frame__corner holo-frame__corner--br" />
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/profile-image-yenadh-dark.png"
                  alt={t.hero.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 240px, 320px"
                  className="object-cover"
                />
              </div>
              <span className="absolute -top-px start-4 end-4 h-px bg-[var(--neon)] opacity-80" />
              <span className="absolute -bottom-px start-8 end-8 h-px bg-[var(--neon)] opacity-50" />
            </div>
          </Tilt3D>
        </motion.div>
      </div>
    </section>
  );
}
