import Header from "./components/Header"
import Footer from "./components/Footer";

function Home(){
    return (

        <>
        <Header />

        <div id="hero" className="mx-3 mt-15 lg:mt-30 h-screen">
            
            <div className="lg:w-[900px] lg:text-center  flex flex-col justify-center">
                {/* <h1 className="text-5xl font-bold bg-gradient-to-br from-stone-500  to-stone-200 bg-clip-text text-transparent">We are here to spread the truth by the permisssion of ALLAH</h1> */}
                <h1 className="text-4xl lg:text-5xl text-white">We are here to spread the truth by the permisssion of ALLAH</h1>
            </div>

            <div className="group relative w-fit">
                <div className="absolute z-[-1] blur-xs group-hover:blur rounded-lg  inset-0 bg-gradient-to-tl via-stone-700 from-blue-600 to-blue-500  "></div>
                <div className="mt-10 bg-gradient-to-tl via-stone-700 from-blue-600 to-blue-500  rounded-2xl p-[2px] w-fit">
                  <div className="group flex bg-stone-950 rounded-2xl items-center px-3 py-1 gap-3 justify-center ">
                        <div className="w-[8px] h-[8px] border  rounded-full bg-blue-600"></div>
                        <p className="text-stone-200 "><span className="font-bold">Unite:</span> Work with us</p>
                        <span class="material-symbols-outlined group-hover:translate-x-3 text-stone-200 transition pr-3">arrow_right_alt</span>
                  </div>
                </div>
            </div>
            
               <div className="group relative w-fit">
                <div className="absolute z-[-1] blur-xs group-hover:blur rounded-lg  inset-0 bg-gradient-to-tl via-stone-500 from-stone-400 to-stone-500  "></div>
                <div className="mt-5 bg-gradient-to-tl  from-stone-100 via-stone-950 to-stone-100  rounded-2xl p-[2px] w-fit">
                  <div className="group flex bg-stone-950 rounded-2xl items-center px-3 py-1 gap-3 justify-center ">
                        <div className="w-[8px] h-[8px] border rounded-full bg-stone-400"></div>
                        <p className="text-stone-200 "><span className="font-bold">Learn:</span> The Reality</p>
                        <span class="material-symbols-outlined group-hover:translate-x-3 text-stone-200 transition  ml-10 pr-3 ">arrow_right_alt</span>
                  </div>
                </div>
            </div>
            
            
            </div>

         

                
            
        <Footer />
        </>
    )
}

export default Home;

