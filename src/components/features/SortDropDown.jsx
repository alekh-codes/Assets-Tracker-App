import { useContext, useRef ,useState} from "react"
import { AssetContext } from "../../context/AssetContext"

function SortDropDown({setCopyList,setDisplay}){
    const sortBtns = "p-1 cursor-pointer text-left w-full bg-white hover:bg-white/70"
    const {asset, setAssets} = useContext(AssetContext);
    function handleSortDefault(){
        setCopyList(asset);
    }
    function handleSortAvailable(){
        setCopyList(asset.filter(a=>a.status === "Available"))
    }
    function handleSortRepair(){
        setCopyList(asset.filter(a=>a.status === "Repair"))
    }
    function handleSortAssigned(){
        setCopyList(asset.filter(a=>a.status === "Assigned"))
    }

    return(
        <div className="absolute flex flex-col w-full md:w-auto bg-white  text-black z-10 top-12 shadow-2xl md:top-12 py-1 px-2 rounded-xl">
            <button className={sortBtns}
            onClick={handleSortDefault}
            >Default</button>
            <button className={sortBtns}
            onClick={handleSortAvailable}
            >Available</button>
            <button className={sortBtns}
            onClick={handleSortAssigned}
            >Assigned</button>
            <button className={sortBtns}
            onClick={handleSortRepair}
            >Repair</button>
        </div>
    )
}

export default SortDropDown