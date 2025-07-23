import { useState } from "react";

function FaqsCard(props){
    const [open, setOpen] = useState(false);

    const toggleBar = () => setOpen(prev => !prev);

    return(
        <div className="bg-stone-900 border border-stone-600 rounded-xl py-2 px-3 shadow-lg  mx-2">
            <div onClick={toggleBar} className="flex justify-between">
                <h1 className="text-lg text-stone-400">{props.question}</h1>
                <span class={`material-symbols-outlined text-stone-400 transition-transform duration-300 ${open? "rotate-180" : "rotate-0"}`}>arrow_drop_down</span>
            </div>
        
        <div className={`transition-all duration-500 overflow-hidden ${
          open ? "max-h-40 opacity-100 my-2" : "max-h-0 opacity-0"} text-stone-500`}>
            <p>{props.answer}</p>
        </div>

            
        </div>
    )
}

export default FaqsCard;