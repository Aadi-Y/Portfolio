import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

function Testing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const [scrollDir, setScrollDir] = useState("down");
  const [hasAnimated, setHasAnimated] = useState(false);

  // Scroll direction detector
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDir = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY ? "down" : "up");
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  // Play animation only on forward scroll
  useEffect(() => {
    if (isInView && scrollDir === "down") {
      setHasAnimated(true);
    }
  }, [isInView, scrollDir]);

  return (
    <div className="h-[100vh] flex items-center justify-center">

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-[#2A2828] p-6 border border-amber-500 rounded-xl"
      >
        <h1 className="text-white text-xl">
          This animates only when scrolling down
        </h1>
      </motion.div>
    </div>
  );
}

export default Testing;
