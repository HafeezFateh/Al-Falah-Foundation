import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header(){
    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen(prev => !prev)

    return(
        <>
            <div className="shadow-lg shadow-blue-800/70">
                <div className="bg-stone-950 shadow-lg p-5 flex items-center justify-between ">
                    <Link to='/'>
                        <h1 className="text-xl font-semibold text-stone-100">Al Falah Foundation</h1>
                    </Link>
                    <div onClick={toggleMenu} dir="rtl" class="lg:hidden  flex flex-col gap-1"><div className="w-[20px] h-[2px] bg-white"></div><div className="w-[15px] h-[2px] bg-white "></div><div className="w-[10px] h-[2px] bg-white "></div></div>

                    <div className="flex-grow text-stone-200 hidden lg:flex justify-center  gap-8  ">
                        <Link to='/' className="hover:text-blue-700">About</Link>
                        <Link to='/' className="hover:text-blue-700">Blog</Link>
                        <Link to='/materials' className="hover:text-blue-700">Materials</Link>
                        <Link to='/' className="hover:text-blue-700">Login</Link>
                     </div>
                    
                    <div className="group bg-blue-900 hidden hover:shadow-lg hover:bg-blue-900/90 lg:flex   gap-3 items-center  rounded-3xl px-8 py-2">
                        <p className="text-lg  text-stone-200 font-semibold ">Join us</p>
                        <span class="material-symbols-outlined group-hover:translate-x-3 text-stone-200 transition">arrow_right_alt</span>

                    </div>
                </div>
                </div>


                <div className={`transition-all duration-300 overflow-hidden bg-blue-700 shadow-lg shadow-black   pb-[1px] ${open ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0" }`}>
                    <div className="bg-stone-950 p-2 text-stone-200  flex flex-col gap-2">
                        <Link to='/about' className="w-full  mt-2 bg-stone-700/30 p-2 rounded-xl">About</Link>
                        <Link to='/about' className="w-full  bg-stone-700/30 p-2 rounded-xl">Blog</Link>
                        <Link to='/materials' className="w-full  bg-stone-700/30 p-2 rounded-xl">Materials</Link>
                        <Link to='/about' className="w-full  bg-stone-700/30 p-2 rounded-xl">Login</Link>
                        <hr className="text-stone-600 mt-2  "/>
                        <Link to='/'>
                            <div className="group p-2 flex gap-1">
                                <p className="font-semibold text-stone-200">Join</p>
                                <span class="material-symbols-outlined group-hover:translate-x-3 text-blue-700 transition">chevron_right</span>
                            </div>
                        </Link>

                    </div>
                </div>
            


        </>
    )
}

export default Header;