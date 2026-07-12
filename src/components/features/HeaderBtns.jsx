import { Fragment, useContext, useEffect, useState,useRef } from "react";
import useClickOutside from "../../utils/useClickOutside";
import {
  RiAddLine,
  RiFilterLine,
  RiSearchLine,
  RiSortAsc,
} from "react-icons/ri";
import AssetsForm from "./AssetsForm";
import { AssetContext } from "../../context/AssetContext";
import SortDropDown from "./SortDropDown";

export default function HeaderBtns({ setCopyList, copyList, asset, setShowForm,setEditingAsset}) {
  const [display,setDisplay] = useState(false);
  const [search, setSearch] = useState("");
  const menuRef = useRef(null);  
  useClickOutside(menuRef,()=>setDisplay(null))

   useEffect(() => {
  if (!search.trim()) {
    setCopyList(asset);
    return;
  }

  setCopyList(
    asset.filter(
      (a) =>
        a.assets.toLowerCase().includes(search.toLowerCase()) ||
        a.category.toLowerCase().includes(search.toLowerCase()) ||
        a.department.toLowerCase().includes(search.toLowerCase())
    )
  );
}, [search, asset]);


  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
      <div className="flex items-center w-fit  px-4 bg-blue-600 text-white p-1 rounded-[30px] transition-all ease-in duration-300 hover:bg-blue-800">
        <RiAddLine className="" />
        <button onClick={() =>{
          setEditingAsset(null)
          setShowForm(true)
        }} className="font-bold cursor-pointer">
        
          Add an asset
        </button>

      </div>
      <div className="flex gap-3 w-full md:w-auto flex-col md:flex-row mt-5 md:m-0  ">
        <div className="flex items-center w-full md:w-auto">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search...."
            className="flex-1 p-2 bg-white text-black rounded-xl"
          />
         
        </div>
        <div ref={menuRef} className="relative w-full md:w-auto cursor-pointer bg-blue-600 rounded-[10px] hover:bg-blue-800">
          <button
          onClick={()=>setDisplay(prev=>!prev)}
          className="w-full md:w-auto px-4 py-2 bg-blue-600 rounded-xl flex justify-center items-center gap-1 ">
            
            Sort<RiSortAsc />
          </button>
          {
            display && <SortDropDown            
            setCopyList={setCopyList}
            />
          }
          
        </div>
      </div>
    </div>
  );
}
