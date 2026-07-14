import { NextResponse } from "next/server";
import {
  SYSTEM_CONTEXT,
  detectLocale,
  localReply,
} from "@/data/chatKnowledge";

export const runtime = "nodejs";

const MAX_MESSAGE = 500;
const MAX_HISTORY = 8;

async function llmReply(message, history, locale) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;

  const baseUrl = (process.env.OPENAI_BASE_URL || "https://api.openai.com/v1").replace(
    /\/$/,
    ""
  );
  const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

  const messages = [
    {
      role: "system",
      content: `${SYSTEM_CONTEXT}\nRespond in ${locale === "ar" ? "Arabic" : "English"}. Keep answers under 120 words unless listing education or contact details.`,
    },
    ...history.slice(-MAX_HISTORY).map((m) => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: String(m.content || "").slice(0, MAX_MESSAGE),
    })),
    { role: "user", content: message },
  ];

  const res = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      temperature: 0.4,
      max_tokens: 350,
      messages,
    }),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    console.error("Chat LLM error:", res.status, errText);
    return null;
  }

  const data = await res.json();
  const reply = data?.choices?.[0]?.message?.content?.trim();
  return reply || null;
}

export async function POST(req) {
  try {
    const body = await req.json();
    const message = String(body.message || "").trim();
    const localeHint = body.locale === "ar" ? "ar" : body.locale === "en" ? "en" : null;
    const history = Array.isArray(body.history) ? body.history : [];

    if (!message) {
      return NextResponse.json({ message: "Message is required." }, { status: 400 });
    }

    if (message.length > MAX_MESSAGE) {
      return NextResponse.json(
        { message: "Message is too long." },
        { status: 400 }
      );
    }

    const locale = localeHint || detectLocale(message);

    // Prefer LLM when configured; always fall back to local knowledge.
    let reply = null;
    let source = "knowledge";

    try {
      reply = await llmReply(message, history, locale);
      if (reply) source = "llm";
    } catch (err) {
      console.error("LLM failed, using local knowledge:", err);
    }

    if (!reply) {
      const local = localReply(message, locale);
      reply = local.reply;
      source = local.source;
    }

    return NextResponse.json({
      reply,
      source,
      locale,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { message: "Chat failed. Please try again." },
      { status: 500 }
    );
  }
}
