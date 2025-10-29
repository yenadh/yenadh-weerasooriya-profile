import Navbar from "@/components/Navbar";
import "./globals.css";
import { Righteous } from "next/font/google";
import Footer from "@/components/Footer";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Yenadh Weerasooriya",
  description:
    "I’m a Software Engineer passionate about building clean, efficient, and user-focused applications. I love turning ideas into scalable digital solutions that balance creativity and performance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${righteous.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
