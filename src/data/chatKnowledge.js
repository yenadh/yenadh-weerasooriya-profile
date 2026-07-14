/** Portfolio knowledge used by the chat assistant (EN + AR). */

export const PROFILE_FACTS = {
  fullName: "Keshawa Sri Yenadh Weerasooriya",
  shortName: "Yenadh Weerasooriya",
  role: "Software Engineer",
  email: "yenathweerasooriya@gmail.com",
  linkedin: "https://www.linkedin.com/in/yenath-weerasooriya-0b93a8351/",
  github: "https://github.com/yenadh/",
  cvPath: "/cv/Software-Engineer-Yenadh-Weerasooriya.pdf",
};

export const SYSTEM_CONTEXT = `
You are Yenadh's portfolio assistant on yenadh-weerasooriya's website.
Answer only with information about Yenadh Weerasooriya from the facts below.
Be concise, friendly, and professional. If asked something unknown, say you don't have that detail and suggest contacting him.
Prefer English or Arabic based on the user's language.
Do not invent or share any phone number or physical street address — Yenadh does not publish those on this site.

Profile facts:
- Full name: Keshawa Sri Yenadh Weerasooriya (Yenadh)
- Role: Software Engineer
- Experience: 3+ years; 20+ projects; 6+ clients; 8+ core technologies
- Current study: MBA in Data Analytics and AI — Britts Imperial University College, Sharjah (in progress)
- Education: BEng (Hons) Software Engineering Top-up — London Metropolitan University (2023); HND in Computing — Esoft Metro Campus (2021–2022)
- Work: Software Engineer at Innovative-e Private Limited, Sri Lanka (Mar 2024 – May 2025) — full-stack React, Node.js, Laravel; performance and API reliability
- Stack: React, Next.js, React Native, Tailwind, Framer Motion, Node.js, Laravel, .NET, MySQL, MongoDB, Arduino
- Languages: JavaScript, TypeScript, PHP, Python, C#, C++
- Services: web apps, mobile apps, APIs/backends, product engineering
- Contact: yenathweerasooriya@gmail.com
- LinkedIn: https://www.linkedin.com/in/yenath-weerasooriya-0b93a8351/
- GitHub: https://github.com/yenadh/
- CV: available for download on the site
`.trim();

/**
 * Intent knowledge for local (no-API) chatbot.
 * keywords are matched against the normalized user message.
 */
export const CHAT_INTENTS = [
  {
    id: "greeting",
    keywords: ["hi", "hello", "hey", "good morning", "good evening", "hola", "مرحبا", "السلام", "اهلا", "أهلا", "هاي"],
    answer: {
      en: "Hey! I'm Yenadh's portfolio assistant. Ask me about his experience, skills, education, services, or how to contact him.",
      ar: "مرحباً! أنا مساعد محفظة ييناد. اسألني عن خبرته أو مهاراته أو تعليمه أو خدماته أو كيفية التواصل معه.",
    },
  },
  {
    id: "who",
    keywords: [
      "who are you",
      "who is",
      "about",
      "introduce",
      "profile",
      "yenadh",
      "yourself",
      "من هو",
      "عني",
      "تعريف",
      "مين",
    ],
    answer: {
      en: "Yenadh Weerasooriya is a Software Engineer. He builds full-stack web and mobile products with React, Next.js, Node.js, and .NET, and is pursuing an MBA in Data Analytics and AI.",
      ar: "ييناد ويراسووريا مهندس برمجيات. يبني منتجات ويب وجوال متكاملة باستخدام React وNext.js وNode.js و.NET، ويدرس حالياً ماجستير إدارة الأعمال في تحليل البيانات والذكاء الاصطناعي.",
    },
  },
  {
    id: "location",
    keywords: ["where", "location", "based", "live", "address", "city", "أين", "وين", "موقع", "عنوان"],
    answer: {
      en: "Yenadh does not publish a public address on this site. You can reach him by email at yenathweerasooriya@gmail.com or through the contact form.",
      ar: "ييناد لا ينشر عنواناً عاماً في هذا الموقع. يمكنك التواصل معه عبر البريد yenathweerasooriya@gmail.com أو نموذج التواصل.",
    },
  },
  {
    id: "experience",
    keywords: [
      "experience",
      "work",
      "job",
      "career",
      "company",
      "innovative",
      "employed",
      "role",
      "خبرة",
      "عمل",
      "وظيفة",
      "شركة",
    ],
    answer: {
      en: "He has 3+ years of experience. Most recently he worked as a Software Engineer at Innovative-e Private Limited in Sri Lanka (Mar 2024 – May 2025), building full-stack features with React, Node.js, and Laravel, and improving UI performance and API reliability.",
      ar: "لديه أكثر من 3 سنوات خبرة. عمل مؤخراً مهندس برمجيات في Innovative-e Private Limited في سريلانكا (مارس 2024 – مايو 2025)، حيث بنى ميزات متكاملة بـ React وNode.js وLaravel وحسّن أداء الواجهات وموثوقية واجهات البرمجة.",
    },
  },
  {
    id: "skills",
    keywords: [
      "skill",
      "tech",
      "stack",
      "framework",
      "react",
      "next",
      "node",
      ".net",
      "dotnet",
      "laravel",
      "technologies",
      "مهارات",
      "تقنيات",
      "ستاك",
      "نت",
    ],
    answer: {
      en: "Core stack: React, Next.js, React Native, Tailwind CSS, Framer Motion, Node.js, Laravel, .NET, MySQL, MongoDB, and Arduino. Languages: JavaScript, TypeScript, PHP, Python, C#, and C++.",
      ar: "المكدس الأساسي: React وNext.js وReact Native وTailwind وFramer Motion وNode.js وLaravel و.NET وMySQL وMongoDB وArduino. اللغات: JavaScript وTypeScript وPHP وPython وC# وC++.",
    },
  },
  {
    id: "education",
    keywords: [
      "education",
      "degree",
      "mba",
      "university",
      "study",
      "studied",
      "beng",
      "hnd",
      "college",
      "تعليم",
      "دراسة",
      "جامعة",
      "شهادة",
      "ماجستير",
    ],
    answer: {
      en: "Education:\n• MBA in Data Analytics and AI — Britts Imperial University College, Sharjah (in progress)\n• BEng (Hons) Software Engineering Top-up — London Metropolitan University (2023)\n• Higher National Diploma in Computing — Esoft Metro Campus (2021–2022)",
      ar: "التعليم:\n• ماجستير إدارة الأعمال في تحليل البيانات والذكاء الاصطناعي — كلية بريتز الإمبراطورية، الشارقة (جارٍ)\n• بكالوريوس هندسة البرمجيات (مع مرتبة الشرف) — جامعة لندن متروبوليتان (2023)\n• الدبلوم الوطني العالي في الحوسبة — حرم إيسوفت مترو (2021–2022)",
    },
  },
  {
    id: "services",
    keywords: [
      "service",
      "offer",
      "hire",
      "freelance",
      "build",
      "help",
      "can you",
      "what do you",
      "خدمات",
      "تقدم",
      "توظف",
      "عمل حر",
    ],
    answer: {
      en: "Yenadh offers: web applications (Next.js/React), mobile experiences (React Native), APIs & backends (Node.js, Laravel, .NET), and end-to-end product engineering — from idea to launch.",
      ar: "يقدم ييناد: تطبيقات ويب (Next.js/React)، تجارب جوال (React Native)، واجهات وخلفيات (Node.js وLaravel و.NET)، وهندسة منتج من الفكرة إلى الإطلاق.",
    },
  },
  {
    id: "projects",
    keywords: [
      "project",
      "portfolio",
      "client",
      "ahava",
      "sarasi",
      "shipped",
      "work sample",
      "مشاريع",
      "عميل",
      "أعمال",
    ],
    answer: {
      en: "He has shipped 20+ projects for 6+ clients — including brand/marketing sites and full-stack business apps. Explore the Interactive Stack and Signal Lab sections on this site for how he thinks and builds.",
      ar: "أنجز أكثر من 20 مشروعاً لأكثر من 6 عملاء — منها مواقع علامات تجارية وتطبيقات أعمال متكاملة. استكشف قسمي المكدس التفاعلي ومختبر الإشارات في الموقع لمعرفة أسلوبه في البناء.",
    },
  },
  {
    id: "contact",
    keywords: [
      "contact",
      "email",
      "reach",
      "message",
      "linkedin",
      "github",
      "phone",
      "number",
      "mobile",
      "تواصل",
      "ايميل",
      "بريد",
      "هاتف",
      "رقم",
      "راسل",
    ],
    answer: {
      en: `You can reach Yenadh at:\n• Email: ${PROFILE_FACTS.email}\n• LinkedIn: ${PROFILE_FACTS.linkedin}\n• GitHub: ${PROFILE_FACTS.github}\nOr use the contact form on this site. (No public phone number is listed.)`,
      ar: `يمكنك التواصل مع ييناد عبر:\n• البريد: ${PROFILE_FACTS.email}\n• لينكدإن: ${PROFILE_FACTS.linkedin}\n• جيت هب: ${PROFILE_FACTS.github}\nأو استخدم نموذج التواصل في الموقع. (لا يوجد رقم هاتف عام مدرج.)`,
    },
  },
  {
    id: "cv",
    keywords: ["cv", "resume", "curriculum", "download", "سيرة", "تحميل"],
    answer: {
      en: "You can download Yenadh's CV from the hero section (Download CV button), or open `/cv/Software-Engineer-Yenadh-Weerasooriya.pdf` directly.",
      ar: "يمكنك تحميل سيرة ييناد من قسم البداية (زر تحميل السيرة)، أو فتح الملف مباشرة من `/cv/Software-Engineer-Yenadh-Weerasooriya.pdf`.",
    },
  },
  {
    id: "availability",
    keywords: [
      "available",
      "open to",
      "opportunity",
      "job offer",
      "collaborate",
      "collab",
      "متاح",
      "فرصة",
      "تعاون",
    ],
    answer: {
      en: "Yes — Yenadh is open to roles, freelance builds, and collaborations. The best next step is to message him via the contact form or email yenathweerasooriya@gmail.com.",
      ar: "نعم — ييناد مفتوح للوظائف والعمل الحر والتعاون. أفضل خطوة تالية هي مراسلته عبر نموذج التواصل أو البريد yenathweerasooriya@gmail.com.",
    },
  },
  {
    id: "languages_spoken",
    keywords: ["speak", "language spoken", "english", "arabic", "sinhala", "يتكلم", "لغة", "عربي", "إنجليزي"],
    answer: {
      en: "This portfolio supports English and Arabic. For programming languages he uses JavaScript, TypeScript, PHP, Python, C#, and C++.",
      ar: "هذا الموقع يدعم الإنجليزية والعربية. أما لغات البرمجة التي يستخدمها فهي JavaScript وTypeScript وPHP وPython وC# وC++.",
    },
  },
];

export const FALLBACK = {
  en: "I don't have that specific detail yet. Try asking about Yenadh's experience, skills, education, services, or contact info — or reach him at yenathweerasooriya@gmail.com.",
  ar: "ليس لدي هذا التفصيل بعد. جرّب السؤال عن خبرة ييناد أو مهاراته أو تعليمه أو خدماته أو معلومات التواصل — أو راسله على yenathweerasooriya@gmail.com.",
};

export const SUGGESTIONS = {
  en: [
    "Who is Yenadh?",
    "What technologies does he use?",
    "Tell me about his experience",
    "How can I contact him?",
  ],
  ar: [
    "من هو ييناد؟",
    "ما التقنيات التي يستخدمها؟",
    "أخبرني عن خبرته",
    "كيف أتواصل معه؟",
  ],
};

export function detectLocale(text) {
  return /[\u0600-\u06FF]/.test(text) ? "ar" : "en";
}

export function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s.+#]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function matchIntent(message) {
  const q = normalize(message);
  if (!q) return null;

  let best = null;
  let bestScore = 0;

  for (const intent of CHAT_INTENTS) {
    let score = 0;
    for (const kw of intent.keywords) {
      const k = normalize(kw);
      if (!k) continue;
      if (q === k) score += 6;
      else if (q.includes(k)) score += 3 + Math.min(k.length / 10, 2);
      else {
        const words = k.split(" ");
        if (words.length > 1 && words.every((w) => q.includes(w))) score += 2;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      best = intent;
    }
  }

  return bestScore >= 2 ? best : null;
}

export function localReply(message, preferredLocale) {
  const locale = preferredLocale === "ar" || preferredLocale === "en"
    ? preferredLocale
    : detectLocale(message);
  const intent = matchIntent(message);
  if (!intent) {
    return { reply: FALLBACK[locale], intent: null, source: "fallback" };
  }
  return {
    reply: intent.answer[locale] || intent.answer.en,
    intent: intent.id,
    source: "knowledge",
  };
}
