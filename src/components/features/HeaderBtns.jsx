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

export default function HeaderBtns({ setCopyList, copyList, asset }) {
  const [show, setShow] = useState(false);
  const [display,setDisplay] = useState(false);
  const [search, setSearch] = useState("");
  const menuRef = useRef(null);
    useClickOutside(menuRef,()=>setDisplay(null))
  const stlyebtns = " relative p-1 bg-white text-black m-2 rounded-xl flex items-center gap-1 transition-all ease-in duration-300 hover:bg-black hover:text-white";
  function handleSearch() {
    setCopyList(
      asset.filter(
        (a) =>
          a.assets.toLowerCase().includes(search.toLowerCase()) ||
          a.category.toLowerCase().includes(search.toLowerCase()) ||
          a.department.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  }

  function handleSort() {}

  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
      <div className="flex items-center w-fit  px-4 bg-blue-600 text-white p-1 rounded-[30px]">
        <RiAddLine />
        <button onClick={() => setShow(true)} className="cursor-pointer">
          {" "}
          Add an asset
        </button>

        {show && <AssetsForm setShow={setShow} />}
      </div>
      <div className="flex items-center mt-5 md:m-0  ">
        <div className="flex items-center">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search...."
            className="p-1 bg-white text-black rounded-l-xl"
          />
          <button
            className="rounded-r-xl text-black/50 p-2 bg-white/70 "
            onClick={handleSearch}
          >
            <RiSearchLine />
          </button>
        </div>
        <div className="flex justify-around mx-6">
          <button
          onClick={()=>setDisplay(true)}
          className={stlyebtns}>
            
            <RiSortAsc />
          </button>
          {
            display && <SortDropDown
            menuRef={menuRef}
            />
          }
          <button className={stlyebtns}>
            
            <RiFilterLine />
          </button>
        </div>
      </div>
    </div>
  );
}
