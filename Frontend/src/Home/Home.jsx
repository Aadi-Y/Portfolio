import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Testing from "../components/Testing";
import Certification from "../components/Certification";
import Counting from "../HelpingComponent/Counting";
import { useRef } from "react";

function Home() {
  const aboutRef = useRef();
  const skillRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();

  function onScrollTo(section) {
    const sectionMap = {
      about: aboutRef,
      skills: skillRef,
      projects: projectRef,
      contact: contactRef,
    };
    sectionMap[section]?.current?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <Navbar onScrollTo={onScrollTo} />

      <Main />

      <Counting />

      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={projectRef}>
        <Projects />
      </div>

      <Experience />

      <div ref={skillRef}>
        <Skills />
      </div>

      <Certification />

      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default Home;
