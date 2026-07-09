import { useRef ,useState} from "react"

function SortDropDown({menuRef}){
    

    return(
        <div ref={menuRef} className="absolute flex flex-col bg-white text-black z-10 top-33 md:top-20 p-1 rounded-xl">
            <button>Available</button>
            <button>Assigned</button>
            <button>Repair</button>
        </div>
    )
}

export default SortDropDown