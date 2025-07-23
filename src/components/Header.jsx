import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header(){
    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen(prev => !prev)

    return(
        <>
            <div className="mx-3 mt-5 bg-gradient-to-br from-lime-500 via-lime-300 to-lime-500 p-[2px] rounded-xl shadow-lg">
                <div className="bg-stone-100  rounded-xl shadow-lg p-4 flex justify-between ">
                    <h1 className="text-lg font-semibold text-lime-900">Al Falah Foundation</h1>
                    <span onClick={toggleMenu} class="material-symbols-outlined text-lime-700 ">menu</span>
                </div>
            </div>


            {open && 
                <div className="mx-3 my-2 rounded-lg bg-gradient-to-br from-lime-500 via-lime-300 to-lime-500 p-[1px]">
                    <div className="bg-stone-200 p-2 rounded-lg flex flex-col gap-2">
                        <Link to='/about' className="w-full bg-stone-100/80 p-2 rounded-xl">About</Link>
                        <Link to='/about' className="w-full bg-stone-100/80 p-2 rounded-xl">Blog</Link>
                        <Link to='/about' className="w-full bg-stone-100/80 p-2 rounded-xl">Materials</Link>
                        <Link to='/about' className="w-full bg-stone-100/80 p-2 rounded-xl">Login</Link>
                        <hr className="text-stone-100 mt-2 "/>
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