"use client";

import ThemeBrand from "@/components/ThemeBrand";
import AmbientBackground from "@/components/AmbientBackground";
import CursorGlow from "@/components/CursorGlow";
import ChatBot from "@/components/ChatBot";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AppProvider } from "@/context/AppContext";

export default function Providers({ children }) {
  return (
    <AppProvider>
      <ThemeBrand />
      <AmbientBackground />
      <CursorGlow />
      <div className="relative z-10 min-h-screen w-full max-w-full overflow-x-hidden flex flex-col">
        <Navbar />
        <main className="flex-1 w-full max-w-full min-w-0 overflow-x-hidden">{children}</main>
        <Footer />
      </div>
      <ChatBot />
    </AppProvider>
  );
}
