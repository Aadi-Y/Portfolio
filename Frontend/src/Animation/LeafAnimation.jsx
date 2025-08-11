import React from "react";
import Leave1 from "../assets/images/leaves1.png";
import Leave2 from "../assets/images/leaves2.png";
import Leave3 from "../assets/images/leaves3.png";
import Leave4 from "../assets/images/leaves4.png";

function LeafAnimation() {
  return (
    <section className="fixed h-[100vh] w-[100vw] flex justify-center items-center overflow-hidden bg-transparent pointer-events-none">
  {/* Front layer */}
  <div className="absolute top-0 left-0 w-full h-full">
    <img
      src={Leave1}
      alt=""
      className="absolute left-[8%] animate-move [animation-delay:-6s] [animation-duration:17s]"
    />
    <img
      src={Leave2}
      alt=""
      className="absolute left-[42%] animate-move [animation-delay:-3s] [animation-duration:21s]"
    />
    <img
      src={Leave3}
      alt=""
      className="absolute left-[77%] animate-move [animation-delay:2s] [animation-duration:19s]"
    />
  </div>

  {/* Mid layer (slightly blurred) */}
  <div className="absolute top-0 left-0 w-full h-full transform blur-[2px] rotate-y-180">
    <img
      src={Leave2}
      alt=""
      className="absolute left-[25%] animate-move [animation-delay:-8s] [animation-duration:13s]"
    />
    <img
      src={Leave4}
      alt=""
      className="absolute left-[65%] animate-move [animation-delay:1s] [animation-duration:16s]"
    />
  </div>

  {/* Back layer (more blurred, smaller scale) */}
  <div className="absolute top-0 left-0 w-full h-full transform blur-[4px] scale-[.8] rotate-y-180">
    <img
      src={Leave1}
      alt=""
      className="absolute left-[15%] animate-move [animation-delay:-11s] [animation-duration:18s]"
    />
    <img
      src={Leave3}
      alt=""
      className="absolute left-[55%] animate-move [animation-delay:-4s] [animation-duration:15s]"
    />
  </div>
</section>

  );
}

export default LeafAnimation;
