"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { translations } from "@/i18n/translations";

const AppContext = createContext(null);

function readStored(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

export function AppProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [locale, setLocale] = useState("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const storedTheme = readStored("theme", "dark");
    const storedLocale = readStored("locale", "en");
    setTheme(storedTheme === "light" ? "light" : "dark");
    setLocale(storedLocale === "ar" ? "ar" : "en");
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
    root.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme, ready]);

  useEffect(() => {
    if (!ready) return;
    const root = document.documentElement;
    root.lang = locale;
    root.dir = locale === "ar" ? "rtl" : "ltr";
    document.body.style.fontFamily =
      locale === "ar"
        ? "var(--font-arabic), var(--font-body), system-ui, sans-serif"
        : "var(--font-body), var(--font-arabic), system-ui, sans-serif";
    try {
      localStorage.setItem("locale", locale);
    } catch {
      /* ignore */
    }
  }, [locale, ready]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale((l) => (l === "en" ? "ar" : "en"));
  }, []);

  const t = useMemo(() => translations[locale] || translations.en, [locale]);

  const value = useMemo(
    () => ({
      theme,
      locale,
      isRtl: locale === "ar",
      t,
      toggleTheme,
      toggleLocale,
      setTheme,
      setLocale,
      ready,
    }),
    [theme, locale, t, toggleTheme, toggleLocale, ready]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useApp must be used within AppProvider");
  }
  return ctx;
}
