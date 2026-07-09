import { useContext, useEffect, useRef, useState } from "react";

import { AssetContext } from "../../context/AssetContext";

import MobileTable from "./MobileTable";
import TableContent from "./TableContent";
import useClickOutside from "../../utils/useClickOutside";
function Table({copyList}) {
  const [active, setActive] = useState(null);
  const { asset, setAssets } = useContext(AssetContext);
  const menuRef = useRef(null);
  useClickOutside(menuRef,()=>setActive(null))

  const deleteItem = (index) => {
    setAssets((prev) => prev.filter((item, i) => i !== index));
  };

  return (
    <div>
      <div className="border-2 mt-10 rounded-xl w-full py-6 overflow-scroll md:overflow-hidden hidden md:block">
       <div className="grid grid-cols-[0.8fr_3fr_2fr_2fr_2fr_0.8fr] font-bold text-[18px] px-4 py-3 border-b border-white/20 ">
    <h1>ID</h1>
    <h1>Assets</h1>
    <h1>Category</h1>
    <h1>Department</h1>
    <h1>Status</h1>
    <h1 className="text-center">Actions</h1>
  </div> 
  <TableContent asset={copyList} setActive={setActive} active={active} menuRef={menuRef}  deleteItem={deleteItem} setAssets={setAssets}/>
    </div>
    <MobileTable asset={copyList} setActive={setActive} active={active} menuRef={menuRef} deleteItem={deleteItem} />
    </div>
    
  )
}

export default Table;
