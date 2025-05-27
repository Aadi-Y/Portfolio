import Html from "../assets/images/html.png";
import Css from "../assets/images/css.png";
import Tailwind from "../assets/images/tailwind.png";
import JavaScript from "../assets/images/js.png";
import Reactjs from "../assets/images/react.png";
import Nextjs from "../assets/images/nextjs.png";
import Nodejs from "../assets/images/node.png";
import Express from "../assets/images/express.png";
import MongoDB from "../assets/images/mongodb.png";
import Github from "../assets/images/github.png";
import VsCode from "../assets/images/vscode.png";
import CProgramming from "../assets/images/cProgram.png";
import Java from "../assets/images/java.png";
import Python from "../assets/images/python.png";

import { IoLogoHtml5 } from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaSquareJs } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";

function Skills() {
  return (
    <>
      <section className="h-auto w-[100vw] bg-[#000000] flex justify-between flex-col">
        <section className="xl:w-[70%] lg:w-[85%] w-[95%] m-auto">
           <section className="w-[100%] m-auto">
          <div className="border-amber-500 flex p-2 w-30 rounded-md mb-5 bg-[#2A2828]">
            <div className="w-1 bg-amber-500 mr-2"></div>
            <h1 className="text-white font-medium">My Skills</h1>
          </div>
        </section>
        <section className="w-[95%] md:mx-auto ml-3 md:ml-0 grid grid-cols-2 md:grid-cols-[repeat(auto-fit,_minmax(155px,_1fr))] md:gap-8 gap-4 pb-20 text-[0.9rem]">
          <div className="border-2 border-amber-500 w-auto h-45 flex flex-col gap-3 font-bold items-center justify-center rounded-xl bg-[#2A2828] text-white hover:scale-105 md:hover:scale-110 transition-all duration-500 cursor-pointer shadow-2xl ">
            {/* <img src={Html} alt="" className="h-20 w-20" /> */}
            <div className="border h-20 w-20 flex items-center justify-center rounded-2xl border-amber-500">
              <IoLogoHtml5 className="text-5xl cursor-pointer text-amber-600" />
            </div>
            <h2 className="text-[1.1rem] md:text-[1.2rem]  font-semibold">HTML</h2>
          </div>

          <div className="border-2 border-amber-500 w-auto h-45 flex flex-col gap-2 font-bold items-center justify-center rounded-xl bg-[#2A2828] text-white hover:scale-105 md:hover:scale-110 transition-all duration-500 cursor-pointer shadow-2xl">
            <div className="border h-20 w-20 flex items-center justify-center rounded-2xl border-amber-500">
              <SiCss3 className="text-5xl cursor-pointer text-amber-600" />
            </div>
            <h2 className="text-[1.1rem] md:text-[1.2rem]  font-semibold">CSS</h2>
          </div>

          <div className="border-2 border-amber-500 w-auto h-45 flex flex-col  gap-2 font-bold items-center justify-center rounded-xl bg-[#2A2828] text-white hover:scale-105 md:hover:scale-110 transition-all duration-500 cursor-pointer shadow-2xl">
            <div className="border h-20 w-20 flex items-center justify-center rounded-2xl border-amber-500">
              <SiTailwindcss className="text-5xl cursor-pointer text-amber-600" />
            </div>
            <h2 className="text-[1.1rem] md:text-[1.2rem]  font-semibold">Tailwind CSS</h2>
          </div>

          <div className=" border-2 border-amber-500 w-auto h-45 flex flex-col gap-2 font-bold items-center justify-center rounded-xl bg-[#2A2828] text-white hover:scale-105 md:hover:scale-110 transition-all duration-500 cursor-pointer shadow-2xl">
            <div className="border h-20 w-20 flex items-center justify-center rounded-2xl border-amber-500">
              <FaSquareJs className="text-5xl cursor-pointer text-amber-600" />
            </div>
            <h2 className="text-[1.1rem] md:text-[1.2rem]  font-semibold">Java Script</h2>
          </div>

          <div className=" border-2 border-amber-500 gap-3 w-auto h-45 flex flex-col font-bold items-center justify-center rounded-xl bg-[#2A2828] text-white hover:scale-105 md:hover:scale-110 transition-all duration-500 cursor-pointer hover:shadow-[10px 10px 10px] shadow-amber-500">
            {/* <img src={Reactjs} alt="" className="h-20 w-20" /> */}
            <div className="border h-20 w-20 flex items-center justify-center rounded-2xl border-amber-500">
              <RiReactjsFill className="text-5xl cursor-pointer text-amber-600" />
            </div>
            <h2 className="text-[1.1rem] md:text-[1.2rem]  font-semibold">React JS</h2>
          </div>

          <div className="border-2 border-amber-500 w-auto h-45 flex flex-col gap-2 font-bold items-center justify-center rounded-xl bg-[#2A2828] text-white hover:scale-105 md:hover:scale-110 transition-all duration-500 cursor-pointer shadow-2xl">
            <div className="border h-20 w-20 flex items-center justify-center rounded-2xl border-amber-500">
              <SiNextdotjs className="text-5xl cursor-pointer text-amber-600" />
            </div>
            <h2 className="text-[1.1rem] md:text-[1.2rem]  font-semibold">Next JS</h2>
          </div>

          <div className="border-2 border-amber-500 w-auto h-45 flex flex-col gap-2 font-bold items-center justify-center rounded-xl bg-[#2A2828] text-white hover:scale-105 md:hover:scale-110 transition-all duration-500 cursor-pointer shadow-2xl">
            <div className="border h-20 w-20 flex items-center justify-center rounded-2xl border-amber-500">
              <FaNodeJs className="text-5xl cursor-pointer text-amber-600" />
            </div>
            <h2 className="text-[1.1rem] md:text-[1.2rem]  font-semibold">Node JS</h2>
          </div>

          <div className="border-2 border-amber-500 w-auto h-45 flex flex-col gap-2 font-bold items-center justify-center rounded-xl bg-[#2A2828] text-white hover:scale-105 md:hover:scale-110 transition-all duration-500 cursor-pointer shadow-2xl">
            <div className="border h-20 w-20 flex items-center justify-center rounded-2xl border-amber-500">
              <SiExpress className="text-5xl cursor-pointer text-amber-600" />
            </div>
            <h2 className="text-[1.1rem] md:text-[1.2rem]  font-semibold">Express JS</h2>
          </div>

          <div className="border-2 border-amber-500 w-auto h-45 flex flex-col gap-2 font-bold items-center justify-center rounded-xl bg-[#2A2828] text-white hover:scale-105 md:hover:scale-110 transition-all duration-500 cursor-pointer shadow-2xl">
            <div className="border h-20 w-20 flex items-center justify-center rounded-2xl border-amber-500">
              <SiMongodb className="text-5xl cursor-pointer text-amber-600" />
            </div>
            <h2 className="text-[1.1rem] md:text-[1.2rem]  font-semibold">Mongo DB</h2>
          </div>

          <div className="border-2 border-amber-500 w-auto h-45 flex flex-col gap-2 font-bold items-center justify-center rounded-xl bg-[#2A2828] text-white hover:scale-105 md:hover:scale-110 transition-all duration-500 cursor-pointer shadow-2xl">
            <div className="border h-20 w-20 flex items-center justify-center rounded-2xl border-amber-500">
              <FaJava className="text-5xl cursor-pointer text-amber-600" />
            </div>
            <h2 className="text-[1.1rem] md:text-[1.2rem]  font-semibold">Java</h2>
          </div>

          <div className="border-2 border-amber-500 w-auto h-45 flex flex-col gap-2 font-bold items-center justify-center rounded-xl bg-[#2A2828] text-white hover:scale-105 md:hover:scale-110 transition-all duration-500 cursor-pointer shadow-2xl">
            <div className="border h-20 w-20 flex items-center justify-center rounded-2xl border-amber-500">
              <FaPython className="text-5xl cursor-pointer text-amber-600" />
            </div>
            <h2 className="text-[1.1rem] md:text-[1.2rem]  font-semibold">Python</h2>
          </div>

          <div className="border-2 border-amber-500 w-auto h-45 flex flex-col gap-2 font-bold items-center justify-center rounded-xl bg-[#2A2828] text-white hover:scale-105 md:hover:scale-110 transition-all duration-500 cursor-pointer shadow-2xl">
            <div className="border h-20 w-20 flex items-center justify-center rounded-2xl border-amber-500">
              {/* <IoLogoHtml5 className="text-5xl cursor-pointer text-white" /> */}
              <p className="text-5xl cursor-pointer text-amber-600">C</p>
            </div>
            <h2 className="text-[1.1rem] md:text-[1.2rem]  font-semibold">C Programming</h2>
          </div>

          <div className="border-2 border-amber-500 w-auto h-45 flex flex-col gap-2 font-bold items-center justify-center rounded-xl bg-[#2A2828] text-white hover:scale-105 md:hover:scale-110 transition-all duration-500 cursor-pointer shadow-2xl">
            <div className="border h-20 w-20 flex items-center justify-center rounded-2xl border-amber-500">
              <VscVscode className="text-5xl cursor-pointer text-amber-600" />
            </div>
            <h2 className="text-[1.1rem] md:text-[1.2rem]  font-semibold">Visual Studio</h2>
          </div>

          <div className="border-2 border-amber-500 w-auto h-45 flex flex-col gap-2 font-bold items-center justify-center rounded-xl bg-[#2A2828] text-white hover:scale-105 md:hover:scale-110 transition-all duration-500 cursor-pointer shadow-2xl">
            <div className="border h-20 w-20 flex items-center justify-center rounded-2xl border-amber-500">
              <FaGithub className="text-5xl cursor-pointer text-amber-600" />
            </div>
            <h2 className="text-[1.1rem] md:text-[1.2rem]  font-semibold ">Github</h2>
          </div>
        </section>
        </section>
       
      </section>
    </>
  );
}

export default Skills;
