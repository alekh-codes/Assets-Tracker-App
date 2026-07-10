import { useContext } from "react";
import { cardsList } from "../../utils/cards";
import { AssetContext } from "../../context/AssetContext";
function Cards(){
    const {asset} = useContext(AssetContext);
    const totalAssets = asset.length;
    const assignedAssets = asset.filter(a=> a.status === "Assigned").length;
    const availableAssets = asset.filter(a=> a.status === "Available").length;
    const repairAssets = asset.filter(a=> a.status === "Repair").length;
    return(
        
        <div className="flex justify-center flex-col md:flex-row items-center ">
            {
                cardsList.map(item=>(
                    <div 
                    className={`p-2 border border-white/20 text-left w-full  shadow-md rounded-xl  m-2 md:mx-2 bg-[${item.bg}]`}
                    key={item.id}>
                        <h1 className={`text-[16px] font-bold 
                            ${item.name === "Assigned" ? "text-amber-200":
                                item.name==="Available" ? "text-green-400":
                                item.name==="Repair" ? "text-red-400" :"text-[#ddd1d1]"

                            }`}>
                            {item.name}
                         </h1>
                        <h1 className="font-bold text-2xl">{
                        item.name === "Total Assets"
                            ? totalAssets
                            : item.name === "Assigned"
                            ? assignedAssets
                            : item.name === "Available"
                            ? availableAssets
                            : item.name === "Repair" 
                            ? repairAssets:""}</h1>
                    </div>
                ))
            }
        </div>
    )
}

export default Cards;