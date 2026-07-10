import { useContext, useRef ,useState} from "react"
import { AssetContext } from "../../context/AssetContext"
import { IoHandLeft } from "react-icons/io5";

function SortDropDown({menuRef,setCopyList}){
    const sortBtns = "p-1 cursor-pointer"
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
        <div ref={menuRef} className="absolute flex flex-col bg-white text-black z-10 right-13 shadow-2xl md:top-22 p-1 rounded-xl">
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