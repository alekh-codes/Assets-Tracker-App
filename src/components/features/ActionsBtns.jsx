import { RiMore2Fill, RiPencilLine, RiDeleteBinLine } from "react-icons/ri";
function ActionsBtns({menuRef,active,setActive,deleteItem,index}) {
  return (
    <div ref={menuRef} className="relative flex justify-center">
      <RiMore2Fill
        onClick={() => setActive(active === index ? null : index)}
        className="cursor-pointer"
      />

      {active === index && (
        <div className="absolute top-5 left-9 z-10 bg-white text-black rounded-xl shadow-lg p-2">
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
  );
}
export default ActionsBtns;
