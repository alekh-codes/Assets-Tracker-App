import { FaDove, FaSleigh } from "react-icons/fa";
import { form , options } from "../../utils/formInputs";
import { useContext, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { AssetContext, AssetProvider } from "../../context/AssetContext";
export default function AssetsForm({setShow}){
    const {asset,setAssets} = useContext(AssetContext);
    const[formData,setFormData] = useState({
        assets:"",
        category:"",
        department:"",
        status:"",
    })
    const handleChange = (e) =>{
      
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })              
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setAssets([...asset,formData]);
        setFormData({
            assets:"",
            category:"",
            department:"",
            status:"",
        })
        
        
        setShow(false)
    }
    return(
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
            <div className="bg-white p-5 w-140 rounded-xl text-black">                                  
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl text-center text-[#554cfe] font-bold">Add Asset</h1>
                    <button onClick={()=>setShow(false)}><RiCloseLine className="text-black text-xl cursor-pointer"/></button>
                </div>                                          
                <form onSubmit={handleSubmit} >
                {
                form.map(inp=>(
                    <div className="flex flex-col my-10" key={inp.name}>
                        <label htmlFor="" className="text-xl font-bold">
                        {inp.labelName}       </label>                 
                    <input 
                    className="bg-white text-black text-[17px] mt-1 border-b-2 outline-none"
                    type="text" value={formData[inp.value]} name={inp.name} onChange={handleChange} placeholder={inp.placeholder} />
                    
                    </div>
                ))
            }
            <div className="flex flex-col w-fit">
                <label 
                    className="text-xl font-bold"
                    htmlFor="">Select a Status</label>
                <select 
                    className="text-[17px] mt-3"
                    name="status" value={formData.status} onChange={handleChange} id="">
                    <option hidden disabled value="">Select Status</option>
                    {
                        options.map(item=>(
                        <option 
                        className=""
                        key={item.value} value={item.value}>{item.option}</option>
                    
                        ))
                    }
                </select>
            </div>
            <div className="flex mt-10 justify-center">
                <button
                className="text-[18px] border-2 p-2 rounded-xl bg-[#554cfe] text-white"
                >Add Asset</button>
            </div>
            </form>
            </div>
        </div>
    )
}