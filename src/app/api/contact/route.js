import { NextResponse } from "next/server";
import { connectDB } from "@/libs/mongodb";
import ContactMessage from "@/models/ContactMessage";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req) {
  try {
    const body = await req.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const subject = String(body.subject || "").trim();
    const message = String(body.message || "").trim();
    const honeypot = String(body.company || "").trim();

    if (honeypot) {
      return NextResponse.json({ message: "OK" }, { status: 200 });
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { message: "Please provide a valid email." },
        { status: 400 }
      );
    }

    if (
      name.length > 120 ||
      email.length > 200 ||
      subject.length > 200 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { message: "One or more fields are too long." },
        { status: 400 }
      );
    }

    await connectDB();

    await ContactMessage.create({ name, email, subject, message });

    // Optional email notify via FormSubmit if CONTACT_NOTIFY_EMAIL is set
    const notifyTo =
      process.env.CONTACT_NOTIFY_EMAIL || "yenathweerasooriya@gmail.com";
    try {
      await fetch(`https://formsubmit.co/ajax/${notifyTo}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          _subject: `[Portfolio] ${subject}`,
          message,
          _template: "table",
        }),
      });
    } catch {
      /* DB save is the source of truth */
    }

    return NextResponse.json(
      { message: "Message received successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { message: "Failed to send message.", error: error.message },
      { status: 500 }
    );
  }
}
