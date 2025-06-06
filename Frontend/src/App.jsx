import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Experience from "./components/Experience"
import Testing from "./components/Testing"
import Certification from "./components/Certification"
import Counting from "./HelpingComponent/Counting"
import Home from "./Home/Home"
import Experiment from "./components/Experiment"
import PulseAnimation from "./Animation/PulseAnimation"
function App() {

  return (
    <>
    <PulseAnimation/>
      {/* <Experiment/> */}
      <Home/>
    </>
  )
}

export default App
