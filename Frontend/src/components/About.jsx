import Profile from "../assets/images/Aadi-Profile-2.png";
import { motion } from "framer-motion";
function About() {
  return (
    <>
      <section className="h-auto bg-black text-white flex items-center overflow-hidden">
        <section className="xl:w-[70%] lg:w-[85%] w-[95%] m-auto flex items-center flex-col md:flex-row h-[100%] pt-10 md:pt-0 gap-25 md:gap-0 relative">
          <section className="md:w-[50%] flex flex-col">
            <div>
              <div className="border-amber-500 flex p-2 w-30 rounded-md mb-5 bg-[#2A2828]">
                <div className="w-1 bg-amber-500 mr-2"></div>
                <h1 className="text-white font-medium">About me</h1>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                viewport={{ once: true}}
              >
                <p className="text-gray-200 md:text-[1rem] text-[0.9rem] text-justify lg:text-left">
                  Hi! I'm a passionate second-year Computer Science and
                  Engineering student specializing in Artificial Intelligence
                  and Machine Learning. My core focus is on full-stack web
                  development using the MERN stack (MongoDB, Express.js, React,
                  Node.js), and I’m also deeply interested in integrating
                  machine learning with real-world web applications. I have
                  hands-on experience with modern technologies like Next.js for
                  server-side rendering, Tailwind CSS for crafting responsive
                  and clean UI designs, and Express.js and Node.js for building
                  robust backend services. With a strong foundation in HTML,
                  CSS, and JavaScript, I’m continually expanding my skill set to
                  bridge the gap between intelligent systems and dynamic web
                  development, aiming to contribute to innovative, real-world
                  solutions.
                </p>
              </motion.div>
            </div>
          </section>
          <section className="md:w-[50%] flex items-end justify-end h-[100%] md:pt-18 lg:pt-35 lg:overflow-hidden">
            <div className="lg:w-95 lg:h-120 w-85 h-110 border-8 border-amber-600 rounded-t-full flex items-end justify-center">
              <div className="lg:w-87 lg:h-110 w-77 h-100 rounded-t-full  m-auto relative flex items-center justify-center backdrop-blur-5xl bg-white/15 border-white/15">
                <img src={Profile} alt="" className="absolute bottom-25" />
                <div className="lg:w-95 lg:h-40 w-95 h-40 bg-black  absolute -bottom-15"></div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}

export default About;
