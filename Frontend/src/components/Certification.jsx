import { FiExternalLink } from "react-icons/fi";
import data from "../utils/projects.json";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GoOrganization } from "react-icons/go";
function Certification() {
  return (
    <>
      <section className="bg-black text-white h-auto w-[100vw]">
        <section className="xl:w-[70%] lg:w-[85%] w-[95%] m-auto pb-10 relative">
          <section>
            <div className="border-amber-500 flex p-2 w-30 rounded-md mb-5 bg-[#2A2828]">
              <div className="w-1 bg-amber-500 mr-2"></div>
              <h1 className="text-white font-medium">Certificates</h1>
            </div>
          </section>
          <motion.section
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 w-[97%] md:w-auto gap-5"
          >
            {data &&
              data.length > 0 &&
              data.map((item) => (
                <div
                  key={item.Certificate_Id}
                  className="border-1 p-3 border-amber-500 rounded-xl bg-[#2A2828] cursor-pointer hover:scale-103 md:hover:scale-105 transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <h1 className="md:text-[1.1rem] font-medium text-amber-600">
                      {item.Certificate_Title}
                    </h1>
                    <Link to={item.Certificate_Credintial}>
                      <FiExternalLink className="transition-all duration-200 hover:scale-110 cursor-pointer text-[1rem] md:text-[1.2rem] " />
                    </Link>
                  </div>

                  <h2 className="text-[.9rem] md:text-[1rem] ">{item.Certificate_Timeline}</h2>
                  <div className="flex items-center gap-2">
                    <GoOrganization className="text-amber-600"/>
                    <h2>{item.Certificate_Organitation}</h2>
                  </div>
                  
                </div>
              ))}
          </motion.section>
        </section>
      </section>
    </>
  );
}

export default Certification;
