import AboutMe from "@/components/AboutMe";
import Contact from "@/components/ContactMe";
import ExperienceAndEducation from "@/components/ExperienceAndEducation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <search id="#">
        <Hero />
      </search>
      <section id="about">
        <AboutMe />
        <ExperienceAndEducation />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
