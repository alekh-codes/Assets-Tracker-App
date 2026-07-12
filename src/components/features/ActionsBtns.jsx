import { useState } from "react";
import { RiMore2Fill, RiPencilLine, RiDeleteBinLine } from "react-icons/ri";
function ActionsBtns({menuRef,active,setActive,deleteItem,index,item,onEdit,setShowForm,setEditingAsset}) {
  return (
    <div ref={menuRef} onClick={(e)=>e.stopPropagation()} className="relative flex justify-center">
      <RiMore2Fill
        onClick={() => setActive(active === index ? null : index)}
        className="cursor-pointer"
      />

      {active === index && (
        <div className="absolute md:bottom-5  w-fit md:left-7 bottom-20 right-2 z-10 bg-white text-black rounded-xl shadow-lg p-2">
          <ul className="flex gap-2">
            <li 
            onClick={()=>{
              setEditingAsset(item)
              setShowForm(true)
            }}
            className="text-xl cursor-pointer">

              <RiPencilLine />
            </li>
            <li
              onClick={(e) =>
                deleteItem(index)}
              className="text-xl cursor-pointer"
            >
              <RiDeleteBinLine />
            </li>
          </ul>
        </div>
      )}
     
    </div>
  );
}
export default ActionsBtns;
