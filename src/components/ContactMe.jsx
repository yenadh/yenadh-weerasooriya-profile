"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useApp } from "@/context/AppContext";
import Tilt3D from "@/components/Tilt3D";

const initial = { name: "", email: "", subject: "", message: "", company: "" };

export default function Contact() {
  const { t } = useApp();
  const c = t.contact;
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle");

  const contactItems = [
    {
      icon: Mail,
      title: c.items.email,
      text: "yenathweerasooriya@gmail.com",
      link: "mailto:yenathweerasooriya@gmail.com",
    },
    {
      icon: Linkedin,
      title: c.items.linkedin,
      text: "Yenadh Weerasooriya",
      link: "https://www.linkedin.com/in/yenath-weerasooriya-0b93a8351/",
    },
    {
      icon: Github,
      title: c.items.github,
      text: "github.com/yenadh/",
      link: "https://github.com/yenadh/",
    },
  ];

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setForm(initial);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section-shell relative py-20 px-6 sm:px-10 md:px-20 xl:px-40">
      <div className="heading-fg max-w-3xl ms-auto text-end">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-[var(--neon)] text-sm tracking-[0.2em] uppercase mb-3"
          style={{ fontFamily: "var(--font-display), sans-serif" }}
        >
          {c.eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold"
          style={{ fontFamily: "var(--font-display), sans-serif" }}
        >
          {c.titleBefore} <span className="neon-text">{c.titleAccent}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.45 }}
          viewport={{ once: true }}
          className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-[var(--muted)]"
        >
          {c.intro}
        </motion.p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          const Wrapper = item.link ? "a" : "div";
          const linkProps = item.link
            ? {
                href: item.link,
                target: item.link.startsWith("http") ? "_blank" : undefined,
                rel: item.link.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined,
              }
            : {};

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Tilt3D maxTilt={8} scale={1.02}>
                <Wrapper
                  {...linkProps}
                  className="neon-panel flex flex-col items-center text-center gap-3 p-6 h-full hover:border-[var(--neon)] transition-colors duration-300 block"
                >
                  <div className="p-3 border border-[var(--line)] text-[var(--neon)]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold heading-fg">{item.title}</h3>
                  <p className="text-sm text-[var(--muted)] break-all">{item.text}</p>
                </Wrapper>
              </Tilt3D>
            </motion.div>
          );
        })}
      </div>

      <Tilt3D maxTilt={6} scale={1.01} glare={false}>
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          viewport={{ once: true }}
          className="neon-panel mt-14 p-6 sm:p-8 grid gap-5 sm:grid-cols-2"
        >
        {/* Honeypot */}
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={onChange}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <label className="flex flex-col gap-2 text-sm">
          <span className="text-[var(--muted)]">{c.form.name}</span>
          <input
            required
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder={c.form.namePh}
            className="bg-transparent border border-[var(--line)] px-4 py-3 text-[var(--text)] outline-none focus:border-[var(--neon)] transition-colors"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm">
          <span className="text-[var(--muted)]">{c.form.email}</span>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder={c.form.emailPh}
            dir="ltr"
            className="bg-transparent border border-[var(--line)] px-4 py-3 text-[var(--text)] outline-none focus:border-[var(--neon)] transition-colors"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm sm:col-span-2">
          <span className="text-[var(--muted)]">{c.form.subject}</span>
          <input
            required
            name="subject"
            value={form.subject}
            onChange={onChange}
            placeholder={c.form.subjectPh}
            className="bg-transparent border border-[var(--line)] px-4 py-3 text-[var(--text)] outline-none focus:border-[var(--neon)] transition-colors"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm sm:col-span-2">
          <span className="text-[var(--muted)]">{c.form.message}</span>
          <textarea
            required
            name="message"
            rows={5}
            value={form.message}
            onChange={onChange}
            placeholder={c.form.messagePh}
            className="bg-transparent border border-[var(--line)] px-4 py-3 text-[var(--text)] outline-none focus:border-[var(--neon)] transition-colors resize-y min-h-[120px]"
          />
        </label>

        <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4">
          <button
            type="submit"
            disabled={status === "sending"}
            className="neon-btn inline-flex disabled:opacity-60"
          >
            {status === "sending" ? c.sending : c.send}
            <Send className="w-4 h-4" />
          </button>
          {status === "success" && (
            <p className="text-sm text-[var(--neon)]">{c.success}</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400">{c.error}</p>
          )}
        </div>
        </motion.form>
      </Tilt3D>
    </section>
  );
}
