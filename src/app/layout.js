import Providers from "@/components/Providers";
import JsonLd from "@/components/JsonLd";
import "./globals.css";
import { Orbitron, Space_Grotesk, Cairo } from "next/font/google";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://yenadh-weerasooriya-profile.vercel.app";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yenadh Weerasooriya | Software Engineer",
    template: "%s | Yenadh Weerasooriya",
  },
  description:
    "Software Engineer building clean, efficient web and mobile apps with React, Next.js, Node.js, and .NET. Portfolio, case studies, and engineering notes.",
  keywords: [
    "Yenadh Weerasooriya",
    "Software Engineer",
    "Full-stack Developer",
    "React",
    "Next.js",
    ".NET",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Yenadh Weerasooriya" }],
  creator: "Yenadh Weerasooriya",
  icons: {
    icon: [
      {
        url: "/brand/favicon-dark.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/brand/favicon-light.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      { url: "/brand/favicon-dark.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/brand/favicon-dark.svg" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_AE"],
    url: siteUrl,
    siteName: "Yenadh Weerasooriya",
    title: "Yenadh Weerasooriya | Software Engineer",
    description:
      "Full-stack Software Engineer — React, Next.js, Node.js, and .NET. Clean products, sharp performance.",
    images: [
      {
        url: "/brand/og-dark.png",
        width: 1200,
        height: 630,
        alt: "Yenadh Weerasooriya — Software Engineer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yenadh Weerasooriya | Software Engineer",
    description:
      "Full-stack Software Engineer — React, Next.js, Node.js, and .NET.",
    images: ["/brand/og-dark.png"],
  },
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050807" },
    { media: "(prefers-color-scheme: light)", color: "#f3faf4" },
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

const themeInitScript = `
(function(){
  try {
    var t = localStorage.getItem('theme');
    var l = localStorage.getItem('locale');
    var root = document.documentElement;
    var isLight = t === 'light';
    if (isLight) { root.classList.add('light'); } else { root.classList.add('dark'); }
    root.style.colorScheme = isLight ? 'light' : 'dark';
    if (l === 'ar') { root.lang = 'ar'; root.dir = 'rtl'; }
    else { root.lang = 'en'; root.dir = 'ltr'; }

    var fav = isLight ? '/brand/favicon-light.svg' : '/brand/favicon-dark.svg';
    var color = isLight ? '#f3faf4' : '#050807';

    var icon = document.createElement('link');
    icon.rel = 'icon';
    icon.type = 'image/svg+xml';
    icon.href = fav;
    icon.setAttribute('data-theme-brand', 'icon');
    document.head.appendChild(icon);

    var apple = document.createElement('link');
    apple.rel = 'apple-touch-icon';
    apple.href = fav;
    apple.setAttribute('data-theme-brand', 'apple');
    document.head.appendChild(apple);

    var metaColor = document.createElement('meta');
    metaColor.name = 'theme-color';
    metaColor.content = color;
    metaColor.setAttribute('data-theme-brand', 'theme-color');
    document.head.appendChild(metaColor);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <JsonLd />
      </head>
      <body
        className={`${orbitron.variable} ${spaceGrotesk.variable} ${cairo.variable} antialiased`}
        style={{
          fontFamily:
            "var(--font-body), var(--font-arabic), system-ui, sans-serif",
        }}
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
