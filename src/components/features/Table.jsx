import { useContext, useEffect, useRef, useState } from "react";

import { AssetContext } from "../../context/AssetContext";
import { RiMore2Fill, RiPencilLine,RiDeleteBinLine } from "react-icons/ri";
function Table() {
  const [active,setActive] = useState(null);
  const { asset,setAssets } = useContext(AssetContext);
  const menuRef = useRef(null);

  useEffect(()=>{
    function handleClick(event) {
        if(menuRef.current && !menuRef.current.contains(event.target)){
            setActive(null);
        }
    }

    document.addEventListener("mousedown",handleClick);

    return () =>{
        document.removeEventListener("mousedown",handleClick)
    }
  },[])

  const deleteItem = (index) =>{
    setAssets(prev => prev.filter((item,i)=>i!==index));
  }
  
  return (
    <div className="border-2 mt-10 rounded-xl px-7 py-6">
      <div className="grid grid-cols-[1fr_5fr_3fr_3fr_3fr_1fr] text-[18px] font-bold px-2">
        <h1>Id</h1>
        <h1>Assets</h1>
        <h1>Category</h1>
        <h1>Department</h1>
        <h1>Status</h1>
        <h1>Actions</h1>
      </div>
      {asset.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-[1fr_5fr_3fr_3fr_3fr_1fr] mt-6 border-2 py-3 px-2 relative border-white/10 rounded-xl"
        >
          <p>{index + 1}</p>
          <p>{item.assets}</p>
          <p>{item.category}</p>
          <p>{item.department}</p>
          <p
            className={`border rounded-xl px-1 py-0.5 w-fit
                        ${item.status === "Available" ? "text-green-400 bg-green-400/15" : item.status === "Assigned" ? "text-amber-200 bg-amber-200/15" : item.status === "In Repair" ? "text-red-500 bg-red-500/15" : ""}
                        `}
          >
            {item.status}
          </p>
          <div ref={menuRef}
           
                      
            className="flex justify-center items-center "
          >
            <RiMore2Fill onClick={()=>setActive(active===index? null : index)} className="cursor-pointer"/>
                {active === index && (
            
                <div
              className={` p-2 bg-white text-black absolute top-10 -right-10 rounded-xl shadow-2xl`}
            >
              <ul className="flex">
                <li className="px-2 text-xl transition-all ease-in-out duration-200 cursor-pointer ">
                  <RiPencilLine />
                </li>
                <li onClick={()=>deleteItem(index)} className="px-2 text-xl transition-all ease-in-out duration-200 cursor-pointer ">
                  <RiDeleteBinLine />
                </li>
              </ul>
            </div>
           
          )}
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default Table;