import Header from "./components/Header"

function Home(){
    return (

        <>
        <Header />

        <div id="hero" className="flex flex-col items-center mt-20 lg:mt-30 h-screen ">
            
            <div className="mx-5 flex flex-col justify-center ">
            <h1 className="font-inter text-4xl lg:text-6xl font-semibold">We are here to spread the truth by the permisssion of ALLAH</h1>
            </div>

        </div>
           
        </>
    )
}

export default Home;