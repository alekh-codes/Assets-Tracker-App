import { useContext, useEffect, useState } from "react";
import AssetsForm from "../features/AssetsForm";
import Cards from "../features/Cards";
import Table from "../features/Table";
import HeaderBtns from "../features/HeaderBtns";
import { AssetContext } from "../../context/AssetContext";
function Dashboard() {
  const {asset , setAssets} = useContext(AssetContext)
  const [copyList,setCopyList] = useState(asset);
  useEffect(()=>{
    setCopyList(asset)
  },[asset])
  return (
    <div className="flex justify-center items-center ">
      <div
        className="rounded-xl bg-white/10 backdrop-blur-xl mt-40 p-10 
            shadow-[3px_3px_35px_2px_rgba(0,0,0,0.3)] border border-white/20 flex 
            flex-col text-white w-100 md:w-fit"
      >
        <HeaderBtns asset={asset}  copyList={copyList}  setCopyList={setCopyList} />
        <Cards  />
        <Table copyList={copyList}/>
      </div>
    </div>
  );
}

export default Dashboard;
