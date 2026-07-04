import { cardsList } from "../../utils/cards";
function Cards(){
    
    return(
        <div className="flex justify-center">
            {
                cardsList.map(item=>(
                    <div 
                    className={`p-2 border border-white/20 text-left w-50 shadow-md rounded-xl mx-10 bg-[${item.bg}]`}
                    key={item.id}>
                        <h1 className={`text-[16px] font-bold 
                            ${item.name === "Assigned" ? "text-amber-200":
                                item.name==="Available" ? "text-green-400":
                                item.name==="Repair" ? "text-red-400" :"text-[#ddd1d1]"

                            }`}>
                            {item.name}
                            </h1>
                        <h1 className="font-bold text-2xl">{item.count }</h1>
                    </div>
                ))
            }
        </div>
    )
}

export default Cards;