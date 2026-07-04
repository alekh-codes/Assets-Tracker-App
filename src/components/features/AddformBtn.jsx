import { useState } from "react";
import { RiAddLine  } from "react-icons/ri";
import AssetsForm from "./AssetsForm";

export default function AddFormBtn(){
    const [show,setShow] = useState(false);
    return(
        <div className="flex items-center w-fit mb-6 px-4 bg-blue-600 text-white p-1 rounded-xl">
            <RiAddLine />
            <button 
            onClick={()=>setShow(true)}
            className="cursor-pointer"> Add an asset</button>

            {
                show && (
                    <AssetsForm setShow={setShow}/>
                )
            }
        </div>
    )
}