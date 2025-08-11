import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Experience from "./components/Experience";
import Testing from "./components/Testing";
import Certification from "./components/Certification";
import Counting from "./HelpingComponent/Counting";
import Home from "./Home/Home";
import Experiment from "./components/Experiment";
import PulseAnimation from "./Animation/PulseAnimation";
import LeafAnimation from "./Animation/LeafAnimation";
function App() {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        {/* Background animation absolutely positioned */}
        <LeafAnimation className="absolute inset-0 -z-10 pointer-events-none" />

        {/* Foreground content — no relative here */}
        <Home />
      </div>
    </>
  );
}

export default App;
