import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header(){
    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen(prev => !prev)

    return(
        <>
            <div className="bg-gradient-to-br from-lime-500 via-lime-300 to-lime-500 pb-[2px]  shadow-lg">
                <div className="bg-stone-100   shadow-lg p-4 flex items-center justify-between ">
                    <h1 className="text-xl font-semibold text-lime-900">Al Falah Foundation</h1>
                    <span onClick={toggleMenu} class="material-symbols-outlined text-lime-700 "><span className="lg:hidden">menu</span></span>

                    <div className="flex-grow text-lime-800 hidden lg:flex justify-center  gap-8 font-semibold text-lg">
                        <Link to='/'>About</Link>
                        <Link to='/'>Blog</Link>
                        <Link to='/'>Materials</Link>
                        <Link to='/'>Login</Link>
                     </div>
                    
                    <div className="group hidden hover:shadow-lg hover:border-lime-500 lg:flex border border-lime-400 gap-3 items-center  rounded-xl px-8 py-1">
                        <Link to='/'  className="text-lg font-semibold group-hover:text-lime-500">Join us</Link>
                        <span class="material-symbols-outlined group-hover:translate-x-3 text-lime-700 transition">arrow_right_alt</span>

                    </div>
                </div>
                </div>


            {open && 
                <div className="bg-gradient-to-br from-lime-500 via-lime-300 to-lime-500 pb-[1px]">
                    <div className="bg-lime-50 p-2  flex flex-col gap-2">
                        <Link to='/about' className="w-full border border-lime-100 mt-2 bg-stone-50 p-2 rounded-xl">About</Link>
                        <Link to='/about' className="w-full border border-lime-100 bg-stone-50 p-2 rounded-xl">Blog</Link>
                        <Link to='/about' className="w-full border border-lime-100 bg-stone-50 p-2 rounded-xl">Materials</Link>
                        <Link to='/about' className="w-full border border-lime-100 bg-stone-50 p-2 rounded-xl">Login</Link>
                        <hr className="text-lime-300 mt-2 "/>
                        <div className="group p-2 flex gap-1">
                            <Link to='/about' className="font-semibold">Join</Link>
                            <span class="material-symbols-outlined group-hover:translate-x-3 text-lime-700 transition">chevron_right</span>
                        </div>

                    </div>
                </div>
            }


        </>
    )
}

export default Header;