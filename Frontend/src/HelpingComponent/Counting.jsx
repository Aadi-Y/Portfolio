import { useEffect, useRef, useState } from "react";

function Counting1() {
  const [linkedInCount, setLinkedInCount] = useState(0);
  const [dsaCount, setDsaCount] = useState(0);
  const sectionRef = useRef(null);

  const linkedInFinal = 854;
  const dsaFinal = 138;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setLinkedInCount((prev) => {
              if (prev < linkedInFinal) return prev + 1;
              return prev;
            });
            setDsaCount((prev) => {
              if (prev < dsaFinal) return prev + 1;
              return prev;
            });

            if (linkedInCount >= linkedInFinal && dsaCount >= dsaFinal) {
              clearInterval(interval);
            }
          }, 50);

          observer.disconnect(); // Run only once
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [linkedInCount, dsaCount]);

  return (
    <section ref={sectionRef} className="text-white bg-black w-[100vw] pt-10 md:py-10 ">
      <section className="xl:w-[70%] lg:w-[85%] w-[95%] flex-col md:flex-row m-auto flex items-center gap-5 relative">
        <div className="flex p-4 gap-2 bg-[#2A2828] rounded-lg w-[80%] md:w-auto">
          <div className="h-auto border-2 border-amber-500"></div>
          <div className="  flex flex-col items-center justify-center">
            <h1>LinkedIn Connections</h1>
            <p className="text-2xl text-amber-500">{linkedInCount}</p>
          </div>
        </div>
        <div className="flex p-4 gap-2 bg-[#2A2828] rounded-lg w-[80%] md:w-auto">
            <div className="h-auto border-2 border-amber-500"></div>
          <div className="flex flex-col items-center justify-center">
            <h1>DSA Problem Solved</h1>
            <p className="text-2xl text-amber-500">{dsaCount}</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Counting1;
