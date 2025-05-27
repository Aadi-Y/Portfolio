import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Experience() {
  return (
    <>
      <section className="h-auto w-[100vw] bg-black text-white flex pb-10 md:py-10">
        <section className="xl:w-[70%] lg:w-[85%] w-[95%] m-auto flex flex-col">
          <section>
            <div className="border-amber-500 flex p-2 w-30 rounded-md mb-5 bg-[#2A2828]">
              <div className="w-1 bg-amber-500 mr-2"></div>
              <h1 className="text-white font-medium">Exprieance</h1>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 w-[97%] md:w-auto">
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="border-amber-500 border-1 p-3 rounded-xl bg-[#2A2828] flex gap-2"
            >
              <div className="border-2 border-amber-500 h-auto"></div>

              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center md:gap-5 gap-1">
                    <h1 className="font-semibold text-[0.95rem] md:text-[1.2rem]">
                      Crudsys It Solutions
                    </h1>
                    <Link to="https://drive.google.com/file/d/16JRyRsJcSxrTbX8b0R7aKfVcev_UfME7/view?usp=drive_link">
                      <FiExternalLink className="md:text-[1.2rem] text-[1rem] transition-all duration-200 hover:scale-110 cursor-pointer " />
                    </Link>
                  </div>
                  <h2 className="text-amber-500 text-[0.9rem] md:text-[1rem]">Jan 2025 - Feb 2025</h2>
                </div>
                <h1 className="text-[0.9rem] md:text-[1rem]">Remote</h1>
                <h2 className="underline underline-offset-3 decoration-amber-500 text-[0.9rem] md:text-[1rem]">
                  Intern
                </h2>
                <h2 className="text-[0.9rem] md:text-[1rem]">
                  Role :{" "}
                  <span className="text-amber-500">Frontend Developer</span>
                </h2>
                <p className="text-[0.9rem] md:text-[1rem]">
                  During my internship, I developed the frontend for an{" "}
                  <span className="text-amber-500">
                    eCommerce and a Chess Registration website
                  </span>
                  , gaining hands-on experience and enhancing my skills.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="border-amber-500 border-1 p-3 rounded-xl bg-[#2A2828] flex gap-2"
            >
              <div className="border-2 border-amber-500 h-auto"></div>

              <div>
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-[1rem] md:text-[1.2rem]">Onekit</h1>
                  <h2 className="text-amber-500 text-[0.9rem] md:text-[1rem]">Mar 2025 - April 2025</h2>
                </div>

                <h1 className="text-[0.9rem] md:text-[1rem]">Remote</h1>
                <h2 className="underline decoration-amber-500 underline-offset-3 text-[0.9rem] md:text-[1rem]">
                  Freelancing
                </h2>

                <h2 className="text-[0.9rem] md:text-[1rem]">
                  Role :{" "}
                  <span className="text-amber-500">Frontend Developer</span>
                </h2>
                <p className="text-[0.9rem] md:text-[1rem]">
                  During my freelancing, I developed the frontend for an{" "}
                  <span className="text-amber-500">
                    onekit company and their clients
                  </span>{" "}
                  , gaining hands-on experience and enhancing my skills.
                </p>
              </div>
            </motion.div>
          </section>
        </section>
      </section>
    </>
  );
}

export default Experience;
