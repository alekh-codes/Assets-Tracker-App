import { Fragment, useContext, useEffect, useState } from "react";
import { RiAddLine, RiSearchLine  } from "react-icons/ri";
import AssetsForm from "./AssetsForm";
import { AssetContext } from "../../context/AssetContext";

export default function HeaderBtns({setCopyList,copyList,asset}){
   
    const [show,setShow] = useState(false);
    const [search,setSearch] = useState("");
    
    function handleSearch(){
        setCopyList(asset.filter(a => a.assets.toLowerCase().includes(search.toLowerCase())));
    }
    
    return(
        <div className="flex justify-between items-center mb-6">
        <div className="flex items-center w-fit  px-4 bg-blue-600 text-white p-1 rounded-xl">
            <RiAddLine />
            <button 
            onClick={()=>setShow(true)}
            className="cursor-pointer"> Add an asset</button>

            {
                show && (
                    <AssetsForm setShow={setShow}/>
                )
            }

            
        </div>
        <div className="flex items-center ">
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search...." className= "p-1 bg-white text-black rounded-l-xl"/>
            <RiSearchLine onClick={handleSearch} className="text-black bg-white h-8 rounded-r-xl w-6 pr-1 cursor-pointer"/>
        </div>
        </div>
    )
}