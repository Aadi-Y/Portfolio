import logoMark from "../assets/images/logo.png";
function Navbar({onScrollTo}){
    return(
        <>
            <section className="bg-black w-[100vw] fixed z-999 top-0">
                <section className="w-[97%] xl:w-[70%] lg:w-[85%] flex justify-between m-auto items-end pt-6 pb-3">
                    <div className="flex relative">
                        <img src={logoMark} alt="" className="h-15"/>
                        <h1 className="text-3xl text-amber-500 font-bold absolute left-18 bottom-0">ADI</h1>
                    </div>
                    <div className="hidden md:block">
                        <nav>
                            <ul className="flex gap-8 items-end">
                                <li className="text-[1.2rem] text-amber-500 font-bold cursor-pointer">Home</li>
                                <li className="text-[1.2rem] text-[#2A2828] font-bold hover:text-amber-500 transition-all duration-400 cursor-pointer" onClick={()=>onScrollTo('about')}>About me</li>
                                <li className="text-[1.2rem] text-[#2A2828] font-bold hover:text-amber-500 transition-all duration-400 cursor-pointer" onClick={()=>onScrollTo('skills')}>Skills</li>
                                <li className="text-[1.2rem] text-[#2A2828] font-bold hover:text-amber-500 transition-all duration-400 cursor-pointer" onClick={()=>onScrollTo('projects')}>Projects</li>
                                <li className="text-[1.2rem] text-[#2A2828] font-bold hover:text-amber-500 transition-all duration-400 cursor-pointer" onClick={()=>onScrollTo('contact')}>Contact me</li>
                            </ul>
                        </nav>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Navbar