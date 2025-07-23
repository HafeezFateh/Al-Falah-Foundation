import FaqsCard from "./components/FaqsCard";
import VisionCard from "./components/VisionCard";
import Layout from "./layouts/Layout";

function Home(){
    return (

        <>
        <Layout>

        <div id="hero" className="mx-3 mt-15 lg:mt-30 flex flex-col lg:items-center">
            
            <div className="lg:w-[900px] lg:text-center  flex flex-col justify-center">
                <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-br from-stone-500  to-stone-200 bg-clip-text text-transparent">We are here to spread the truth by the permisssion of ALLAH</h1>
            </div>

            <div className="group relative w-fit mt-10">
                <div className="absolute z-[-1] blur-xs group-hover:blur rounded-lg  inset-0 bg-gradient-to-tl via-stone-700 from-blue-600 to-blue-500  "></div>
                <div className="bg-gradient-to-tl via-stone-700 from-blue-600 to-blue-500  rounded-2xl p-[2px] w-fit">
                  <div className="group flex bg-stone-950 rounded-2xl items-center px-3 py-1 gap-3 justify-center ">
                        <div className="w-[8px] h-[8px] border  rounded-full bg-blue-600"></div>
                        <p className="text-stone-200 "><span className="font-bold">Unite:</span> Work with us</p>
                        <span class="material-symbols-outlined group-hover:translate-x-3 text-stone-200 transition pr-3">arrow_right_alt</span>
                  </div>
                </div>
            </div>
            
            <div className="group relative w-fit mt-5">
                <div className="absolute z-[-1] blur-xs group-hover:blur rounded-lg  inset-0 bg-gradient-to-tl via-stone-500 from-stone-400 to-stone-500  "></div>
                <div className="bg-gradient-to-tl  from-stone-100 via-stone-950 to-stone-100  rounded-2xl p-[2px] w-fit">
                  <div className="group flex bg-stone-950 rounded-2xl items-center px-3 py-1 gap-3 justify-center ">
                        <div className="w-[8px] h-[8px] border rounded-full bg-stone-400"></div>
                        <p className="text-stone-200 "><span className="font-bold">Learn:</span> The Reality</p>
                        <span class="material-symbols-outlined group-hover:translate-x-3 text-stone-200 transition  ml-10 pr-3 ">arrow_right_alt</span>
                  </div>
                </div>
            </div>
            
            <div className=" mt-15 flex flex-col ">
                <h1 className="text-2xl font-semibold text-stone-400 my-5">Our Vision</h1>
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">

                  <VisionCard 
                    title="Spread the Message of Islam Globally"
                    text="Share the truth of Islam through peaceful, respectful, and authentic means—online and offline."
                  />

                    <VisionCard 
                    title="Empower Individuals with Knowledge"
                    text="Provide access to authentic Islamic education to Muslims and non-Muslims alike."
                  />

                    <VisionCard 
                    title="Revive the Sunnah"
                    text="Encourage and practice the Prophetic way in all aspects of life—character, worship, and interactions."
                  />
                </div>

                <div className="mt-10">
                    <h1 className="text-2xl font-semibold text-stone-400 my-5">FAQs / Misconceptions</h1>
                    
                    <div className="mt-4 flex flex-col gap-3">
                        <FaqsCard 
                            question="Jihad"
                            answer="Jihad means 'struggle' or 'striving' in the way of Allah. It refers primarily to the personal, spiritual effort to follow God's guidance—such as improving character, resisting sin, and spreading goodness. Armed struggle is only allowed in self-defense under strict rules. It does not mean terrorism or unjust violence."
                        />

                        <FaqsCard 
                            question="Hijab"
                            answer="The Hijab is a modest dress code in Islam, especially for women, which includes covering the hair and body. It reflects faith, modesty, and obedience to Allah."
                        />

                        <FaqsCard 
                            question="Was Islam spread by the sword"
                            answer="Truth: Islam spread through character, trade, justice, and truth, not by force. The Quran says: “There is no compulsion in religion” (2:256)"
                        />

                    </div>

                </div>

            </div>
        </div>

         

                
            
        </Layout>
        </>
    )
}

export default Home;

