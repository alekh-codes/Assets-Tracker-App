import ActionsBtns from "./ActionsBtns";
function TableContent({ asset, menuRef, active, setActive, deleteItem}) {
  return asset.length === 0 ? (
    <h1 className="mt-4 text-white/50 text-center">No data found</h1>
  ) : (
    <>
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
          <ActionsBtns
            index={index}
            deleteItem={deleteItem}
            active={active}
            setActive={setActive}
            menuRef={menuRef}
          />
        </div>
      ))}
    </>
  );
}
export default TableContent;
