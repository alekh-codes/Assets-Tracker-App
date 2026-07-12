import { useContext, useEffect, useState } from "react";
import AssetsForm from "../features/AssetsForm";
import Cards from "../features/Cards";
import Table from "../features/Table";
import HeaderBtns from "../features/HeaderBtns";
import { AssetContext } from "../../context/AssetContext";
function Dashboard() {
  const { asset, setAssets } = useContext(AssetContext);
  const [copyList, setCopyList] = useState(asset);
  const [showForm, setShowForm] = useState(false);
  const [editingAsset, setEditingAsset] = useState(null);
  useEffect(() => {
    setCopyList(asset);
  }, [asset]);
  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <div
        className="rounded-xl bg-white/10 backdrop-blur-xl p-6
            shadow-[3px_3px_35px_2px_rgba(0,0,0,0.3)] border border-white/20 flex 
            flex-col text-white w-100  md:w-190 lg:w-250"
      >
        <div className="mb-8">
  <h1 className="text-4xl font-bold text-white">
    Asset Management System
  </h1>

  <p className="text-white/70 mt-2">
    Manage, track and organize company assets efficiently.
  </p>
</div>
        <HeaderBtns
          asset={asset}
          copyList={copyList}
          setCopyList={setCopyList}
          setShowForm={setShowForm}
          setEditingAsset={setEditingAsset}
        />
        <Cards />
        <Table copyList={copyList}
        setShowForm={setShowForm}
        setEditingAsset={setEditingAsset} />

        {showForm && (
          <AssetsForm
            setShow={setShowForm}
            editingAsset={editingAsset}
          />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
