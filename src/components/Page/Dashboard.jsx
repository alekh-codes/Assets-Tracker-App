import { useState } from "react";
import AddFormBtn from "../features/AddformBtn";
import AssetsForm from "../features/AssetsForm";
import Cards from "../features/Cards";
import Table from "../features/Table";

function Dashboard(){
   
    return(
        <div className="flex justify-center ">
           
            <div className="rounded-xl bg-white/10 backdrop-blur-xl mt-40 p-10 shadow-[3px_3px_35px_2px_rgba(0,0,0,0.3)] border border-white/20 flex flex-col w-fit text-white">
            
                <AddFormBtn/>
            
            <Cards />
            <Table />
        </div>
        
        </div>
    )
}

export default Dashboard