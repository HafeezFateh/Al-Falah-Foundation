function VisionCard(props){
    return(
        <>
                    <div className="group relative w-fit mx-2 ">
                        <div className="absolute opacity-45 z-[-1] blur-xs group-hover:blur rounded-lg  inset-0 bg-gradient-to-tr via-stone-100 from-stone-900 to-stone-500  "></div>
                            <div className="bg-gradient-to-br  from-stone-200 via-stone-700 to-stone-200  rounded-2xl p-[1px] w-fit">
                                <div className="group flex flex-col bg-stone-950 rounded-2xl p-3 gap-2  lg:min-h-[150px]">
                                    <h3 className="font-semibold text-stone-200 ">{props.title}</h3>
                                    <p className="text-stone-300 ">{props.text}</p>
                                </div>
                            </div>
                    </div>
        </>
    )

}

export default VisionCard;