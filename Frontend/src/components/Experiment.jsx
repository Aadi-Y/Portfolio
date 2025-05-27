import React from "react";
import logoMark from "../assets/images/logo.png";
import {useState} from "react"

function Experiment() {
    const [open,setOpen] = useState(true);

    function handleOpen() {
        setOpen((prev)=>!prev)
    }

  return (
    <>
      <section className="bg-black w-[100vw] fixed z-999 top-0">
        <section className="w-[97%] xl:w-[70%] lg:w-[85%] flex justify-between m-auto items-end pt-6 pb-3">
          <div className="flex relative">
            <img src={logoMark} alt="" className="h-15" />
            <h1 className="text-3xl text-amber-500 font-bold absolute left-18 bottom-0">
              ADI
            </h1>
          </div>
          <div className="relative">
            {
                open ? <nav>
              <ul className="flex lg:gap-8 lg:items-end flex-col absolute right-6">
                <li className="text-[1.2rem] text-amber-500 font-bold cursor-pointer border p-2 bg-[#2A2828]">
                  Home
                </li>
                <li className="text-[1.2rem] text-[#fff] font-bold hover:text-amber-500 transition-all duration-400 cursor-pointer border-b-1 p-2 w-35 bg-[#2A2828]">
                  About me
                </li>
                <li className="text-[1.2rem] text-[#fff] font-bold hover:text-amber-500 transition-all duration-400 cursor-pointer border-b-1 p-2 bg-[#2A2828]">
                  Skills
                </li>
                <li className="text-[1.2rem] text-[#fff] font-bold hover:text-amber-500 transition-all duration-400 cursor-pointer border-b-1 p-2 bg-[#2A2828]">
                  Projects
                </li>
                <li className="text-[1.2rem] text-[#fff] font-bold hover:text-amber-500 transition-all duration-400 cursor-pointer border-b-1 p-2 bg-[#2A2828]">
                  Contact me
                </li>
              </ul>
            </nav> : <></>
            }

            <div className="block text-2xl text-white">
                <button className="border cursor-pointer" onClick={handleOpen}>O</button>
            </div>
          </div>
        </section>
      </section>
      <section className="h-[100vh] bg-black">

      </section>
    </>
  );
}

export default Experiment;
