"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, Trash2 } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { SUGGESTIONS } from "@/data/chatKnowledge";

export default function ChatBot() {
  const { t, locale, isRtl } = useApp();
  const c = t.chat;
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const listRef = useRef(null);
  const inputRef = useRef(null);
  const scrollYRef = useRef(0);

  const suggestions = SUGGESTIONS[locale] || SUGGESTIONS.en;

  useEffect(() => {
    if (!open) return;
    if (messages.length === 0) {
      setMessages([{ role: "assistant", content: c.welcome }]);
    }
    const id = requestAnimationFrame(() => inputRef.current?.focus());
    return () => cancelAnimationFrame(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Lock background scroll while chat is open (esp. iOS mobile)
  useEffect(() => {
    if (!open) return;

    scrollYRef.current = window.scrollY || window.pageYOffset || 0;
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
    body.style.top = `-${scrollYRef.current}px`;
    body.style.width = "100%";
    body.classList.add("chatbot-open");

    return () => {
      body.style.overflow = prev.overflow;
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.width = prev.width;
      documentElement.style.overflow = prev.htmlOverflow;
      body.classList.remove("chatbot-open");
      window.scrollTo(0, scrollYRef.current);
    };
  }, [open]);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, loading, open]);

  const sendMessage = async (text) => {
    const message = String(text || "").trim();
    if (!message || loading) return;

    const nextHistory = [...messages, { role: "user", content: message }];
    setMessages(nextHistory);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          locale,
          history: nextHistory
            .filter((m) => m.role === "user" || m.role === "assistant")
            .slice(-8)
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.message || "failed");

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || c.error },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: c.error },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const clearChat = () => {
    setMessages([{ role: "assistant", content: c.welcome }]);
  };

  return (
    <div className={`chatbot ${isRtl ? "chatbot--rtl" : ""} ${open ? "is-open" : ""}`}>
      <AnimatePresence>
        {open && (
          <motion.button
            type="button"
            className="chatbot__backdrop"
            aria-label={c.close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            className="chatbot__panel"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.22 }}
            role="dialog"
            aria-modal="true"
            aria-label={c.title}
          >
            <div className="chatbot__header">
              <div className="flex items-center gap-3 min-w-0">
                <span className="chatbot__avatar">
                  <Sparkles size={16} />
                </span>
                <div className="min-w-0">
                  <p
                    className="heading-fg text-sm font-semibold truncate"
                    style={{ fontFamily: "var(--font-display), sans-serif" }}
                  >
                    {c.title}
                  </p>
                  <p className="text-[11px] text-[var(--muted)] truncate">
                    {c.subtitle}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  className="icon-btn"
                  onClick={clearChat}
                  aria-label={c.clear}
                  title={c.clear}
                >
                  <Trash2 size={14} />
                </button>
                <button
                  type="button"
                  className="icon-btn"
                  onClick={() => setOpen(false)}
                  aria-label={c.close}
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            <div ref={listRef} className="chatbot__messages">
              {messages.map((m, i) => (
                <div
                  key={`${m.role}-${i}`}
                  className={`chatbot__bubble chatbot__bubble--${m.role}`}
                >
                  {m.content}
                </div>
              ))}
              {loading && (
                <div className="chatbot__bubble chatbot__bubble--assistant chatbot__typing">
                  {c.thinking}
                </div>
              )}
            </div>

            {messages.length <= 2 && (
              <div className="chatbot__suggestions">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className="chatbot__chip"
                    onClick={() => sendMessage(s)}
                    disabled={loading}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <form onSubmit={onSubmit} className="chatbot__form">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={c.placeholder}
                maxLength={500}
                disabled={loading}
                className="chatbot__input"
              />
              <button
                type="submit"
                className="chatbot__send"
                disabled={loading || !input.trim()}
                aria-label={c.send}
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        className="chatbot__fab"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? c.close : c.open}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>
    </div>
  );
}
