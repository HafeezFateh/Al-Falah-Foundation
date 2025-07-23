function JoinUsCard({onClose}){
    return(
        <div className="">
            <div className="fixed bg-stone-50/10 backdrop-blur-2xl  inset-x-4 lg:inset-x-[300px] top-30 rounded-md z-50 ">
            <div className="flex m-5  justify-end">
                <span onClick={onClose} className="material-symbols-outlined text-stone-300">close</span>
            </div>

                <form action="" className="text-stone-400 p-5 flex flex-col gap-2">
                    <label htmlFor="" className="">Name:</label>
                    <input type="text" className="bg-stone-100/10 rounded-md"/>
                    <label htmlFor="" className="">Age:</label>
                    <input type="number" className="bg-stone-100/10 rounded-md"/>
                    <label htmlFor="" className="">Location</label>
                    <input type="text" className="bg-stone-100/10 rounded-md"/>
                    <label htmlFor="" className="">Email:</label>
                    <input type="email" className="bg-stone-100/10 rounded-md"/>
                    <label htmlFor="" className="">WhatsApp number</label>
                    <input type="number" className="bg-stone-100/10 rounded-md"/>
                    <input type="submit" className="bg-blue-800 p-1 text-white rounded-md mt-3" />
                </form>

            </div>
        </div>
    )
}

export default JoinUsCard;