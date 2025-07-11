import AboutMe from "./components/aboutMe/AboutMe";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Projects from "./components/project/Projects";
import Skills from "./components/skills/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Footer />
    </>
  );
}
