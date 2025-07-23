import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header(){
    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen(prev => !prev)

    return(
        <>
            <div className="shadow-lg shadow-blue-800/40">
                <div className="bg-stone-950   shadow-lg p-5 flex items-center justify-between ">
                    <h1 className="text-xl font-semibold text-stone-100">Al Falah Foundation</h1>
                    <div onClick={toggleMenu} dir="rtl" class="lg:hidden  flex flex-col gap-1"><div className="w-[20px] h-[2px] bg-white"></div><div className="w-[15px] h-[2px] bg-white "></div><div className="w-[10px] h-[2px] bg-white "></div></div>

                    <div className="flex-grow text-stone-200 hidden lg:flex justify-center  gap-8  ">
                        <Link to='/' className="hover:text-blue-700">About</Link>
                        <Link to='/' className="hover:text-blue-700">Blog</Link>
                        <Link to='/' className="hover:text-blue-700">Materials</Link>
                        <Link to='/' className="hover:text-blue-700">Login</Link>
                     </div>
                    
                    <div className="group bg-blue-900 hidden hover:shadow-lg hover:bg-blue-900/90 lg:flex  border-blue-400 gap-3 items-center  rounded-3xl px-8 py-2">
                        <Link to='/'  className="text-lg  text-stone-200 font-semibold ">Join us</Link>
                        <span class="material-symbols-outlined group-hover:translate-x-3 text-stone-200 transition">arrow_right_alt</span>

                    </div>
                </div>
                </div>


            {open && 
                <div className="bg-blue-700 shadow-lg shadow-black  pb-[1px]">
                    <div className="bg-stone-950 p-2 text-stone-200  flex flex-col gap-2">
                        <Link to='/about' className="w-full  mt-2 bg-stone-700/30 p-2 rounded-xl">About</Link>
                        <Link to='/about' className="w-full  bg-stone-700/30 p-2 rounded-xl">Blog</Link>
                        <Link to='/about' className="w-full  bg-stone-700/30 p-2 rounded-xl">Materials</Link>
                        <Link to='/about' className="w-full  bg-stone-700/30 p-2 rounded-xl">Login</Link>
                        <hr className="text-stone-600 mt-2  "/>
                        <div className="group p-2 flex gap-1">
                            <Link to='/about' className="font-semibold text-stone-200">Join</Link>
                            <span class="material-symbols-outlined group-hover:translate-x-3 text-blue-700 transition">chevron_right</span>
                        </div>

                    </div>
                </div>
            }


        </>
    )
}

export default Header;