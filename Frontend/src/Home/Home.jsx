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

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Counting />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Certification />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
