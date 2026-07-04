import { createContext, useState } from "react";

export const AssetContext = createContext();

export function AssetProvider({children}){
    const [asset,setAssets] = useState([]);

    return(
        <AssetContext.Provider value={{asset,setAssets}}>
            {children}
        </AssetContext.Provider>
    )
}