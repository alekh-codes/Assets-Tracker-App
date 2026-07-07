import { useContext, useEffect, useRef, useState } from "react";

import { AssetContext } from "../../context/AssetContext";
import { RiMore2Fill, RiPencilLine, RiDeleteBinLine } from "react-icons/ri";
import MobileTable from "./MbileTable";
function Table() {
  const [active, setActive] = useState(null);
  const { asset, setAssets } = useContext(AssetContext);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClick(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActive(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

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

  {asset.map((item, index) => (
    <div
      key={index}
      className="grid grid-cols-[0.8fr_3fr_2fr_2fr_2fr_0.8fr] items-center px-4 py-3 mt-3 border border-white/10 rounded-xl"
    >
      <p>PD{index + 1}</p>

      <p>{item.assets}</p>

      <p>{item.category}</p>

      <p>{item.department}</p>

      <p
        className={`w-fit px-3 py-1 rounded-xl
          ${
            item.status === "Available"
              ? "text-green-400 bg-green-400/15"
              : item.status === "Assigned"
              ? "text-amber-200 bg-amber-200/15"
              : item.status === "Repair"
              ? "text-red-500 bg-red-500/15"
              : ""
          }
        `}
      >
        {item.status}
      </p>

      <div ref={menuRef} className="relative flex justify-center">
        <RiMore2Fill
          onClick={() => setActive(active === index ? null : index)}
          className="cursor-pointer"
        />

        {active === index && (
          <div className="absolute top-8 right-0 bg-white text-black rounded-xl shadow-lg p-2">
            <ul className="flex gap-2">
              <li className="text-xl cursor-pointer">
                <RiPencilLine />
              </li>
              <li
                onClick={() => deleteItem(index)}
                className="text-xl cursor-pointer"
              >
                <RiDeleteBinLine />
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  ))}
  
    </div>
    <MobileTable asset={asset}/>
    </div>
    
  );
}

export default Table;
