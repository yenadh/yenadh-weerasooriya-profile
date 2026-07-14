"use client";

import { useEffect } from "react";
import { useApp } from "@/context/AppContext";

const FAVICONS = {
  dark: "/brand/favicon-dark.svg",
  light: "/brand/favicon-light.svg",
};

const THEME_COLORS = {
  dark: "#050807",
  light: "#f3faf4",
};

function upsertLink(rel, href, attrs = {}) {
  let link = document.querySelector(`link[data-theme-brand="${rel}"]`);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("data-theme-brand", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("rel", rel === "apple" ? "apple-touch-icon" : "icon");
  if (rel === "icon") link.setAttribute("type", "image/svg+xml");
  link.setAttribute("href", href);
  Object.entries(attrs).forEach(([k, v]) => link.setAttribute(k, v));
}

function upsertMeta(name, content) {
  let meta = document.querySelector(`meta[data-theme-brand="${name}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("data-theme-brand", name);
    meta.setAttribute("name", name);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

function upsertOgImage(href) {
  // Keep crawler default intact; update for in-browser link previews when possible
  let meta = document.querySelector('meta[property="og:image"][data-theme-brand="og"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", "og:image");
    meta.setAttribute("data-theme-brand", "og");
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", href);

  let tw = document.querySelector('meta[name="twitter:image"][data-theme-brand="twitter"]');
  if (!tw) {
    tw = document.createElement("meta");
    tw.setAttribute("name", "twitter:image");
    tw.setAttribute("data-theme-brand", "twitter");
    document.head.appendChild(tw);
  }
  tw.setAttribute("content", href);
}

export default function ThemeBrand() {
  const { theme, ready } = useApp();

  useEffect(() => {
    if (!ready) return;
    const mode = theme === "light" ? "light" : "dark";
    const favicon = FAVICONS[mode];
    const og = mode === "light" ? "/brand/og-light.png" : "/brand/og-dark.png";

    upsertLink("icon", favicon);
    upsertLink("apple", favicon);
    upsertMeta("theme-color", THEME_COLORS[mode]);
    upsertMeta("msapplication-TileColor", THEME_COLORS[mode]);
    upsertOgImage(
      `${window.location.origin}${og}`
    );

    document.documentElement.style.colorScheme = mode;
  }, [theme, ready]);

  return null;
}
