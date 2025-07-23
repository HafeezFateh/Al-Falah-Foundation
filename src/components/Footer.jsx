
function Footer(){
    return(
    <>
        <div className="border-t border-blue-600  gap-10 flex flex-col items-center ">
            <h1 className="p-5 text-stone-300 text-xl font-semibold mt-8">Al Falah Foundation</h1>

            <div className="flex flex-col  items-center gap-1">
                <h2 className="text-blue-600 text-lg font-semibold">Quick Links</h2>
                <p className="text-stone-400 text-lg mt-3">Home</p>
                <p className="text-stone-400 text-lg ">About</p>
                <p className="text-stone-400 text-lg ">Blogs</p>
                <p className="text-stone-400 text-lg ">Material</p>
                <p className="text-stone-400 text-lg ">Learn Islam</p>
                <p className="text-stone-400 text-lg ">Plans of Satan</p>
            </div>

            <div className="flex flex-col items-center">
                <h2 className="text-blue-600 font-semibold text-lg">Books</h2>
                <p className="text-stone-400 text-lg mt-3">Islamic</p>
                <p className="text-stone-400 text-lg">Political</p>
                <p className="text-stone-400 text-lg">History</p>
                <p className="text-stone-400 text-lg">Economics</p>
            </div>

            <p className="my-2 mt-10 font-light text-sm text-stone-600">© 2025 Al Falah Foundation. All rights reserved</p>
        </div>
    </>
    )
}

export default Footer;