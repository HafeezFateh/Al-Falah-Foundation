
function Footer(){
    return(
    <>
        <div className="mt-30 border-t  border-blue-600  gap-10 flex flex-col lg:flex-row lg:justify-between  items-center lg:items-start ">
            <h1 className="p-5 text-stone-300 text-xl font-semibold mt-8 lg:mt-5 lg:mx-30">Al Falah Foundation</h1>

            <div className="lg:flex lg:mx-30 ">
            <div className="lg:p-5 flex flex-col items-center lg:items-start gap-1 lg:mt-5 ">
                <h2 className="text-blue-600 text-lg font-semibold">Quick Links</h2>
                <p className="text-stone-400 text-lg mt-3">Home</p>
                <p className="text-stone-400 text-lg ">About</p>
                <p className="text-stone-400 text-lg ">Blogs</p>
                <p className="text-stone-400 text-lg ">Material</p>
                <p className="text-stone-400 text-lg ">Learn Islam</p>
                <p className="text-stone-400 text-lg ">Plans of Satan</p>
            </div>

            <div className="lg:p-5 flex flex-col gap-1 items-center lg:items-start lg:mt-5">
                <h2 className="text-blue-600 font-semibold text-lg mt-5 lg:mt-0">Books</h2>
                <p className="text-stone-400 text-lg mt-3">Islamic</p>
                <p className="text-stone-400 text-lg">Political</p>
                <p className="text-stone-400 text-lg">History</p>
                <p className="text-stone-400 text-lg">Economics</p>
            </div>
            </div>

            
        </div>
        <p className="text-stone-400 font-light text-sm text-center mt-20 border-t border-stone-800 p-2 mx-3 ">© 2025 Al Falah Foundation. All rights reserved</p>
    </>
    )
}

export default Footer;