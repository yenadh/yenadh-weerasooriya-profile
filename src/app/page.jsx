import AboutMe from "@/components/AboutMe";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/ContactMe";
import ExperienceAndEducation from "@/components/ExperienceAndEducation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SignalLab from "@/components/SignalLab";
import StackExplorer from "@/components/StackExplorer";

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <AboutMe />
        <ExperienceAndEducation />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="stack">
        <StackExplorer />
      </section>
      <section id="lab">
        <SignalLab />
      </section>
      <section id="notes">
        <BlogPreview />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
