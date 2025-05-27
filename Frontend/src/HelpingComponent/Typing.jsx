import Typed from "typed.js";
import {useRef,useEffect} from "react";
function Typing(){
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(()=>{
        typed.current = new Typed(el.current,{
            strings:["Web Developer","Freelancer","AIML Student"],
            typeSpeed:100,
            backSpeed:90,
            loop:true,
            showCursor:true,
        });

        return ()=>{
            typed.current.destroy();
        }
    },[])

    return(
        <h2 className="xl:text-5xl lg:text-5xl md:text-4xl text-3xl bg-gradient-to-r from-[#FD6F00] to-[#E46400] text-transparent bg-clip-text font-semibold" ref={el}></h2>
    )

}

export default Typing;