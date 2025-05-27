import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Projects() {
  return (
    <>
      <section className="h-auto w-[100vw] bg-black text-white pb-10 md:py-20">
        <section className="xl:w-[70%] lg:w-[85%] w-[95%] m-auto h-[100%] relative">
          <section className="mb-5">
            <div className="border-amber-500 flex p-2 w-30 rounded-md bg-[#2A2828]">
              <div className="w-1 bg-amber-500 mr-2"></div>
              <h1 className="text-white font-medium">My Projects</h1>
            </div>
          </section>
          <div className="bg-amber-600 h-[90%] w-[.5%] m-auto rounded absolute left-[49.5%] md:block hidden"></div>

          <motion.section 
          initial={{opacity:0,y:100}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:1,ease:"easeInOut"}}
          viewport={{once:true}}
          className="mb-2">
            <div className="border-1 border-amber-500 rounded-xl md:w-[47%] w-[97%] p-2 bg-[#2A2828] flex gap-2 hover:scale-103 md:hover:scale-104 transition-all duration-300 ">
              <div className="border-2 border-amber-500 h-auto"></div>
              <div>
                <div className="flex justify-between items-center">
                  <h1 className="text-white font-semibold md:text-[1rem]">Airbnb Clone</h1>
                  <FiExternalLink className="md:text-[1.2rem] text-[1rem] transition-all duration-200 hover:scale-110 cursor-pointer " />
                </div>
                <div>
                  <h1 className="text-amber-500 text-[0.9rem] md:text-[1rem]">Nov 2023 - Dec 2023</h1>
                  <p className="text-[0.9rem] md:text-[1rem]">
                    Developed a responsive Airbnb clone using{" "}
                    <span className="bg-gradient-to-r from-[#FD6F00] to-[#E46400] bg-clip-text text-transparent">
                      HTML, CSS, and JavaScript
                    </span>
                    , featuring dynamic ,filtering, modals, and a clean,
                    user-friendly design.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section 
          initial={{opacity:0,y:200}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:1,ease:"easeInOut"}}
          viewport={{once:true}}
          className="flex md:justify-end mb-2">
            <div className="border-1 border-amber-500 md:w-[47%] w-[97%] p-2 bg-[#2A2828] rounded-xl flex gap-2 hover:scale-103 md:hover:scale-104 transition-all duration-300">
              <div className="border-2 border-amber-500 h-auto"></div>
              <div>
                <div className="flex justify-between items-center">
                  <h1 className="text-white font-semibold">Memora</h1>
                  <Link to="https://memora-website-dy1r.vercel.app/">
                    <FiExternalLink className="md:text-[1.2rem] text-[1rem] transition-all duration-200 hover:scale-110 cursor-pointer" />
                  </Link>
                </div>
                <div>
                  <h1 className="text-amber-500 text-[0.9rem] md:text-[1rem]">Sep 2024 - Oct 2024</h1>
                  <p className="text-[0.9rem] md:text-[1rem]">
                    Developed a note-taking Website using{" "}
                    <span className="text-amber-600">
                      React, Express, and MongoDB.
                    </span>{" "}
                    Features include secure user authentication,note creation,
                    and management with a clean,intuitive interface.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section 
          initial={{opacity:0,y:200}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:1,ease:"easeInOut"}}
          viewport={{once:true}}
          className="w-full mb-2">
            <div className="border-1 md:w-[47%] w-[97%] p-2 flex gap-2 bg-[#2A2828]  rounded-xl border-amber-500 hover:scale-103 md:hover:scale-104 transition-all duration-300">
              <div className="border-2 border-amber-500 h-auto"></div>
              <div>
                <div className="flex justify-between items-center">
                  <h1 className="text-white font-semibold">
                    Chess Registration Website
                  </h1>
                  <Link to="https://chess-app-frontend-gules.vercel.app/">
                    <FiExternalLink className="md:text-[1.2rem] text-[1rem] transition-all duration-200 hover:scale-110 cursor-pointer " />
                  </Link>
                </div>

                <div>
                  <h1 className="text-amber-500 text-[0.9rem] md:text-[1rem]">Nov 2023 - Dec 2023</h1>
                  <p className="text-[0.9rem] md:text-[1rem]">
                    Built a chess event registration platform using{" "}
                    <span className="text-amber-600">
                      React, Express, and MongoDB.
                    </span>{" "}
                    Implemented user authentication, event creation,and key
                    pages like landing and about.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section 
          initial={{opacity:0,y:200}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:1,ease:"easeInOut"}}
          viewport={{once:true}}
          className="flex md:justify-end mb-2">
            <div className="border-1 border-amber-500 md:w-[47%] w-[97%] p-2 bg-[#2A2828] rounded-xl flex gap-2 hover:scale-103 md:hover:scale-104 transition-all duration-300">
              <div className="border-2 border-amber-500 h-auto"></div>
              <div>
                <div className="flex justify-between items-center">
                  <h1 className="text-white font-semibold">Chat Website</h1>
                  <FiExternalLink className="md:text-[1.2rem] text-[1rem] transition-all duration-200 hover:scale-110 cursor-pointer" />
                </div>
                <div>
                  <h1 className="text-amber-500 text-[0.9rem] md:text-[1rem]">Feb 2025 - March 2025</h1>
                  <p className="text-[0.9rem] md:text-[1rem]">
                    Developed a real-time chat platform using{" "}
                    <span className="text-amber-600">
                      React, Express, MongoDB, and Socket.IO{" "}
                    </span>{" "}
                    with user authentication, real-time messaging features, and
                    a modern UI styled with DaisyUI.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </section>
      </section>
    </>
  );
}

export default Projects;
