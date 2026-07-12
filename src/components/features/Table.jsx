import { useContext, useEffect, useRef, useState } from "react";

import { AssetContext } from "../../context/AssetContext";

import MobileTable from "./MobileTable";
import TableContent from "./TableContent";
import useClickOutside from "../../utils/useClickOutside";
function Table({ copyList,setShowForm,setEditingAsset }) {
  const [active, setActive] = useState(null);
  const { asset, setAssets } = useContext(AssetContext);
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => setActive(null));

  const deleteItem = (id) => {
    setAssets(prev => prev.filter(item=> item.id !== id))
  };

  return (
    <div>
      <div className="border-2 mt-10 rounded-xl py-4 overflow-scroll p-4 md:overflow-hidden hidden md:block">
        <div className="grid grid-cols-[2fr_3fr_3fr_3fr_2fr_1fr]  font-bold text-[18px] px-4 py-3 border-b border-white/20 ">
          <h1>ID</h1>
          <h1>Assets</h1>
          <h1>Category</h1>
          <h1>Department</h1>
          <h1>Status</h1>
          <h1 className="text-center">Actions</h1>
        </div>
        <TableContent
          asset={copyList}
          setActive={setActive}
          active={active}
          menuRef={menuRef}
          deleteItem={deleteItem}
          setAssets={setAssets}
          setEditingAsset={setEditingAsset}
          setShowForm={setShowForm}
        />
      </div>
      <MobileTable
        asset={copyList}
        setActive={setActive}
        active={active}
        menuRef={menuRef}
        deleteItem={deleteItem}
        setEditingAsset={setEditingAsset}
          setShowForm={setShowForm}
      />
    </div>
  );
}

export default Table;
