import Profile from "../assets/images/Aadi-Profile-1.png";
import Typed from "typed.js";

import { Link } from "react-router-dom";

//Icons
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";
import Typing from "../HelpingComponent/Typing";
import Counting from "../HelpingComponent/Sample";

function Main() {
  return (
    <>
      <section className="h-auto w-[100vw] flex bg-black md:pt-10 md:pb-20">
        <section className="xl:w-[70%] lg:w-[85%] md:w-[95%] w-[97%] pt-50 mx-auto h-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-2">
          <section className="w-[100%] sm:w-[60%] flex items-center justify-center md:justify-start">
            <div className="xl:h-110 xl:w-110  lg:h-105 lg:w-105 md:w-85 md:h-85 w-80 h-80 bg-gradient-to-t from-[#FD6F00] to-[#E46400] rounded-full  flex items-center justify-between border-black shadow-lg shadow-amber-500">
              <div className="xl:h-105 xl:w-105 lg:h-100 lg:w-100 md:w-80 md:h-80 w-75 h-75 bg-black rounded-full  m-auto flex items-center">
                <div className="xl:h-100 xl:w-100 lg:h-95 lg:w-95 md:w-75 md:h-75 w-70 h-70 border rounded-full backdrop-blur-4xl bg-white/10 border-white/15 relative flex items-center justify-start m-auto">
                  <img
                    src={Profile}
                    alt=""
                    className="absolute md:bottom-10 md:left-5 md:h-90 w-65 h-85  bottom-10 left-3 lg:bottom-10 lg:h-110 lg:w-80 xl:h-120 xl:w-85 lg:left-8"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="md:w-[50%] flex flex-col lg:gap-3 gap-1 items-center justify-center text-center md:text-left md:items-start">
            <div className="flex flex-col lg:gap-2">
              <h1 className="xl:text-4xl text-2xl md:text-3xl text-white font-bold">
                Hi I am,
              </h1>
              <h1 className="xl:text-4xl text-2xl md:text-3xl text-white font-bold">
                Aadithya.Y
              </h1>
            </div>

            {/* <h2 className="text-5xl bg-gradient-to-r from-[#FD6F00] to-[#E46400] text-transparent bg-clip-text font-bold"><span className="auto-typed">Web Developer</span></h2> */}
            <div className="w-[100%] flex border-white items-center justify-center md:items-start md:justify-start">
              <Typing />
            </div>

            <div className="md:w-[50%] w-[90%]">
              <nav>
                <ul className="flex items-center justify-between pb-3">
                  <li className="bg-[#2A2828] rounded-full p-2 hover:scale-110 transition-all duration-500">
                    <Link to="https://www.linkedin.com/in/aadithya-y/">
                      <FaLinkedinIn className="text-2xl cursor-pointer text-white" />
                    </Link>
                  </li>
                  <li className="bg-[#2A2828] rounded-full p-2 hover:scale-110 transition-all duration-500">
                    <Link to="https://github.com/Aadi-Y">
                      <FaGithub className="text-2xl cursor-pointer text-white" />
                    </Link>
                  </li>
                  <li className="bg-[#2A2828] rounded-full p-2 hover:scale-110 transition-all duration-500">
                    <Link to="https://leetcode.com/u/Coder_Aadi_Y/">
                      <SiLeetcode className="text-2xl cursor-pointer text-white" />
                    </Link>
                  </li>
                  <li className="bg-[#2A2828] rounded-full p-2 hover:scale-110 transition-all duration-500">
                    <BiLogoGmail className="text-2xl cursor-pointer text-white" />
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center justify-between md:w-[67%] lg:w-[60%] w-[100%] gap-3">
              <div>
                {/* <button className="py-3 px-9 rounded-2xl font-bold cursor-pointer text-white bg-amber-500 hover:scale-115 transition-all duration-500">
                  Connect
                </button> */}
                <button className="py-3 px-9 rounded-2xl font-bold cursor-pointer text-white bg-gradient-to-r from-[#FD6F00] to-[#E46400] hover:scale-115 transition-all duration-500">
                  Connect
                </button>
              </div>
              <div>
                <button className="py-3 px-9 rounded-2xl font-bold cursor-pointer text-white bg-gradient-to-r from-[#FD6F00] to-[#E46400] hover:scale-115 transition-all duration-500">
                  <Link to="https://drive.google.com/file/d/1V7pM0x9CASBE7aZAkuZjJnnCM9Nui3Mj/view?usp=sharing">Resume</Link>
                </button>
              </div>
            </div>
            {/* <div>
              <Counting/>
            </div> */}
          </section>
        </section>
      </section>
    </>
  );
}

export default Main;
