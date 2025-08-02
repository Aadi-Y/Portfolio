import { MdEmail } from "react-icons/md";
import { RiPhoneFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";

//Images
import logoMark from "../assets/images/logo.png";

function Footer() {
  return (
    <>
      <section className="h-[40vh] w-[100vw] bg-[#2A2828] text-white flex ">
        <section className="xl:w-[70%] lg:w-[85%] w-[97%] m-auto flex items-center justify-center flex-col">
          <div className="flex relative mb-3 mr-13 md:mr-0">
            <img src={logoMark} alt="" className="h-15" />
            <h1 className="text-3xl text-amber-500 font-bold absolute left-18 bottom-0">
              ADI
            </h1>
          </div>
          <div>
            <nav>
              <ul className="md:flex items-center justify-between gap-6 mb-5 text-[.9rem] md:text-[1rem] hidden">
                <li className="cursor-pointer hover:text-amber-500 transition-all duration-200">
                  Home
                </li>
                <li className="cursor-pointer hover:text-amber-500 transition-all duration-200">
                  About me
                </li>
                <li className="cursor-pointer hover:text-amber-500 transition-all duration-200">
                  Skills
                </li>
                <li className="cursor-pointer hover:text-amber-500 transition-all duration-200">
                  Projects
                </li>
                <li className="cursor-pointer hover:text-amber-500 transition-all duration-200">
                  Contact me
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <nav>
              <ul className="flex items-center justify-between mb-5 gap-5">
                <li className="bg-amber-500 rounded-full p-2 hover:scale-110 transition-all duration-500">
                  <Link to="https://www.linkedin.com/in/aadithya-y/">
                    <FaLinkedinIn className="text-2xl cursor-pointer text-white" />
                  </Link>
                </li>
                <li className="bg-amber-500 rounded-full p-2 hover:scale-110 transition-all duration-500">
                  <Link to="https://github.com/Aadi-Y">
                    <FaGithub className="text-2xl cursor-pointer text-white" />
                  </Link>
                </li>
                <li className="bg-amber-500 rounded-full p-2 hover:scale-110 transition-all duration-500">
                  <SiLeetcode className="text-2xl cursor-pointer text-white" />
                </li>
                <li className="bg-amber-500 rounded-full p-2 hover:scale-110 transition-all duration-500">
                  <BiLogoGmail className="text-2xl cursor-pointer text-white" />
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex items-center gap-3">
              <MdEmail className="text-[1.2rem]" />
              <p className="text-[.9rem] md:text-[1rem]">aadithya.y5555@gmail.com</p>
            </div>
            <div className="flex  items-center gap-3">
              <RiPhoneFill className="text-[1.2rem]" />
              <p className="text-[.9rem] md:text-[1rem]">9629138036</p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Footer;
