import ActionsBtns from "./ActionsBtns";

const MobileTable = ({ asset, menuRef, deleteItem, active, setActive }) => {
  return asset.length === 0 ? (
    <h1 className="mt-4 text-white/50 text-center md:hidden">No data found</h1>
  ) : (
    <>
      <div className="block md:hidden h-100 border-2 p-5 mt-5 rounded-2xl overflow-y-scroll border-white">
        {asset.map((item, index) => (
          <div
            key={index}
            className="flex justify-between border rounded-xl p-4 mb-4 "
          >
            <div className=" ">
              <p>
                <strong>ID:</strong> PD{index + 1}
              </p>
              <p>
                <strong>Asset:</strong> {item.assets}
              </p>
              <p>
                <strong>Category:</strong> {item.category}
              </p>
              <p>
                <strong>Department:</strong> {item.department}
              </p>

              <span
                className={`inline-block mt-2 px-3 py-1 rounded-xl
        ${
          item.status === "Available"
            ? "bg-green-400/15 text-green-400"
            : item.status === "Assigned"
              ? "bg-yellow-400/15 text-yellow-300"
              : "bg-red-400/15 text-red-400"
        }`}
              >
                {item.status}
              </span>
            </div>
            <ActionsBtns
              index={index}
              deleteItem={deleteItem}
              active={active}
              setActive={setActive}
              menuRef={menuRef}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default MobileTable;
